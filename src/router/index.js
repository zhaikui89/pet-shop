/**
 * Created by zhaikui on 2017/11/20.
 */
import Router from 'vue-router'
import Vue from 'vue'
const first = () =>import('../pages/first/first.vue')
const classify = ()=>import('../pages/classify/classify.vue')
const shopCart = ()=>import('../pages/shopCart/shopCart.vue')
const myDog = ()=>import('../pages/myDog/myDog.vue')
const navList = ()=>import('../pages/navList/navList.vue')
import fenlei from '../pages/classify/fenlei/fenlei.vue'
import pinpai from '../pages/classify/pinpai/pinpai.vue'
import register from '../pages/register/register.vue'
const cities = ()=>import('../pages/cities/cities.vue')
Vue.use(Router)
export default new Router({
  routes:[
    {
      path: '/',
      redirect: '/first'
    },
    {
      path: '/first',
      component: first
    },
    {
      path: '/classify',
      component: classify,
      children: [
        {
          path: '',
          redirect: 'fenlei'
        },
        {
          path: 'fenlei',
          component: fenlei
        },
        {
          path: 'pinpai',
          component: pinpai
        }
      ]
    },
    {
      path: '/shopCart',
      component: shopCart,
    },
    {
      path: '/myDog',
      component: myDog,
    },
    {
      path: '/register',
      component: register
    },
    {
      path:'/nav/:id',
      component: navList
    },
    {
      path: '/cities',
      component: cities
    }
  ]
})
