<template>
    <div>
      <div class="headerCity">
        <div @click="back"><img src="./back.png" alt=""></div>
        <h1>选择收货地区</h1>
      </div>
      <div class="buttonsH">
        <mt-button type="danger" class="btn">猫猫站</mt-button>
        <mt-button type="danger" class="btn">狗狗站</mt-button>
        <mt-button type="danger" class="btn">水族站</mt-button>
      </div>
      <div class="address" ref="address">
        <p>当前默认地址
          <span>{{showCity.cityname}}</span>
        </p>
      </div>
      <ul class="addressList">
        <li v-for="(city, index) in cities" :key="index" @click="changeAddress(city)">{{city.cityname}}</li>
      </ul>
    </div>
</template>
<script>
  import axios from 'axios'
  import PubSub from 'pubsub-js'
  import {Mixin} from '../../util/mixins'
    export default {
      mixins:[Mixin],
      props: {
        changeShow:Function
      },
      data () {
          return {
              cities:[],
            showCity:{}
          }
      },
        methods: {
            back() {
                this.$router.go(-1)
              this.changeShow(true)
            },
          changeAddress (city) {
                let firstName = city.code.charAt(0).toUpperCase()
            axios.get('/city/classify')
              .then(response=>{
                  let data = response.data
                if(data.code===0) {
                      let result = data.data
                  let city= result.filter((item,index)=>{
                          return item.order===firstName
                  })
                  this.cities=city[0].list
                }
              })
                this.showCity=city
            if(this.cities.length<10){
              this.$store.dispatch('getCity',city)
              this.$router.go(-1)
              this.changeShow(true)
            }
          }
        },
      mounted () {
          this.changeShow(false)
         let url = '/city'
        axios.get(url)
          .then(response=>{
              let data = response.data
            if(data.code===0) {
                  let cities = data.data.hotcity
              this.cities = cities
            }
          })
      },
      watch: {
          cities: function (val) {
              console.log(val)
          }
      }
    }
</script>
<style>
  .headerCity h1{
    font-size: 20px;
    text-align:center;
    padding-bottom:10px;
    margin-top: 10px;
    border-bottom: 2px solid #ccc;
  }
  .buttonsH{
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 34px;
    padding:10px 0;
  }
  .buttonsH>.btn{
    height:34px;
    width: 98px;
  }
  .address p, .address span {
    font-size: 15px;

  }
  .address{
    background-color: deepskyblue;
    height:43px;
    line-height:43px;
    position: absolute;
    /*top:120px;*/
    width:100%;
  }
  .addressList li{
    border-bottom: 1px solid #ccc;
    height:40px;
    text-align: center;
    line-height: 40px;
  }
  .addressList{
    margin-top:45px;
  }
</style>
