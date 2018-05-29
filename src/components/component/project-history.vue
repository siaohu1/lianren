<template>
    <section>
      <section class="container_title" style="border-top: 1px solid #e5e5e5">
        <section class="resume_base">
          <p>项目经验</p>
        </section>
        <section class="resume_button">
          <button>取消</button>
          <button>保存</button>
        </section>
      </section>
      <section class="section0">
        <el-form ref="form5" :model="form5" label-width="80px" label-position="left" class="form_container2">
          <section class="count1">
            <section class="form2_left">
              <el-form-item label="项目名称">
                <el-input v-model="form5.projectName" style="width:320px;margin-bottom: 15px" placeholder="例如：百度钱包" ></el-input>
              </el-form-item>
              <el-form-item label="项目URL">
                <el-input v-model="form5.projectURL" style="width:320px;margin-bottom: 15px" placeholder="例如：http://www.baidu.com"></el-input>
              </el-form-item>
            </section>
            <section class="form2_right">
              <el-form-item label="项目角色">
                <el-input v-model="form5.projectNoun" placeholder="例如：UI设计师" style="width: 320px;margin-bottom: 15px"></el-input>
              </el-form-item>
              <section class="form_time">
                <el-form-item label="项目时间">
                  <el-date-picker
                    v-model="form5.projectTime1"
                    type="date"
                    placeholder="选择日期"
                    style="width: 150px"
                  >
                  </el-date-picker>
                </el-form-item>
                <section style="margin: 3px 5px 0 5px"> - </section>
                <el-form-item label="" label-width="0">
                  <el-date-picker
                    v-model="form5.projectTime2"
                    type="date"
                    placeholder="选择日期"
                    style="width: 150px"
                  >
                  </el-date-picker>
                </el-form-item>
              </section>
            </section>
          </section>
          <section>
            <el-form-item label="项目描述">
              <el-input
                type="textarea"
                :rows="10"
                placeholder="描述该项目，向Boss展示您的项目经验例如：1.项目概况…2.人员分工…3.我的责任…"
                v-model="form5.projectDes"
                style="width: 834px;"
                @input="descInput()"
                maxlength="1600"
              >
              </el-input>
            </el-form-item>
            <p style="font-size:16px;
font-family:HiraginoSansGB-W3;
color:rgba(153,153,153,1);text-align: right;padding-right: 13px">
              {{bring1}}/1600
            </p>
          </section>
          <section style="margin: 10px 0">
            <el-form-item label="项目业绩">
              <el-input
                type="textarea"
                :rows="10"
                placeholder="(选填)描述您的项目业绩，向Boss展示您的工作能力例如：1.项目收益…2.我的贡献…3.我的收获…"
                v-model="form5.projectAchievement"
                style="width: 834px;"
                maxlength="1600"
                @input="descInput1()"

              >
              </el-input>
            </el-form-item>
            <p style="font-size:16px;
font-family:HiraginoSansGB-W3;
color:rgba(153,153,153,1);text-align: right;padding-right: 13px;padding-bottom: 10px">
              {{bring2}}/1600
            </p>
          </section>
        </el-form>
      </section>
    </section>
</template>

<script>
  export default {
    name: "work-history",
    data(){
      return{
        bring1:0,
        bring2:0,
        form5:{
          projectName:'',
          projectNoun:'',
          projectURL:'',
          projectTime1:'',
          projectTime2:'',
          projectDes:'',
          projectAchievement:'',
        }
      }
    },
    computed:{
      descInput(){
        let txtVal = this.form5.projectDes.length;
        this.bring1 = 1600 - txtVal;
      },
      descInput1(){
        let txtVal = this.form5.projectAchievement.length;
        this.bring2 = 1600 - txtVal;
      }
    },
  }
</script>

<style scoped lang="less">
  section{
    .container_title{
      display: flex;
      justify-content: space-between;
      height: 89px;
      line-height: 89px;
      width: 997px;
      margin: 0 auto;
      .resume_base{
        width:64px;
        height:89px;
        line-height: 89px;
        font-size:16px;
        font-family:HiraginoSansGB-W6;
        color:rgba(51,51,51,1);
        line-height:42px;
        p{
          height: 89px;
          line-height: 89px;
        }
      }
      .resume_button{
        button{
          width:70px;
          height:24px;
          background:rgba(73,120,241,1);
          border-radius:12px;
          font-size:14px;
          font-family:HiraginoSansGB-W3;
          outline: none;
          cursor: pointer;
        }
        button:first-of-type{
          background: white;
          border: 1px solid #4978F1;
          color: #4978F1;
          font-size:14px;
          font-family:HiraginoSansGB-W3;
          margin-right: 10px;
          outline: none;
        }
        button:last-of-type{
          font-size:14px;
          font-family:HiraginoSansGB-W3;
          color: white;
          border: 1px solid #4978F1;
          outline: none;
        }
      }
    }
    .section0{
      width:997px;
      min-height:700px;
      background:rgba(255,255,255,1);
      border-radius:8px;
      box-shadow: 0px 4px 5px rgba(0,0,0,0.1);
      margin: 0 auto;
      padding: 50px 34px 0 34px;
      .form_container2{
        .count1{
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          .form2_left{
            width: 453.5px;
          }
          .form2_right{
            width: 453.5px;
            padding-left: 40px;
            .form_time{
              display: flex;
              flex-direction: row;
            }
          }
        }

      }
    }
  }

</style>
