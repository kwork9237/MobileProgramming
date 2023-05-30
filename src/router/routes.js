
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { 
        name: "main",
        path: "",
        path: '', component: () => import('pages/IndexPage.vue') 
      },
      { 
        meta: { requiresAuth: true },
        name: "vue",
        path: "vue",
        path: '/vue', component: () => import('pages/VueEx.vue') 
      },
      { 
        meta: { requiresAuth: true },
        name: "shop",
        path: "shop",
        path: '/shop', component: () => import('pages/ShoppingList.vue') 
      },

      //study
      { 
        meta: { requiresAuth: true },
        name: "6week",
        path: "6week",
        path: '/study/6week', component: () => import('../exercise/week6.vue') 
      },
      { 
        meta: { requiresAuth: true },
        name: "7week",
        path: "7week",
        path: '/study/7week', component: () => import('../exercise/week7.vue') 
      },
      { 
        meta: { requiresAuth: true },
        name: "dbtodo",
        path: "dbtodo",
        path: '/study/dbtodo', component: () => import('../exercise/DbTodo.vue') 
      },
      { 
        meta: { requiresAuth: true },
        name: "dbstore",
        path: "dbstore",
        path: '/study/dbstore', component: () => import('../exercise/DbStore.vue') 
      },

      //TEST
      //{ path: '/study/loginstore', component: () => import('../exercise/LoginStore.vue') },
    ]
  },
  {
    name:"login",
    path: "/login",
    component: () => import('../layouts/Login.vue') 
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
    component: () => import("layouts/SignIn.vue")
  }
]

export default routes;