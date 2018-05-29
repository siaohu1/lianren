<template>
  <section>
    <!--<Header/>-->
    <section class="login_content">
      <section class="login_container">
        <section class="login_left">
          <section class="personal_login">
            手机注册
          </section>
          <section class="login_form">
            <section class="login_phone">
              <select style="border: none;outline: none;appearance: none;font-size: 16px" id="phone">
                <option value ="volvo">+86</option>
                <option value ="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
              </select>
              <label for="phone">
                <img src="../../assets/xiajian.png" alt="" style="width: 9px;height: 3.8px;margin-top: 23px">
              </label>
              <input type="text" placeholder="请输入手机号码" v-model="phoneNumber">
            </section>
            <section style="display: flex;flex-direction: row">
              <section class="login_password">
                <input type="text" placeholder="请输入验证码" v-model="rejectCode">
              </section>
              <section>
                <section class="code_button">
                  <span v-show="sendAuthCode" class="auth_text auth_text_blue" @click="getCode()">获取验证码</span>
                  <span v-show="!sendAuthCode" class="auth_text"> <span class="auth_text_blue">{{auth_time}}</span>秒后获取</span>
                </section>
              </section>
            </section>
            <section class="login_password">
              <input type="password" placeholder="请输入登录密码" v-model="loginPassword">
            </section>
            <section class="login_password">
              <input type="password" placeholder="确认登录密码" v-model="loginPasswordA">
            </section>
          </section>
            <section class="login" @click="login()">
              注册
            </section>
          <section class="login_privacy">
            <label for="man">
              <el-checkbox v-model="checked1" name="man" id="man" style="margin-top: 13px;margin-right: 10px"></el-checkbox>
              <p>阅读并同意链人国际《用户协议与隐私政策》</p>
            </label>
          </section>
          <section class="login_methods">
            <router-link to="/recruit_message">
              <section class="message_login">已有账号？<span>去登录</span></section>
            </router-link>
          </section>
        </section>
        <section class="login_right">
          <section class="login_logo"></section>
        </section>
      </section>

    </section>
  </section>
</template>

<script>
  import * as apiRequest from '../../api/api'
  import Header from '../component/header'
  export default {
    name: "login",
    data(){
      return {
        checked1:false,
        phoneNumber:'',
        rejectCode:'',
        loginPassword:'',
        loginPasswordA:'',
        sendAuthCode:true,/*布尔值，通过v-show控制显示‘获取按钮’还是‘倒计时’ */
        auth_time: 0, /*倒计时 计数器*/
      }
    },
    methods:{
      getAuthCode:function () {
        this.sendAuthCode = false;
        this.auth_time = 60;
        var auth_timetimer = setInterval(() => {
          this.auth_time--;
          if (this.auth_time <= 0) {
            this.sendAuthCode = true;
            clearInterval(auth_timetimer);
          }
        }, 1000);
      },
      getCode(){
        apiRequest.sendCode({
          phone:this.phoneNumber,
          type:1,
        }).then(
          data=>{
            if(data.code==0){
              alert('发送成功！')
              this.getAuthCode();
            }else{
              alert(data.data.msg)
            }
          }
        )
      },
      login(){
        var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
          if(this.phoneNumber == "" || !myreg.test(this.phoneNumber)){
          alert('请输入正确的手机号！')
          return false
        }
        else if(this.rejectCode == ""){
            alert('请输入验证码')
            return false
            if(this.rejectCode.length>=7){
              alert('验证码为6位')
              return false
            }else if(this.rejectCode.length<6){
              alert('验证码为6位')
              return false
            }
        }
        else if(this.loginPassword ==''||this.loginPasswordA ==''){
          alert('请输入密码！')
          return false
        }
        else if(this.loginPassword !== this.loginPasswordA){
          alert('两次密码输入的不一致！')
          return false
        }
        else if(this.checked1 == false){
          alert('请同意协议！')
          return false
        }
        apiRequest.signin({
          phone:this.phoneNumber,
          verifyCode:this.rejectCode,
          password:this.loginPassword,
          invitationCod:'',
        }).then(
          data=>{
            if(data.code==0){
              alert('注册成功！');
              this.$router.push('/login_success')
            }else{
              alert(data.data.msg)
            }
          }
        )
      }
    },
    components:{
      Header
    }
  }
