<template>
  <section>
    <section class="login_content">
      <section class="login_container">
        <section class="login_left">
          <section class="personal_login">
            个人登录
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
              <input type="phone" placeholder="请输入手机号码" v-model="phoneNumber" style="width: 285px;">
            </section>
            <section class="login_password">
              <input type="password" placeholder="请输入密码" v-model="loginPassword" style="width: 275px;">
            </section>
          </section>
          <section class="login" @click="login()">
            登录
          </section>
          <section class="login_methods">
            <router-link to="/recruit_message">
              <section class="message_login">短信验证码登录</section>
            </router-link>
            <router-link to="/find_password">
              <section class="forget_password">忘记密码</section>
            </router-link>
          </section>
        </section>
        <section class="login_right">
          <section class="login_logo"></section>
          <section class="login_tips">
            <section class="login_tip">还没有账号？</section>
            <router-link to="/register">
              <section class="create_now">立即注册</section>
            </router-link>
          </section>
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
        phoneNumber:'',
        loginPassword:''
      }
    },
    methods:{
      login(){
        var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
        var myreg1 =/^[a-zA-Z]\w{5,17}$/;
        if(this.phoneNumber == ""){
          alert('请输入手机号！')
          return false
        }else if(!myreg.test(this.phoneNumber)){
          alert('手机号格式不正确')
          return false
        }else if(!myreg1.test(this.loginPassword)){
          alert("请输入以字母开头的8-16位密码！只能是数字，字母，下划线组成")
          return false
        }
        apiRequest.passwordLogin({
          phone:this.phoneNumber,
          password:this.loginPassword
        })
          .then(
          data=>{
            if(data.code===0){
              alert("登录成功")
              this.$router.push('/');
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
        height:387px;
        background:rgba(250,250,250,1);
        opacity:0.85;
        border-radius: 10px;
        box-shadow:0px 1px 9px rgba(0,0,0,0.25);
        margin-top: 150px;
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
          margin: 50px auto 0 auto;
        }
        .login_methods{
          display: flex;
          justify-content: space-between;
          width: 331px;
          margin: 40px  auto 0 auto;
          font-size:14px;
          font-family:HiraginoSansGB-W3;
          color:rgba(102,102,102,1);
          cursor: pointer;
          a{
            color:rgba(102,102,102,1);
            text-decoration: none;
          }
        }
      }
      .login_right{
        margin-top: 214px;
        margin-left: 200px;
        a{
          text-decoration: none;
        }
        .login_logo{
          width: 379px;
          height: 160px;
          background-image: url("../../assets/lianrenlogo.png");
          background-size: cover;
        }
        .login_tips{
          display: flex;
          justify-content: center;
          flex-direction: row;
          margin: 30px auto 0 auto;
          .login_tip{
            font-size:18px;
            font-family:HiraginoSansGB-W3;
            color:rgba(255,255,255,1);
            line-height:42px;
            margin-right: 10px;
          }
          .create_now{
            width:207px;
            height:40px;
            background:rgba(255,255,255,1);
            opacity:0.8;
            border-radius: 20px;
            font-size:16px;
            font-family:HiraginoSansGB-W6;
            color:rgba(102,112,120,1);
            line-height:42px;
            text-align: center;
            cursor: pointer;
            text-decoration: none;
          }
        }
      }
    }
  }
</style>
