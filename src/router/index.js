import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home'
import Heightpie from '@/views/heightpie'
import Column from '@/views/column'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      /* 饼状图 */
      path: '/heightpie',
      name: 'heightpie',
      component: Heightpie
    },
    {
      /* 柱状图 */
      path: '/column',
      name: 'column',
      component: Column
    }
  ]
})
