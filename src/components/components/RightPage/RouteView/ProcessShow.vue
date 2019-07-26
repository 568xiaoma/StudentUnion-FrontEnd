<template>
  <div class="my-process-show">
    <div class="my-process-show-title">关于停车位的增补问题</div>
    <div class="my-process-show-row">
      <el-steps :active="1"  finish-status="success" process-status="finish" class="my-process-show-len">
        <el-step title="问题提交" :description="TimeLine.submit" icon="el-icon-edit"></el-step>
        <el-step title="权益部接收" :description="TimeLine.receive" icon="el-icon-edit"></el-step>
        <el-step title="问题处理" :description="TimeLine.dealing" icon="el-icon-upload"></el-step>
        <el-step title="方案反馈" :description="TimeLine.feedback" icon="el-icon-picture"></el-step>
      </el-steps>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MyRights',
  data() {
      return {
        TimeLine: {
          submit:"2019-06-03",
          receive:"2019-06-03",
          dealing:"待处理",
          feedback:"待处理",
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
.my-process-show{
  width: 100%;
  height: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 12rem;
}
.my-process-show-title{
  width: 90%;
  display:flex;
  margin-top:2rem;
  font-size: 1.2rem;
  font-weight: bold;
}
.my-process-show-row{
  width: 80%;
  height: 20rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.my-process-show-len{
  width: 40rem;
}
</style>
