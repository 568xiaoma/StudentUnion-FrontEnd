<template>
  <div>
    <el-col class="my-left-bar">
      <div class="my-left-bar-title">学生会部门</div>
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo">
        <el-menu-item v-for="item in departments" :index="item.addIndex" @click="addIndex(item.name)">
          <i class="el-icon-menu"></i>
          <span slot="title">{{item.name}}</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </div>
</template>
<script>
import merge from 'webpack-merge'
export default {
  name: 'DepartmentPage',
  data() {
      return {
        NowName:'',
        departments: [{
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
          index: '1-5',
        },{
          name: '启明书屋',
          index: '1-6',
        },{
          name: '权益部',
          index: '1-7',
        },{
          name: '社会实践部',
          index: '1-8',
        },{
          name: '体育部',
          index: '1-9',
        },{
          name: '外联部',
          index: '1-10',
        },{
          name: '文艺部',
          index: '1-11',
        },{
          name: '小红帽',
          index: '1-12',
        },{
          name: '心理部',
          index: '1-13',
        },{
          name: '新闻中心',
          index: '1-14',
        },{
          name: '宣传部',
          index: '1-15',
        },{
          name: '学术部',
          index: '1-16',
        },{
          name: '主持人队',
          index: '1-17',
        },{
          name: '组织部',
          index: '1-18',
        }],
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
.my-left-bar-title{
  padding: 2rem;
  font-weight: bold;
  font-size: 1.2rem;
  color: rgb(36, 36, 36);
}
.my-left-bar{
  width: 15rem;
  margin-bottom: 2rem;
}
</style>
