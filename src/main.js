import Vue from 'vue'
import App from './App.vue'
import router from './router'
new Vue({
  router,
  render:  c => c(App)
}).$mount('#app')
