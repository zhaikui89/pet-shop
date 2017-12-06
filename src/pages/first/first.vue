<template>
  <div id="main">
    <div id="headerFi">
      <div class="leftFi">
        <router-link to="/cities" class="left">狗狗站| {{city.cityname}}</router-link>
      </div>
      <div class="rightFi">
        <input type="text" placeholder="搜索商品和品牌" />
      </div>
      <div id="nav" ref="navL">
        <!--需要添加路由-->
        <ul id="navList">
          <li v-for="(p, index) in firstMenus" :key="index">
            <router-link :to="`/nav/${p.menu_name}`">
              <span>{{p.menu_name}}
              </span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <div id="firstWrap">
      <div id="contentFi">
        <div id="swipe">
          <BannerItem  auto="2000"/>
        </div>
        <split />
        <div id="column">
          <ColumnavItem />
        </div>
        <split />
        <div id="surprise">
          <SurpriseItem />
        </div>
        <split />
        <Custom />
        <fashion></fashion>
        <split />
        <Custom />
        <BannerItem auto="0"/>
        <split />
        <SingleadItem v-for="(p, index) in singles" :key="index" :index="index" :single="p"/>
        <Judge />
        <split />
        <div>
          <h2>联系我们</h2>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import BannerItem from '../../components/BannerItem/BannerItem.vue'
  import split from '../../components/split/split.vue'
  import ColumnavItem from '../../components/ColumnavItem/ColumnavItem.vue'
  import SurpriseItem from '../../components/SurpriseItem/SurpriseItem.vue'
  import fashion from '../../components/fashion/fashion.vue'
  import Custom from '../../components/Custom/Custom.vue'
  import BScroll from 'better-scroll'
  import SingleadItem from '../../components/SingleadItem/SingleadItem.vue'
  import Judge from '../../components/Judge/Judge.vue'
  import {mapState} from 'vuex'
  import {Mixin} from '../../util/mixins'
  export default {
      mixins:[Mixin],
    data () {
      return {
            city:{cityname:'请选择地址'},
      }
    },
    mounted () {
        this.$nextTick(() => {
          this.city = JSON.parse(localStorage.getItem('city'))
          let firstH = document.documentElement.clientHeight-106
          let firstWrap = document.getElementById('firstWrap')
          firstWrap.style.height = firstH+'px'
          console.log(firstWrap.style.height)
          new BScroll(firstWrap,{
            click:true
          })
            this._initScroll()
        })
    },
    computed: {
      ...mapState(['city','firstMenus','singles']),
    },
    methods:{
        _initScroll () {
            let itemWidth = 80
          let count = this.firstMenus.length
          let width = itemWidth*count
          document.getElementById('navList').style.width=width+'px'
          new BScroll(this.$refs.navL,{
              click:true,
            scrollX:true
          })
        }
    },
    components: {
      BannerItem,
      split,
      ColumnavItem,
      SurpriseItem,
      fashion,
      Custom,
      SingleadItem,
      Judge
    },
  }
</script>
<style lang="stylus">
  #headerFi
    margin-top:15px;
    overflow:hidden;
  .leftFi{
    float:left;
    margin-left:10px;
    font-size:14px;}
  .rightFi
    float:right;
    margin-right:30px;
    input
      background-color: #ccc;
      border-radius: 5px;
  li{
    list-style:none;
  }

  #nav{
    margin-top:30px;
    padding-bottom:10px;
  }
  #navList
    display:flex;

    li
      width:80px;
      color:#ccc;
      text-align: center;
  #main{
    overflow:hidden;
  }
  #firstWrap{
    overflow: hidden;
  }
</style>
