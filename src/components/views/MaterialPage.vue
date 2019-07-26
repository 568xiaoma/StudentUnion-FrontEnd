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
  }
}
</script>

<style>
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
