<template>
    <div>
      <section class="container_title">
        <section class="resume_base">
          <p>基本资料</p>
        </section>
        <section class="resume_button">
          <button>取消</button>
          <button>保存</button>
        </section>
      </section>
      <el-form ref="form" :model="form" label-width="80px" label-position="top" class="form_container">

        <section class="form_left">
          <el-form-item label="姓名">
            <el-input v-model="form.name" placeholder="请输入姓名"></el-input>
          </el-form-item>
          <el-form-item label="公司名称">
            <el-input v-model="form.companyName" placeholder="例如：北京百度科技有限公司"></el-input>
          </el-form-item>
          <el-form-item label="当前求职状态">
            <el-select v-model="form.region" placeholder="请选择求职状态" style="width: 100%;">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="生日">
            <el-date-picker
              v-model="value1"
              type="date"
              placeholder="选择日期"
              style="width: 100%;"
            >
            </el-date-picker>
          </el-form-item>
          <el-form-item label="婚姻状态">
            <el-select v-model="form.region" placeholder="请选择婚姻状态" style="width: 100%;">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="手机">
            <el-input v-model="form.phone" placeholder="请输入手机号"></el-input>
          </el-form-item>
        </section>
        <section class="form_right">
          <el-form-item label="性别">
            <el-select v-model="form.region" placeholder="请选择性别" style="width: 100%;">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="当前职位">
            <el-input v-model="form.name" placeholder="例如：UI设计师"></el-input>
          </el-form-item>
          <el-form-item label="当前所在城市">
            <el-select v-model="form.region" placeholder="请选择当前所在城市" style="width: 100%;">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="国籍">
            <el-select v-model="form.region" placeholder="请选择国籍" style="width: 100%;">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="籍贯">
            <el-input v-model="form.name" placeholder="北京"></el-input>
          </el-form-item>
          <el-form-item label="邮箱">
            <el-input v-model="form.name" placeholder="请输入邮箱"></el-input>
          </el-form-item>
        </section>
      </el-form>
    </div>
</template>

<script>
  export default {
    name: "base-means",
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
    computed:{
      descInput(){
        let txtVal = this.textarea.length;
        this.remnant = 1600 - txtVal;
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
  .form_container{
    display: flex;
    flex-direction: row;
    width: 946px;
    margin: 0 auto;
    padding-bottom: 60px;
    .form_left{
      width: 434px;
      margin-right: 78px;
    }
    .form_right{
      width: 434px;
    }
  }

</style>
