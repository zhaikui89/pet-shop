<template>
  <div>
    <mt-swipe :auto="auto" class="mint-swipe">
      <mt-swipe-item v-for="(p, index) in banners" :key="index"><img :src="p.image" alt="" /></mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
    export default {
        props: {
          auto:Number
        },
      mounted () {
        this.$store.dispatch('getBanners')
      },
      computed: {
        ...mapState(['banners'])
      }
    }
</script>
<style lang="stylus">
  .mint-swipe
    height: 160px;
    width:100%;
    img
      width:100%;
      height:160px;
</style>
