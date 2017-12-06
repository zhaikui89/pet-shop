<template>
    <div>
      <div class="leftItem">
        <div class="listContent">
          <ul>
            <li v-for="(p, index) in classify" :key="index" @click="changeContent(index)" :class="{active:index==current}">{{p.name}}</li>
          </ul>
        </div>
      </div>
      <div class="middleItem"></div>
      <div class="rightItem">
        <div class="rightContent">
          <div class="frContent">
            <!--<a href="#">gougou</a>-->
            <div class="imgContentF">
              <ul class="listF" v-if="classifyDetail[0]">
                <li v-for="(p, index) in classifyDetail[0].list" :key="index">
                  <a href="#">
                    <img :src="p.photo"/>
                    <p>{{p.name}}</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <!--<div class="scContent">-->
            <!--<div class="frContent">-->
              <!--<a href="#">狗狗牵引</a>-->
              <!--<img class="allCom" src="./1.png" alt="">-->
              <!--<div class="imgContentF">-->
                <!--<ul class="listF">-->
                  <!--<li v-for="(p, index) in arr" :key="index">-->
                    <!--<a href="#">-->
                      <!--<img v-lazy="imgUrl" alt="">-->
                      <!--<p>皮绳</p>-->
                    <!--</a>-->
                  <!--</li>-->
                <!--</ul>-->
              <!--</div>-->
            <!--</div>-->
          <!--</div>-->
        </div>
      </div>
    </div>
</template>
<script>
  import BScroll from 'better-scroll'
  import png from './2.jpg'
  import {mapState} from 'vuex'
    export default {
        data () {
            return {
               current:0
            }
        },
      created () {
        this.$store.dispatch('getClassify')
        this.$store.dispatch('getClassifyDetail',{index:this.current})
      },
      watch: {
        classify: function (val) {
          let wrap = document.querySelector('.leftItem')
          setTimeout(()=>{
            new BScroll(wrap,{
              click: true
            })
          },30)
        }
      },
      mounted () {
//            this.$store.dispatch('getClassify')
//        this.$store.dispatch('getClassifyDetail',{index:0})
            this.changeNative(true)
        let contentH = document.documentElement.clientHeight-90
        let wrap = document.querySelector('.leftItem')
        wrap.style.height = contentH+'px'
        let middleItem = document.querySelector('.middleItem')
        let rightC = document.querySelector('.rightItem')
        rightC.style.height = contentH+ 'px'
        new BScroll(rightC,{
            click: true
        })
        middleItem.style.height = contentH + 'px'
        this.$nextTick(() =>{
                setTimeout(()=>{
                  new BScroll(wrap,{
                    click: true
                  })
                },30)
        })
      },
      methods: {
            changeContent (index) {
                this.current = index
                this.$store.dispatch('getClassifyDetail',{index})
            }
      },
      computed: {
        ...mapState(['brands','list','classify','classifyDetail'])
      },
      props: {
            changeNative: Function
      }
    }
</script>
<style>
  .leftItem{
    float: left;
    width:70px;
    overflow: hidden;
  }
  .leftItem li{
    font-size:13px;
    width: 70px;
    height:50px;
    border-bottom: 1px solid #ccc;
    line-height:50px;
    text-align: center;
  }
  .middleItem{
    position:absolute;
    left: 70px;
    width:3px;
    background-color:#ccc;
  }
  .frContent{
    margin-bottom:15px;
  }
  .frContent a{
    font-size:13px;
    /*margin:10px;*/
  }
  .imgContentF{
    margin-top:10px;
  }
  .imgContentF img{
    width:87px;
    height:87px;
  }
  .imgContentF p{
    font-size: 12px;
    text-align: center;
  }
  .imgContentF li{
    width:87px;
    height:100px;
    /*margin-left: 5px;*/
  }
  .listF{
    display:flex;
    flex-wrap:wrap;
  }
  .listF li{
    width: 96px;
    height:116px;
    padding:0 5px;
    box-sizing: border-box;
  }
  .listF p {
    height:20px;
    overflow: hidden;
    line-height: 20px;
  }
  .rightItem{
    overflow: hidden;
  }
  .active{
    color:red;
    background-color: #ccc;
  }
</style>
