<template>
  <section>
    <!--<Header/>-->
    <section class="login_content">
      <section class="login_container">
        <section class="login_left">
          <section class="personal_login">
            设置新密码
          </section>
          <section class="login_form">
            <section class="login_password">
              <input type="text" placeholder="请输入新密码" v-model="password1">
            </section>
            <section class="login_password">
              <input type="text" placeholder="请再次输入新密码" v-model="password2">
            </section>
          </section>
          <router-link to="/login_success">
            <router-link to="/amend_success">
              <section class="login" @click="submit()">
                确认
              </section>
            </router-link>
          </router-link>
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
        password1:'',
        password2:'',
      }
    },
    methods:{
      submit(){
        if(this.password1===this.password2){
          alert('修改成功')
          apiRequest.changeLoginPassword({
            oldPwd:this.password1,
            newPwd:this.password2,
          }).then(
            this.$router.push('/amendSuccess')
          )
        }
        else{
          alert('请输入相同的密码')
        }
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
        height:331px;
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
          .login_password{
            height: 58px;
            border-bottom: 1px solid rgba(181,181,181,1);
            padding: 10px 0 0 0px;
            input{
              font-size:16px;
              font-family:HiraginoSansGB-W3;
              color:rgba(102,102,102,1);
              line-height:42px;
              border: none;
              outline: none;
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
</style>
