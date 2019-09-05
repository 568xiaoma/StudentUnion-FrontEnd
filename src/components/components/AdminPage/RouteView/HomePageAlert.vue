<template>
  <div class="my-homepage-alert-show">
    <el-form class="my-homepage-alert-show-form" ref="form" :model="form" label-width="80px">
      <el-form-item label="活动名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="宣传网址">
        <el-input v-model="form.url"></el-input>
      </el-form-item>
      <el-upload
        class="my-homepage-slide-show-form-photo"
        :on-exceed="ImageExceed"
        :limit="1"
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
      actionPath:"https://up.qbox.me/",
      imageUrlList: [],
      form: {
        name: '',
        url: 'https://',
        img: '',
      },
      imageUrl: '',
      postData:{             //上传图片携带的参数
        token : "",
        key: "",
      }
    }
  },
  components:{
  },
  methods: {
    ImageExceed(){
      this.$message({
        message:"首页弹窗限制一张图",
        type: "warning",
      })
    },
    handleAvatarSuccess(res, file) {
      this.imageUrlList.push('http://cdn.husteicstu.cn/'+ res.key)
      this.form.img = this.imageUrlList
    },
    beforeAvatarUpload(file) {
      var that = this
      let suffix = file.name
      let key = encodeURI(`${suffix}`)
      this.postData.key = key;
      console.log(file)
    },
    onSubmit() {
      this.form.img = JSON.stringify(this.form.img)
      var that = this
      jQuery.post(
        'https://husteicstu.cn:3000/PopupView',
        this.form,
        function (res) {
          that.form.img = JSON.parse(that.form.img)
          that.$message({
            message: '提交成功',
            type: 'success',
          });
        }
      )
    },
    handleRemove(file, fileList) {
      var i = this.imageUrlList.indexOf('http://cdn.husteicstu.cn/'+file.name)
      this.imageUrlList.splice(i,1)
      console.log(this.imageUrlList)
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    }
  },
  mounted(){
  },
  created(){
    var that = this
    jQuery.get(
      'https://husteicstu.cn:3000/PopupView',
      function (res) {
        console.log(res)
      }
    ),
    jQuery.get(
      'https://husteicstu.cn:3000/qiniutoken',
      function (res) {
        that.postData.token = res.token
      }
    )
  },
}
</script>

<style>

.my-homepage-slide-show-form-photo{
  margin-left: 5rem;
  margin-bottom: 1rem;
}
.my-homepage-alert-show{
  padding-top: 3rem;
  display: flex;
  width: 90%;
  margin: 2rem 10rem;
}
.my-homepage-alert-show-form{
  width: 80%;
}
.my-homepage-alert-show-form-width{
  width: 100%;
  height: 10rem;
}
.my-homepage-alert-show-form-font{
  font-family: "STSong";
  font-size: 0.9rem;
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
