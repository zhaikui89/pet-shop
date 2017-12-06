<template>
    <div>
      <div class="wrap">
        <div class="content">
          <ul class="listP">
            <li v-for="(p, index) in brands" :key="index" class="listPLi">
              <p>{{p.title}}</p>
              <ul class="listP2">
                <li v-for="(e, index) in p.list" :key="index">
                  <a href="#">
                    <img v-lazy="e.logo" alt="">
                    <p>{{e.name}}</p>
                    <p>{{e.address}}</p>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

    </div>
</template>
<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
    export default {
        mounted () {
            this.changeNative(false)
          let contentH = document.documentElement.clientHeight-90
          let wrap = document.querySelector('.wrap')
          wrap.style.height = contentH+'px'
          this.$nextTick(() =>{
              if(this.brands){
                  setTimeout(()=>{
                    new BScroll(wrap,{
                      click: true
                    })
                  },30)
              }
          })
          this.$store.dispatch('getBrand')
        },
        data () {
            let arr= new Array(40)
          return {
                arr
          }
        },
      computed: {
        ...mapState(['brands'])
      },
      props: {
            changeNative:Function
      },
      watch: {
            brands:function (val) {
                console.log(val)
              let wrap = document.querySelector('.wrap')
              new BScroll(wrap,{
                click: true
              })
            }
      }
    }
</script>
<style lang="stylus">
  .listP
    p
      font-size:15px;
      color: #ccc;
    span
      color:#ccc;
      font-size: 12px;
    a
      width:101px;
      height: 117px;

    img
      width:80px;
      height:40px;

  .listPLi
    border-bottom: 2px solid #ccc;
    padding-bottom:10px;
    margin-bottom:10px;

    p
      text-align: center;

  .wrap{
    overflow:hidden;
  }
  .content{
    margin-top: 10px;
  }
  .listP2
    display: flex;
    justify-content: space-around;
    flex-wrap:wrap;
    align-content: space-around;

    p
      font-size:15px;

    img
      height:62px;
      width:111px;

    li
      margin-bottom:10px;

</style>
