<template>
    <div>
      <div class="headerShop">
        <span @click="update"><img src="./back.png" alt=""></span>
        <span class="homeS"><img src="./home.png" @click="changeNavShow"></span>
        <h1>购物车</h1>


      </div>
      <transition name="navShow">
        <ul class="bottomListS" v-if="navShow">
          <li><router-link to="/first"><img src="../../../static/img/home.png" alt=""></router-link></li>
          <li><router-link to="/classify"><img src="../../../static/img/fenlei.png" alt=""></router-link></li>
          <li><router-link to="/shopCart"><img src="../../../static/img/shop.png" alt=""></router-link></li>
          <li><router-link to="/myDog"><img src="../../../static/img/dog.png" alt=""></router-link></li>
        </ul>
      </transition>
      <div class="cart">
        <div class="imgCart">
          <img src="./shop.png" alt="">
          <p>购物车是空的</p>
        </div>
      </div>
      <div class="button">
        <mt-button type="default" @click="toHome">去逛逛</mt-button>
        <mt-button type="default">我的收藏</mt-button>
      </div>
    </div>
</template>
<script>
  import {Mixin} from '../../util/mixins'
    export default {
      mixins:[Mixin],
      mounted () {
        this.changeShow(false)
      },
        props: {
            changeShow: Function,
        },
      data () {
        return {
            navShow:false
        }
      },
        methods: {
            update () {
                this.$router.go(-1)
              this.changeShow(true)
            },
          toHome () {
                this.$router.push('/first')
            this.changeShow(true)
          },
          changeNavShow () {
                this.navShow=!this.navShow
          }
        },
    }
</script>
<style lang="stylus">
  .headerShop
    height: 50px;
    padding:10px;
    border-bottom: 2px solid #ccc;

    img
      height:20px;
      width:20px;

  h1{
    text-align: center;
    font-size: 20px;
  }
  .imgCart{
    text-align: center;
    padding-top:20px;
  }
  .button{
    margin-top:20px;
    text-align: center;
  }
  .homeS
    float: right;
    img
      width:30px;
      height:30px;

  .bottomListS
    height:30px;
    display:flex;
    justify-content: space-around;
    align-items: center;

    img
      height:20px;

  .navShow-enter, .navShow-leave-to{
    transform: scaleY(0);
    transform-origin: top;
  }
  .navShow-enter-active, .navShow-leave-active {
    transition:0.3s;
  }
</style>
