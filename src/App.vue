<template>
  <div id="app">
    <Header/>
    <router-view/>
  </div>
</template>

<script>
  import Header from './components/component/header'
  import Footer from './components/component/footer'
  import store from './store/index'
export default {
  name: 'App',
  components:{
    Header,
    Footer
  }
}
</script>

<style>
.el-pagination.is-background .btn-next, .el-pagination.is-background .btn-prev, .el-pagination.is-background .el-pager li{
  background-color: white;
}
  a{
    text-decoration: none;
  }
#jiantou{
  width: 0;
  height: 0;
  border: 4px solid transparent ;
  border-top-color:black ;
  position: relative;
  top: 10px;
  margin-right: 10px;
}
.el-input__inner:focus {
  outline: none;
  border-color: #4978F1;
}
.el-form-item {
  margin-bottom: 12px;
}
.el-form--label-top .el-form-item__label{
  padding:  0 0 4px;
}
.el-select .el-input .el-select__caret {
  color: #333333;
}
.el-form-item__label{
  color:rgba(51,51,51,1);
  font-family:HiraginoSansGB-W3;
}
.el-collapse{
  border-top: 1px solid transparent;
}
.el-input__inner{
  border-radius: 8px;
}
  button{
    outline: none;
  }
  .el-collapse-item__content{
    padding-bottom: 0;
  }
.el-checkbox__input.is-checked .el-checkbox__inner, .el-checkbox__input.is-indeterminate .el-checkbox__inner{
  border-radius: 50%;
}
.el-checkbox__inner{
  border-radius: 50%;
}
</style>
