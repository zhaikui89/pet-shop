<template>
  <div>
    <keep-alive>
      <router-view :changeShow="changeShow"></router-view>
    </keep-alive>
    <div id="bottom"  v-if="isShow">
      <ul class="bottomList">
        <li><router-link to="/first"><img src="../static/img/home.png" alt=""></router-link></li>
        <li><router-link to="/classify"><img src="../static/img/fenlei.png" alt=""></router-link></li>
        <li><router-link to="/shopCart"><img src="../static/img/shop.png" alt=""></router-link></li>
        <li><router-link to="/myDog"><img src="../static/img/dog.png" alt=""></router-link></li>
      </ul>
    </div>
  </div>
</template>
<script>
    export default {
        data () {
            return {
                isShow: true
            }
        },
      mounted () {
        this.isShow = true
        this.$store.dispatch('getFirstMenus')
        this.$store.dispatch('getFirstImg')
        this.$store.dispatch('getColumn')
        this.$store.dispatch('getSingles')
      },
      methods: {
            changeShow (bool) {
              this.isShow = bool
            }
      }
    }
</script>
<style>
li{
  list-style:none;
}
  #bottom{
    width:100%;
    height:30px;
    position: absolute;
    bottom:0;
  }
  .bottomList{
    display:flex;
    justify-content: space-around;
  }
  .bottomList img{
    height:20px;
  }
</style>
