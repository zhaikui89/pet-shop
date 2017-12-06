<template>
    <div id="Single">
      <div class="text">
        <span class="left">{{single.title}}</span>
        <span class="right">{{single.sub_title}}</span>
      </div>
      <div class="imgWrapS" v-if="single.content_images">
        <img v-lazy="single.content_images[0].image" alt="">
      </div>
    </div>
</template>
<script>
    export default {
        props: {
            index:Number,
          single:Object
        }
    }
</script>
<style lang="stylus">
  #Single
    height:200px;

    .text
      line-height: 44px;
      height:44px;
      .left
        font-size:15px;
        margin:20px 15px;
      .right
        font-size:12px;
        color:#ccc;

  .imgWrapS
    height:155px;
    img
      height:100%;
</style>
