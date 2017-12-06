/**
 * Created by zhaikui on 2017/11/21.
 */
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
const state = {
  city:{},
  firstMenus:[],
  firstImg:[],
  column:[],
  comments:[],
  brands:[],
  list:{},
  classify: [],
  classifyDetail:[],
  banners:[],
  singles:[]
}
export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})

