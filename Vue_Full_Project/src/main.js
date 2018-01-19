// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App'
import router from './router'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'

Vue.use(BootstrapVue)
Vue.use(VueMaterial)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
})
Vue.material.registerPalette('my-palette', {
  50: '#E8F5E9',
  100: '#C8E6C9',
  200: '#A5D6A7',
  300: '#81C784',
  400: '#66BB6A',
  500: '#4CAF50',
  600: '#43A047',
  700: '#388E3C',
  800: '#2E7D32',
  900: '#1B5E20',
  A100: '#B9F6CA',
  A200: '#69F0AE',
  A400: '#00E676',
  A700: '#00C853',
  darkText: [50, 100, 'A100', 'A200']
})
Vue.material.registerTheme('default', {primary: 'my-palette'})
