<template>
    <div>
      <div class="headerC">
          <span><router-link :class="{native:isClass}" to="/classify/fenlei">分类</router-link></span>
          <span><router-link :class="{native:!isClass}" to="/classify/pinpai">品牌</router-link></span>
      </div>
      <split></split>
      <keep-alive>
        <router-view :changeNative="changeNative"></router-view>
      </keep-alive>
    </div>
</template>
<script>
  import split from '../../components/split/split.vue'
  import {Mixin} from '../../util/mixins'
    export default {
      props:{
        changeShow: Function
      },
      mixins:[Mixin],
      mounted () {
          this.changeShow(true)
      },
      data () {
          return {
              isClass: true
          }
      },
      methods: {
        changeNative (bool) {
            this.isClass=bool
        }
      },
      components: {
          split
      }
    }
</script>
<style lang="stylus">
  .headerC
    height: 40px;
    display: flex;
    justify-content: center;
    line-height:40px;
    span
      margin:0 20px;

  .native{
    color: red;
    border-bottom: 2px solid red;
  }
</style>
