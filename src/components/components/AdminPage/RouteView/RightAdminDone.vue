<template>
  <div class="my-allproblem">
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="_id"
        label="序列号"
        width="230">
      </el-table-column>
      <el-table-column
        prop="commitData"
        label="上传时间"
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
      <el-table-column
        prop="question"
        label="解决方案"
        width="280">
        <template slot-scope="scope">
          <el-input v-model="scope.row.solution"/>
        </template>
      </el-table-column>
      <el-table-column
        label="操作"
        width="100">
        <template slot-scope="scope">
          <el-button @click="submitItem(scope.row._id,scope.row.solution)" type="text" size="small">修改</el-button>
          <!-- <el-button type="text" size="small">删除</el-button> -->
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
        solution:'',
        tableData: [

        ]
      };
    },
  methods: {
    submitItem(id,solution){
      var that = this
      jQuery.post(
        'https://husteicstu.cn:3000/RightCenter/setSolution',
        {
          solution: solution,
          id: id,
        },
        function (res) {
          console.log(res)
          that.$message({
            message: '更新成功',
            type: 'success'
          });
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
      )
    }
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
  width: 100%;
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
