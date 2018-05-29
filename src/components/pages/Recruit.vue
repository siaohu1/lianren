
<template>
  <div>
    <section>
      <!--<Header/>-->
      <section class="outline"></section>
      <section class="recruit_container" ref="els">
        <section class="container_top">
          <section class="container_top_left">
            <section class="personImg">
              <section class="imgBorder">
                <img src="../../assets/line.jpg" alt="">
                <p>修改</p>
              </section>
            </section>
            <section class="personInfo">
              <h1>Zaprey <div style="width: 20px;height: 20px;display: inline-block;position: relative;top: 5px;"><img src="../../assets/nan.png"  style="width: 100%;height: 100%" alt=""></div><span style="font-size:14px;
font-family:HiraginoSansGB-W3;
color:rgba(255,150,0,1);position: relative;left: 37px">
                未实名认证
              </span></h1>
              <h2>UI设计师</h2>
              <h3>北京 | 互联网 | 5年</h3>
              <p>链人国际资讯(北京)有限责任公司</p>

            </section>
            <router-link to="/certification">

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
              <router-link to="/recruit/personresume">
                <li @click="n=1" :class="{active:n==1}">我的简历</li>
              </router-link>
              <router-link to="/recruit/haveresume">
                <li @click="n=2" :class="{active:n==2}">已投职位</li>
              </router-link>
              <router-link to="/recruit/changepassword">
                <li @click="n=3" :class="{active:n==3}">修改密码</li>
              </router-link>
            </ul>
            <router-view></router-view>
          </section>
          <section class="choose_card_content" v-show="n===1">
            <section class="create_recruit" @click="c=1" v-show="c==1">
              创建简历1
            </section>
            <!--<section v-show="c==0">-->
            <!--<section class="no_resume_container" >-->
            <!--<section class="basic_information_left">-->
            <!--<p>基本资料</p>-->
            <!--</section>-->
            <!--<section class="basic_information_right">-->
            <!--<form action="">-->
            <!--<section class="submit">-->
            <!--<button>-->
            <!--保存-->
            <!--</button>-->
            <!--</section>-->
            <!--<section class="information1">-->
            <!--<section class="bron_data">-->
            <!--<p>出生年份</p>-->
            <!--<select name="" id=""></select><span>年</span>-->
            <!--<select name="" id=""></select><span>月</span>-->
            <!--<select name="" id=""></select><span>日</span>-->
            <!--&lt;!&ndash;<el-date-picker&ndash;&gt;-->
            <!--&lt;!&ndash;v-model="time1"&ndash;&gt;-->
            <!--&lt;!&ndash;type="date"&ndash;&gt;-->
            <!--&lt;!&ndash;placeholder="选择日期">&ndash;&gt;-->
            <!--&lt;!&ndash;</el-date-picker>&ndash;&gt;-->
            <!--</section>-->
            <!--<section class="sex">-->
            <!--<p>性别</p>-->
            <!--<select name="" id="">-->
            <!--<option value="nan">男</option>-->
            <!--</select>-->
            <!--</section>-->
            <!--</section>-->
            <!--<section class="information2">-->
            <!--<section>-->
            <!--<p>手机</p>-->
            <!--<input type="phone">-->
            <!--</section>-->
            <!--<section>-->
            <!--<p>邮箱</p>-->
            <!--<input type="email">-->
            <!--</section>-->
            <!--</section>-->
            <!--<section class="information3">-->
            <!--<section>-->
            <!--<p>国籍</p>-->
            <!--<select name="" id=""></select>-->
            <!--</section>-->
            <!--<section>-->
            <!--<p>户口</p>-->
            <!--<input type="text">-->
            <!--</section>-->
            <!--</section>-->
            <!--<section class="information4">-->
            <!--<section>-->
            <!--<p>状态</p>-->
            <!--<select name="" id=""></select>-->
            <!--</section>-->
            <!--</section>-->
            <!--</form>-->
            <!--</section>-->
            <!--</section>-->
            <!--<section class="job_intension_container">-->
            <!--<section class="job_intension_left">-->
            <!--<p>求职意向</p>-->
            <!--</section>-->
            <!--<section class="job_intension_right">-->
            <!--<form action="">-->
            <!--<section class="submit">-->
            <!--<button>-->
            <!--保存-->
            <!--</button>-->
            <!--</section>-->
            <!--<section class="information5">-->
            <!--<section class="distay">-->
            <!--<p>期望行业</p>-->
            <!--<select name="" id=""></select>-->
            <!--</section>-->
            <!--<section class="money">-->
            <!--<p>期望薪资</p>-->
            <!--<select name="" id=""></select>-->
            <!--<select name="" id=""></select>-->
            <!--</section>-->
            <!--</section>-->
            <!--<section class="information6">-->
            <!--<section>-->
            <!--<p>期望职能</p>-->
            <!--<input type="text">-->
            <!--</section>-->
            <!--<section>-->
            <!--<p>目前薪资</p>-->
            <!--<input type="text">-->
            <!--</section>-->
            <!--</section>-->
            <!--<section class="information7">-->
            <!--<section>-->
            <!--<p>期望地点</p>-->
            <!--<input type="text">-->
            <!--</section>-->
            <!--</section>-->
            <!--</form>-->
            <!--</section>-->
            <!--</section>-->
            <!--<section class="work_history_container">-->
            <!--<section class="work_history_container_left">-->
            <!--<p>工作经历</p>-->
            <!--<section class="submit">-->
            <!--<button>-->
            <!--保存-->
            <!--</button>-->
            <!--</section>-->
            <!--</section>-->
            <!--<section class="work_history_container_right">-->
            <!--<form action="">-->
            <!--<section class="list1">-->
            <!--<section>-->
            <!--<span>公司名称</span>-->
            <!--<input type="text">-->
            <!--</section>-->
            <!--<section>-->
            <!--<span>公司名称</span>-->
            <!--<input type="text">-->
            <!--</section>-->
            <!--<section></section>-->
            <!--</section>-->
            <!--<section class="list2">-->
            <!--<section>-->
            <!--<span>公司名称</span>-->
            <!--<input type="text">-->
            <!--</section>-->
            <!--<section>-->
            <!--<span>公司名称</span>-->
            <!--<input type="text">-->
            <!--</section>-->
            <!--<section></section>-->
            <!--</section>-->
            <!--<section class="list3">-->
            <!--<section>-->
            <!--<span>公司名称</span>-->
            <!--<input type="text">-->
            <!--</section>-->
            <!--<section>-->
            <!--<span>公司名称</span>-->
            <!--<input type="text">-->
            <!--</section>-->
            <!--<section></section>-->
            <!--</section>-->
            <!--<section class="list4">-->
            <!--<section>-->
            <!--<span>公司名称</span>-->
            <!--<input type="text">-->
            <!--</section>-->
            <!--<section>-->
            <!--<span>查看公司情况</span>-->
            <!--</section>-->
            <!--</section>-->
            <!--</form>-->
            <!--</section>-->
            <!--</section>-->
            <!--<section class="container_bottom1">-->
            <!--<section class="query">+</section>-->
            <!--</section>-->
            <!--</section>-->

          </section>
          <section class="choose_card_content" v-show="n===2">
            <section class="create_recruit">
              创建简历2
            </section>
          </section>
          <!--<section class="choose_card_content" v-show="n===3">-->
          <!--<section class="create_recruit">-->
          <!--创建简历3-->
          <!--</section>-->
          <!--</section>-->
        </section>
      </section>
      <Footer/>
    </section>
  </div>

