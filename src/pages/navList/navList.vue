<template>
    <div class="navListN">
      <h1>{{$route.params.id}}</h1>
      <span @click="back"><img src="./back.png" alt=""></span>
    </div>
</template>
<script>
    export default {
        methods: {
            back () {
               this.$router.go(-1)
            }
        }
    }
</script>
<style>
.navListN h1{
  margin-top:10px;
  text-align: center;
  font-size: 20px;
}
</style>
