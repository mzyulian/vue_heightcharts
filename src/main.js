// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'reset-css'
import highcharts from 'highcharts'
import highcharts3d from 'highcharts/highcharts-3d'
import api from './api/index.js' // 导入api接口

Vue.prototype.$api = api // 将api挂载到vue的原型上
highcharts3d(highcharts)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
