<template>
  <footer>
    <section class="footer_top">
      <section class="footer_top_link">
        <h1>友情链接</h1>
      </section>
    </section>
    <section class="footer_center">
      <ul>
        <li>拉勾网</li>
        <li>大鲲</li>
        <li>招聘</li>
        <li>app下载</li>
        <li>拉钩云</li>
        <li>中大网校</li>
        <li>人人都是产品经理</li>
        <li>教师招聘</li>
        <li>新疆人才网</li>
        <li>研究报告</li>
        <li>互联网的一些事</li>
        <li>人才招聘网</li>
        <li>找工作</li>
        <li>字典1</li>
      </ul>
      <ul v-show="n===1">
        <li>拉勾网</li>
        <li>大鲲</li>
        <li>招聘</li>
        <li>app下载</li>
        <li>拉钩云</li>
        <li>中大网校</li>
        <li>人人都是产品经理</li>
        <li>教师招聘</li>
        <li>新疆人才网</li>
        <li>研究报告</li>
        <li>互联网的一些事</li>
        <li>人才招聘网</li>
        <li>找工作</li>
        <li>字典2</li>
      </ul>
      <section class="footer_center_more" @click="n=n*-1">
        <p v-show="n===-1">展开 <span id="jiantou"></span></p>
        <p v-show="n===1">收起</p>
      </section>
    </section>
    <section class="footer_bottom">
      <section class="footer_bottom_container">
        <ul>
          <li>人人都是产品经理</li>
          <li>拉勾网</li>
          <li>大鲲</li>
          <li>招聘</li>
          <li>app下载</li>
          <li>拉钩云</li>
          <li>中大网校</li>
          <li>人人都是产品经理</li>
          <li>服务热线： 4006-2828-35 (9:00 - 18:00)</li>
        </ul>
        <p>©2017 Lagou 京ICP备14023790号-2京公网安备11010802024043号</p>
      </section>
    </section>
  </footer>
</template>

<script>
  export default {
    name: "footer",
    data(){
      return{
        n:-1,
      }
    },

  }
</script>

<style scoped lang="less">
  footer{
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    .footer_top{
      width: 1200px;
      height: auto;
      margin: 0 auto;
      .footer_top_link{
        height: 40px;
        line-height: 40px;
        border-bottom: 2px solid #d8d8d8;
        h1{
          height: 38px;
          width: 70px;
          border-bottom: 2px solid rgba(51,51,51,1);
          text-align: center;
          color: rgba(51,51,51,.8);
        }
      }
    }
    .footer_center{
      width: 1200px;
      height: auto;
      margin: 0 auto;
      line-height: 80px;
      cursor: pointer;
      /*display: flex;*/
      /*flex-direction: row;*/
      ul{
        width: 1100px;
        height: 60px;
        float: left;
        li{
          float: left;
          font-size: 14px;
          font-family:HiraginoSansGB-W3;
          color:rgba(102,102,102,1);
          margin-right: 15px;
        }
      }
      .footer_center_more{
        width: 100px;
        font-size: 14px;
        font-family:HiraginoSansGB-W3;
        color:rgba(102,102,102,1);
        float: right;
        text-align: center;
        position: relative;
      }
    }
    .footer_bottom{
      width: 100%;
      height: 100px;
      border-top: 2px solid #d8d8d8;
      .footer_bottom_container{
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        cursor: pointer;
        ul{
          display: flex;
          flex-direction: row;
          justify-content: center;
          margin: 10px 0 ;
          li{
            font-size: 14px;
            font-family:HiraginoSansGB-W3;
            color:rgba(102,102,102,1);
            margin: 0 10px;
          }
        }
        p{
          display: flex;
          justify-content: center;
          font-size: 14px;
          font-family:HiraginoSansGB-W3;
          color:rgba(102,102,102,.5);
        }
      }
    }
  }
</style>


