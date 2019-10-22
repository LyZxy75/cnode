<template>
  <div class="land">
    <div v-if="this.$store.state.user" class="sign">
      <input type="button" value="个人信息" class="information" />
      <div>I P：{{ this.$store.state.user }}</div>
      <div>积 分:0</div>
      <div>签 名 : ”这家伙很懒，什么个性签名都没有留下“</div>
    </div>
    <div v-else class="sign">
      <div>CNode:Node.js专业中文社区</div>
      <div>
        您可以 <span><a href="" class="ss">登录</a></span
      >或 <span><a href="" class="ss">注册</a></span
      >，也可以
      </div>
      <br>
      <el-button type="info">通过 GitHub 登录</el-button>
    </div>
    <div class="img">
      <img src="../assets/555.jpg" alt="" />
      <img src="../assets/666.jpg" alt="" />
      <img src="../assets/777.png" alt="" class="c"/>
    </div>
    <el-card class="box-card">
      <div slot="header" class="fix">
        <span>无人回复的话题</span>
      </div>
      <div class="text item">
        {{'node后台前后端分离快速权限开发框架'}}
        {{'想快速掌握node开发的来'}}
        {{'请问node-xlsx解析excel空行数据为空数组怎'}}
        {{'发现一个用node.js做的后台权限管理框架'}}
        {{'请问有谁了解 VuePress JAMStack Headless cms 么'}}
      </div>
    </el-card>
  </div>
</template>

<script>
  export default {
    name: "Navigation",
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
  .land{
    width: 98%;
    margin-top: 20px;
  }
  .sign {
    height: 150px;
    background-color: #fff;

  }
  .sign div {
    margin-top: 10px;

  }
  .ss{
    color: #888888;
  }
  el-button {
    font-size: 18px;
    background-color: #5bc0de;
  }
  .information {
    width: 90%;
    height: 30px;
    margin-top: 10px;
    border-radius: 10px;
    background-color:deepskyblue;
    color: #ffff;
    font-size: 20px;
    border: 1px solid silver;
  }
  .img {
    width: 100%;
    background-color: #fff;
    margin-top: 10px;

  }
  .img img {
    width: 270px;
    height: 65px;
    margin: 10px 10px 0;

  }
  .img .c{
    margin-bottom: 10px;
  }
  .box-card{
    margin-top: 10px;
  }
  .fix{
    background-color: #f6f6f6;
    color: #51585c;
  }
  .el-card__header{
    padding: 0;
  }
  .text{
    color: #778087;
    font-size: 14px;
    line-height: 25px;
  }

</style>
