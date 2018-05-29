<template>
  <div class="home">
    <!--<Header/>-->
    <HomeMain/>
    <Footer/>
  </div>
</template>

<script>
  import Header from '../component/header'
  import Footer from '../component/footer'
  import HomeMain from '../component/home-main'
export default {
  data () {
    return {

    }
  },
  components:{
    Header,
    Footer,
    HomeMain
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
