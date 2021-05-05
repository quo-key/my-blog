import Vue from 'vue'
import App from './App.vue'
import "./styles/global.less"
import router from "./router/index"
import "./mock"
import showMessage from "./utils/showMessage"
import "./eventBus"
Vue.prototype.$showMessage = showMessage

import loading from "./directives/loading"
import lazy from "./directives/lazy"

import store from "./store"
store.dispatch("setting/fetchSetting")
window.store = store

Vue.directive("loading",loading)
Vue.directive("lazy",lazy)

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')



