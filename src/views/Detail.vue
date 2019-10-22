<template>
  <div class="content">
    <div class="option">
      <a href="" class="lable_tab">全部</a>
      <a href="" class="lable">精华</a>
      <a href="" class="lable">分享</a>
      <a href="" class="lable">问答</a>
      <a href="" class="lable">招聘</a>
      <a href="" class="lable">客户端测试</a>
    </div>
    <div class="text" v-for="item in list" :key="item.id">
      <img :src="item.author.avatar_url" alt="" class="User_head" />
      <span class="reply">{{ item.reply_count }}</span
      >/
      <span class="visit">{{ item.visit_count }}</span>
      <span v-if="item.top === true" class="top">置顶</span>
      <span v-if="item.tab === 'share' && item.top === false" class="tab"
      >分享</span
      >
      <span v-if="item.tab === 'ask'" class="tab">问答</span>
      <a class="link" @click="details(item)">{{ item.title }}</a>
    </div>
    <div class="block">
      <span class="demonstration"></span>
      <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-sizes="[10, 20, 30, 40]"
          :page-size="10"
          layout="total, sizes, prev, pager, next, jumper"
          :total="40">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Detail",
    components: {},
    props: {},
    data() {
      return {
        list:[],
        currentPage1: 1,
        currentPage2: 2,
        currentPage3: 3,
        currentPage4: 4
      }
    },
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      getCtiy(){
        this.$axios.req('/api/topics').then(res => {
          this.list = res.data
          console.log(res.data)
        }).catch(err => {
          console.log(err);
        })
      },
      details(item) {
        this.$router.push({ name: "Details", params: { id: item.id } });
      },
    },
    mounted() {
      this.getCtiy()
    },
    created() {

    },
    filters: {},
    computed: {

    },
    watch: {},
    directives: {}
  }
</script>

<style scoped lang="scss">
  .content{
    background-color: #fff;
    width: 96%;
    margin-left: 50px;
    vertical-align: middle;
  }
  .content .option{
    background-color: #f6f6f6;
    padding: 10px;
    border-radius: 3px 3px 0 0;
    display: flex;
  }
  .content .option a{
    text-decoration: none;
  }
  .content .option .lable_tab{
    background-color: #80bd01;
    color: #fff;
    padding: 3px 4px;
    border-radius: 3px;
  }
  .content .option a.lable{
    margin: 0 10px;
    color: #80bd01;
    height: 21px;
    line-height: 21px;

  }
  .text {
    display: flex;
    align-items: center ;
    padding: 10px 0;
    border-bottom: 1px solid #f0f0f0;
    white-space: nowrap;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    &:hover{
      background-color: #f6f6f6;
    }

  }
  .link {
    text-decoration: none;
    color: #888888;
  }
  .User_head {
    width: 30px;
    height: 30px;
  }
  .reply {
    font-size: 13px;
    color: #9e78c0;
    margin-left: 10px;
  }
  .visit {
    font-size: 13px;
    color: #b4b4b4;
  }
  .el-pagination {
    padding: 20px;
  }
  .top {

    background-color: #f0f0f0;
    color: #80bd01;
    font-size: 11px;
    border-radius: 2px;
    margin: 0 5px;
    padding: 5px 10px;
  }
  .tab {
    background-color: #e5e5e5;
    color: #9999;
    font-size: 12px;
    border-radius: 3px;
    margin: 0 5px;
    padding: 2px 4px;





  }

</style>