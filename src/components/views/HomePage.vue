<template>
  <div>
    <div class="my-col-display" :style="{width:adjustWidth}">
      <SlideImage/>
    </div>
    <div class="my-col-display" :style="{width:adjustWidth}">
      <div class="my-row-display">
        <ImportantNotice/>
        <ImageNotice/>
      </div>
    </div>
    <div class="my-col-display" :style="{width:adjustWidth}">
      <div class="my-row-display-1">
        <FeatureFunction/>
      </div>
    </div>
    <div class="my-col-display" :style="{width:adjustWidth}">
      <Department></Department>
    </div>
    <div class="my-col-display" :style="{width:adjustWidth}">
      <ClassHeader></ClassHeader>
    </div>
    
    <!-- <StudentUnionStar></StudentUnionStar> -->
  </div>
</template>
<script>
import SlideImage from '@/components/components/HomePage/SlideImage'
import ImportantNotice from '@/components/components/HomePage/ImportantNotice'
import FeatureFunction from '@/components/components/HomePage/FeatureFunction'
import Department from '@/components/components/HomePage/Department'
import StudentUnionStar from '@/components/components/HomePage/StudentUnionStar'
import ImageNotice from '@/components/components/HomePage/ImageNotice'
import ClassHeader from '@/components/components/HomePage/ClassHeader'

export default {
  name: 'HomePage',
  components:{
    SlideImage:SlideImage,
    ImportantNotice:ImportantNotice,
    FeatureFunction:FeatureFunction,
    Department:Department,
    StudentUnionStar:StudentUnionStar,
    ImageNotice:ImageNotice,
    ClassHeader:ClassHeader
  },
  data(){
    return{
      adjustWidth: ''
    }
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
              window.open(res.data.url);
            }
          }
        });
      }
    )
    jQuery.post(
      'https://husteicstu.cn:3000/count',
      function (res) {
        console.log(res)
      }
    )
  }
}
</script>

<style>
body{
  margin:0px;
  height: 1rem;
}
.my-col-display{
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.my-row-display{
  width: 80rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.my-row-display-1{
  width: 80rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.my-home-alert-img{
  width: 100%;
}
</style>
