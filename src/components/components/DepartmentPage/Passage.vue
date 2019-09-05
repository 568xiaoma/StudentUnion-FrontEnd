<template>
  <div class="my-passage">
    <div class="my-passage-title">
      学生会{{departmentInfo.name}}
      <div class="my-passage-subtitle">
        {{departmentInfo.departFunction}}
      </div>
    </div>
    <div class="my-head-first-row">
      <el-card class="box-card">
        <div slot="header" class="clearfix" style="font-weight: bold;font-size: 1.2rem;">
          <span>基本信息</span>
        </div>
        <div class="text item">
          <span class="my-lable-blue">/</span>
          <span style="font-weight: bold;">部门全称：</span>{{departmentInfo.fullName}}
        </div>
        <div class="text item">
          <span class="my-lable-blue">/</span>
          <span style="font-weight: bold;">部长姓名：</span>{{departmentInfo.account}}
        </div>
        <div class="text item">
          <span class="my-lable-blue">/</span>
          <span style="font-weight: bold;">部门招新群：</span>{{departmentInfo.email}}
        </div>
        <div class="text item">
          <span class="my-lable-blue">/</span>
          <span style="font-weight: bold;">部长QQ：</span>{{departmentInfo.qq}}
        </div>
        <div class="text item">
          <span class="my-lable-blue">/</span>
          <span style="font-weight: bold;">一句话部门：</span>{{departmentInfo.departFunction}}
        </div>
      </el-card>
      <el-carousel :interval="4000" class="my-passage-slide" height="20rem" width="95%">
        <el-carousel-item class="my-passage-slide-item" v-for="item in departmentInfo.imgs.showImg" :key="item">
          <el-image
              class="my-passage-slide-image"
              :src="item"
              :fit="slidefit"/>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="my-passage-item-inner-row">
      <div class="my-passage-item-inner-col">
        <div class="my-passage-item-title">
          部门简介
        </div>
        <div class="my-passage-item-content">
          {{departmentInfo.describe}}
        </div>
      </div>
      <div class="my-passage-item-inner-col">
        <div class="my-passage-item-title">
          往年活动
        </div>
        <div class="my-passage-item-content">
          <div v-for="it in activity">
            <span>
              <span class="my-lable-red">·</span>
              {{it}}
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="my-passage-join-button" @click="redirect('RegisterPage')">
      加入我们
    </div>
  </div>
</template>
<script>
export default {
  name: 'Passage',
  data() {
      return {
        departmentInfo: {},
        activity: [],
        slidefit:'cover',
      };
    },
  methods: {
    redirect(pathname){
      this.$router.push({ name: pathname})
    },
  },
  created(){
    var that = this
    this.NowName = this.$route.query.department
    jQuery.get(
      'https://husteicstu.cn:3000/department',
      {name: this.NowName},
      function (res) {
        that.departmentInfo = res.department
        that.activity = res.department.activity.split("\n");
        console.log(that.activity)
        console.log(res.department)
      }
    )
  },
  watch: {
    $route(){
      var that = this
      this.NowName = this.$route.query.department
      jQuery.get(
        'https://husteicstu.cn:3000/department',
        {name: this.NowName},
        function (res) {
          that.departmentInfo = res.department
          that.activity = res.department.activity.split("\n");
          console.log(that.activity)
          console.log(res.department)
        }
      )
    }
  }
}
</script>

<style>
body{
  margin:0px;
  height: 1rem;
}
.my-passage-item-inner-col{
  display: flex;
  flex-direction: column;
  width: 30rem;
  margin-left: 5rem;
}
.my-passage-item-inner-row{
  display: flex;
  flex-direction: row;
  width: 80rem;
}
.my-lable-blue{
  display: inline-block;
  font-weight: bold;
  font-size: 1.1rem;
  color: rgb(243, 45, 45);
  width: 1rem;
}
.my-lable-red{
  font-weight: bold;
  font-size: 1.1rem;
  color: rgb(243, 45, 45);
  width: 1rem;
}
.my-head-first-row{
  width: 80rem;
  display: flex;
  flex-direction: row;
}
.my-passage-slide{
  width: 40rem;
  margin: 2rem 0rem;
}
.my-passage-slide-item{
  width: 40rem;
  height: 20rem;
}
.my-passage-slide-image{
  width: 40rem;
  height: 20rem;
}
.my-passage{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* padding-left: 4rem; */
}
.my-passage-title{
  font-size: 1.8rem;
  font-weight: bold;
  margin: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.my-passage-subtitle{
  font-size: 0.8rem;
  margin: 0.5rem;
  font-weight: 100;
}
.my-passage-item-title{
  display: flex;
  justify-content: flex-start;
  padding-bottom: 0.2rem;
  border-bottom: 1px rgb(143, 143, 143) solid;
  font-size: 1.2rem;
  font-weight: bold;
}
.my-passage-item-content{
  padding: 1.8rem;
  font-size: 0.9rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-indent:2em;
}
.my-passage-join-button{
  font-size: 1.5rem;
  width: 15rem;
  background:rgb(57, 149, 224);
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  height: 4rem;
  color:white;
  border-top-right-radius: 10rem;
  border-bottom-left-radius: 10rem;
  margin: 3rem;
}
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both
}

.box-card {
  width: 480px;
  margin: 2rem;
}
</style>
