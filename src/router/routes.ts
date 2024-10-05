import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('src/pages/launches/HomePage.vue')
      },
      {
        path: '/launch',
        component: () => import('src/pages/launches/HomePage.vue')
      },
      {
        path: '/launch/home',
        name: 'Home',
        component: () => import('src/pages/launches/HomePage.vue')
      },
      {
        path: '/launch/launch-form',
        name: 'Launch Form',
        component: () => import('src/pages/launches/LaunchFormPage.vue')
      },
      {
        path: '/launch/:id',
        name: 'Launch Details Page',
        component: () => import('src/pages/launches/LaunchDetailsPage.vue')
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
