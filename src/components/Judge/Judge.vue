<template>
    <div class="wrapJ">
      <div class="headerJ">
        <div class="rightJ">
          <span><a href="#">好评率99.4%</a></span>
        </div>
        <div class="leftJ">
          <img src="./1.png" alt="">
        </div>
      </div>
      <div class="contentJ">
        <ul class="listJ">
            <li v-for="(p, index) in comments" :key="index">
              <a href="#">
                <div class="imgWrapJ">
                  <img v-lazy="p.main_image.image" alt="">
                  <div class="breed">{{p.pet_des}}</div>
                  <div class="userJ">{{p.username}}</div>
                  <p>{{p.comment_content}}</p>
                </div>
              </a>
            </li>
          </ul>
      </div>
    </div>
</template>
<script>
  import {mapState} from 'vuex'
    export default {
        mounted () {
          this.$store.dispatch('getComment')
        },
        computed: {
          ...mapState(['comments'])
        }
    }
</script>
<style lang="stylus">
  .headerJ
    height:45px;
    img
      height:45px;
    span
      color:#ccc;
      font-size:12px;
  .leftJ
    width:100%;
    img
      margin-left:110px;
  .rightJ
    margin-top:12px;
    float:right;
  .contentJ a{
    display:block;
    width:172px;
    height:264px;
  }
  .imgWrapJ
    width:172px;
    height:172px;
    img
      height: 172px;
      width:172px;
    .breed
      float:right;
      font-size:12px;
    .userJ
      font-size:15px;

  .listJ
    display:flex;
    justify-content:space-around;
    flex-wrap: wrap;
    p
      margin-top: 5px;
      height:50px;
      overflow: hidden;
  .wrapJ{
    height:573px;
  }
</style>
