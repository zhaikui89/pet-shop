/**
 * Created by zhaikui on 2017/11/20.
 */
import app from './App.vue'
import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import router from './router'
import VueLazyLoad from 'vue-lazyload'
// import loading from './common/img/load1.png'
import store from './store'
import './mock/mockServer'
Vue.use(VueLazyLoad,{
  loading:'./static/img/load.gif',
  throttleWait:2000,
})
Vue.use(MintUI)
new Vue({
  el:'#app',
  render:h=>h(app),
  router,
  store
})
