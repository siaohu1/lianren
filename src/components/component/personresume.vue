<template>
    <section class="resume_container">
      <section class="section1">
        <BaseMeans/>
      </section>
      <section class="section2">
        <JobIntension/>
      </section>
      <section style="min-height: 703px;width: 997px;margin: 0 auto;border-bottom: 1px solid rgba(229,229,229,1);" class="section4">
        <SchoolHistory/>
        <section class="new_one1">
          <section>
            <div>+</div>
          </section>
        </section>
      </section>
      <section class="section3">
        <WorkHistory/>
        <section class="new_one">
          <section>
            <div>+</div>
          </section>
        </section>
        <ProjectHistory/>
        <section class="new_one">
          <section>
            <div>+</div>
          </section>
        </section>
      </section>
      </section>
</template>

<script>
  import ProjectHistory from "./project-history"
  import WorkHistory from './work-history'
  import SchoolHistory from './school-history'
  import JobIntension from './job-intension'
  import BaseMeans from './base-means'
  export default {
    name: "personresume",
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
    methods:{

    },
    components:{
      ProjectHistory,
      WorkHistory,
      SchoolHistory,
      JobIntension,
      BaseMeans
    }
  }
</script>

<style scoped lang="less">
  .resume_container{
    width: 100%;
    background: #fafafa;
    .section1{
      .container_title{
        display: flex;
        justify-content: space-between;
        height: 89px;
        line-height: 89px;
        padding-left: 93px;
        padding-right: 128px;
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
            outline:  none;
          }
          button:last-of-type{
            font-size:14px;
            font-family:HiraginoSansGB-W3;
            color: white;
            outline:  none;
            border: 1px solid #4978F1;
          }
        }
      }

    }
    .section2{
      height: 445px;
      /*margin-bottom: 30px;*/
      .container_title{
        display: flex;
        justify-content: space-between;
        height: 89px;
        line-height: 89px;
        padding-left: 93px;
        padding-right: 128px;
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
          }
          button:last-of-type{
            font-size:14px;
            font-family:HiraginoSansGB-W3;
            color: white;
          }
        }
      }

    }
    .section3{
      min-height: 1331px;
      .new_one{
        height: 162px;
        display: flex;
        justify-content: center;
        align-items: center;
        section{
          width:101px;
          height:101px;
          background:rgba(255,255,255,1);
          border-radius:51px;
          box-shadow:0px 4px 4px rgba(0,0,0,0.1);
          line-height: 80px;
          cursor: pointer;
          div{
            text-align: center;
            font-size: 100px;
            color:rgba(214,214,214,1);
          }
        }

      }
    }
    .section4{
      .section4_title{
        height: 101px;
        line-height: 101px;
        p{
          font-size:16px;
          font-family:HiraginoSansGB-W6;
          color:rgba(51,51,51,1);
        }
      }

      .new_one1{
        height: 141px;
        display: flex;
        justify-content: center;
        align-items: center;
        section{
          width:101px;
          height:101px;
          background:rgba(255,255,255,1);
          border-radius:51px;
          box-shadow:0px 4px 4px rgba(0,0,0,0.1);
          line-height: 80px;
          cursor: pointer;
          div{
            text-align: center;
            font-size: 100px;
            color:rgba(214,214,214,1);
          }
        }

      }
    }

  }

</style>
