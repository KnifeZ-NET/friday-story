declare namespace App {
  export interface SnackbarModel {
    color?: string
    message?: string
    show?: boolean
  }

  /** Global namespace */
  namespace Global {
    type VNode = import('vue').VNode
    type RouteLocationNormalizedLoaded = import('vue-router').RouteLocationNormalizedLoaded
    type RouteKey = import('@elegant-router/types').RouteKey
    type RouteMap = import('@elegant-router/types').RouteMap
    type RoutePath = import('@elegant-router/types').RoutePath
    type LastLevelRouteKey = import('@elegant-router/types').LastLevelRouteKey

    /** The global header props */
    interface HeaderProps {
      /** Whether to show the logo */
      showLogo?: boolean
      /** Whether to show the menu toggler */
      showMenuToggler?: boolean
      /** Whether to show the menu */
      showMenu?: boolean
    }

    /** The global menu */
    interface Menu {
      /**
       * The menu key
       *
       * Equal to the route key
       */
      key: string
      /** The menu label */
      label: string
      /** The menu i18n key */
      i18nKey?: I18n.I18nKey | null
      /** The route key */
      routeKey: RouteKey
      /** The route path */
      routePath: RoutePath
      /** The menu icon */
      icon?: () => VNode
      /** The menu children */
      children?: Menu[]
    }

    type Breadcrumb = Omit<Menu, 'children'> & {
      options?: Breadcrumb[]
    }

    /** Tab route */
    type TabRoute = Pick<RouteLocationNormalizedLoaded, 'name' | 'path' | 'meta'> &
      Partial<Pick<RouteLocationNormalizedLoaded, 'fullPath' | 'query' | 'matched'>>

    /** The global tab */
    type Tab = {
      /** The tab id */
      id: string
      /** The tab label */
      label: string
      /**
       * The new tab label
       *
       * If set, the tab label will be replaced by this value
       */
      newLabel?: string
      /**
       * The old tab label
       *
       * when reset the tab label, the tab label will be replaced by this value
       */
      oldLabel?: string
      /** The tab route key */
      routeKey: LastLevelRouteKey
      /** The tab route path */
      routePath: RouteMap[LastLevelRouteKey]
      /** The tab route full path */
      fullPath: string
      /** The tab fixed index */
      fixedIndex?: number | null
      /**
       * Tab icon
       *
       * Iconify icon
       */
      icon?: string
      /**
       * Tab local icon
       *
       * Local icon
       */
      localIcon?: string
      /** I18n key */
      i18nKey?: I18n.I18nKey | null
    }

    /** Form rule */
    type FormRule = import('naive-ui').FormItemRule

    /** The global dropdown key */
    type DropdownKey = 'closeCurrent' | 'closeOther' | 'closeLeft' | 'closeRight' | 'closeAll'

    interface ProjectSetting {
      isAuth: boolean
      textSpeed: number
      volume: number
      music: string
      sound: string
      voice: string
      loginBg: string
      defaultPlace: string
      startStory: string
      localhost: string
      duration: number
      sceneTransition: UnionKey.AnimateMode
      optionTransition: UnionKey.AnimateMode
      mapTransition: UnionKey.AnimateMode
      fontFamily: string
    }
  }

  /**
   * I18n namespace
   *
   * Locales type
   */
  namespace I18n {
    type RouteKey = import('@elegant-router/types').RouteKey

    type LangType = 'en-US' | 'zh-CN'

    type LangOption = {
      label: string
      key: LangType
    }

    type I18nRouteKey = Exclude<RouteKey, 'root' | 'not-found'>

    type FormMsg = {
      required: string
      invalid: string
    }

    // route: Record<I18nRouteKey, string>
    type Schema = {
      route: Record<I18nRouteKey, string>

      common: {
        action: string
        add: string
        addSuccess: string
        autoNext: string
        backToHome: string
        batchDelete: string
        cancel: string
        check: string
        close: string
        columnSetting: string
        config: string
        confirm: string
        confirmDelete: string
        delete: string
        deleteSuccess: string
        doubleSpeed: string
        edit: string
        editSuccess: string
        empty: string
        expandColumn: string
        index: string
        keywordSearch: string
        logout: string
        logoutConfirm: string
        lookForward: string
        modify: string
        modifySuccess: string
        noData: string
        operate: string
        pleaseCheckValue: string
        refresh: string
        reset: string
        save: string
        saveSuccess: string
        search: string
        switch: string
        tip: string
        trigger: string
        update: string
        updateSuccess: string
        userCenter: string
        yesOrNo: {
          no: string
          yes: string
        }
        notUnlocked: string
        unlocked: string
      }
      dataTable: {
        itemCount: string
      }
      dropdown: {
        closeAll: string
        closeCurrent: string
        closeLeft: string
        closeOther: string
        closeRight: string
      }
      form: {
        code: {
          invalid: string
          required: string
        }
        confirmPwd: {
          invalid: string
          required: string
        }
        email: {
          invalid: string
          required: string
        }
        phone: {
          invalid: string
          required: string
        }
        pwd: {
          invalid: string
          required: string
        }
        required: string
        userName: {
          invalid: string
          required: string
        }
      }
      game: {
        env: {
          temperature: {
            coldest: string
            colder: string
            cold: string
            suitable: string
            warm: string
            warmer: string
            warmest: string
            hot: string
          }
        }
        message: {
          notEnoughMoney: string
          nothingHappened: string
          nothingFound: string
          findMap: string
        }
      }
      icon: {
        collapse: string
        expand: string
        fullscreen: string
        fullscreenExit: string
        lang: string
        maximize: string
        minimize: string
        pin: string
        reload: string
        themeConfig: string
        themeSchema: string
        unpin: string
      }
      page: {
        about: {
          devDep: string
          introduction: string
          prdDep: string
          projectInfo: {
            author: string
            githubLink: string
            latestBuildTime: string
            previewLink: string
            title: string
            version: string
          }
          title: string
          update: {
            checkUpdate: string
            downloading: string
            newUpdateVersion: string
            noUpdateVersion: string
            reboot: string
            rebootAndUpdate: string
          }
        }
        archive: {
          playTime: string
          saveTime: string
        }
        login: {
          bindWeChat: {
            title: string
          }
          codeLogin: {
            getCode: string
            imageCodePlaceholder: string
            reGetCode: string
            sendCodeSuccess: string
            title: string
          }
          common: {
            back: string
            codeLogin: string
            codePlaceholder: string
            confirm: string
            confirmPasswordPlaceholder: string
            loginOrRegister: string
            loginSuccess: string
            passwordPlaceholder: string
            phonePlaceholder: string
            userNamePlaceholder: string
            validateSuccess: string
            welcomeBack: string
          }
          gameStart: {
            loadArchive: string
            newGame: string
            title: string
          }
          pwdLogin: {
            admin: string
            forgetPassword: string
            otherAccountLogin: string
            otherLoginMode: string
            register: string
            rememberMe: string
            superAdmin: string
            title: string
            user: string
          }
          register: {
            agreement: string
            policy: string
            protocol: string
            title: string
          }
          resetPwd: {
            title: string
          }
        }
        setting: {
          saveTips: string
          title: string
          general: {
            lang: string
            loginBg: string
            loginBgOption: {
              car: string
              muggleGirl: string
            }
            volume: string
            fontFamily: string
            fontFamilyOption: {
              circular: string
              cuSong: string
              harmony: string
            }
          }
        }
      }
      request: {
        logout: string
        logoutMsg: string
        logoutWithModal: string
        logoutWithModalMsg: string
        refreshToken: string
        tokenExpired: string
      }
      system: {
        title: string
      }
      theme: {
        configOperation: {
          copyConfig: string
          copySuccessMsg: string
          resetConfig: string
          resetSuccessMsg: string
        }
        fixedHeaderAndTab: string
        footer: {
          fixed: string
          height: string
          right: string
          visible: string
        }
        grayScale: string
        header: {
          breadcrumb: {
            showIcon: string
            visible: string
          }
          height: string
        }
        layoutMode: {
          horizontal: string
          'horizontal-mix': string
          title: string
          vertical: string
          'vertical-mix': string
        }
        page: {
          animate: string
          mode: {
            fade: string
            'fade-bottom': string
            'fade-scale': string
            'fade-slide': string
            none: string
            title: string
            'zoom-fade': string
            'zoom-out': string
          }
        }
        pageFunTitle: string
        recommendColor: string
        recommendColorDesc: string
        scrollMode: {
          content: string
          title: string
          wrapper: string
        }
        sider: {
          collapsedWidth: string
          inverted: string
          mixChildMenuWidth: string
          mixCollapsedWidth: string
          mixWidth: string
          width: string
        }
        tab: {
          cache: string
          height: string
          mode: {
            button: string
            chrome: string
            title: string
          }
          visible: string
        }
        themeColor: {
          error: string
          followPrimary: string
          info: string
          primary: string
          success: string
          title: string
          warning: string
        }
        themeDrawerTitle: string
        themeSchema: {
          auto: string
          dark: string
          light: string
          title: string
        }
      }
    }

    type GetI18nKey<
      T extends Record<string, unknown>,
      K extends keyof T = keyof T
    > = K extends string
      ? T[K] extends Record<string, unknown>
        ? `${K}.${GetI18nKey<T[K]>}`
        : K
      : never

    type I18nKey = GetI18nKey<Schema>

    type TranslateOptions<Locales extends string> = import('vue-i18n').TranslateOptions<Locales>

    interface $T {
      (key: I18nKey): string
      (key: I18nKey, plural: number, options?: TranslateOptions<LangType>): string
      (key: I18nKey, defaultMsg: string, options?: TranslateOptions<I18nKey>): string
      (key: I18nKey, list: unknown[], options?: TranslateOptions<I18nKey>): string
      (key: I18nKey, list: unknown[], plural: number): string
      (key: I18nKey, list: unknown[], defaultMsg: string): string
      (key: I18nKey, named: Record<string, unknown>, options?: TranslateOptions<LangType>): string
      (key: I18nKey, named: Record<string, unknown>, plural: number): string
      (key: I18nKey, named: Record<string, unknown>, defaultMsg: string): string
    }
  }

  /** Theme namespace */
  namespace Theme {
    type ColorPaletteNumber = import('@renderer/packages/color').ColorPaletteNumber

    /** Theme token */
    type ThemeToken = {
      colors: ThemeTokenColor
      boxShadow: {
        header: string
        sider: string
        tab: string
      }
    }

    /** Theme setting */
    interface ThemeSetting {
      /** Theme scheme */
      themeScheme: UnionKey.ThemeScheme
      /** grayScale mode */
      grayScale: boolean
      /** Whether to recommend color */
      recommendColor: boolean
      /** Theme color */
      themeColor: string
      /** Other color */
      otherColor: OtherColor
      /** Whether info color is followed by the primary color */
      isInfoFollowPrimary: boolean
      /** Layout */
      layout: {
        /** Layout mode */
        mode: UnionKey.ThemeLayoutMode
        /** Scroll mode */
        scrollMode: UnionKey.ThemeScrollMode
      }
      /** Page */
      page: {
        /** Whether to show the page transition */
        animate: boolean
        /** Page animate mode */
        animateMode: UnionKey.ThemePageAnimateMode
      }
      /** Header */
      header: {
        /** Header height */
        height: number
        /** Header breadcrumb */
        breadcrumb: {
          /** Whether to show the breadcrumb */
          visible: boolean
          /** Whether to show the breadcrumb icon */
          showIcon: boolean
        }
      }
      /** Tab */
      tab: {
        /** Whether to show the tab */
        visible: boolean
        /**
         * Whether to cache the tab
         *
         * If cache, the tabs will get from the local storage when the page is refreshed
         */
        cache: boolean
        /** Tab height */
        height: number
        /** Tab mode */
        mode: UnionKey.ThemeTabMode
      }
      /** Fixed header and tab */
      fixedHeaderAndTab: boolean
      /** Sider */
      sider: {
        /** Inverted sider */
        inverted: boolean
        /** Sider width */
        width: number
        /** Collapsed sider width */
        collapsedWidth: number
        /** Sider width when the layout is 'vertical-mix' or 'horizontal-mix' */
        mixWidth: number
        /** Collapsed sider width when the layout is 'vertical-mix' or 'horizontal-mix' */
        mixCollapsedWidth: number
        /** Child menu width when the layout is 'vertical-mix' or 'horizontal-mix' */
        mixChildMenuWidth: number
      }
      /** Footer */
      footer: {
        /** Whether to show the footer */
        visible: boolean
        /** Whether fixed the footer */
        fixed: boolean
        /** Footer height */
        height: number
        /** Whether float the footer to the right when the layout is 'horizontal-mix' */
        right: boolean
      }
    }

    interface OtherColor {
      info: string
      success: string
      warning: string
      error: string
    }

    interface ThemeColor extends OtherColor {
      primary: string
    }

    type ThemeColorKey = keyof ThemeColor

    type ThemePaletteColor = {
      [key in ThemeColorKey | `${ThemeColorKey}-${ColorPaletteNumber}`]: string
    }

    type BaseToken = Record<string, Record<string, string>>

    interface ThemeTokenColor extends ThemePaletteColor {
      nprogress: string
      container: string
      layout: string
      inverted: string
      base_text: string
      [key: string]: string
    }
  }

  /** Service namespace */
  namespace Service {
    /** Other baseURL key */
    type OtherBaseURLKey = 'demo'

    interface ServiceConfigItem {
      /** The backend service base url */
      baseURL: string
      /** The proxy pattern of the backend service base url */
      proxyPattern: string
    }

    interface OtherServiceConfigItem extends ServiceConfigItem {
      key: OtherBaseURLKey
    }

    /** The backend service config */
    interface ServiceConfig extends ServiceConfigItem {
      /** Other backend service config */
      other: OtherServiceConfigItem[]
    }

    interface SimpleServiceConfig extends Pick<ServiceConfigItem, 'baseURL'> {
      other: Record<OtherBaseURLKey, string>
    }

    /** The backend service response data */
    type Response<T = unknown> = {
      /** The backend service response code */
      code: string
      /** The backend service response message */
      msg: string
      /** The backend service response data */
      data: T
    }

    /** The demo backend service response data */
    type DemoResponse<T = unknown> = {
      /** The backend service response code */
      status: string
      /** The backend service response message */
      message: string
      /** The backend service response data */
      result: T
    }
  }
}
