import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'vuetify/dist/vuetify.min.css';

Vue.use(VueAxios, axios)
Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
