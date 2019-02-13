import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home'
import Heightpie from '@/views/heightpie'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/heightpie',
      name: 'heightpie',
      component: Heightpie
    }
  ]
})
