<template>
    <ul id="colmun">
      <li v-for="(p, index) in column" :key="index">
        <!--<router-link :to="`/nav/${p.id}`">-->
          <!---->
        <!--</router-link>-->
        <a href="#">
          <img v-lazy="p.image" />
        </a>
      </li>
    </ul>
</template>
<script>
  import {mapState} from 'vuex'
    export default {
        computed: {
          ...mapState(['column'])
        }
    }
</script>
<style lang="stylus">
#colmun
  display:flex;
  height:176px;
  justify-content:space-around;
  flex-wrap:wrap;
  align-content:space-around;
  img
    width:90px;
    height:85px;
</style>
