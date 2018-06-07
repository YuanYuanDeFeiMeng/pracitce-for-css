<template>
  <div>
      <el-carousel indicator-position="outside">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
      <span>{{ clickCount }}</span><el-button type="primary" @click="clickBtn()">点击</el-button>
      <el-button type="primary" @click="goToAnother()">去另外页面</el-button>
  </div>
</template>
<script>
export default {
  name: 'TestFinance',
  data (){
    return {
      clickCount: 1
    }
  },
  methods: {
    clickBtn (){
      this.clickCount++;
      this.$store.state.baseInfo.token = this.clickCount;
    },
    goToAnother (){
      this.$router.push({ name: 'OtherRouter' });
    }
  },
  created () {
    
    
  },
  updated (){
    console.log(this.$store.state.baseInfo.token);
  }
}
</script>

<style lang="less">
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>