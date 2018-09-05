import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueFire from 'vuefire'
import VTooltip from 'v-tooltip'



// var firebase = require('firebase')

Vue.use(VueFire)
Vue.use(VTooltip)
Vue.config.productionTip = false

VTooltip.enabled = window.innerWidth > 0
VTooltip.options.autoHide = true

new Vue({
  router,
  render: h => h(App),
  firebase: {
    // test_array: db.ref('one'),
  }
}).$mount('#app')
