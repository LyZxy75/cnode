<template>
  <div class="box-card">
    <el-card class="box-card">
      <div slot="header" class="fix">
        <span>欢迎来到cNode社区</span>
      </div>
      <div class="input">
        <div>
          <span class="red">*</span>请输入用户名
          <input type="text" v-model="input" />
        </div>
        <div>
          <span class="red">*</span>请输入密码
          <input type="password" class="box" v-model="input1" />
        </div>
        <div>
          <span class="red">*</span>请确认密码
          <input type="password"  class="box" v-model="input2" />
        </div>
        <div class="butten">
          <el-button type="primary" @click="sign">立即登录</el-button>
        </div>

      </div>
    </el-card>

  </div>

</template>

<script>
  export default {
    name: "Sign",
    components: {},
    props: {},
    data() {
      return {
        input:'',
        input1:'',
        input2:''
      }
    },
    methods: {

      sign () {
        if (this.input1 !== this.input2) {
          this.$message.error('两次输入密码不一致，请重新输入');
          this.input ='';
          this.input1 = '';
          this.input2 = ''
        } else {
          if(
              this.input.length > 0 &&
              this.input1.length > 0 &&
              this.input2.length > 0
          ) {
            localStorage.setItem("user",this.input);
            this.$store.state.user = this.input;
            this.$router.push('/');
            this.$message({
              message: '恭喜你，这是一条成功消息',
              type: 'success'
            });
          }
        }
      }
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
.box-card{
  width: 480px;
  margin: auto;
  margin-top: 20%;
}
  .fix{
    text-align: center;
  }
  .el-input__inner{
    width: 100%;
  }
  input{
    width: 300px;
    height: 30px;
    border-radius: 4px;
    border: 1px solid #bebebe;
  }
  .red{
    color: red;
  }
  .input div{
    margin-top: 30px;
  }
  .box{
    margin-left: 15px;
  }
  .butten{
    margin-left: 180px;
  }
</style>