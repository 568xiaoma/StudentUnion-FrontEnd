<template>
  <div class="my-header" :style="{width:adjustWidth}">
    <div class="my-header-col">
      <el-menu  :default-active="activeIndex" 
                class="el-menu-demo my-menu" 
                mode="horizontal" 
                @select="handleSelect">
        <div class="my-logo-text">
          <img
          @click="redirect('HomePage')"
          style="height: 100%"
          src="../../assets/student-union-logo.jpg"/>
          <div class="my-title">电子信息与通信学院学生会</div>
        </div>
        <el-menu-item index="1" @click="redirect('HomePage')">
          主页
        </el-menu-item>
        <el-menu-item index="6" @click="open">
          最新活动
        </el-menu-item>
        <el-submenu index="2">
          <template slot="title">学习资料</template>
          <el-menu-item index="2-1" @click="redirect('SoftWareForm')">常用工具</el-menu-item>
          <el-menu-item index="2-2" @click="redirect('MaterialForm')">课程资料</el-menu-item>
        </el-submenu>
        <el-menu-item index="3" @click="redirect('RightPage')">
          权益中心
        </el-menu-item>
        </el-menu-item>
        <el-submenu index="4">
          <template slot="title">EIC论坛</template>
          <a href="http://47.106.111.48:4567"><el-menu-item index="4-1">访问论坛</el-menu-item></a>
          <a href="https://raw.githubusercontent.com/568xiaoma/EIC_App_image/master/EIC%E8%AE%BA%E5%9D%9B%20.apk"><el-menu-item index="4-2">下载APP</el-menu-item></a>
        </el-submenu>
        <el-menu-item index="5" @click="redirect('VentWall')">
          心理宣泄版
        </el-menu-item>
      </el-menu>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TopBar',
  data() {
    return {
      adjustWidth:'',
      activeIndex: '1',
      activeIndex2: '1',
      fit:'scale-down',
    };
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
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    open() {
      var that = this
      jQuery.get(
        'https://husteicstu.cn:3000/PopupView',
        function (res) {
          console.log(res)
          var msgHTMLhead = '<img class="my-home-alert-img" src="'
          var msgHTMLtail = '">'
          that.$alert(msgHTMLhead+JSON.parse(res.data.img)[0]+msgHTMLtail, 'HTML 片段', {
            dangerouslyUseHTMLString: true,
            title: res.data.name,
            confirmButtonText:"了解详情",
            showCancelButton:true,
            callback:function(action, instance){
              if(action == 'confirm'){
                console.log(res.data.url)
                window.open(res.data.url);
              }
            }
          });
        }
      )
    },
    redirect(pathname){
      this.$router.push({ name: pathname})
    },
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
a{ 
text-decoration:none; 
color:rgb(156, 156, 156); 
} 
.my-header-col{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 120rem;
}
.my-title{
  white-space: nowrap;/*规定段落中的文本不进行换行 */
}
.my-header{
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.my-logo-text{
  display: flex;
  flex-direction: row;
  align-items: center;
  font-weight: bold;
  font-size: 1.2rem;
  color: rgb(53, 53, 53);
  margin-right: 8rem;
}
.my-header-img{
  width: 100%;
  position: absolute;
  left: 0;
  top:0;
  z-index: 0;
}
.my-menu{
  display: flex;
  height: 3.7rem;
  justify-content: space-between;
  border: 0;
  padding: 0;
  margin: 0;
  /* width: 100%; */
  z-index: 10;
}
.my-notice{
  display: flex;
  align-items:center;
  margin-right: 1rem;
  font-size: 1.2rem;
}
body{
  margin:0px;
  height: 1rem;
}
.my-home-alert-img{
  width: 100%;
}
</style>
