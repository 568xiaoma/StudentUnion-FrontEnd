<template>
  <div class="my-classheader">
    <div class="my-classheader-header">
      研班风采
      <div class="my-classheader-title-line"></div>
      <div class="my-classheader-title-content">
        将你带进校园，陪伴你们度过两年时光的Ta
      </div>
    </div>
    <div class="my-classheader-imgs">
      <div class="my-classheader-img-outer" v-for="item in imgs">
        <!-- <el-popover
          placement="right"
          trigger="click">
          <el-image
            class="my-classheader-img-init"
            :src="'../../../static/classHeader/'+item"/>
          <el-image
            class="my-classheader-img"
            slot="reference"
            :src="'../../../static/classHeader/'+item"/>
        </el-popover> -->
        <el-image
            class="my-classheader-img"
            slot="reference"
            :src="'../../../static/classHeader/'+item"/>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: '',
  data() {
      return {
        imgs:['shiyanban.jpg','12.jpg','34.jpg','56.jpg','78.jpg','910.jpg']
      };
    },
  methods: {
    
  }
}
</script>

<style>
.my-classheader{
  width:100%;
  display: flex;
  flex-wrap:wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.my-classheader-header{
  width: 80rem;
  font-size: 2rem;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 3rem;
}
.my-classheader-title-line{
  width: 3rem;
  margin:0.2rem;
  border-top: 1px rgb(211, 211, 211) solid;
}
.my-classheader-title-content{
  margin-top: 0.5rem;
  font-size: 1rem;
  color: rgb(148, 148, 148);
  font-weight: 100;
}
.my-classheader-img{
  width: 35rem;
  margin: 1rem 0.5rem;
}
.my-classheader-img-init{
  height: 100%;
  margin: 1rem 0.5rem;
}
.my-classheader-imgs{
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  width: 74rem;
}
</style>
