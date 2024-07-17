/* eslint-disable */
/* prettier-ignore */
// Generated by elegant-router
// Read more: https://github.com/soybeanjs/elegant-router

import type { GeneratedRoute } from '@elegant-router/types'

export const generatedRoutes: GeneratedRoute[] = [
  {
    name: '403',
    path: '/403',
    component: 'layout.base$view.403',
    meta: {
      title: '403',
      i18nKey: 'route.403',
      constant: true,
      hideInMenu: true
    }
  },
  {
    name: '404',
    path: '/404',
    component: 'layout.base$view.404',
    meta: {
      title: '404',
      i18nKey: 'route.404',
      constant: true,
      hideInMenu: true
    }
  },
  {
    name: '500',
    path: '/500',
    component: 'layout.base$view.500',
    meta: {
      title: '500',
      i18nKey: 'route.500',
      constant: true,
      hideInMenu: true
    }
  },
  {
    name: 'achievement',
    path: '/achievement',
    component: 'layout.base$view.achievement',
    meta: {
      title: 'achievement',
      i18nKey: 'route.achievement',
      icon: 'mynaui:gift',
      order: 20
    }
  },
  {
    name: 'archive',
    path: '/archive',
    component: 'layout.blank$view.archive',
    meta: {
      title: 'archive',
      icon: 'mynaui:archive',
      i18nKey: 'route.archive',
      constant: true,
      hideInMenu: true
    }
  },
  {
    name: 'demo',
    path: '/demo',
    component: 'layout.base$view.demo',
    meta: {
      title: 'demo',
      i18nKey: 'route.demo',
      hideInMenu: true
    }
  },
  {
    name: 'home',
    path: '/home',
    component: 'layout.base$view.home',
    meta: {
      title: 'home',
      i18nKey: 'route.home',
      icon: 'mynaui:home',
      order: 1
    }
  },
  {
    name: 'login',
    path: '/login/:module(pwd-login|register|reset-pwd|game-start)?',
    component: 'layout.blank$view.login',
    meta: {
      title: 'login',
      i18nKey: 'route.login',
      constant: true,
      hideInMenu: true
    },
    props: true
  },
  {
    name: 'personal',
    path: '/personal',
    component: 'layout.base$view.personal',
    meta: {
      title: 'personal',
      i18nKey: 'route.personal',
      hideInMenu: true
    }
  },
  {
    name: 'relationship',
    path: '/relationship',
    component: 'layout.base$view.relationship',
    meta: {
      title: 'relationship',
      i18nKey: 'route.relationship',
      icon: 'solar:user-heart-rounded-broken',
      order: 40
    }
  },
  {
    name: 'setting',
    path: '/setting',
    component: 'layout.blank$view.setting',
    meta: {
      title: 'setting',
      i18nKey: 'route.setting',
      constant: true,
      hideInMenu: true,
      icon: 'carbon:settings-adjust',
      order: 999
    }
  },
  {
    name: 'task',
    path: '/task',
    component: 'layout.base$view.task',
    meta: {
      title: 'task',
      i18nKey: 'route.task',
      icon: 'mynaui:panel-top-open',
      order: 10
    }
  }
];