</template>

<script>
  import Header from '../component/header'
  import Footer from '../component/footer'
  export default {
    name: "recruit",
    data(){
      return{
        n:1,
        c:0,
        // value1,
        time1:'',
      }
    },
    methods:{

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
    height: 12px;
    background-image: url("../../assets/line.png");
    margin-bottom: 14px;
  }
  .recruit_container{
    margin: 0 auto 67px auto;
    width:1200px;
    min-height:714px;
    background:rgba(250,250,250,1);
    border-radius: 10px;
    .container_top{
      height: 230px;
      width: 100%;
      display: flex;
      flex-direction: row;
      .container_top_left{
        width: 574px;
        height: 100%;
        display: flex;
        flex-direction: row;
        .personImg{
          margin: 52px 0 0 133px;
          .imgBorder{
            width: 100px;
            height: 100px;
            img{
              width: 100%;
              height: 100%;
              border-radius: 50%;
            }
            p{
              font-size:12px;
              font-family:HiraginoSansGB-W3;
              color:rgba(153,153,153,1);
              text-align: center;
              margin-top: 5px;
            }
          }
        }
        .personInfo{
          margin: 49px 0 0 32px;
          h1{
            font-size:18px;
            font-family:HiraginoSansGB-W6;
            color:rgba(51,51,51,1);
            margin-bottom: 6px;
            span{
              font-size:14px;
              font-family:HiraginoSansGB-W3;
              color:rgba(51,51,51,1);
              margin-top: 10px;
            }
          }
          h2{
            font-size:14px;
            font-family:HiraginoSansGB-W3;
            color:rgba(51,51,51,1);
          }
          p{
            font-size:14px;
            font-family:HiraginoSansGB-W3;
            color:rgba(102,102,102,1);
            margin-top: 7px;
          }
          h3{
            font-size:12px;
            font-family:HiraginoSansGB-W3;
            color:rgba(153,153,153,1);
            margin-top: 8px;
          }

        }
        .personState{
          margin: 10px 0 0 56px;
          p{
            font-size:14px;
            font-family:HiraginoSansGB-W3;
            color:rgba(255,150,0,1);
            cursor: pointer;
          }

        }
      }
      .container_top_right{
        margin: 85px 0 0 275px;
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
      .choose_card{
        width: 100%;
        height: 100%;
        line-height: 27px;
        ul{
          display: flex;
          flex-direction: row;
          justify-content: center;
          border-bottom:1px solid rgba(229,229,229,1);

          li{
            font-size:16px;
            font-family:HiraginoSansGB-W3;
            color:rgba(102,102,102,1);
            /*margin-left: 150px;*/
            cursor: pointer;
          }
          a:nth-of-type(2){
            margin: 0 162px;
          }
        }
      }
      .choose_card_content{
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
          margin: 189px auto 0 auto;
        }
        .no_resume_container{
          display: flex;
          flex-direction: row;
          .basic_information_left{
            width: 121px;
            p{
              font-size:16px;
              font-family:HiraginoSansGB-W6;
              color:rgba(51,51,51,1);
              text-align: right;
              margin-top: 30px;

            }
          }
          .basic_information_right{
            form{
              width: 949px;
              height: 491px ;
              border-bottom: 1px solid rgba(229,229,229,1);
              p{
                font-size:16px;
                font-family:HiraginoSansGB-W3;
                color:rgba(51,51,51,1);
                margin: 20px 0 14px 0 ;
              }
              input{
                width:434px;
                height:40px;
                background:rgba(255,255,255,1);
                border-radius: 5px;
                outline: none;
                border: 1px solid #D6D6D6;
              }
              .submit{
                height: 90px;
                display: flex;
                justify-content: flex-end;
                align-items: center;
                button{
                  width:70px;
                  height:24px;
                  background:rgba(73,120,241,1);
                  border-radius: 20px;
                  outline: none;
                  font-size:14px;
                  font-family:HiraginoSansGB-W3;
                  color:rgba(255,255,255,1);
                  border: 1px solid rgba(255,255,255,1);
                }
              }
              .information1{
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                p{
                  margin-top: 0;
                }
                .bron_data select{
                  width:86px;
                  height:40px;
                  background:rgba(255,255,255,1);
                  border-radius: 10px;
                  border: 1px solid #D6D6D6;
                  outline: none;
                }
              }
              .information2{
                display: flex;
                flex-direction: row;
                justify-content: space-between;
              }
              .information3{
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                select{
                  width:434px;
                  height:40px;
                  background:rgba(255,255,255,1);
                  border-radius: 10px;
                  outline: none;
                  border: 1px solid #D6D6D6;
                }
              }
              .information4{
                display: flex;
                flex-direction: row;
                select{
                  width:434px;
                  height:40px;
                  background:rgba(255,255,255,1);
                  border-radius: 10px;
                  outline: none;
                  border: 1px solid #D6D6D6;
                }
              }
              .sex{
                select{
                  width:434px;
                  height:40px;
                  background:rgba(255,255,255,1);
                  border-radius: 10px;
                  outline: none;
                  border: 1px solid #D6D6D6;
                }

              }
            }
          }
        }
        .job_intension_container{
          display: flex;
          flex-direction: row;
          .job_intension_left{
            width: 121px;
            p{
              font-size:16px;
              font-family:HiraginoSansGB-W6;
              color:rgba(51,51,51,1);
              text-align: right;
              margin-top: 30px;

          }
          }
          .job_intension_right{
            form{
              p{
                font-size:16px;
                font-family:HiraginoSansGB-W3;
                color:rgba(51,51,51,1);
                margin: 20px 0 14px 0 ;
              }
              input{
                width:434px;
                height:40px;
                background:rgba(255,255,255,1);
                border-radius: 5px;
                outline: none;
                border: 1px solid #D6D6D6;
              }
              width: 949px;
              height: 408px ;
              border-bottom: 1px solid rgba(229,229,229,1);
              .submit{
                height: 90px;
                display: flex;
                justify-content: flex-end;
                align-items: center;
                button{
                  width:70px;
                  height:24px;
                  background:rgba(73,120,241,1);
                  border-radius: 20px;
                  outline: none;
                  font-size:14px;
                  font-family:HiraginoSansGB-W3;
                  color:rgba(255,255,255,1);
                }
              }
              .information5{
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                .distay{
                  select{
                    width:434px;
                    height:40px;
                    background:rgba(255,255,255,1);
                    border-radius: 10px;
                    outline: none;
                    border: 1px solid #D6D6D6;
                  }
                }
                .money{
                  select{
                    width:200px;
                    height:40px;
                    background:rgba(255,255,255,1);
                    border-radius: 10px;
                    outline: none;
                    border: 1px solid #D6D6D6;
                  }
                  select:last-of-type{
                    margin-left: 32px;
                  }
                }
              }
              .information6{
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                select{
                  width:434px;
                  height:40px;
                  background:rgba(255,255,255,1);
                  border-radius: 10px;
                  outline: none;
                  border: 1px solid #D6D6D6;
                }
              }
              .information7{
                display: flex;
                flex-direction: row;
                select{
                  width:434px;
                  height:40px;
                  background:rgba(255,255,255,1);
                  border-radius: 10px;
                  outline: none;
                  border: 1px solid #D6D6D6;
                }
              }
            }
          }
        }
        .work_history_container{
          display: flex;
          flex-direction: column;
          .work_history_container_left{
            display: flex;
            flex-direction: row;
            p{
              font-size:16px;
              font-family:HiraginoSansGB-W6;
              color:rgba(51,51,51,1);
              /*text-align: right;*/
              margin-top: 30px;
              margin-left: 57px;
            }
            .submit{
              height: 90px;
              display: flex;
              justify-content: flex-end;
              align-items: center;
              margin-left: 879px;
              button{
                width:70px;
                height:24px;
                background:rgba(73,120,241,1);
                border-radius: 20px;
                outline: none;
                font-size:14px;
                font-family:HiraginoSansGB-W3;
                color:rgba(255,255,255,1);
                outline: none;
              }
            }
          }
          .work_history_container_right{
            margin: 0 auto;
            form{
              width:1072px;
              height:342px;
              background:rgba(255,255,255,1);
              box-shadow:4px 0px 5px rgba(0,0,0,0.1);
              padding-top: 50px;
              p{
                font-size:16px;
                font-family:HiraginoSansGB-W3;
                color:rgba(51,51,51,1);
                margin: 20px 0 14px 0 ;
              }

              border-bottom: 1px solid rgba(229,229,229,1);
              .list1,.list2,.list3,.list4{
                display: flex;
                flex-direction: row;
                margin-bottom: 25px;
                span{
                  font-size:16px;
                  font-family:HiraginoSansGB-W3;
                  color:rgba(51,51,51,1);
                  margin-left: 60px;
                  margin-right: 41px;
                }
                input{
                  width:329px;
                  height:40px;
                  background:rgba(255,255,255,1);
                  border-radius: 10px;
                  outline: none;
                  border: 1px solid #AFAFAF;
                }

              }
            }
          }
        }
        .container_bottom1{
          height: 248px;
          display: flex;
          justify-content: center;
          align-items: center;
          .query{
            width:101px;
            height:101px;
            background:rgba(255,255,255,1);
            border-radius: 51px;
            box-shadow:4px 0px 5px rgba(0,0,0,0.1);
            font-size: 100px;
            text-align: center;
            color:rgba(214,214,214,1);
            line-height: 80px;
          }
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

