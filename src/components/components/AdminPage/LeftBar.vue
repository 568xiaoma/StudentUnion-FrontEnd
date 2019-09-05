<template>
  <div>
    <el-radio-group v-model="isCollapse" style="margin: 20px;">
      <!-- <i @click="isCollapse = true" style="font-size:30px;color:#aaaaaa" class="el-icon-s-fold"/>
      <i @click="isCollapse = false" style="font-size:30px;color:#aaaaaa" class="el-icon-s-unfold"/> -->
      <!-- <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button> -->
    </el-radio-group>
    <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
      
      <el-menu-item index="0" @click="redirect('Statistics')">
        <i class="el-icon-menu"></i>
        <span slot="title">数据中心</span>
      </el-menu-item>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">部门展示</span>
        </template>
        <el-menu-item-group>
          <span slot="title">学生会</span>
          <el-menu-item v-for="item in stuUnion" :index="item.index" @click="addIndex(item.name)">{{item.name}}</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分团委">
          <el-menu-item v-for="item in sub_CYL" :index="item.index" @click="addIndex(item.name)">{{item.name}}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">主页消息</span>
        </template>
        <el-menu-item-group>
          <span slot="title">图片通知</span>
          <el-menu-item index="2-1" @click="redirect('HomePageAlert')">首页弹窗</el-menu-item>
          <el-menu-item index="2-2" @click="redirect('HomePageSlide')">轮播图</el-menu-item>
          <el-menu-item index="2-3" @click="redirect('ImageNews')">图片新闻</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <span slot="title">文字通知</span>
          <el-menu-item index="2-4" @click="redirect('ImportmentNews')">重要消息</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="3" @click="redirect('StarForm')">
        <i class="el-icon-menu"></i>
        <span slot="title">每月之星</span>
      </el-menu-item>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">资料中心</span>
        </template>
        <el-menu-item-group>
          <span slot="title">资源中心</span>
          <el-menu-item index="4-1" @click="redirect('MaterialShow')">资料信息</el-menu-item>
          <el-menu-item index="4-2" @click="redirect('SoftWareShow')">软件信息</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="5">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">权益中心</span>
        </template>
        <el-menu-item-group>
          <span slot="title">权益中心</span>
          <el-menu-item index="5-1" @click="redirect('RightAdmin')">待审核</el-menu-item>
          <el-menu-item index="5-2" @click="redirect('RightAdminDealing')">待处理</el-menu-item>
          <el-menu-item index="5-3" @click="redirect('RightAdminDone')">已处理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="6" @click="redirect()">
        <i class="el-icon-menu"></i>
        <span slot="title">心理宣泄版</span>
      </el-menu-item>
      <el-menu-item index="7" @click="redirect('RegisterForm')">
        <i class="el-icon-menu"></i>
        <span slot="title">学生会招新</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
import merge from 'webpack-merge'

export default {
  name: 'LeftBar',
  data() {
      return {
        isCollapse: false,
        stuUnion: [{
          name: '办公室',
          index: '1-1',
        },{
          name: '辩论队',
          index: '1-2',
        },{
          name: '技术部',
          index: '1-3',
        },{
          name: '礼仪队',
          index: '1-4',
        },{
          name: '启明书屋',
          index: '1-5',
        },{
          name: '权益部',
          index: '1-6',
        },{
          name: '体育部',
          index: '1-7',
        },{
          name: '外联部',
          index: '1-8',
        },{
          name: '文艺部',
          index: '1-9',
        },{
          name: '小红帽',
          index: '1-10',
        },{
          name: '学术部',
          index: '1-11',
        },{
          name: '主持人队',
          index: '1-12',
        }],
        sub_CYL: [{
          name: '新闻中心',
          index: '1-13',
        },{
          name: '宣传部',
          index: '1-14',
        },{
          name: '组织部',
          index: '1-15',
        },{
          name: '心理部',
          index: '1-16',
        },{
          name: '社会实践部',
          index: '1-16',
        }],
      };
    },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    addIndex(name){
      this.$router.push({ name: 'DepartmentShow'})
      this.$router.push({
        query:merge(this.$route.query,{'department':name})
      })
    },
    redirect(pathname){
      this.$router.push({ name: pathname})
    }
  }
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
.my-adminleft-bar-title{
  margin: 2rem;
  font-weight: bold;
  font-size: 1.2rem;
  color: rgb(36, 36, 36);
}
.my-adminleft-bar{
  width: 15rem;
  margin-bottom: 2rem;
}
</style>
