<template>
  <div>
    <div class="my-right-main-contain-col">
      <div class="my-right-main-contain-row">
        <LeftBar/>
        <router-view/>
      </div>
    </div>
  </div>
</template>
<script>
import LeftBar from '@/components/components/MaterialPage/LeftBar'

export default {
  name: 'AdminPage',
  components:{
    LeftBar:LeftBar
  },
  mounted(){
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
.my-right-main-contain-col{
  display: flex;
  /* margin-left: 3rem; */
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
}
.my-right-main-contain-row{
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
}
</style>
