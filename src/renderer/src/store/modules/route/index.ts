import type {
  CustomRoute,
  ElegantConstRoute,
  LastLevelRouteKey,
  RouteKey,
  RouteMap
} from '@elegant-router/types'
import { SetupStoreId } from '@renderer/enums'
import useBoolean from '@renderer/packages/hooks/use-boolean'
import { router } from '@renderer/router'
import { getRouteName, getRoutePath } from '@renderer/router/elegant/transform'
import { createStaticRoutes, getAuthVueRoutes } from '@renderer/router/routes'
import { ROOT_ROUTE } from '@renderer/router/routes/builtin'
import { defineStore } from 'pinia'
import { computed, ref, shallowRef } from 'vue'
import type { RouteRecordRaw } from 'vue-router'
import { useAppStore } from '../app/index'
import { useAuthStore } from '../auth/index'
import {
  filterAuthRoutesByRoles,
  getBreadcrumbsByRoute,
  getCacheRouteNames,
  getGlobalMenusByAuthRoutes,
  getSelectedMenuKeyPathByKey,
  isRouteExistByRouteName,
  sortRoutesByOrder,
  transformMenuToSearchMenus,
  updateLocaleOfGlobalMenus
} from './shared'

export const useRouteStore = defineStore(SetupStoreId.Route, () => {
  const appStore = useAppStore()
  const authStore = useAuthStore()
  const { bool: isInitConstantRoute, setBool: setIsInitConstantRoute } = useBoolean()
  const { bool: isInitAuthRoute, setBool: setIsInitAuthRoute } = useBoolean()

  /**
   * Auth route mode
   *
   * It recommends to use static mode in the development environment, and use dynamic mode in the production
   * environment, if use static mode in development environment, the auth routes will be auto generated by plugin
   * "@elegant-router/vue"
   */
  const authRouteMode = ref(import.meta.env.VITE_AUTH_ROUTE_MODE)

  /** Home route key */
  const routeHome = ref(import.meta.env.VITE_ROUTE_HOME)

  /**
   * Set route home
   *
   * @param routeKey Route key
   */
  function setRouteHome(routeKey: LastLevelRouteKey) {
    routeHome.value = routeKey
  }

  /** constant routes */
  const constantRoutes = shallowRef<ElegantConstRoute[]>([])

  function addConstantRoutes(routes: ElegantConstRoute[]) {
    const constantRoutesMap = new Map<string, ElegantConstRoute>([])

    routes.forEach((route) => {
      constantRoutesMap.set(route.name, route)
    })

    constantRoutes.value = Array.from(constantRoutesMap.values())
  }

  /** auth routes */
  const authRoutes = shallowRef<ElegantConstRoute[]>([])

  function addAuthRoutes(routes: ElegantConstRoute[]) {
    const authRoutesMap = new Map<string, ElegantConstRoute>([])

    routes.forEach((route) => {
      authRoutesMap.set(route.name, route)
    })

    authRoutes.value = Array.from(authRoutesMap.values())
  }

  const removeRouteFns: (() => void)[] = []

  /** Global menus */
  const menus = ref<App.Global.Menu[]>([])
  const searchMenus = computed(() => transformMenuToSearchMenus(menus.value))

  /** Get global menus */
  function getGlobalMenus(routes: ElegantConstRoute[]) {
    menus.value = getGlobalMenusByAuthRoutes(routes)
  }

  /** Update global menus by locale */
  function updateGlobalMenusByLocale() {
    menus.value = updateLocaleOfGlobalMenus(menus.value)
  }

  /** Cache routes */
  const cacheRoutes = ref<RouteKey[]>([])

  /**
   * Get cache routes
   *
   * @param routes Vue routes
   */
  function getCacheRoutes(routes: RouteRecordRaw[]) {
    cacheRoutes.value = getCacheRouteNames(routes)
  }

  /**
   * Add cache routes
   *
   * @param routeKey
   */
  function addCacheRoutes(routeKey: RouteKey) {
    if (cacheRoutes.value.includes(routeKey)) return

    cacheRoutes.value.push(routeKey)
  }

  /**
   * Remove cache routes
   *
   * @param routeKey
   */
  function removeCacheRoutes(routeKey: RouteKey) {
    const index = cacheRoutes.value.findIndex((item) => item === routeKey)

    if (index === -1) return

    cacheRoutes.value.splice(index, 1)
  }

  /**
   * Re cache routes by route key
   *
   * @param routeKey
   */
  async function reCacheRoutesByKey(routeKey: RouteKey) {
    removeCacheRoutes(routeKey)

    await appStore.reloadPage()

    addCacheRoutes(routeKey)
  }

  /**
   * Re cache routes by route keys
   *
   * @param routeKeys
   */
  async function reCacheRoutesByKeys(routeKeys: RouteKey[]) {
    for await (const key of routeKeys) {
      await reCacheRoutesByKey(key)
    }
  }

  /** Global breadcrumbs */
  const breadcrumbs = computed(() => getBreadcrumbsByRoute(router.currentRoute.value, menus.value))

  /** Reset store */
  async function resetStore() {
    const routeStore = useRouteStore()

    routeStore.$reset()

    resetVueRoutes()

    // after reset store, need to re-init constant route
    await initConstantRoute()
  }

  /** Reset vue routes */
  function resetVueRoutes() {
    removeRouteFns.forEach((fn) => fn())
    removeRouteFns.length = 0
  }

  /** init constant route */
  async function initConstantRoute() {
    if (isInitConstantRoute.value) return

    const staticRoute = createStaticRoutes()

    if (authRouteMode.value === 'static') {
      addConstantRoutes(staticRoute.constantRoutes)
    } else {
      // TODO 动态路由
      // const { data, error } = await fetchGetConstantRoutes()
      // if (!error) {
      //   addConstantRoutes(data)
      // } else {
      //   // if fetch constant routes failed, use static constant routes
      //   addConstantRoutes(staticRoute.constantRoutes)
      // }
    }

    handleConstantAndAuthRoutes()

    setIsInitConstantRoute(true)
  }

  /** Init auth route */
  async function initAuthRoute() {
    if (authRouteMode.value === 'static') {
      await initStaticAuthRoute()
    } else {
      await initDynamicAuthRoute()
    }
  }

  /** Init static auth route */
  async function initStaticAuthRoute() {
    const { authRoutes: staticAuthRoutes } = createStaticRoutes()

    if (authStore.isStaticSuper) {
      addAuthRoutes(staticAuthRoutes)
    } else {
      const filteredAuthRoutes = filterAuthRoutesByRoles(staticAuthRoutes, authStore.userInfo.roles)

      addAuthRoutes(filteredAuthRoutes)
    }

    handleConstantAndAuthRoutes()

    setIsInitAuthRoute(true)
  }

  /** Init dynamic auth route */
  async function initDynamicAuthRoute() {
    console.log('TODO: dynamic routes')
    const error = true
    const data = {} as Dto.Route.UserRoute
    // const { data, error } = await fetchGetUserRoutes()
    if (!error) {
      const { routes, home } = data

      addAuthRoutes(routes)

      handleConstantAndAuthRoutes()

      setRouteHome(home)

      handleUpdateRootRouteRedirect(home)

      setIsInitAuthRoute(true)
    } else {
      // if fetch user routes failed, reset store
      authStore.resetStore()
    }
  }

  /** handle constant and auth routes */
  function handleConstantAndAuthRoutes() {
    const allRoutes = [...constantRoutes.value, ...authRoutes.value]

    const sortRoutes = sortRoutesByOrder(allRoutes)

    const vueRoutes = getAuthVueRoutes(sortRoutes)

    resetVueRoutes()

    addRoutesToVueRouter(vueRoutes)

    getGlobalMenus(sortRoutes)

    getCacheRoutes(vueRoutes)
  }

  /**
   * Add routes to vue router
   *
   * @param routes Vue routes
   */
  function addRoutesToVueRouter(routes: RouteRecordRaw[]) {
    routes.forEach((route) => {
      const removeFn = router.addRoute(route)
      addRemoveRouteFn(removeFn)
    })
  }

  /**
   * Add remove route fn
   *
   * @param fn
   */
  function addRemoveRouteFn(fn: () => void) {
    removeRouteFns.push(fn)
  }

  /**
   * Update root route redirect when auth route mode is dynamic
   *
   * @param redirectKey Redirect route key
   */
  function handleUpdateRootRouteRedirect(redirectKey: LastLevelRouteKey) {
    const redirect = getRoutePath(redirectKey)

    if (redirect) {
      const rootRoute: CustomRoute = { ...ROOT_ROUTE, redirect }

      router.removeRoute(rootRoute.name)

      const [rootVueRoute] = getAuthVueRoutes([rootRoute])

      router.addRoute(rootVueRoute)
    }
  }

  /**
   * Get is auth route exist
   *
   * @param routePath Route path
   */
  async function getIsAuthRouteExist(routePath: RouteMap[RouteKey]) {
    const routeName = getRouteName(routePath)

    if (!routeName) {
      return false
    }

    if (authRouteMode.value === 'static') {
      const { authRoutes: staticAuthRoutes } = createStaticRoutes()
      return isRouteExistByRouteName(routeName, staticAuthRoutes)
    }
    // TODO route exists
    // const { data } = await fetchIsRouteExist(routeName)
    return true
  }

  /**
   * Get selected menu key path
   *
   * @param selectedKey Selected menu key
   */
  function getSelectedMenuKeyPath(selectedKey: string) {
    return getSelectedMenuKeyPathByKey(selectedKey, menus.value)
  }

  /**
   * Get route meta by key
   *
   * @param key Route key
   */
  function getRouteMetaByKey(key: string) {
    const allRoutes = router.getRoutes()

    return allRoutes.find((route) => route.name === key)?.meta || null
  }

  /**
   * Get route query of meta by key
   *
   * @param key
   */
  function getRouteQueryOfMetaByKey(key: string) {
    const meta = getRouteMetaByKey(key)

    const query: Record<string, string> = {}

    meta?.query?.forEach((item) => {
      query[item.key] = item.value
    })

    return query
  }

  return {
    resetStore,
    routeHome,
    menus,
    searchMenus,
    updateGlobalMenusByLocale,
    cacheRoutes,
    reCacheRoutesByKey,
    reCacheRoutesByKeys,
    breadcrumbs,
    initConstantRoute,
    isInitConstantRoute,
    initAuthRoute,
    isInitAuthRoute,
    setIsInitAuthRoute,
    getIsAuthRouteExist,
    getSelectedMenuKeyPath,
    getRouteQueryOfMetaByKey
  }
})
