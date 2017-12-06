<template>
    <div>
      <div class="headerM">
        <div class="backM">
          <span @click="back"><img src="./back.png" alt=""></span>
        </div>
        <div class="register">
          <router-link to="/register"><span>注册</span></router-link>
        </div>
        <div class="navM">
          <ul>
            <li @click="active='tab-container1'">普通登录</li>
            <li @click="active='tab-container2'">手机验证码动态登录</li>
          </ul>
        </div>

      </div>

      <div class="page-tab">
        <mt-tab-container v-model="active">
          <mt-tab-container-item id="tab-container1">
            <span class="icon-xiaosanjiao iconfont"></span>
            <div>
              <mt-field label="用户名" placeholder="用户名/手机号/邮箱" v-model="username"></mt-field>
              <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
              <div class="forgot"><a href="#">忘记密码？</a></div>
              <mt-button type="primary" class="primary">登录</mt-button>
            </div>
            <div class="teamWork">
              <p>合作网站登录</p>
              <a href="https://xui.ptlogin2.qq.com/cgi-bin/xlogin?appid=716027609&pt_3rd_aid=204246&daid=383&pt_skey_valid=0&style=35&s_url=http%3A%2F%2Fconnect.qq.com&refer_cgi=authorize&which=&response_type=code&client_id=204246&redirect_uri=https%3A%2F%2Fpassport.epet.com%2FOauth.html%3Ftype%3D2%26do%3Dcallback&scope=get_user_info%252Cadd_t%252Cadd_pic_t%252Cadd_share&state=QQ5a1557c5c37393.55493573"><img src="./login_ico2.png" alt=""></a>
              <a href="https://auth.alipay.com/login/express.htm?goto=https%3A%2F%2Fmemberexprod.alipay.com%3A443%2Fauthorize%2FuserAuthQuickLoginAction.htm%3Fe_i_i_d%3Ddad20b312e2035568a08456e0bd117a3"><img src="./login_ico4.png" alt=""></a>

            </div>
          </mt-tab-container-item>
          <mt-tab-container-item id="tab-container2">
            <div>
              <mt-field label="用户名" placeholder="已注册的手机号" v-model="username"></mt-field>
              <mt-field label="验证码" v-model="captcha" placeholder="请输入图片中的文字">
                <img src="./yanzheng.png" height="45px" width="100px">
              </mt-field>
              <mt-field label="密码" placeholder="动态密码" type="password" v-model="password"></mt-field>
              <div class="forgot"><router-link to="">忘记密码？</router-link></div>
              <div class="register">
                <router-link to="/register">注册</router-link>
              </div>
              <mt-button type="primary" class="primary">登录</mt-button>
            </div>
            <div class="teamWork">
              <p>合作网站登录</p>
              <a href="https://xui.ptlogin2.qq.com/cgi-bin/xlogin?appid=716027609&pt_3rd_aid=204246&daid=383&pt_skey_valid=0&style=35&s_url=http%3A%2F%2Fconnect.qq.com&refer_cgi=authorize&which=&response_type=code&client_id=204246&redirect_uri=https%3A%2F%2Fpassport.epet.com%2FOauth.html%3Ftype%3D2%26do%3Dcallback&scope=get_user_info%252Cadd_t%252Cadd_pic_t%252Cadd_share&state=QQ5a155829425e06.89616502"><img src="./login_ico2.png" alt=""></a>
              <a href="https://auth.alipay.com/login/express.htm?goto=https%3A%2F%2Fmemberexprod.alipay.com%3A443%2Fauthorize%2FuserAuthQuickLoginAction.htm%3Fe_i_i_d%3Ddad20b312e2035568a08456e0bd117a3"><img src="./login_ico4.png" alt=""></a>
            </div>
          </mt-tab-container-item>
        </mt-tab-container>
      </div>
    </div>
</template>
<script>
  import {Mixin} from '../../util/mixins'
  var code;
    export default {
      mixins:[Mixin],
      mounted () {
        this.changeShow(false)
      },
        data () {
          return {
            captcha:'',
              active:"tab-container1",
            username:"",
            password:"",
              }
          },
        props: {
          changeShow: Function
        },
      methods: {
            back() {
                this.$router.go(-1)
              this.changeShow(true)
            }
      }
    }
</script>
<style>
  span img{
    width:20px;
    height:20px;
  }
  .headerM{
    background-image:url("./background.png");
    height:172px;
    display: flex;
    align-items: flex-end;
  }
  .backM{
    position:absolute;
    left:15px;
    top:15px;
  }
  .imgWrapM img{
    height:100%;
    width:100%;
  }
  .navM {
    width: 100%;
    background-color: rgba(255, 255, 255, .3);
    height: 44px;
  }
  .navM ul{
    display:flex;
    justify-content: space-around;
    width:100%;
    height:100%;
  }
  .navM li{
    line-height: 44px;
    font-size: 15px;
    color: #fff;
  }
  .forgot{
    position:relative;
    left:280px;
    margin-bottom:10px;
  }
  .primary{
    width:100%;
    text-align: center;
  }
  .teamWork{
    padding:50px;
    text-align: center;
  }
  .teamWork p{
    text-align: center;
    margin-bottom: 30px;
    font-size: 20px;
  }
  #tab-container1>div{
    height:200px;
    width: 100%;
  }
  .teamWork img{
    width:50px;
    height:50px;
  }
  .register{
    position: absolute;
    right: 10px;
    top:10px;
  }
  .register span {
    color: #fff;
  }
  .iconfont {
    position: absolute;
    top: 146px;
    left:67px;
  }
  /*.verification1*/
  /*font-size 16px*/
              /*color #ed711f*/
              /*display block*/
              /*width 60px*/
                      /*line-height 30px*/
                                    /*height 30px*/

</style>
