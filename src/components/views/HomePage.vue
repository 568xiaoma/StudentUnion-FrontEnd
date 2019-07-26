<template>
  <div>
    <SlideImage/>
    <div class="my-row-display">
      <ImportantNotice/>
      <ImageNotice/>
    </div>
    <FeatureFunction/>
    <Department></Department>
    <StudentUnionStar></StudentUnionStar>
  </div>
</template>
<script>
import SlideImage from '@/components/components/HomePage/SlideImage'
import ImportantNotice from '@/components/components/HomePage/ImportantNotice'
import FeatureFunction from '@/components/components/HomePage/FeatureFunction'
import Department from '@/components/components/HomePage/Department'
import StudentUnionStar from '@/components/components/HomePage/StudentUnionStar'
import ImageNotice from '@/components/components/HomePage/ImageNotice'

export default {
  name: 'HomePage',
  components:{
    SlideImage:SlideImage,
    ImportantNotice:ImportantNotice,
    FeatureFunction:FeatureFunction,
    Department:Department,
    StudentUnionStar:StudentUnionStar,
    ImageNotice:ImageNotice,
  },
  mounted(){
    // this.$message({
    //   dangerouslyUseHTMLString: true,
    //   showClose: true,
    //   iconClass:'none',
    //   duration: 3000,
    //   message: '<img src="http://5b0988e595225.cdn.sohucs.com/images/20170915/cc491435b9b44b16860c2e01fcea4761.jpeg">'
    // });
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
  }
}
</script>

<style>
body{
  margin:0px;
  height: 1rem;
}
.my-row-display{
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.my-home-alert-img{
  width: 100%;
}
</style>
