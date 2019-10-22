<template>
  <div class="head">
    <div class="left">
      <img src="../assets/111.png" alt="" class="img" />
      <input type="text" class="input" />
    </div>
    <div class="right">
      <ul>
        <li><router-link to="/">首页</router-link></li>
        <li><a href="">新手入门</a></li>
        <li><a href="">API</a></li>
        <li><a href="">关于</a></li>
        <li><router-link to="/Register">注册</router-link></li>
        <li><router-link to="/Sign">登录</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Headers",
    components: {},
    props: {},
    data() {
      return {};
    },
    methods: {},
    mounted() {},
    created() {},
    filters: {},
    computed: {},
    watch: {},
    directives: {}
  };
</script>

<style scoped lang="scss">
  .head {
    width: 100%;
  }
  .left {
    width: 50%;
    float: left;
    margin-left: 50px;
    display: flex;
    align-items: center;
    height: 60px;
  }
  .input {
    border-radius: 15px;
    width: 200px;
    height: 25px;
    background: #888;
    border: 0;
    margin-left: 20px;
    &:hover{
      background-color: #fff;
    }

  }
  ul {
    float: left;
    margin-left: 200px;
    margin-top: -4px;
  }

  ul li {
    list-style: none;
    float: left;
    margin-left: 25px;
    margin-top: 3px;
    text-align: center;
    font-size: 15px;
  }
  ul li a {
    list-style: none;
    color: #d3dce6;
    text-decoration: none;
    &:hover{
      color: #fff;
    }
  }
</style>
