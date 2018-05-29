
<template>
  <section>
    <!--<Header/>-->
    <section class="outline"></section>
    <section class="recruit_container">
    <section class="message">
      <p>信息提交成功!</p>
      <p>请耐心等待审核通过！</p>
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
    display: flex;
    align-items: center;
    justify-content: center;
    .message{
      width: 300px;
      height: 60px;
      p{
        font-size:18px;
        font-family:HiraginoSansGB-W3;
        color:rgba(51,51,51,1);
        text-align: center;
        line-height: 42px;
      }
    }
  }
  .active{
    border-bottom: 4px solid rgba(73,120,241,1);
  ;
    box-sizing: border-box;
  }
</style>

