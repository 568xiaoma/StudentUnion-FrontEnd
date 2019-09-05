<template>
  <div>
    <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
      
      <el-menu-item index="1">
        <i class="el-icon-menu"></i>
        <span slot="title">我的借阅</span>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">全部分类</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="2-0">全部</el-menu-item>
          <el-menu-item index="2-1">文学</el-menu-item>
          <el-menu-item index="2-2">哲学</el-menu-item>
          <el-menu-item index="2-3">力学</el-menu-item>
          <el-menu-item index="2-4">医学</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
import merge from 'webpack-merge'

export default {
  name: 'DepartmentPage',
  data() {
      return {
        NowName:'',
      };
    },
  methods: {
    addIndex(name){
      console.log(name)
      this.$router.push({ name: 'DepartmentPage'})
      this.$router.push({
        query:merge(this.$route.query,{'department':name})
      })
    },
  },
}
</script>

<style>
body{
  margin:0px;
  height: 1rem;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
