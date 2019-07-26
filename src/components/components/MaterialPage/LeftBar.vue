<template>
  <div>
    <el-col class="my-left-bar">
      <div class="my-left-bar-title">资料中心</div>
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo">

        <el-menu-item @click="redirect('MaterialForm')">
          <i class="el-icon-menu"></i>
          <span slot="title">学习资料</span>
        </el-menu-item>
        <el-menu-item @click="redirect('SoftWareForm')">
          <i class="el-icon-menu"></i>
          <span slot="title">工具软件</span>
        </el-menu-item>
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
