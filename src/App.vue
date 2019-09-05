<template>
  <div>
    <TopBar/>
    <!-- <transition :name="direction" > -->
      <router-view  class="main-router-view"/>
    <!-- </transition> -->
    <BottomBar/>
    <FastMenu/>
  </div>
</template>

<script>
import BottomBar from '@/components/components/BottomBar'
import TopBar from '@/components/components/TopBar'
import FastMenu from '@/components/components/FastMenu'

export default {
  name: 'App',
  components:{
    TopBar:TopBar,
    BottomBar:BottomBar,
    FastMenu:FastMenu,
  },
  data(){
    return {
      direction:"",
    }
  },
  watch: {
    $route(to, from) {
      const toDepth = to.path.split("/").length;
      const fromDepth = from.path.split("/").length;
      if (to.path == "/") {
        this.direction = "el-fade-in";
      } else if (from.path == "/") {
        this.direction = "el-zoom-in-center";
      }else{
        this.direction = toDepth < fromDepth ? "el-fade-in" : "el-zoom-in-center";
      }
    }
  },
  mounted(){
    var that = this
    jQuery.post(
      'https://data.zz.baidu.com/urls',
      {
        site: 'https://husteicstu.cn',
        token: '72meZJbut2CVWPkc'
      },
      function (res) {
        that.departments = res.data
        // console.log(that.departments)
      }
    )
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.main-router-view {
  position: relative;
  width:100%;
}
</style>
