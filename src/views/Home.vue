<template>
  <div id="home">
    <el-container class="elc">
      <el-header>
        <Header></Header>
      </el-header>
      <el-container>
        <el-container class="container">
          <el-main>
            <router-view />
          </el-main>
          <el-aside>
            <Navigation></Navigation>
          </el-aside>
        </el-container>
        <el-footer>
          <Footer></Footer>
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import Header from '../components/Header'
  import Navigation from '../components/Navigation'
  import Footer from '../components/Footer'
  export default {
    name: "Home",
    components: {
      Header,
      Navigation,
      Footer
    },
    props: {},
    data() {
      return {

      }
    },
    methods: {


    },
    mounted() {

    },
    created() {

    },
    filters: {},
    computed: {},
    watch: {},
    directives: {}
  }
</script>

<style scoped lang="scss">
  * {
    margin: 0;
    padding: 0;
  }
  .elc{
    background: #e1e1e1;
  }
  .container{
    max-width: 1400px;
  }
  .el-header,
  .el-footer {
    background-color: #444;
    line-height: 60px;
  }
  .el-footer {
    width: 100%;
    background-color: #ffff;
  }

  .el-aside {
    background-color: #e1e1e1;
    width: 30%;
  }

  .el-main {
    background-color: #e1e1e1;
    color: #333;
    width: 70%;
  }
</style>