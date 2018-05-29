<template>
  <section>
    <section class="container_title" style="border-top: 1px solid #e5e5e5">
      <section class="resume_base">
        <p>工作经历</p>
      </section>
      <section class="resume_button">
        <button>取消</button>
        <button>保存</button>
      </section>
    </section>
    <section class="work_history">
      <el-form ref="form" :model="form" label-width="80px" label-position="left" class="form_container2">
        <section class="count1">
          <section class="form2_left">
            <el-form-item label="公司名称">
              <el-input v-model="form.companyName" style="width:320px;margin-bottom: 15px"
                        placeholder="例如：北京百度科技有限公司"></el-input>
            </el-form-item>
            <el-form-item label="公司行业">
              <el-select v-model="form.companyIndustry" placeholder="选择行业" style="width:320px;margin-bottom: 15px">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="职位名称">
              <el-input v-model="form.workPosition" style="width:320px;margin-bottom: 15px"
                        placeholder="例如：UI设计师"></el-input>
            </el-form-item>
          </section>
          <section class="form2_right">
            <el-form-item label="工作地点">
              <el-select v-model="form.companyPosition" placeholder="选择地点" style="width:320px;margin-bottom: 15px">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <section class="form_time">
              <el-form-item label="任职时间">
                <el-date-picker
                  v-model="form.workTime1"
                  type="date"
                  placeholder="选择日期"
                  style="width: 150px"
                >
                </el-date-picker>
              </el-form-item>

              <section style="margin: 3px 5px 0 5px"> -</section>
              <el-form-item label="" label-width="0">
                <el-date-picker
                  v-model="form.workTime2"
                  type="date"
                  placeholder="选择日期"
                  style="width: 150px"
                >
                </el-date-picker>
              </el-form-item>
            </section>
            <el-form-item label="公司规模">
              <el-select v-model="form.companyPeople" placeholder="选择人数" style="width:320px;margin-bottom: 15px">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
          </section>
        </section>
        <section>
          <el-form-item label="工作内容">
            <el-input
              type="textarea"
              :rows="10"
              placeholder="例如： 1、主要负责新员工入职培训； 2、分析制定员工每个月个人销售业绩； 3、帮助员工提高每日客单价，
        整体店面管理等工作； "
              v-model="form.workContent"
              style="width: 834px;"
            >
            </el-input>
          </el-form-item>
          <p style="font-size:16px;
        font-family:HiraginoSansGB-W3;
        color:rgba(153,153,153,1);text-align: right;padding-right: 13px">
            {{des1}}/1600
          </p>
        </section>
        <section>
          <section>
            <el-collapse accordion>
              <el-collapse-item>
                <template slot="title">
                  公司概况(选填)
                </template>
                <section style="display: flex;flex-direction: row;padding-top: 20px;border-top: 1px solid #e5e5e5;">
                  <section>
                    <el-form-item label="公司性质">
                      <el-select v-model="form.companyNature" placeholder="选择公司性质"
                                 style="width:329px;margin-bottom: 15px">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                      </el-select>
                    </el-form-item>
                    <el-form-item label="所在部门">
                      <el-input v-model="form.workDepartment" placeholder="例如：UED部"
                                style="width: 329px;margin-bottom: 15px"></el-input>
                    </el-form-item>
                  </section>
                  <section style="margin-left:95px ">
                    <el-form-item label="下属人数">
                      <el-input v-model="form.subProple" placeholder="填写人数"
                                style="width: 329px;margin-bottom: 15px"></el-input>
                    </el-form-item>
                    <el-form-item label="月薪">
                      <el-select v-model="form.money" placeholder="选择月薪" style="width:329px;margin-bottom: 15px">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                      </el-select>
                    </el-form-item>
                  </section>
                </section>
                <section>
                  <el-form-item label="公司简介">
                    <el-input
                      type="textarea"
                      :rows="10"
                      placeholder="请输入该公司简介"
                      v-model="form.companyDes"
                      style="width: 834px;"
                    >
                    </el-input>
                    <section style="margin-top: 10px">
                      <el-checkbox label="保密" name="type" style="font-size:14px;
        font-family:HiraginoSansGB-W3;
        color:rgba(51,51,51,1);margin-right: 606px">对该公司隐藏我的简历
                      </el-checkbox>
                      <span style="font-size:16px;
        font-family:HiraginoSansGB-W3;
        color:rgba(153,153,153,1);">{{des2}}/1600</span>
                    </section>

                  </el-form-item>
                </section>
              </el-collapse-item>
            </el-collapse>
          </section>

        </section>
      </el-form>
    </section>

  </section>
</template>

<script>
  export default {
    name: "work-history",
    data() {
      return {
        des1: 0,
        des2: 0,
        form: {
          workContent: '',
          companyName: '',
          companyPosition: '',
          companyIndustry: '',
          workTime1: '',
          workTime2: '',
          workPosition: '',
          companyPeople: '',
          companyNature: '',
          subProple: '',
          workDepartment: '',
          money: '',
          companyDes: '',
          noSee: '',
        }
      }
    },
  }
</script>

<style scoped lang="less">
  section {
    .container_title {
      display: flex;
      justify-content: space-between;
      height: 89px;
      line-height: 89px;
      width: 997px;
      margin: 0 auto;
      .resume_base {
        width: 64px;
        height: 89px;
        line-height: 89px;
        font-size: 16px;
        font-family: HiraginoSansGB-W6;
        color: rgba(51, 51, 51, 1);
        line-height: 42px;
        p {
          height: 89px;
          line-height: 89px;
        }
      }
      .resume_button {
        button {
          width: 70px;
          height: 24px;
          background: rgba(73, 120, 241, 1);
          border-radius: 12px;
          font-size: 14px;
          font-family: HiraginoSansGB-W3;
          outline: none;
          cursor: pointer;
        }
        button:first-of-type {
          background: white;
          border: 1px solid #4978F1;
          color: #4978F1;
          font-size: 14px;
          font-family: HiraginoSansGB-W3;
          margin-right: 10px;
        }
        button:last-of-type {
          font-size: 14px;
          font-family: HiraginoSansGB-W3;
          color: white;
          border: 1px solid #4978F1;
          outline: none;
        }
      }
    }
    .work_history {
      width: 997px;
      min-height: 600px;
      background: rgba(255, 255, 255, 1);
      border-radius: 8px;
      box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);
      margin: 0 auto;
      padding: 50px 34px 0 34px;
      .form_container2 {
        .count1 {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          .form2_left {
            width: 453.5px;
          }
          .form2_right {
            width: 453.5px;
            padding-left: 40px;
            .form_time {
              display: flex;
              flex-direction: row;
              margin-bottom: 15px;
            }
          }
        }

      }
    }
  }
</style>
