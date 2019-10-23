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
    <div class="text" v-for="item in list.slice(
        numbers*(currentPage-1),
        numbers*currentPage)" :key="item.id">
      <img :src="item.author.avatar_url" alt="" class="User_head" />
      <span class="reply">{{ item.reply_count }}</span
      >/
      <span class="visit">{{ item.visit_count }}</span>
      <span v-if="item.top === true" class="top">置顶</span>
      <span v-if="item.tab === 'share' && item.top === false" class="tab">分享</span>
      <span v-if="item.tab === 'ask'" class="tab">问答</span>
      <div class="link" @click="details(item)">{{ item.title }}</div>
      <img :src="item.author.avatar_url" alt="" class="replies">
      <div class="replie">
        <div v-if="item.day">{{ item.day }}天前</div>
        <div v-else-if="item.min">{{ item.min }}分钟前</div>
        <div v-else>{{ item.hours }}小时前</div>
      </div>

    </div>
    <div class="block">
      <span class="demonstration"></span>
      <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[10, 20, 30, 40]"
          :page-size="10"
          layout="total, sizes, prev, pager, next, jumper"
          :total="list.length">
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
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4,
        currentPage:1,
        numbers:10,

      }
    },
    methods: {
      handleSizeChange(val) {

        //每页的条数即为循环的条数
        this.numbers = val;
      },
      handleCurrentChange(val) {
        this.currentPage = val;//当前页

      },
      getCtiy(){
        //获取主题页数据
        this.$axios.req('/api/topics').then(res => {
          this.list = res.data
          console.log(res.data)
          let nowTime = Date.now(); /*获取当前时间戳*/
          // console.log(nowTime);
          this.list.map(item => {
            let difference =
                nowTime -
                this.$dayjs(item.last_reply_at).valueOf(); /*将时间转换为时间戳*/
            let time = difference / 1000 / 60 / 60;
            if (time < 1) {
              let min = Math.floor(time * 60);
              this.$set(item, "min", min);  /*创建属性*/
            } else if (time > 24) {
              let day = Math.ceil(time / 24);
              this.$set(item, "day", day);
            } else {
              let hours = Math.floor(time);
              this.$set(item, "hours", hours);
            }
          });
        }).catch(err => {
          console.log(err);
        })
      },
      details(item) {
        //路由传参，把id传过去
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
    position: relative;
    &:hover{
      background-color: #f6f6f6;
    }
  }
  .link {
    width: 60%;
    text-decoration: none;
    color: #888888;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    position: absolute;
    left: 17%;
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
    position: absolute;
    left:10.5%
  }
  .tab {
    background-color: #e5e5e5;
    color: #9999;
    font-size: 12px;
    border-radius: 3px;
    margin: 0 5px;
    padding: 5px 10px;
    position: absolute;
    left:10.5%
  }
  .replies{
    height: 30px;
    width: 30px;
    position: absolute;
    left: 80%;
    border-radius: 3px;
  }
  .replie{
    position: absolute;
    left: 85%;
    font-size: 12px;
  }

</style>