<template>
  <div>
    <GroupPhoto/>
    <div class="my-department-main-contain-col">
      <div class="my-department-main-contain-row">
        <LeftBar/>
        <Passage/>
      </div>
    </div>
  </div>
</template>
<script>
import LeftBar from '@/components/components/DepartmentPage/LeftBar'
import GroupPhoto from '@/components/components/DepartmentPage/GroupPhoto'
import Passage from '@/components/components/DepartmentPage/Passage'


export default {
  name: 'DepartmentPage',
  components:{
    LeftBar:LeftBar,
    GroupPhoto:GroupPhoto,
    Passage:Passage,
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
.my-department-main-contain-col{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
}
.my-department-main-contain-row{
  display: flex;
  width: 80rem;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
}
</style>
