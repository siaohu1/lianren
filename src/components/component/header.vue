<template>
  <nav>
    <section class="home_nav">
      <router-link to="/">
        <section class="nav_logo">
        </section>
      </router-link>
      <section class="nav_bar">
      <ul>
        <router-link to="/">
        <li @click="n=1" :class="{active:n==1}">资讯</li>
        </router-link>
        <router-link to="/recruit/personresume">
          <li @click="n=2" :class="{active:n==2}">招聘</li>
        </router-link>
        <li @click="n=3" :class="{active:n==3}">活动</li>
        <li @click="n=4" :class="{active:n==4}">培训</li>
      </ul>
      </section>
      <section class="nav_bar1">
        <p @click="n=0">
          <a href="javascript:;" v-if="token">{{phone}} <span id="jiantou"></span></a>
          <router-link to="/login" v-else>
            <a href="javascript:;">登录/注册</a>
          </router-link>
          <a href="javascript:;">帮助</a>
        </p>
      </section>
    </section>
  </nav>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    name: "header",
    data(){
      return{
        n:1,
      }
    },
    computed: {
      ...mapState(['token', 'userId', 'phone'])
    }
  }
</script>

<style scoped lang="less">
nav{
  width: 100%;
  height: 80px;
  background:rgba(250,250,250,1);
  .home_nav{
    width: 1200px;
    height: 80px;
    display: flex;
    align-items: center;
    margin: 0 auto;
    .nav_logo{
      width: 84px;
      height: 32px;
      background-image: url("../../assets/logo.png");
      background-size: cover;
      cursor: pointer;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .nav_bar{
      ul{
        display: flex;
        font-size: 16px;
        font-family:HiraginoSansGB-W3;
        color:rgba(102,102,102,1);
        margin-left: 109px;
        a{
          color:rgba(102,102,102,1);
          text-decoration: none;
        }
        li{
          height: 80px;
          width: 42px;
          line-height: 80px;
          margin-right: 99px;
          text-align: center;
          cursor: pointer;
        }
        /*li:hover{*/
          /*border-bottom: 2px solid rgba(73,120,241,1);*/
          /*color:rgba(51,51,51,1);*/
        /*}*/
      }
    }
    .nav_bar1{
      margin-left: 300px;
      p{
        height: 80px;
        line-height: 80px;
        a{
          font-size:16px;
          font-family:HiraginoSansGB-W3;
          color:rgba(51,51,51,1);
          text-decoration: none;
          margin-left: 10px;
        }

      }
    }
  }
}
  .active{
    border-bottom: 2px solid rgba(73,120,241,1);
    color:rgba(73,120,241,1);

  }

</style>
