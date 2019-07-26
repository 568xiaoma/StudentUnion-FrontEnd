<template>
  <div>
    <div class="my-homepage-slide-container-outer" >
      <div class="my-homepage-slide-container">
      <el-carousel 
        :interval="4000" 
          :width="'80rem'"
          :height="'40rem'"
        class="my-homepage-slide-center">
        <el-carousel-item
          v-for="item in imgURLs" 
          :key="item" 
          :width="'80rem'"
          :height="'40rem'"
          class="my-homepage-slide-center">
          <el-image
            class="my-slide-image"
            :src="item"
            :fit="slidefit"/>
        </el-carousel-item>
      </el-carousel>  
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SlideImage',
  data() {
      return {
        slideHeight:'',
        slideWidth:'',
        slidefit:'cover',
        imgURLs:[],
      };
    },
  methods: {
  },
  mounted(){
    var that = this
    jQuery.get(
      'https://husteicstu.cn:3000/imgsMap',
      function (res) {
        that.imgURLs = JSON.parse(res.data.imgs)
      }
    )
  }
}
</script>

<style>
body{
  margin:0px;
}
.my-homepage-slide-center{
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80rem;
  height: 40rem;
}
.my-homepage-slide-container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80rem;
  height: 40rem;
}
.my-homepage-slide-container-outer{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}
</style>
