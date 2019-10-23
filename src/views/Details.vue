<template>
  <div class="paging page__img">
    <div>
      <span v-if="this.gird.top === true" class="roof">置顶</span>
      <span class="node">{{this.gird.title}}</span>
      <div class="frequency" v-if="gird.author">
        • 发布于2个月前 • 作者 {{ gird.author.loginname }} •
        {{ this.gird.visit_count }} 次浏览 • 来自 分享
      </div>
      <div class="hr"></div>
    </div>
    <div v-html="this.gird.content" class="content"></div>
  </div>
</template>

<script>
  export default {
    name: "Details",
    components: {},
    props: {},
    data() {
      return {
        id: "",
        gird:{}

      }
    },
    methods: {
      //获取详情页数据
      getData(){
        this.$axios.req('/api/topic/' + this.id).then(res => {
          this.gird = res.data
          console.log(res)
        }).catch(err => {
          console.log(err);
        })
      },
    },
    mounted() {
      this.id = this.$route.params.id
      this.getData();

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
  .paging {
    width: 90%;
    background-color: #ffff;
    margin-left: 100px;
  }
  .placement {
    width: 45px;
    height: 25px;
    background-color: #80bd01;
    color: #fff;
    font-size: 15px;
    border-radius: 5px;
  }
  .roof {
    /*margin-top: 25px;*/
    /*margin-bottom: 15px;*/
    background-color: #f0f0f0;
    color: #80bd01;
    font-size: 11px;
    border-radius: 2px;
    margin: 0 5px;
    padding: 5px 10px;
  }
  .node {
    font-size: 23px;
    font-weight: 600;
  }
  .frequency {
    font-size: 13px;
    color: #838383;
    margin-bottom: 10px;
  }
  .paging li {
    list-style: none !important;
  }
  .hr{
    width: 100%;
    border-bottom: 1px #d6d6d6 solid;
  }
  .content /deep/ img {
    width: 96%;
  }
  .content /deep/ li {
    margin: 10px 0 10px 30px ;
  }
  .paging /deep/ div {
    margin-left: 15px;
    margin-top: 15px;
  }
  .paging /deep/ h2 {
    margin-bottom: 20px;
    margin-top: 15px;
    border-bottom: 1px #d6d6d6 solid;
  }
  .paging /deep/ p {
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .paging /deep/a {
    margin-top: 20px;
    text-decoration: none;
    color: #0088CC;
    font-size: 14px;
  }
  .paging /deep/code{
    padding: 10px 5px 10px;
  }
</style>