// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MuseUI from 'muse-ui'
import Rx from 'rxjs/Rx'
import VueRx from 'vue-rx'

import './assets/css/font.css'
import './assets/css/icon.css'
import 'muse-ui/dist/muse-ui.css'
import 'muse-ui/dist/theme-teal.css' // 使用 teal 主题

Vue.use(MuseUI)
// tada!
Vue.use(VueRx, Rx)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
