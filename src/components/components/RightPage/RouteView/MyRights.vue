<template>
  <div class="my-myright-form">
    <div class="my-myright-form-title">我的反馈</div>
    <div class="my-myright-line"/>
    <div class="my-myright-form-subtitle">在这里你可以查询你曾经对学生会申诉的权益问题</div>
    
    <el-form ref="myrightForm" :model="myrightForm" label-width="80px" class="my-myright-form-inner">
      <el-form-item label="姓名" :rules="rules.name" prop="name">
        <el-input v-model="myrightForm.name"></el-input>
      </el-form-item>
      <el-form-item label="邮箱" :rules="rules.email" prop="email">
        <el-input v-model="myrightForm.email"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit('myrightForm')">立即查询</el-button>
        <!-- <el-button>取消</el-button> -->
      </el-form-item>
    </el-form>

    <el-table
      :data="tableData"
      style="width: 60rem">
      <el-table-column
        prop="commitData"
        label="提交时间"
        width="100">
      </el-table-column>
      <el-table-column
        prop="solveData"
        label="处理时间"
        width="100">
      </el-table-column>
      <el-table-column
        prop="questionName"
        label="问题简称"
        width="200">
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
        prop="tag"
        label="处理进度"
        width="100">
        <template slot-scope="scope">
          {{scope.row.tag == '0'?"尚未审核":(scope.row.tag=='1'?"正在处理":(scope.row.tag == '2'?"处理完成":"未审核通过或已有类似问题"))}}
        </template>
      </el-table-column>
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
      myrightForm: {
        name: '',
        email: ''
      },
      tableData: [
      ],
      rules:{
          name:[
            { required: true, message: '姓名不能为空'},
          ],
          email:[
            { required: true, message: '邮箱不能为空'},
          ],
        }
    };
  },
  methods: {
    onSubmit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          var that = this
          var that = this
          jQuery.get(
            'https://husteicstu.cn:3000/RightCenter/myQuestion',
            that.myrightForm,
            function (res) {
              console.log(res)
              that.tableData = res.data
              that.$message({
                message: "查询成功",
                type: "success"
              })
            }
          )
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    }
  },
}
</script>

<style>
body{
  margin:0px;
  height: 1rem;
}
.my-myright-form{
  padding-top: 2rem;
  width: 80rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 10rem;
}
.my-myright-line{
  border-top: 1px rgb(141, 141, 141) solid;
  width: 3rem;
  margin-bottom: 0.2rem;
}
.my-myright-form-title{
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.2rem;
}
.my-myright-form-subtitle{
  margin-bottom: 2rem;
  font-size: 0.8rem;
  color: rgb(160, 160, 160);
}
.my-myright-form-inner{
  width: 40rem;
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
