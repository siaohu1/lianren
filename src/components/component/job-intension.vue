<template>
    <div>
      <section class="container_title" style="border-top: 1px solid #e5e5e5">
        <section class="resume_base">
          <p>求职意向</p>
        </section>
        <section class="resume_button">
          <button>取消</button>
          <button>保存</button>
        </section>
      </section>
      <el-form ref="form" :model="form" label-width="80px" label-position="top" class="form_container1">
        <section class="form1_left">
          <el-form-item label="期望职位">
            <el-input v-model="form.name" placeholder="例如：UI设计师"></el-input>
          </el-form-item>
          <el-form-item label="期望行业">
            <el-select v-model="form.region" placeholder="请选择行业" style="width: 100%;">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="期望地点">
            <!--<el-select v-model="form.region" placeholder="请选择求职状态" style="width: 100%;">-->
            <!--<el-option label="区域一" value="shanghai"></el-option>-->
            <!--<el-option label="区域二" value="beijing"></el-option>-->
            <!--</el-select>-->
            <el-input v-model="form.name" placeholder="例如：北京"></el-input>
          </el-form-item>
        </section>
        <section class="form1_right">
          <section class="form1_right_top">
            <el-form-item label="期望薪资">
              <el-select v-model="form.region" placeholder="请选择薪资" style="width: 150px;">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <section style="margin: 49px 10px 0 10px">
              -
            </section>
            <el-form-item label="">
              <el-select v-model="form.region" placeholder="请选择薪资" style="width: 150px;margin-top: 44px">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-radio v-model="radio" label="2" style="margin-top: 62px;margin-left: 23px">面议</el-radio>
          </section>
          <section class="form1_right_bottom">
            <el-form-item label="目前薪资">
              <el-select v-model="form.region" placeholder="请选择目前薪资" style="width: 329px">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-checkbox-group v-model="form.type" style="margin-top: 53px;">
              <el-checkbox label="保密" name="type" style="margin-left: 24px"></el-checkbox>
            </el-checkbox-group>
          </section>
        </section>
      </el-form>
    </div>
</template>

<script>
  export default {
    name: "job-intension",
    data(){
      return {
        des:0,
        radio:'',
        radio1:'',
        value1:'',
        textarea:'',
        remnant:0,
        form:{
          name:'',
          companyName:'',
          phone:'',
          type:'',
        },
        form5:{

        }
      }
    },
  }
</script>

<style scoped lang="less">
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
        outline: none;
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
  .form_container1{
    display: flex;
    flex-direction: row;
    width: 946px;
    margin: 0 auto;
    padding-bottom: 60px;
    .form1_left{
      width: 434px;
      margin-right: 78px;
    }
    .form1_right{
      width: 434px;
      .form1_right_top{
        display: flex;
        flex-direction: row;
      }
      .form1_right_bottom{
        display: flex;
        flex-direction: row;
      }
    }
  }
</style>
