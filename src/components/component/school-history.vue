<template>
    <div>
      <section class="container_title" style="border-top: 1px solid #e5e5e5">
        <section class="resume_base">
          <p>教育经历</p>
        </section>
        <section class="resume_button">
          <button>取消</button>
          <button>保存</button>
        </section>
      </section>
      <section class="section4_container">
        <el-form ref="form" :model="form" label-width="80px" label-position="left" class="form_container2">
          <section class="section4_container_top">
            <section class="section4_container_top_left">
              <el-form-item label="学校名称">
                <el-input v-model="form.name" placeholder="例如：北京大学" style="width: 329px;margin-bottom: 15px"></el-input>
              </el-form-item>
              <el-form-item label="学历">
                <el-select v-model="form.region" placeholder="选择学历" style="width: 329px;margin-bottom: 15px">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </el-form-item>
            </section>
            <section class="section4_container_top_right">
              <el-form-item label="专业名称">
                <el-input v-model="form.name" placeholder="例如：艺术设计" style="width: 331px;margin-bottom: 15px"></el-input>
              </el-form-item>
              <section class="time_school">
                <el-form-item label="在校时间">
                  <el-select v-model="form.region" placeholder="选择年份" style="width: 150px">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                  </el-select>
                </el-form-item>
                <section style="font-size:16px;
font-family:HiraginoSansGB-W3;
color:rgba(51,51,51,1);line-height: 42px;margin: 0 7px">
                  至
                </section>
                <el-form-item label="" label-width="0">
                  <el-select v-model="form.region" placeholder="选择年份" style="width: 150px">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                  </el-select>
                </el-form-item>
              </section>
            </section>
          </section>
          <section class="section4_container_bottom">
            <el-form-item label="在校经历">
              <el-input
                type="textarea"
                :rows="10"
                placeholder="（选填）例如：1.担任班长。2.创办校级手绘协会并担任会长。3.获得校级手绘比赛一等奖，作品被学校收藏…"
                v-model="textarea"
                style="width: 834px"
                maxlength="1600"
                @input="descInput"
              >
              </el-input>
            </el-form-item>
            <p style="height:15px;font-size:16px;font-family:HiraginoSansGB-W3;
color:rgba(153,153,153,1);text-align: right;padding-right: 50px;height: 50px">{{remnant}}/1600</p>
          </section>
        </el-form>
      </section>
    </div>
</template>

<script>
  export default {
    name: "school-history",
    data(){
      return{
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
    }
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
  .section4_container{
    width:997px;
    min-height:457px;
    background:rgba(255,255,255,1);
    border-radius:8px;
    box-shadow:0px 4px 5px rgba(0,0,0,0.1);
    padding: 50px 0 0 34px;
  }
  .section4_container_top{
    display: flex;
    flex-direction: row;
    .section4_container_top_left{

    }
    .section4_container_top_right{
      margin-left: 94px;
      .time_school{
        display: flex;
        flex-direction: row;
      }

    }
  }
  .section4_container_bottom{

  }
</style>
