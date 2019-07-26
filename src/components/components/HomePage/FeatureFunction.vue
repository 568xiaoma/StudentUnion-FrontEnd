<template>
  <div class="my-button-block">
    <el-image
    class="my-function-back-image"
    :src="url"
    :fit="fit"/>
    <div class="my-function-row">
      <div class="my-function-column" v-for="item in FunInfos" @click="redirect(item.pathname)">
        <i class="my-function-icon" :class="item.iconClass"></i>
        <div class="my-function-Chinese">{{item.functionName}}</div>
        <div class="my-function-English">{{item.functionEnglish}}</div>
      </div>
    </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'FeatureFunction',
  data() {
      return {
        fit:'cover',
        url: 'http://down-qn.699pic.com/photo/40006/2210.jpg?sign=6e24ea326a418950e9ef3430a929a13b&t=5d19d8d2&n=%C9%E3%CD%BC%CD%F8_400062210.jpg',
        FunInfos:[
          {
            functionName: "我要维修",
            functionEnglish: "HyAEA",
            iconClass:"el-icon-edit",
            pathname:"",
          },
          {
            functionName: "宣传预约",
            functionEnglish: "HyAEA",
            iconClass:"el-icon-edit",
            pathname:"",
          },
          {
            functionName: "加入我们",
            functionEnglish: "HyAEA",
            iconClass:"el-icon-edit",
            pathname:"RegisterPage",
          },
          {
            functionName: "会议室申请",
            functionEnglish: "HyAEA",
            iconClass:"el-icon-edit",
            pathname:"",
          },
          {
            functionName: "启明书屋",
            functionEnglish: "HyAEA",
            iconClass:"el-icon-edit",
            pathname:"",
          },
        ]
      };
    },
  methods: {
    redirect(pathname){
      if(pathname == ''){
        this.$message({
          message: '暂未开放，敬请期待',
          type: 'warning'
        });
      }
      else{
        this.$router.push({ name: pathname})
      }
    },
  }
}
</script>

<style>
.my-button-block{
  width: 100%;
  height: 20rem;
}
.my-image-button{
  width: 100%;
  height: 20rem;
  z-index: 10;
  color: white;
}
.my-function-back-image{
  width: 100%;
  height: 20rem;
  z-index:0;
}
.my-function-row{
  color: white;
  display:flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 20rem;
  position: relative;
  bottom:20rem;
}
.my-function-column{
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 25%;
  border-left: 1px rgba(197, 197, 197, 0.521) solid;
  border-right: 1px rgba(197, 197, 197, 0.521) solid;
}
.my-function-column:hover{
  background: rgba(41, 41, 49, 0.966);
  transition: background-color 0.5s;
}
.my-function-icon{
  font-size: 3rem;
  margin: 1rem;
}
.my-function-Chinese{
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  font-family: "微软雅黑";
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.my-function-English{
  font-family: "Marzo";
  font-size: 1.3rem;
  padding-bottom: 1rem;
}
</style>
