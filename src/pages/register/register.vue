<template>
    <div>
      <div v-if="isShow">
        <mt-field placeholder="请输入手机号码" v-model.trim="phone"></mt-field>
        <mt-button type="default" class="buttonR" @click="changeInput">下一步</mt-button>
      </div>
      <transition name="input">
        <div v-if="!isShow">
          <mt-field v-model="phone" readonly="true"></mt-field>
          <input type="text" placeholder="请输入验证码" class="yanzhengma_input" @blur="checkLpicma" v-model="picLyanzhengma">
          <input type="button" id="code" @click="createCode"  class="verification1" v-model="checkCode"/>
          <!--<mt-field placeholder="请输入验证码" v-model="captcha1">-->
            <!--<img src="./yanzheng.png" height="30px" width="100px">-->
          <!--</mt-field>-->
          <mt-field placeholder="请输入手机验证码" v-model="captcha2">
            <mt-button type="danger" @click.native="changeText" :disabled="disabled">{{buttonContent}}</mt-button>
          </mt-field>
          <mt-field v-model="username" placeholder="请输入昵称"></mt-field>
          <mt-field type="password" v-model="password" placeholder="请输入密码"></mt-field>
          <mt-field type="password" v-model="rePassword" placeholder="确认密码"></mt-field>
          <mt-button type="default" class="buttonR" @click.native="submit">下一步</mt-button>
        </div>
      </transition>

    </div>
</template>
<script>
  import axios from 'axios'
  import {Toast} from 'mint-ui'
  var code;
    export default {
      created(){
        this.createCode();
      },
      props: {
        changeShow:Function
      },
        data () {
            return {
                isShow: true,
              phone: '',
              buttonContent:'发送短信验证码',
              disabled:false,
              captcha1:'',
              captcha2:'',
              username: '',
              password: '',
              rePassword: '',
              code:'',
              picLyanzhengma:'',
              checkCode: ''
            }
        },
      mounted () {
           this.changeShow(false)
      },
      methods: {
        createCode(){
          code = "";
          var codeLength = 4;//验证码的长度
          var random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R',
            'S','T','U','V','W','X','Y','Z');//随机数
          for(var i = 0; i < codeLength; i++) {//循环操作
            var index = Math.floor(Math.random()*36);//取得随机数的索引（0~35）
            code += random[index];//根据索引取得随机数加到code上
          }
          this.checkCode = code;//把code值赋给验证码
        },
// 失焦验证图和密码
        checkLpicma(){

          this.picLyanzhengma.toUpperCase();//取得输入的验证码并转化为大写
          if(this.picLyanzhengma == '') {
            alert('不能为空')

          }else if(this.picLyanzhengma.toUpperCase() != this.checkCode ) { //若输入的验证码与产生的验证码不一致时
            alert('不正确')
            this.createCode();//刷新验证码
            this.picLyanzhengma = '';
          }else { //输入正确时
            alert('正确')
            return true;
          }

        },
            changeInput () {
                let reg = /^0{0,1}(13[0-9]|15[7-9]|153|156|18[7-9])[0-9]{8}$/
                if(reg.test(this.phone)){
                  this.isShow = false
                }else if(this.phone){
                  Toast('请输入正确的手机号')
                }else{
                  Toast('手机号不能为空')
                }
            },
        changeText () {
                let number = 10
          let set = setInterval(()=>{
                    number--
            this.buttonContent=number+'秒'
            this.disabled = true
            if(number===0) {
                        clearInterval(set)
              this.buttonContent = '发送短信验证码'
              this.disabled=false
            }
          },1000)
          axios.get(`/sendcode?phone=${this.phone}`).then(response => {
//            alert(response.data.code)
          })
        },
        submit () {
            if(!this.captcha2||!this.username||!this.password||!this.rePassword||!this.picLyanzhengma) {
              Toast('信息没写完你提交啥劲')
            }else{
              axios.post('/login', {phone: this.phone, code: this.captcha2}).then(response => {
                const result = response.data
                if (result.code == 0) {
                  const user = result.data
                  alert(`注册成功: ${user.phone}`)
                  this.$router.push('/first')
                  this.changeShow(true)
                } else {
                  alert(`登陆失败, 请输入正确的手机号和验证码`)
                }
              })
            }
        }
      }
    }
</script>
<style>
.buttonR{
  height: 30px;
  width:300px;
  border-radius:30px;
  margin:20px 37px;
}
  .input-enter, .input-leave-to {
    transform: translateY(20px);
    opacity: 0;
  }
  .input-enter-active, .input-leave-active {
    transition:0.8s;
  }
</style>
