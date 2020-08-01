// eslint-disable-next-line

import Vue from 'vue'
import App from './App'
import router from './router'
import global from './components/global.js'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  data: global,
  components: { App },
  template: '<App/>'
})