</script>

<style scoped lang="less">
  .login_content{
    overflow: hidden;
    width: 100%;
    height: 1000px;
    background-image: url("../../assets/bgg.png");
    background-size: cover;
    display: flex;
    justify-content: center;
    .login_container{
      width: 1200px;
      display: flex;
      flex-direction: row;
      .login_left{
        width:422px;
        height:531px;
        background:rgba(250,250,250,1);
        opacity:0.85;
        border-radius: 10px;
        box-shadow:0px 1px 9px rgba(0,0,0,0.25);
        margin-top: 86px;
        .personal_login{
          font-size:18px;
          font-family:HiraginoSansGB-W3;
          color:rgba(51,51,51,1);
          line-height:42px;
          margin-left: 43px;
          margin-top: 10px;
        }
        .login_form{
          width: 336px;
          margin: 20px auto 0 auto;
          .login_phone{
            border-bottom: 1px solid rgba(181,181,181,1);
            height: 58px;
            padding: 10px 0 0 0px;
            display: flex;
            flex-direction: row;
            input{
              font-size:16px;
              font-family:HiraginoSansGB-W3;
              color:rgba(102,102,102,1);
              line-height:42px;
              border: none;
              outline: none;
              margin-right: 5px;
              margin-left: 10px;
              background:rgba(250,250,250,1);
            }
          }
          .login_password{
            height: 58px;
            border-bottom: 1px solid rgba(181,181,181,1);
            padding: 10px 0 0 45px;
            input{
              font-size:16px;
              color:rgba(102,102,102,1);
              line-height:42px;
              border: none;
              outline: none;
              margin-left: 12px;
              background:rgba(250,250,250,1);
            }
          }
        }
        .login{
          cursor: pointer;
          width:334px;
          height:40px;
          background:rgba(73,120,241,1);
          border-radius: 20px;
          line-height: 40px;
          text-align: center;
          font-size:14px;
          font-family:HiraginoSansGB-W3;
          color:rgba(255,255,255,1);
          margin: 30px auto 0 auto;
        }
        .login_privacy{
          text-align: center;
          margin-top: 10px;
          display: flex;
          flex-direction: row;
          padding-left: 45px;
          label{
            display: flex;
            flex-direction: row;
            input{
              margin-top: 13px;
              margin-right: 10px;
            }
            p{
              font-size:14px;
              font-family:HiraginoSansGB-W3;
              color:rgba(102,102,102,1);
              line-height:42px;
            }
          }

        }
        .login_methods{
          display: flex;
          justify-content: space-between;
          width: 331px;
          margin: 30px  auto 0 auto;
          font-size:14px;
          font-family:HiraginoSansGB-W3;
          color:rgba(102,102,102,1);
          cursor: pointer;
          a{
            color:rgba(102,102,102,1);
            text-decoration: none;
          }
          span{
            color: #3977F9;
            border-bottom: 1px solid #3977F9;
          }
        }
      }
      .login_right{
        margin-top: 214px;
        margin-left: 200px;
        .login_logo{
          width: 379px;
          height: 160px;
          background-image: url("../../assets/lianrenlogo.png");
          background-size: cover;
        }
      }
    }
  }
  .code_button{
    width: 105px;
    height: 53px;
    position: relative;
    top: 10px;
    right: 5px;
    opacity:1;
    font-size:14px;
    font-family:HiraginoSansGB-W3;
    color:rgba(73,120,241,1);
    background-image: url("../../assets/white.png");
    background-size: cover;
    text-align: center;
    line-height: 45px;
    cursor: pointer;
    padding-left: 5px;
    span{
      display: inline-block;
      height: 45px;
      line-height: 45px;
    }
  }
</style>
