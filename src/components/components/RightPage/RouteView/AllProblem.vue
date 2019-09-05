<template>
  <div class="my-allproblem">
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="commitData"
        label="提交时间"
        width="180">
      </el-table-column>
      <el-table-column
        prop="solveData"
        label="处理时间"
        width="180">
      </el-table-column>
      <el-table-column
        prop="questionName"
        label="问题简称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="question"
        label="问题描述"
        width="280">
        <template slot-scope="scope">
          <el-collapse style="background-color:rgba(0,0,0,0);">
            <el-collapse-item name="1">
              <template slot="title">
                <div class="my-desc-text-container">{{scope.row.question}}</div>
              </template>
              <div style="padding-left:1rem;padding-right:1rem;">{{scope.row.question}}</div>
            </el-collapse-item>
          </el-collapse>
        </template>
      </el-table-column>
      <!-- <el-table-column
        prop="process"
        label="处理进度"
        width="100">
      </el-table-column> -->
      <el-table-column
        prop="solution"
        label="解决方案"
        width="280">
        <template slot-scope="scope">
          <el-collapse style="background-color:rgba(0,0,0,0);">
            <el-collapse-item name="1">
              <template slot="title">
                <div class="my-desc-text-container">{{scope.row.solution}}</div>
              </template>
              <div style="padding-left:1rem;padding-right:1rem;">{{scope.row.solution}}</div>
            </el-collapse-item>
          </el-collapse>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  name: 'MyRights',
  data() {
      return {
        tableData: [
        ]
      };
    },
  methods: {

  },
  mounted(){
    var that = this
    jQuery.get(
      'https://husteicstu.cn:3000/RightCenter/getByTag',
      {
        tag: 2,
      },
      function (res) {
        console.log(res)
        that.tableData = res.data
      }
    )
  }
}
</script>

<style>
.my-allproblem{
  width: 80rem;
  padding: 2rem;
}
.my-desc-text-container{
  padding-left:1rem;
  padding-right:1rem;
  border:0;
  margin:0;
  font-size:0.9rem;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}
</style>
