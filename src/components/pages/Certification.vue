<template>
  <section>
    <!--<Header/>-->
    <section class="outline"></section>
    <section class="recruit_container">
      <h1>个人认证</h1>
      <form action="">
        <section class="form_top">
          <section class="username">
            <p>姓名</p>
            <input type="text" placeholder="请输入姓名">
          </section>
          <section class="usersex">
            <p>性别</p>
            <select name="" id="">
              <option selected="selected" value="0">请选择</option>
              <option value="boy">男</option>
              <option value="girl">女</option>
            </select>
          </section>
        </section>
        <section class="form_bottom">
          <section class="indust">
            <p>所属行业</p>
            <select name="" id="">
              <option selected="selected" value="0">请选择</option>
              <option value="money">金融</option>
              <option value="pe">体育</option>
            </select>
          </section>
          <section class="pernumber">
            <p>身份证号</p>
            <input type="text" placeholder="请输入身份证号">
          </section>
        </section>
        <ul>
          <li>
            <p>身份证人像面</p>
            <section>
              <img src="../../assets/zhengmian.png" alt="">
            </section>
          </li>
          <li>
            <p>身份证国徽面</p>
            <section>
              <img src="../../assets/beimian.png" alt="">
            </section>
          </li>
          <li>
            <p>手持身份证人像面</p>
            <section>
              <img src="../../assets/shouchi.png" alt="">
            </section>
          </li>
        </ul>
        <p class="tips">注意：请按要求上传身份证照片，格式：jpg、png，照片大小应小于5m。</p>
        <router-link to="/subsuccess">
          <section class="submit_button">
            <input type="submit" value="提交信息" class="submit">
          </section>
        </router-link>
      </form>
    </section>
    <Footer/>
  </section>
</template>

<script>
  import Header from '../component/header'
  import Footer from '../component/footer'

  export default {
    name: "recruit",
    data() {
      return {
        n: 1,
      }
    },
    components: {
      Footer,
    }
  }
</script>

<style scoped lang="less">
  .outline {
    width: 100%;
    height: 6px;
    background-image: url("../../assets/line.png");
    margin-bottom: 14px;
  }

  .recruit_container {
    margin: 0 auto 67px auto;
    width: 1200px;
    height: 714px;
    background: rgba(250, 250, 250, 1);
    border-radius: 10px;
    h1 {
      font-size: 16px;
      font-family: HiraginoSansGB-W6;
      color: rgba(51, 51, 51, 1);
      line-height: 42px;
      margin: 30px 0 0 119px;
    }
    form {
      margin-top: 42px;
      margin-left: 127px;
      img{
        width: 250px;
        height: 170px;
      }
      .form_top {
        display: flex;
        flex-direction: row;
        p {
          font-size: 16px;
          font-family: HiraginoSansGB-W3;
          color: rgba(51, 51, 51, 1);
          margin-bottom: 13px;
        }
        .username {
          margin-right: 78px;
          input {
            width: 434px;
            height: 40px;
            background: rgba(255, 255, 255, 1);
            border-radius: 10px;
            outline: none;
            font-size: 14px;
            font-family: HiraginoSansGB-W3;
            color: rgba(51, 51, 51, 1);
            border: 1px solid #D6D6D6;
            text-indent: 16px;

          }
        }
        .usersex {
          select {
            width: 434px;
            height: 40px;
            background: rgba(255, 255, 255, 1);
            border-radius: 10px;
            outline: none;
            font-size:14px;
            font-family:HiraginoSansGB-W3;
            color:rgba(153,153,153,1);
            border: 1px solid #D6D6D6;
            text-indent: 16px;

          }
        }
      }
      .form_bottom {
        display: flex;
        flex-direction: row;
        .pernumber {
          input {
            width: 434px;
            height: 40px;
            background: rgba(255, 255, 255, 1);
            border-radius: 10px;
            outline: none;
            font-size: 14px;
            font-family: HiraginoSansGB-W3;
            color: rgba(51, 51, 51, 1);
            border: 1px solid #D6D6D6;
            text-indent: 16px;

          }
          p {
            font-size: 16px;
            font-family: HiraginoSansGB-W3;
            color: rgba(51, 51, 51, 1);
            margin-bottom: 13px;
            margin-top: 20px;
          }
        }
        .indust {
          margin-right: 78px;
          select {
            width: 434px;
            height: 40px;
            background: rgba(255, 255, 255, 1);
            border-radius: 10px;
            outline: none;
            font-size:14px;
            font-family:HiraginoSansGB-W3;
            color:rgba(153,153,153,1);
            border: 1px solid #D6D6D6;
            text-indent: 16px;
          }
          p {
            font-size: 16px;
            font-family: HiraginoSansGB-W3;
            color: rgba(51, 51, 51, 1);
            margin-bottom: 13px;
            margin-top: 20px;
          }
        }
      }
      ul{
        margin-top: 63px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 946px;
        p{
          font-size:16px;
          font-family:HiraginoSansGB-W3;
          color:rgba(51,51,51,1);
          margin-bottom: 20px;
          text-align: center;
        }
      }
      .tips{
        font-size:14px;
        font-family:HiraginoSansGB-W3;
        color:rgba(240,88,88,1);
        margin-top: 24px;
      }
      .submit_button{
        display: flex;
        justify-content: center;
        margin-top: 38px;
        width: 946px;
        outline: none;
        .submit{
          width:400px;
          height:40px;
          background:rgba(73,120,241,1);
          border-radius: 10px;
          font-size:16px;
          font-family:HiraginoSansGB-W3;
          color:rgba(255,255,255,1);
          text-align: center;
          line-height: 40px;
          outline: none;
          input{
            outline: none;
          }
        }
      }
    }
  }
</style>
