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
}
</script>

<style>
body{
  margin:0px;
  height: 1rem;
}
.my-right-main-contain-col{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
}
.my-right-main-contain-row{
  display: flex;
  width: 80rem;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
}
</style>
