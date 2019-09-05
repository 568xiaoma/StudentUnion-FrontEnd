<template>
  <div class="my-bottom" :style="{width:adjustWidth}">
    <div class="my-copy" :style="{width:adjustWidth}">Copyright ©2019 Wuhan,China.All Right Reserved</div>
  </div>
</template>
<script>
export default {
  name: 'BottomBar',
  data() {
      return {
        adjustWidth:'',
        fit:'cover',
        ImgURL:'../../static/img/qr-code.png'
      };
    },
  methods: {
  },
  mounted(){
    var is_mobi = navigator.userAgent.toLowerCase().match(/(ipod|ipad|iphone|android|coolpad|mmp|smartphone|midp|wap|xoom|symbian|j2me|blackberry|wince)/i) != null;
    if(is_mobi){
      this.adjustWidth = '80rem'
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
.my-bottom{
  /* position: fixed; */
  bottom: 0px;
  padding-top: 2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background: #0ba0a0; */
  /* background-image: url('../../assets/bottom-bar-back-image1.png'); */
}
.my-copy{
  width: 100%;
  /* background-color: #059797; */
  display: flex;
  flex-direction: column;
  color:#525252;
  align-items: center;
  font-size: 0.7rem;
  padding: 0.5rem 0rem;
}
</style>
