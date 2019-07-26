<template>
  <div class="my-myrightprocess-form">
    <div class="my-myrightprocess-form-title">进度查询</div>
    <div class="my-myrightprocess-line"/>
    <div class="my-myrightprocess-form-subtitle">在这里你可以查询权益问题处理的进度</div>
    <el-form ref="processForm" :model="processForm" label-width="80px" class="my-myrightprocess-form-inner">
      <el-form-item label="问题简称">
        <el-input v-model="processForm.briefname"></el-input>
      </el-form-item>
      <el-form-item label="姓名">
        <el-input v-model="processForm.name"></el-input>
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input v-model="processForm.email"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即查询</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  name: 'DepartmentPage',
  data() {
      return {
        processForm: {
          name: '',
          briefname: '',
          email: ''
        }
      };
    },
  methods: {
    onSubmit() {
      console.log('submit!');
    }
  },
}
</script>

<style>
body{
  margin:0px;
  height: 1rem;
}
.my-myrightprocess-form{
  padding-top: 2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 10rem;
}
.my-myrightprocess-line{
  border-top: 1px rgb(141, 141, 141) solid;
  width: 3rem;
  margin-bottom: 0.2rem;
}
.my-myrightprocess-form-title{
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.2rem;
}
.my-myrightprocess-form-subtitle{
  margin-bottom: 2rem;
  font-size: 0.8rem;
  color: rgb(160, 160, 160);
}
.my-myrightprocess-form-inner{
  width: 40rem;
}
</style>
