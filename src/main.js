// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/common.less'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
// import QFM from './script/common.js'
import QFM from '@/script/common.js'
import store from './store'
// import echarts from 'echarts';


Vue.config.productionTip = false

//
Vue.use(ElementUI);
// Window.Q = QFM;
Vue.prototype.$q = QFM;
Vue.prototype.$http = axios;
// Vue.prototype.$echarts = echarts;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
