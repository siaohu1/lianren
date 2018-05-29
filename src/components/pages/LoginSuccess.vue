<template>
  <section>
    <!--<Header/>-->
    <section class="login_content">
      <section class="container">
        <section class="container_box">
          <h1>欢迎您加入链人!</h1>
          <p>温馨提示：去
            <router-link to="/certification">
              <span>实名认证</span>
            </router-link>
            ，才可以投简历</p>
        </section>
      </section>
    </section>
  </section>
</template>

<script>
  import Header from '../component/header'
  export default {
    name: "login",
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
    .container{
      width:1200px;
      height:531px;
      background:rgba(250,250,250,1);
      opacity:0.85;
      border-radius: 10px;
      box-shadow:0px 1px 9px rgba(0,0,0,0.25);
      margin-top: 140px;
      .container_box{
        display: flex;
        flex-direction: column;
        h1{
          font-size:26px;
          font-family:HiraginoSansGB-W3;
          color:rgba(102,102,102,1);
          line-height:79px;
          justify-content: center;
          margin: 186px auto 0 auto;
        }
        p{
          font-size:24px;
          font-family:HiraginoSansGB-W3;
          color:rgba(102,102,102,1);
          line-height:79px;
          margin: 0 auto;
          span{
            font-size:24px;
            font-family:HiraginoSansGB-W3;
            color:#3977F9;
            line-height:79px;
            cursor: pointer;
          }
        }
      }
    }
  }
</style>
