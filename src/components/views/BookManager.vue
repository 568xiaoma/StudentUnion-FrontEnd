<template>
  <div>
    <GroupPhoto/>
    <div class="my-bookmanager-main-contain-col">
      <div class="my-bookmanager-main-contain-row">
        <LeftBar/>
        <router-view/>
      </div>
    </div>
  </div>
</template>
<script>
import LeftBar from '@/components/components/BookManager/LeftBar'
export default {
  name: '',
  components:{
    LeftBar:LeftBar
  },
  data() {
      return {
        
      };
    },
  methods: {
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
.my-bookmanager-main-contain-col{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
}
.my-bookmanager-main-contain-row{
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
}
</style>
