import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(Router)



const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes:[
    {
      path: "/",
      name: "home",
      component: Home,
      children:[
        {
          path: "",
          name: "Detail",
          component: () =>
              import("../views/Detail.vue")
        },
      ]
    },
    {
      path: "/about",
      name: "about",
      component: () =>
          import("../views/About.vue")
    },

    {
      path:'/Register',
      name:'Register',
      component: () =>
          import('../views/Register.vue')
    },
    {
      path: "/Sign",
      name: "Sign",
      component: () =>
          import("../views/Sign.vue")
    },
    {
      path: "/Details",
      name: "Details",
      component: () =>
          import("../views/Details.vue")
    },

  ]
})

export default router
