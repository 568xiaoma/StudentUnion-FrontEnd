<template>
  <div>
    <el-col class="my-left-bar">
      <div class="my-left-bar-title">权益中心</div>
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo">

        <el-menu-item @click="redirect('RightPage')">
          <i class="el-icon-menu"></i>
          <span slot="title">全部问题</span>
        </el-menu-item>
        <el-menu-item @click="redirect('RightFeedback')">
          <i class="el-icon-menu"></i>
          <span slot="title">权益反馈</span>
        </el-menu-item>
        <el-menu-item @click="redirect('MyRights')">
          <i class="el-icon-menu"></i>
          <span slot="title">我的反馈</span>
        </el-menu-item>
        <!-- <el-menu-item @click="redirect('Process')">
          <i class="el-icon-menu"></i>
          <span slot="title">进度查询</span>
        </el-menu-item> -->

      </el-menu>
    </el-col>
  </div>
</template>
<script>
export default {
  name: 'DepartmentPage',
  data() {
      return {
        
      };
    },
  methods: {
    redirect(pathname){
      this.$router.push({ name: pathname})
    }
  },
}
</script>

<style>
body{
  margin:0px;
  height: 1rem;
}
.my-left-bar-title{
  margin: 2rem;
  font-weight: bold;
  font-size: 1.2rem;
  color: rgb(36, 36, 36);
}
.my-left-bar{
  width: 15rem;
  margin-bottom: 2rem;
}
</style>
