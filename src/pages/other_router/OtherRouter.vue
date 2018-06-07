<template>
  <div>
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          prop="date"
          label="日期"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址">
        </el-table-column>
      </el-table>
      <div>
        <form>
          <div>
            <input name="adminName" />
          </div>
          <input type="submit" value="访问php" @submit="getResponse()"/>
        </form>
        <el-button type="primary" @click="testSome()">vueX的值</el-button>
        <el-button type="primary" @click="returnPage()">返回页面</el-button>
      </div>
      <div>
        <lmy name="hahaha" here="ra" :items="[22,34,5,2]" :own-click="testClick"></lmy>
      </div>
  </div>
</template>

<script>
import testComponent from '../../components/testComponents.vue'

export default {
  name: "OtherRouter",
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  },
  methods: {
    testSome (){
      console.log(this.$store.state.baseInfo.token);
    },
    returnPage (){
      this.$router.push({ name: 'TestFinance' });
    },
    testClick (){
      console.log(111);
    }
  },
  components: {
    'lmy': testComponent
  }
};
</script>
