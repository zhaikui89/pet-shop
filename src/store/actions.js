/**
 * Created by zhaikui on 2017/11/21.
 */
import axios from 'axios'
export default {
  getCity ({commit}, city) {
    commit('GET_CITY', {city})
  },
  getFirstMenus ({commit}) {
    axios.get('/first/menus')
      .then(response=>{
        let data = response.data
        if (data.code===0) {
          let firstMenus = data.data
          commit('GET_FIRST_MENUS',{firstMenus})
        }
      })
  },
  getFirstImg ({commit}) {
    axios.get('/surprise/goods')
      .then(response=>{
        let data = response.data
        if(data.code===0){
          let firstImg = data.data
          commit('GET_IMG',{firstImg})
        }
      })
  },
  getColumn ({commit}) {
    axios.get('/column')
      .then(response=>{
        let data = response.data
        if(data.code===0){
          let column = data.data
          commit('GET_COLUMN',{column})
        }
      })
  },
  getComment ({commit}) {
    axios.get('/comment')
      .then(response=>{
        let data = response.data
        if(data.code===0){
          let comment = data.data
          commit('GET_COMMENT',{comment})
        }
      })
  },
  getBrand ({commit}) {
    axios.get('/brand')
      .then(response=>{
        let data = response.data
        if(data.code===0) {
          let brands = data.data
          commit('GET_BRAND',{brands})
        }
      })
  },
  getClassify ({commit}) {
    axios.get('/getClassify')
      .then(response => {
        let data = response.data
        if(data.code === 0) {
          let classify = data.data
          commit('GET_CLASSIFY', {classify})
        }
      })
  },
  getClassifyDetail ({commit},{index}) {
    axios.get('/getClassifyDetail')
      .then(response =>{
        let data = response.data
        if(data.code===0) {
          let classifyDetail = data.data[index]
          commit('GET_CLASSIFY_DETAIL', {classifyDetail})
        }
      })
  },
  getBanners ({commit}) {
    axios.get('/getBanners')
      .then(response => {
        let data = response.data
        if(data.code===0) {
          let banners = data.data
          commit('GET_BANNERS',{banners})
        }
      })
  },
  getSingles({commit}) {
    axios.get('/getSingles')
      .then(response =>{
        let result = response.data
        if(result.code===0){
          let singles = result.data
          commit('GET_SINGLES',{singles})
        }
      })
  }
}

