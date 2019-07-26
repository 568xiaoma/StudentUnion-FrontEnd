<template>
  <div>
    <div class="my-ventpanel-main-contain-col">
      <div class="my-ventpanel-main-contain-row">
        <LeftBar/>
        <transition :name="direction" >
          <router-view  class="appView"/>
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
        
      };
    },
  methods: {

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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
}
.my-ventpanel-main-contain-row{
  display: flex;
  width: 80rem;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
}
.appView {
  position: relative;
  width:100%;
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
