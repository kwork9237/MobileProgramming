
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/vue', component: () => import('pages/VueEx.vue') },
      { path: '/shop', component: () => import('pages/ShoppingList.vue') },

      //study
      { path: '/study/6week', component: () => import('../exercise/week6.vue') },
      { path: '/study/7week', component: () => import('../exercise/week7.vue') },
      { path: '/study/dbtodo', component: () => import('../exercise/DbTodo.vue') },
      { path: '/study/dbstore', component: () => import('../exercise/DbStore.vue') },

      //TEST
      { path: '/study/loginstore', component: () => import('../exercise/LoginStore.vue') },
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
