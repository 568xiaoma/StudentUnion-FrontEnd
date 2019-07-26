<template>
  <div class="my-star-block">
    <div class="my-star-header">
      每月之星
      <div class="my-star-title-line"></div>
      <div class="my-star-title-content">
        学生会大家庭欢迎你欢迎你欢迎你
      </div>
    </div>
    <div class="my-star-row">
      <div class="my-star-item">
        <el-image
        style="width: 20rem; height: 20rem"
        :src="url"
        :fit="fit"/>
        <div class="my-star-text-header">刘羿</div>
        <div class="my-star-text-content">促进长江黄河流域环境与气候的良性发展，保护动植物、土壤、珍稀生态群，共同维护生态可持续发展。</div>
        <div class="my-star-text-button">了解更多</div>
      </div>
      <div class="my-star-item">
        <el-image
        style="width: 20rem; height: 20rem"
        :src="url"
        :fit="fit"/>
        <div class="my-star-text-header">刘羿</div>
        <div class="my-star-text-content">促进长江黄河流域环境与气候的良性发展，保护动植物、土壤、珍稀生态群，共同维护生态可持续发展。</div>
        <div class="my-star-text-button">了解更多</div>
      </div>
      <div class="my-star-item">
        <el-image
        style="width: 20rem; height: 20rem"
        :src="url"
        :fit="fit"/>
        <div class="my-star-text-header">刘羿</div>
        <div class="my-star-text-content">促进长江黄河流域环境与气候的良性发展，保护动植物、土壤、珍稀生态群，共同维护生态可持续发展。</div>
        <div class="my-star-text-button">了解更多</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'StudentUnionStar',
  data() {
      return {
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        fit: "none"
      };
    },
  methods: {
  }
}
</script>

<style>
body{
  margin:0px;
  height: 1rem;
}
.my-star-header{
  font-size: 2rem;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 3rem;
}
.my-star-title-line{
  width: 3rem;
  margin:0.2rem;
  border-top: 1px rgb(211, 211, 211) solid;
}
.my-star-title-content{
  margin-top: 0.5rem;
  font-size: 1rem;
  color: rgb(148, 148, 148);
  font-weight: 100;
}
.my-star-block{
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.my-star-row{
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.my-star-item{
  width: 20rem;
  margin: 1rem 1rem;
  background-color: rgb(230,230,230);
}
.my-star-text-header{
  font-size: 1.5rem;
  font-weight: bold;
  font-family: "微软雅黑";
  color: rgb(143,143,143);
  margin: 0.2rem 1rem;
}
.my-star-text-content{
  font-size: 1rem;
  font-family: "微软雅黑";
  color: rgb(143,143,143);
  margin: 0.4rem 1rem;
}
.my-star-text-button{
  margin: 0.3rem 0rem 1rem 12rem;
  color: rgb(143,143,143);
  background-color: #ffffff;
  font-family: "Hiragino Sans GB";
  width: 6.5rem;
  height: 2.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom-left-radius: 10rem;
  border-top-right-radius: 10rem;

}
</style>
