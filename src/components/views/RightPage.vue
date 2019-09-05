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

import LeftBar from '@/components/components/RightPage/LeftBar'


export default {
  name: 'RightPage',
  components:{
    LeftBar:LeftBar,
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
body{
  margin:0px;
  height: 1rem;
}
.my-right-main-contain-col{
  display: flex;
  /* margin-left: 3rem; */
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80rem;
}
.my-right-main-contain-row{
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
}
</style>
