
<template>
  <section>
    <!--<Header/>-->
    <section class="outline"></section>
    <section class="recruit_container">
      <section class="container_top">
        <section class="container_top_left">
          <section class="personImg">
            <section class="imgBorder">
              <img src="../../assets/line.jpg" alt="">
            </section>
          </section>
          <section class="personInfo">
            <h1>Zaprey <span>(ID: 123456)</span></h1>
            <h2>UI设计师</h2>
            <p>链人国际资讯(北京)有限责任公司</p>
            <span>北京 | 互联网 | 5年</span>
          </section>
          <router-link to="/certification">
            <section class="personState">
              <p>未实名认证</p>
            </section>
          </router-link>
        </section>
        <section class="container_top_right">
          <section class="findJob">
            找工作
          </section>
        </section>
      </section>
      <section class="container_bottom">
        <section class="choose_card">
          <ul>
            <li @click="n=1" :class="{active:n==1}">我的简历</li>
            <li @click="n=2" :class="{active:n==2}">已投简历</li>
            <li @click="n=3" :class="{active:n==3}">已投简历</li>
          </ul>
        </section>
        <section class="choose_card_content" v-show="n===1">
          <section class="create_recruit">
            创建简历1
          </section>
        </section>
        <section class="choose_card_content" v-show="n===2">
          <section class="create_recruit">
            创建简历2
          </section>
        </section>
        <section class="choose_card_content" v-show="n===3">
          <section class="create_recruit">
            创建简历3
          </section>
        </section>
      </section>
    </section>
    <Footer/>
  </section>
</template>

<script>
  import Header from '../component/header'
  import Footer from '../component/footer'
  export default {
    name: "recruit",
    data(){
      return{
        n:1,
      }
    },
    components:{
      Header,
      Footer,
    }
  }
</script>

<style scoped lang="less">
  .outline{
    width: 100%;
    height: 6px;
    background-image: url("../../assets/line.png");
    margin-bottom: 14px;
  }
  .recruit_container{
    margin: 0 auto 67px auto;
    width:1200px;
    height:714px;
    background:rgba(250,250,250,1);
    border-radius: 10px;
    .container_top{
      height: 240px;
      width: 100%;
      display: flex;
      flex-direction: row;
      .container_top_left{
        width: 472px;
        height: 100%;
        display: flex;
        flex-direction: row;
        .personImg{
          margin: 52px 0 0 39px;
          .imgBorder{
            width: 100px;
            height: 100px;
            img{
              width: 100%;
              height: 100%;
              border-radius: 50%;
            }
          }
        }
        .personInfo{
          margin: 59px 0 0 31px;
          h1{
            font-size:18px;
            font-family:HiraginoSansGB-W6;
            color:rgba(51,51,51,1);
            margin-bottom: 3px;
            span{
              font-size:14px;
              font-family:HiraginoSansGB-W3;
              color:rgba(51,51,51,1);
            }
          }
          h2{
            font-size:14px;
            font-family:HiraginoSansGB-W3;
            color:rgba(51,51,51,1);
          }
          p{
            font-size:12px;
            font-family:HiraginoSansGB-W3;
            color:rgba(102,102,102,1);
            margin-top: 5px;
          }
          span{
            font-size:12px;
            font-family:HiraginoSansGB-W3;
            color:rgba(153,153,153,1);
          }

        }
        .personState{
          margin: 61px 0 0 51px;
          p{
            font-size:14px;
            font-family:HiraginoSansGB-W3;
            color:rgba(255,150,0,1);
            cursor: pointer;
          }

        }
      }
      .container_top_right{
        margin: 85px 0 0 372px;
        .findJob{
          width:189px;
          height:40px;
          background:rgba(73,120,241,1);
          border-radius: 20px;
          font-size:14px;
          font-family:HiraginoSansGB-W3;
          color:rgba(255,255,255,1);
          line-height: 40px;
          text-align: center;
          cursor: pointer;
        }
      }
    }
    .container_bottom{
      height: 474px;
      .choose_card{
        width: 100%;
        height: 32px;
        border-bottom:1px solid rgba(229,229,229,1);
        line-height: 27px;
        ul{
          display: flex;
          flex-direction: row;
          li{
            font-size:16px;
            font-family:HiraginoSansGB-W3;
            color:rgba(102,102,102,1);
            margin-left: 150px;
            cursor: pointer;
          }
        }
      }
      .choose_card_content{
        display: flex;
        justify-content: center;
        /*align-items:center;*/
        margin-top: 185px;
        height: 100%;
        .create_recruit{
          width:189px;
          height:40px;
          background:rgba(73,120,241,1);
          border-radius: 20px;
          font-size:14px;
          font-family:HiraginoSansGB-W3;
          color:rgba(255,255,255,1);
          line-height: 40px;
          text-align: center;
          cursor: pointer;
        }
      }
    }
  }
  .active{
    border-bottom: 4px solid rgba(73,120,241,1);
  ;
    box-sizing: border-box;
  }
</style>

