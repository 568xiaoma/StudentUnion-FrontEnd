<template>
  <div>
    <div class="my-ventpanel-main-contain-col" :style="{width:adjustWidth}">
      <div class="my-ventpanel-main-contain-row">
        <LeftBar/>
        <transition :name="direction" >
          <router-view/>
        </transition>
      </div>
    </div>
  </div>
</template>
<script>
import LeftBar from '@/components/components/VentPage/LeftBar'

export default {
  name: 'VentPage',
  components:{
    LeftBar:LeftBar,
  },
  data() {
      return {
        adjustWidth: ''
      };
    },
  methods: {

  },
  mounted(){
    var is_mobi = navigator.userAgent.toLowerCase().match(/(ipod|ipad|iphone|android|coolpad|mmp|smartphone|midp|wap|xoom|symbian|j2me|blackberry|wince)/i) != null;
    if(is_mobi){
      this.adjustWidth = '80rem'
      // this.$message({
      //   message:'手机',
      //   type:'success'
      // })
    }else{
      this.adjustWidth = '100%'
    }
    jQuery.post(
      'https://husteicstu.cn:3000/count',
      function (res) {
        console.log(res)
      }
    )
  },
  watch: {
    $route(to, from) {
      const toDepth = to.path.split("/").length;
      const fromDepth = from.path.split("/").length;
      if (to.path == "/") {
        this.direction = "slide-right";
      } else if (from.path == "/") {
        this.direction = "slide-left";
      }else{
        this.direction = toDepth < fromDepth ? "slide-right" : "slide-left";
      }
    }
  }
}
</script>

<style>
body{
  margin:0px;
  height: 1rem;
}
.my-ventpanel-main-contain-col{
  display: flex;
  /* margin-left: 3rem; */
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
}
.my-ventpanel-main-contain-row{
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
}
.appView {
  position: relative;
  /* width: 60rem; */
  transition: transform 0.3s ease-out;
}
.slide-left-enter{
  transform: rotate(180deg) translateX(200%);
}
.slide-left-leave-active{
  transform: rotate(-180deg) translateX(200%);
}
.slide-right-enter {
  transform: rotate(90deg) translateX(200%);
}
.slide-right-leave-active{
  transform: rotate(-90deg) translateX(200%);
}
</style>
