<template>
  <div class="paging page__img">
    <div>
      <span class="roof"
      ><input class="placement" type="button" value="置顶"
      /></span>
      <span class="node">Node 12 值得关注的新特性</span>
      <div class="frequency" v-if="details.author">
        • 发布于2个月前 • 作者 {{ details.author.loginname }} •
        {{ details.visit_count }} 次浏览 • 来自 分享
      </div>
      <div class="hr"></div>
    </div>
    <div v-html="details.content" class="content"></div>
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
        details: []
      }
    },
    methods: {
      getData() {
        console.log(this.id);
        this.$axios
            .req("/api/topic/" + this.id)
            .then(res => {
              if (res) {
                console.log(res.data);
                this.details = res.data.data;
                console.log(this.details.data);
              }
            })
            .catch(err => {
              console.log(err);
            });
      }
    },
    mounted() {
      this.id = this.$route.params.id;
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
  .roof input {
    margin-top: 25px;
    margin-bottom: 15px;
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