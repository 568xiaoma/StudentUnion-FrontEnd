<template>
  <div>
    <el-image 
      :src="ImgURL" 
      :fit="fit"
      class="my-group-photo"/>
  </div>
</template>
<script>
export default {
  name: 'DepartmentPage',
  data() {
      return {
        fit:'cover',
        ImgURL:'https://raw.githubusercontent.com/568xiaoma/learngit/master/group-photo.JPG'
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
.my-group-photo{
  width: 100%;
  height: 25rem;
}
</style>
