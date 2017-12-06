<template>
    <div>
      <div id="headerS">
        <span class="leftSu"><img src="./suprice.png" alt=""></span>
      </div>
      <div class="content" ref="surprise">
        <ul id="surpriseList">
          <li v-for="(p, index) in firstImg" :key="index" ref="list">
            <a href="https://wap.epet.com/surprise/Main.html?fw=0">
              <img v-lazy="p.image.image" />
              <p class="price">￥{{p.sale_price}}</p>
              <p>{{p.little_price}}</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
</template>
<script>
  import BScroll from 'better-scroll'
  import png from './c9787410d39559842a55bd1808525a99.jpg'
  import {mapState} from 'vuex'
    export default {
      computed: {
        ...mapState(['firstImg'])
      },
      mounted () {
        this.$nextTick(() => {
            setTimeout(()=>{
              this._initScroll()
            },300)

        })
      },
      methods: {
        _initScroll () {
            let li = this.$refs.list[0]
          let itemWidth =li.offsetWidth
          let count = this.firstImg.length
          let contentWidth = itemWidth*count
          let ul = document.getElementById('surpriseList')
          ul.style.width = contentWidth+'px'
          new BScroll(this.$refs.surprise,{
            scrollX:true,
            click:true
          })
        }
      }
    }
</script>
<style>
  .leftSu{

    height:24px;
    width:105px;
  }
  .leftSu img{
    width:105px;
    height: 24px;
    margin-left:20px;
    margin-top:15px;
  }
  .content{
    padding:15px 0;
  }
  .price{
    color:red;
    font-size:20px;
  }
  #surpriseList{
    overflow:hidden;
  }
  #surpriseList>li{
    float:left;
  }
  #surpriseList img{
    width:85px;
    height:85px;
  }
</style>
