import Vue from 'vue'
import Router from 'vue-router'

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

import Login from './components/Login.vue'
import List from './components/List.vue'
import Details from './components/Details.vue'

Vue.use(Router)
Vue.use(Element)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/list',
      name: 'list',
      component: List
    },
    {
      path: '/details/:login',
      name: 'details',
      props: (route) => {
        return (route.params);
      },
      component: Details
    }
  ]
})
