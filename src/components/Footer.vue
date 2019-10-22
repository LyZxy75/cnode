<template>
  <div class="footer">
    <div class="rss">RSS <span>|</span> 源码地址</div>
    <div>
      CNode 社区为国内最专业的 Node.js 开源技术社区，致力于 Node.js 的技术研究。
    </div>
    <div>
      服务器赞助商为 <img src="../assets/222.png" alt="" class="img" />,
      存储赞助商为 <img src="../assets/333.png" alt="" class="img" />, 由
      <img src="../assets/444.png" alt="" class="img" />
      提供应用性能服务。
    </div>
    <div>
      新手搭建 Node.js 服务器，推荐使用无语备案的
      <a href=" https://www.digitalocean.com/" class="ccc">
        DigitalOcean(https://www.digitalocean.com/)</a
      >
    </div>
  </div>
</template>

<script>
  export default {
    name: "Footer",
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
  template {
    width: 100%;
    height: 100px;
    background-color: #ffff;
  }
  .footer {
    font-size: 13px;
    margin-left: 80px;
    margin-top: 30px;
  }
  .footer div {
    margin-top: -20px;
    color: #b2abb2;
  }
  .footer .rss {
    color: #666666f2;
  }
  span {
    color: #b2abb2;
  }
  .img {
    vertical-align: middle;
  }
  .ccc{
    color: darkblue;
    &:hover{
      color: aqua;
    }
  }
</style>
