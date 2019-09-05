<template>
  <div>
    <div class="my-homepage-slide-container-outer" :style="{width:adjustWidth}">
      <div class="my-homepage-slide-container" :style="{width:adjustWidth}">
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
        adjustWidth:'',
        slideHeight:'',
        slideWidth:'',
        slidefit:'cover',
        imgURLs:[],
      };
    },
  methods: {
  },
  mounted(){
    var is_mobi = navigator.userAgent.toLowerCase().match(/(ipod|ipad|iphone|android|coolpad|mmp|smartphone|midp|wap|xoom|symbian|j2me|blackberry|wince)/i) != null;
    if(is_mobi){
      this.adjustWidth = '80rem'
      this.$message({
        message:'手机',
        type:'success'
      })
    }else{
      this.adjustWidth = '100%'
    }
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
  width: 100%;
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
