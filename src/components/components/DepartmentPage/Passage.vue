<template>
  <div class="my-passage">
    <div class="my-passage-title">
      学生会办公室
    </div>
    <div class="my-passage-item-title">
      部门简介
    </div>
    <div class="my-passage-item-content">
      哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈
    </div>
    <div class="my-passage-item-title">
      部门简介
    </div>
    <div class="my-passage-item-content">
      哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈
    </div>
    <div class="my-passage-item-title">
      部门简介
    </div>
    <div class="my-passage-item-content">
      哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈
    </div>
    <div class="my-passage-item-title">
      活动照片
    </div>
    <el-carousel :interval="4000" type="card" class="my-passage-slide" height="20rem" width="95%">
      <el-carousel-item class="my-passage-slide-item" v-for="item in imgURLs" :key="item">
        <el-image
            class="my-passage-slide-image"
            :src="item"
            :fit="slidefit"/>
      </el-carousel-item>
    </el-carousel>
    <div class="my-passage-join-button">
      加入我们
    </div>
  </div>
</template>
<script>
export default {
  name: 'Passage',
  data() {
      return {
        slidefit:'cover',
        imgURLs:[
        'https://www-file.huawei.com/-/media/corporate/images/home/big-banner/2019/q1/hbanner_smartbank_cn.jpg',
        'https://www-file.huawei.com/-/media/corporate/images/home/big-banner/2019/q1/hbanner_smartbank_cn.jpg',
        'https://www-file.huawei.com/-/media/corporate/images/home/big-banner/2019/q1/hbanner_smartbank_cn.jpg'],
      };
    },
  methods: {
  },
}
</script>

<style>
body{
  margin:0px;
  height: 1rem;
}
.my-passage-slide{
  width: 95%;
  margin: 2rem 0rem;
}
.my-passage-slide-item{
  height: 20rem;
}
.my-passage-slide-image{
  height: 20rem;
}
.my-passage{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.my-passage-title{
  font-size: 1.8rem;
  font-weight: bold;
  margin: 2.5rem;
}
.my-passage-item-title{
  display: flex;
  justify-content: flex-start;
  width: 95%;
  padding-bottom: 0.2rem;
  border-bottom: 1px rgb(143, 143, 143) solid;
  font-size: 1.2rem;
  font-weight: bold;
}
.my-passage-item-content{
  margin: 0.8rem;
  font-size: 1rem;
  display: flex;
  justify-content: flex-start;
  width: 95%;
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
}
</style>
