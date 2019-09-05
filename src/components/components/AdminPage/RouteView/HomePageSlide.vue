<template>
  <div class="my-homepage-slide-show">
    <el-form class="my-homepage-slide-show-form" ref="form" :model="form" label-width="80px">
      <div class="my-homepage-slide-show-row">
        <div
          class="my-homepage-slide-img-container"
          v-for="(item,index) in imgUploaded">
          <el-image
            :key="index"
            class="my-uploaded-imgs"
            :src="item"
            :fit="fit"
            :data="index">
            </el-image>
          <i class="el-icon-close my-img-delete" @click="deleteItem(index)"></i>
        </div>
        <el-upload
          class="my-homepage-slide-show-form-photo"
          list-type="picture-card"
          :multiple="true"
          :action="actionPath"
          accept="image/jpeg,image/gif,image/png,image/bmp"
          :before-upload="beforeAvatarUpload"
          :data="postData"
          :on-success="handleAvatarSuccess"
          :on-remove="handleRemove">
          <i class="el-icon-plus"></i>
        </el-upload>
      </div>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即更新</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>

export default {
  name: 'HomepageAlert',
  data() {
    return {
      fit:"contain",
      imgUploaded:[],
      form: {
        imgs: [],
      },
      actionPath:"https://up.qbox.me/",
      imageUrlList:[],
      postData:{             //上传图片携带的参数
        token : "",
        key: "",
      }
    }
  },
  components:{
  },
  methods: {
    onSubmit() {
      var that = this
      console.log(this.imgUploaded.concat(this.form.imgs))
      jQuery.post(
        'https://husteicstu.cn:3000/imgsMap',
        {
          imgs: JSON.stringify(this.imgUploaded.concat(this.form.imgs))
        },
        function (res) {
          console.log(res)
          that.$message({
            message: '提交成功',
            type: 'success'
          });
        }
      )
    },
    handleAvatarSuccess(res, file) {
      this.imageUrlList.push('http://cdn.husteicstu.cn/'+ res.key)
      this.form.imgs = this.imageUrlList
    },
    beforeAvatarUpload(file) {
      var that = this
      let suffix = file.name
      let key = encodeURI(`${suffix}`)
      this.postData.key = key;
      console.log(file)
    },
    handleRemove(file, fileList) {
      var i = this.imageUrlList.indexOf('http://cdn.husteicstu.cn/'+file.name)
      this.imageUrlList.splice(i,1)
      console.log(this.imageUrlList)
    },
    deleteItem(index){
      console.log(index)
      this.imgUploaded.splice(index,1)
      console.log(this.imgUploaded)
    }
  },
  mounted(){
  },
  created(){
    var that = this
    jQuery.get(
      'https://husteicstu.cn:3000/imgsMap',
      function (res) {
        console.log(JSON.parse(res.data.imgs))
        // that.form.imgs = JSON.parse(res.data.imgs)
        that.imgUploaded = JSON.parse(res.data.imgs)
      }
    ),
    jQuery.get(
      'https://husteicstu.cn:3000/qiniutoken',
      function (res) {
        that.postData.token = res.token
        console.log(that.postData)
      }
    )
  },
}
</script>

<style>
.my-homepage-slide-show-form-photo{
  margin-left: 0.2rem;
  margin-bottom: 1rem;
}
.my-img-delete{
  color: rgb(247, 247, 247);
  border-radius: 6px;
  background: #85858586;
  width: 0.9rem;
  height: 0.9rem;
  position: relative;
  padding: 0.3rem;
  right: 1.5rem;
}
.my-img-delete:hover{
  background: #4b4b4b86;
  color: rgb(255, 255, 255);
}
.my-homepage-slide-img-container{
  margin: 0 -16px 8px 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}
.my-uploaded-imgs{
  width: 148px; height: 148px;
  border: 1px rgb(218, 218, 218) solid;
  border-radius: 6px;
}
.my-homepage-slide-show{
  padding-top: 3rem;
  display: flex;
  width: 90%;
  margin: 2rem 2rem;
}
.my-homepage-slide-show-form{
  width: 100%;
}
.my-homepage-slide-show-row{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
