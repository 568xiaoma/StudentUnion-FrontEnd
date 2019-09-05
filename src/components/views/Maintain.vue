<template>
  <div>
    <div class="my-col-display" :style="{width:adjustWidth}">
      <div class="my-row-display">
        <MaintainForm/>
      </div>
    </div>
  </div>
</template>
<script>
import MaintainForm from '@/components/components/Maintain/MaintainForm'


export default {
  name: 'RegitserPage',
  components:{
    MaintainForm:MaintainForm,
  },
  data() {
      return {
        adjustWidth: '',
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
</style>
