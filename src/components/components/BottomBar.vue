<template>
  <div class="my-bottom">
    <div class="my-bottom-bar">
      <div class="my-bottom-column">
        <div class="my-bottom-column-header">
          <i class="el-icon-s-promotion my-logo-bottom-color"></i>
          学生会公邮
        </div>
        <div class="my-bottom-column-item">
          学生会办公室公邮：11111111@qq.com
        </div>
        <div class="my-bottom-column-item">
          学生会权益部公邮：11111111@qq.com
        </div>
        <div class="my-bottom-column-item">
          学生会体育部公邮：11111111@qq.com
        </div>
      </div>
      <div class="my-qr-code">
        <img 
        :src="ImgURL" 
        class="my-qr-code-image"/>
        <div class="my-qr-code-text">
          <i class="el-icon-chat-dot-round my-logo-bottom-color"
            style="font-size: 1.2rem;margin-top: 0.2rem"></i>
          饺子馅等你
        </div>
      </div>
    </div>
    <div class="my-copy">Copyright ©2019 Wuhan,China.All Right Reserved</div>
  </div>
</template>
<script>
export default {
  name: 'BottomBar',
  data() {
      return {
        fit:'cover',
        ImgURL:'../../static/img/qr-code.png'
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
.my-logo-bottom-color{
  color: rgb(76, 133, 218);
}
.my-qr-code{
  margin-top: 3.5rem;
  margin-left: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.my-qr-code-image{
  width: 6rem;
  height: 6rem;
} 
.my-qr-code-text{
  font-size: 1rem;
  font-weight: bold;
  margin-top: 0.2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.my-bottom{
  padding-top: 2rem;
  width: 100%;
  /* background: #0ba0a0; */
  /* background-image: url('../../assets/bottom-bar-back-image1.png'); */
}
.my-copy{
  width: 100%;
  /* background-color: #059797; */
  display: flex;
  flex-direction: column;
  color:#525252;
  align-items: center;
  font-size: 0.7rem;
  padding: 0.5rem 0rem;
}
.my-bottom-bar{
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-top: 1px #e7e7e7 solid;
}
.my-bottom-column{
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  margin-right: 15%;
}
.my-bottom-column-header{
  font-size: 2rem;
  color:#525252;
  font-weight: bold;
  margin: 2rem 0.5rem 0.5rem 0.5rem;
  /* text-shadow: 5px 5px 5px rgb(56, 56, 56); */
}
.my-bottom-column-item{
  color:#525252;
  margin: 0.5rem;
  font-family: "微软雅黑";
  font-size: 0.8rem;
}
.my-bottom-button-column{
  width: 30rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.my-bottom-button-column-header{
  /* text-shadow: 5px 5px 5px rgb(56, 56, 56); */
  font-size: 2rem;
  color:#525252;
  font-weight: bold;
  margin: 2rem 0.5rem 0.5rem 0.5rem;
}
.my-bottom-column-button{
  background-color: #ffffff;
  padding: 0.6rem 1.2rem;
  margin: 0.5rem 1rem;
  border-radius: 5rem;
  font-weight: bold;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
}
.my-bottom-row-button{
  width: 20rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap:wrap;
}
</style>
