import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.js = module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
      ? '/catalog-products/'
      : '/'
}



new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
