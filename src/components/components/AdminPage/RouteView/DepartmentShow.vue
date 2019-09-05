<template>
  <div class="my-department-show">
    <el-form class="my-department-show-form" ref="form" :model="form" label-width="100px">
      <el-form-item label="部门名称" >
        <el-input v-model="form.name" disabled></el-input>
      </el-form-item>
      <el-form-item label="部门全称">
        <el-input v-model="form.fullName"></el-input>
      </el-form-item>
      <el-form-item label="部长姓名">
        <el-input v-model="form.account"></el-input>
      </el-form-item>
      <el-form-item label="部门招新群">
        <el-input v-model="form.email"></el-input>
      </el-form-item>
      <el-form-item label="电话">
        <el-input v-model="form.phone"></el-input>
      </el-form-item>
      <el-form-item label="QQ">
        <el-input v-model="form.qq"></el-input>
      </el-form-item>
      <el-form-item label="一句话部门">
        <el-input v-model="form.departFunction"></el-input>
      </el-form-item>
      <el-form-item label="部门简介">
        <el-input type="textarea" class="my-department-show-form-font" v-model="form.describe" :rows="5"></el-input>
      </el-form-item>
      <el-form-item label="往年活动">
        <el-input type="textarea" class="my-department-show-form-font" v-model="form.activity" :rows="5"></el-input>
      </el-form-item>

      <div class="my-department-item-title">展示图</div>
      <div class="my-department-slide-img-container-outer">
        <div
          class="my-department-slide-img-container"
          v-for="(item,index) in imgShowUploaded">
          <el-image
            :key="index"
            class="my-uploaded-imgs"
            :src="item"
            :fit="fit"
            :data="index">
            </el-image>
          <i class="el-icon-close my-img-delete" @click="deleteShowItem(index)"></i>
        </div>
      </div>
      <el-upload
        class="my-department-show-form-photo"
        list-type="picture-card"
        :multiple="true"
        :action="actionPath"
        accept="image/jpeg,image/gif,image/png,image/bmp"
        :before-upload="beforeAvatarUploadShow"
        :data="postDataShow"
        :on-success="handleAvatarSuccessShow"
        :on-exceed="Onexceed">
        <i class="el-icon-plus"></i>
      </el-upload>
      
      
      <div class="my-department-item-title">特色图</div>
      <div class="my-department-slide-img-container-outer">
        <div
          class="my-department-slide-img-container"
          v-for="(item,index) in imgFeatureUploaded">
          <el-image
            :key="index"
            class="my-uploaded-imgs"
            :src="item"
            :fit="fit"
            :data="index">
            </el-image>
          <i class="el-icon-close my-img-delete" @click="deleteFeatureItem(index)"></i>
        </div>
      </div>
      <el-upload
        :limit="1"
        class="my-department-show-form-photo"
        list-type="picture-card"
        :multiple="true"
        :action="actionPath"
        accept="image/jpeg,image/gif,image/png,image/bmp"
        :before-upload="beforeAvatarUploadFeature"
        :data="postDataFeature"
        :on-success="handleAvatarSuccessFeature"
        :on-exceed="Onexceed">
        <i class="el-icon-plus"></i>
      </el-upload>
      
      
      
      <div class="my-department-item-title">部门图标</div>
      <div class="my-department-slide-img-container-outer">
        <div
          class="my-department-slide-img-container"
          v-for="(item,index) in imgLogoUploaded">
          <el-image
            :key="index"
            class="my-uploaded-imgs"
            :src="item"
            :fit="fit"
            :data="index">
            </el-image>
          <i class="el-icon-close my-img-delete" @click="deleteLogoItem(index)"></i>
        </div>
      </div>
      <el-upload
        :limit="1"
        class="my-department-show-form-photo"
        list-type="picture-card"
        :multiple="true"
        :action="actionPath"
        accept="image/jpeg,image/gif,image/png,image/bmp"
        :before-upload="beforeAvatarUploadLogo"
        :data="postDataLogo"
        :on-success="handleAvatarSuccessLogo"
        :on-exceed="Onexceed">
        <i class="el-icon-plus"></i>
      </el-upload>

      
      <div class="my-department-item-title">招新二维码</div>
      <div class="my-department-slide-img-container-outer">
        <div
          class="my-department-slide-img-container"
          v-for="(item,index) in imgQrcodeUploaded">
          <el-image
            :key="index"
            class="my-uploaded-imgs"
            :src="item"
            :fit="fit"
            :data="index">
            </el-image>
          <i class="el-icon-close my-img-delete" @click="deleteQrcodeItem(index)"></i>
        </div>
      </div>
      <el-upload
        :limit="1"
        class="my-department-show-form-photo"
        list-type="picture-card"
        :multiple="true"
        :action="actionPath"
        accept="image/jpeg,image/gif,image/png,image/bmp"
        :before-upload="beforeAvatarUploadQrcode"
        :data="postDataQrcode"
        :on-success="handleAvatarSuccessQrcode"
        :on-exceed="Onexceed">
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
  name: 'DepartmentShow',
  data() {
    return {
      fit: "contain",
      imgShowUploaded:[],
      imgFeatureUploaded:[],
      imgLogoUploaded:[],
      imgQrcodeUploaded:[],
      actionPath:"https://up.qbox.me/",
      form: {
        account: '',
        name: '',
        adminName: '',
        fullName: '',
        departFunction: '',
        activity: '',
        describe: '',
        imgs: {
          showImg: [],
          featureImg: [],
          LOGO: [],
          Qrcode: [],
        },
        phone: '',
        email: '',
        qq: '',
      },
      dialogImageUrlShow: '',
      dialogVisibleShow: false,
      dialogImageUrlFeature: '',
      dialogVisibleFeature: false,
      dialogImageUrlLogo: '',
      dialogVisibleLogo: false,
      dialogImageUrlQrcode: '',
      dialogVisibleQrcode: false,
      postDataShow:{
        token:"",
        key: ""
      },
      postDataFeature:{
        token:"",
        key: ""
      },
      postDataLogo:{
        token:"",
        key: ""
      },
      postDataQrcode:{
        token:"",
        key: ""
      },
      imageUrlShowList:[],
      imageUrlFeatureList:[],
      imageUrlLogoList:[],
      imageUrlQrcodeList:[],
    }
  },
  components:{
  },
  methods: {
    deleteShowItem(index){
      this.imgShowUploaded.splice(index,1)
    },
    deleteFeatureItem(index){
      this.imgFeatureUploaded.splice(index,1)
    },
    deleteLogoItem(index){
      this.imgLogoUploaded.splice(index,1)
    },
    deleteQrcodeItem(index){
      this.imgQrcodeUploaded.splice(index,1)
    },
    onSubmit() {
      var that = this;
      console.log(this.form.imgs)
      this.form.imgs.showImg = this.form.imgs.showImg.concat(this.imgShowUploaded)
      this.form.imgs = JSON.stringify(this.form.imgs)
      console.log(this.form)
      jQuery.post(
        'https://husteicstu.cn:3000/department',
        this.form,
        function (res) {
          console.log(res)
          that.form.imgs = JSON.parse(that.form.imgs)
          that.form.imgs.showImg = []
          that.$message({
            message: "提交成功",
            type: "success"
          })
        }
      )
    },
    Onexceed(){
      this.$message({
          message: '文件数量超出限制',
          type: 'warning'
        });
    },
    handleAvatarSuccessShow(res, file) {
      this.imageUrlShowList.push('http://cdn.husteicstu.cn/'+ res.key)
      this.form.imgs.showImg = this.imageUrlShowList
      console.log(this.form.imgs.showImg)
    },
    beforeAvatarUploadShow(file) {
      var that = this
      let suffix = file.name
      let key = encodeURI(`${suffix}`)
      this.postDataShow.key = key;
      console.log(file)
    },
    handleAvatarSuccessFeature(res, file) {
      this.imageUrlFeatureList.push('http://cdn.husteicstu.cn/'+ res.key)
      this.form.imgs.featureImg = this.imageUrlFeatureList
    },
    beforeAvatarUploadFeature(file) {
      var that = this
      let suffix = file.name
      let key = encodeURI(`${suffix}`)
      this.postDataFeature.key = key;
      console.log(file)
    },
    handleAvatarSuccessLogo(res, file) {
      console.log(this.form)
      this.imageUrlLogoList.push('http://cdn.husteicstu.cn/'+ res.key)
      this.form.imgs.LOGO = this.imageUrlLogoList
      console.log(this.form.imgs)
    },
    beforeAvatarUploadLogo(file) {
      var that = this
      let suffix = file.name
      let key = encodeURI(`${suffix}`)
      this.postDataLogo.key = key;
      console.log(file)
    },
    handleAvatarSuccessQrcode(res, file) {
      console.log(this.form)
      this.imageUrlQrcodeList.push('http://cdn.husteicstu.cn/'+ res.key)
      this.form.imgs.Qrcode = this.imageUrlQrcodeList
      console.log(this.form.imgs)
    },
    beforeAvatarUploadQrcode(file) {
      var that = this
      let suffix = file.name
      let key = encodeURI(`${suffix}`)
      this.postDataQrcode.key = key;
      console.log(file)
    },
  },
  created(){
    var that = this
    this.form.name = this.$route.query.department
    jQuery.get(
      'https://husteicstu.cn:3000/department',
      {name: this.form.name},
      function (res) {
        if(res.department.length == 0){
          that.form.name = that.$route.query.department
        }
        else{
          that.form = res.department
          that.form.imgs = that.form.imgs;
          that.imgShowUploaded = res.department.imgs.showImg
          that.imgFeatureUploaded = res.department.imgs.featureImg
          that.imgLogoUploaded = res.department.imgs.LOGO
          that.imgQrcodeUploaded = res.department.imgs.Qrcode
          that.form.imgs.showImg = []
        }
        console.log(that.form)
      }
    ),
    jQuery.get(
      'https://husteicstu.cn:3000/qiniutoken',
      function (res) {
        that.postDataShow.token = res.token
        that.postDataFeature.token = res.token
        that.postDataLogo.token = res.token
        that.postDataQrcode.token = res.token
      }
    )
  },
  watch: {
    $route(){
      var that = this
      this.form = {
        account: '',
        name: '',
        adminName: '',
        fullName: '',
        departFunction: '',
        activity: '',
        describe: '',
        imgs: {
          showImg: [],
          featureImg: [],
          LOGO: [],
          Qrcode: [],
        },
        phone: '',
        email: '',
        qq: '',
      }
      this.form.name = this.$route.query.department
      jQuery.get(
        'https://husteicstu.cn:3000/department',
        {name: this.form.name},
        function (res) {
          if(res.department.length == 0){
            that.form.name = that.$route.query.department
          }
          else{
            that.form = res.department
            that.form.imgs = that.form.imgs;
            that.imgShowUploaded = res.department.imgs.showImg
            that.imgFeatureUploaded = res.department.imgs.featureImg
            that.imgLogoUploaded = res.department.imgs.LOGO
            that.imgQrcodeUploaded = res.department.imgs.Qrcode
            that.form.imgs.showImg = []
            that.form.imgs.featureImg = []
            that.form.imgs.LOGO = []
            that.form.imgs.Qrcode = []
          }
        }
      )
    }
  }
}
</script>

<style>
.my-department-slide-img-container-outer{
  margin: 0 0px 8px 100px;
  display: flex;
  flex-direction: row;
}
.my-department-slide-img-container{
  margin: 0 6px 8px 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}
.my-uploaded-imgs{
  width: 148px; height: 148px;
  border: 1px rgb(218, 218, 218) solid;
  border-radius: 6px;
}


.my-department-show-form-photo{
  margin-left: 100px;
  margin-bottom: 3rem;
}
.my-department-item-title{
  font-size: 0.9rem;
  color: rgb(109, 109, 109);
  margin: 0rem 0rem 0rem 3rem;
}
.my-department-show{
  padding-top: 3rem;
  display: flex;
  width: 90%;
  margin: 2rem 2rem;
}
.my-department-show-form{
  width: 90%;
}
.my-department-show-form-width{
  width: 100%;
  height: 10rem;
}
.my-department-show-form-font{
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
