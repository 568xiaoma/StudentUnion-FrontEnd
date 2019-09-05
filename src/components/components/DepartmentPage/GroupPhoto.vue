<template>
  <div>
    <div class="my-group-photo-col" :style="{width:adjustWidth}">
      <el-image 
        :src="ImgURL" 
        :fit="fit"
        class="my-group-photo"/>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DepartmentPage',
  data() {
    return {
      adjustWidth:'',
      fit:'cover',
      ImgURL:'http://cdn.husteicstu.cn/group-photo.JPG'
    };
  },
  methods: {
  },
  mounted(){
    var is_mobi = navigator.userAgent.toLowerCase().match(/(ipod|ipad|iphone|android|coolpad|mmp|smartphone|midp|wap|xoom|symbian|j2me|blackberry|wince)/i) != null;
    if(is_mobi){
      this.adjustWidth = '95rem'
      // this.$message({
      //   message:'手机',
      //   type:'success'
      // })
    }else{
      this.adjustWidth = '100%'
    }
  }
}
</script>

<style>
body{
  margin:0px;
  height: 1rem;
}
.my-group-photo{
  width: 90rem;
  height: 25rem;
}
.my-group-photo-col{
  width: 95rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
