<template>
  <div class="my-register-form" :style="{width: adjustWidth}">
    <div class="my-register-form-title">电子信息与通信学院学生会招新报名表</div>
    <div class="my-register-line"/>
    <div class="my-register-form-subtitle">报名表是学生会对所有想加入学生会大家庭同学的第一次考核，请大家认真对待、仔细填写</div>
    <el-form ref="form" :model="form" label-width="80px" class="my-register-form-inner">
      <el-form-item label="姓名" prop="name" :rules="rules.name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="班级" prop="class" :rules="rules.class">
        <el-select v-model="form.class" placeholder="请选择班级">
          <el-option v-for="(item,index) in classes" :label="item.label" :value="item.label"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="城市" prop="city" :rules="rules.city">
        <el-cascader
          v-model="city"
          :options="cityData"
          @change="handleChange">
        </el-cascader>
      </el-form-item>
      <el-form-item label="性别" prop="sex" :rules="rules.sex">
        <el-select v-model="form.sex" placeholder="请选择性别">
          <el-option label="男" value="boy"></el-option>
          <el-option label="女" value="girl"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="学号" prop="uid" :rules="rules.uid">
        <el-input v-model="form.uid"></el-input>
      </el-form-item>
      <el-form-item label="手机号码" prop="phone" :rules="rules.phone">
        <el-input v-model="form.phone"></el-input>
      </el-form-item>
      <el-form-item label="号码确认" prop="phoneValid" :rules="rules.phoneValid">
        <el-input v-model="form.phoneValid"></el-input>
      </el-form-item>
      <el-form-item label="兴趣爱好" prop="hobby" :rules="rules.hobby">
        <el-input v-model="form.hobby"></el-input>
      </el-form-item>
      <el-form-item label="第一志愿" prop="FirstExcept" :rules="rules.FirstExcept">
        <el-select v-model="form.FirstExcept" placeholder="请选择第一志愿">
          <el-option v-for="(item,index) in departments" :label="item.label" :value="item.label"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="第二志愿" prop="SecondExcept" :rules="rules.SecondExcept">
        <el-select v-model="form.SecondExcept" placeholder="请选择第二志愿">
          <el-option v-for="(item,index) in departments" :label="item.label" :value="item.label"></el-option>
        </el-select>
      </el-form-item>
      <el-radio v-model="form.AdjustedOrNot" label="1">服从调剂</el-radio>
      <el-radio v-model="form.AdjustedOrNot" label="2">不服从调剂</el-radio>
      <el-form-item label="个人简介" prop="SelfIntroduction" :rules="rules.SelfIntroduction" style="margin-top: 1rem;">
        <el-input type="textarea" v-model="form.SelfIntroduction" style="font-size:1.0rem;font-family:'Arial'"></el-input>
      </el-form-item>
      <div class="my-register-form-photo">
        <div class="my-register-form-photo-title"><span style='color: red'>*</span>上传照片</div>
        <el-upload
          class="avatar-uploader"
          :action="actionPath"
          :show-file-list="false"
          accept="image/jpeg,image/gif,image/png,image/bmp"
          :before-upload="beforeAvatarUpload"
          :data="postData"
          :on-success="handleAvatarSuccess">
          <img v-if="this.form.img" :src="this.form.img" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </div>
      <div class="my-register-form-photo-title" style='margin-left: 4.5rem;color: red;font-size: 0.6rem;margin-bottom: 0.5rem;'>
        手机端上传速度可能较慢，请等待图片显示后再点击提交按钮，等待浏览器上方出现提交成功提示后，即为成功
      </div>
     
      <el-form-item>
        <div class="my-buttons-container">
          <div class="my-two-buttons-container">
            <el-button type="primary" @click="onSubmit('form')">立即提交</el-button>
            <el-button>取消</el-button>
          </div>
          <el-popover
            placement="top"
            width="400"
            trigger="click">
            <div class="my-find-infomation">
              <el-input v-model="find.stuID" placeholder="请输入学号"></el-input>
              <el-input style="margin-left: 0.4rem" v-model="find.tel" placeholder="请输入手机号"></el-input>
              <el-button style="margin-left: 0.4rem" @click="onFind()">确定</el-button>
            </div>
            <el-button type="primary" slot="reference">查询已提交信息</el-button>
          </el-popover>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import cityData from '../../../../static/cityData.json'
import cityPos from '../../../../static/city.json'
const validateUID = (rule, value, callback) => {
  if ((!parseInt(value.slice(1)) == false) && (value.slice(0,5) == 'U2019') && (value.length == 10)) {
    callback()
  } else {
    callback(new Error('请输入正确学号，学号格式为U2019XXXXX'))
  }
}
const validatePhone = (rule, value, callback) => {
  if ((!parseInt(value) == false) &&  (value.length == 11)) {
    callback()
  } else {
    callback(new Error('请输入正确11位手机号码'))
  }
}
export default {
  name: 'DepartmentPage',
  data() {
      return {
        cityData: cityData,
        city:'',
        form: {
          name: '',
          class: '',
          sex: '',
          city: '',
          uid: '',
          phone: '',
          phoneValid:'',
          hobby: '',
          FirstExcept: '',
          SecondExcept: '',
          SelfIntroduction: '',
          AdjustedOrNot: '2',
          img:''
        },
        rules:{
          city:[
            { required: true, message: '城市不能为空'}
          ],
          name:[
            { required: true, message: '姓名不能为空'}
          ],
          class:[
            { required: true, message: '班级不能为空'},
          ],
          sex:[
            { required: true, message: '性别不能为空'}
          ],
          uid:[
            { required: true, message: '学号不能为空'},
            { validator: validateUID }
          ],
          phone:[
            { required: true, message: '手机号码不能为空'},
            { validator: validatePhone }
          ],
          phoneValid:[
            { required: true, message: '号码确认不能为空'},
            { validator: validatePhone }
          ],
          hobby:[
            { required: true, message: '兴趣爱好不能为空'}
          ],
          FirstExcept:[
            { required: true, message: '第一志愿不能为空'}
          ],
          SecondExcept:[
          ],
          AdjustedOrNot:[
            { required: true, message: '是否调剂不能为空'}
          ],
          SelfIntroduction:[
            { required: true, message: '个人简介不能为空'}
          ],
        },
        classes:[
          {
            label:"信息类数理提高班1901"
          },
          {
            label:"电子信息类卓越班1901"
          },
          {
            label:"电子信息类1901"
          },
          {
            label:"电子信息类1902"
          },
          {
            label:"电子信息类1903"
          },
          {
            label:"电子信息类1904"
          },
          {
            label:"电子信息类1905"
          },
          {
            label:"电子信息类1906"
          },
          {
            label:"电子信息类1907"
          },
          {
            label:"电子信息类1908"
          },
          {
            label:"电子信息类1909"
          },
          {
            label:"电子信息类1910"
          },
          {
            label:"电子信息类1911"
          },
        ],
        departments:[
          {
            label:"办公室"
          },
          {
            label:"辩论队"
          },
          {
            label:"技术部"
          },
          {
            label:"礼仪队"
          },
          {
            label:"启明书屋"
          },
          {
            label:"权益部"
          },
          {
            label:"社会实践部"
          },
          {
            label:"体育部"
          },
          {
            label:"外联部"
          },
          {
            label:"文艺部"
          },
          {
            label:"小红帽"
          },
          {
            label:"心理部"
          },
          {
            label:"新闻中心"
          },
          {
            label:"宣传部"
          },
          {
            label:"学术部"
          },
          {
            label:"主持人队"
          },
          {
            label:"组织部"
          },
        ],
        find:{
          stuID:"",
          tel:""
        },
        actionPath:"https://up.qbox.me/",
        adjustWidth:'',
        postData:{             //上传图片携带的参数
          token : "",
          key: "",
        },
        headImage:''
      };
    },
  methods: {
    init(){
      var center = new qq.maps.LatLng(39.916527,116.397128);
      var city = document.getElementById("city");
      map = new qq.maps.Map(document.getElementById('container'),{
          center: center,
          zoom: 13
      });
      citylocation = new qq.maps.CityService({
          complete : function(results){
              map.setCenter(results.detail.latLng);
              city.style.display = 'inline';
              city.innerHTML = '所在位置: ' + results.detail.latLng;
              if (marker != null) {
                  marker.setMap(null);
              }
              marker = new qq.maps.Marker({
                  map: map,
                  position: results.detail.latLng
              });
          }
      });
    },
    handleAvatarSuccess(res, file) {
      this.form.img='http://cdn.husteicstu.cn/'+ res.key
    },
    beforeAvatarUpload(file) {
      var that = this
      let suffix = file.name
      var date = new Date();

      this.postData.key = date.getTime() + '.' + suffix.split('.')[suffix.split('.').length-1];
      console.log(this.postData.key)
    },
    onSubmit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if(this.form.phone != this.form.phoneValid){
            this.$message({
              message: "两次输入手机号不一致",
              type: 'warning'
            });
          }
          else if(this.form.img == ''){
            this.$message({
              message: "请上传照片",
              type: 'warning'
            });
          }
          else{
            var that = this
            
            // this.$message({
            //   message: "招新尚未开始",
            //   type: 'warning'
            // });
            jQuery.post(
              'https://husteicstu.cn:3000/sign',
              this.form,
              function (res) {
                console.log(res)
                that.$message({
                  message: "提交成功",
                  type: 'success'
                });
              }
            )
          }
        } else {
          console.log('error submit!!');
          return false;
        }
      });
      
    },
    handleChange(value){
      this.form.city = value[2]
      console.log(cityPos[value[2]])
    },
    onFind(){
      var that = this
      jQuery.get(
        'https://husteicstu.cn:3000/sign',
        {
          uid: this.find.stuID,
          phone: this.find.tel
        },
        function (res) {
          if(res.code == -1){
            that.$message({
              message: res.msg,
              type: 'warning'
            });
          }else{
            that.form = res.data;
            console.log(that.form)
          }
        }
      )
    },
  },
  mounted(){
    // console.log(cityPos)
  },
  created(){
    var that = this
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
body{
  margin:0px;
  height: 1rem;
}
.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
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
.avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
.my-register-form-photo{
  display: flex;
  flex-direction: row;
}
.my-register-form-photo{
  margin: 0.5rem;
}
.my-register-form-photo-title{
  font-size: 0.9rem;
  margin-left: -0.4rem;
  margin-right: 0.7rem;
  color: #333333;
}
.my-find-infomation{
  display: flex;
  flex-direction: row;
  align-items: center;
}
.my-two-buttons-container{
  display: flex;
  flex-direction: row;
}
.my-buttons-container{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.my-register-form{
  padding-top: 2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.my-register-line{
  border-top: 1px rgb(141, 141, 141) solid;
  width: 3rem;
  margin-bottom: 0.2rem;
}
.my-register-form-title{
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.2rem;
}
.my-register-form-subtitle{
  margin-bottom: 2rem;
  font-size: 0.8rem;
  color: rgb(160, 160, 160);
}
.my-register-form-inner{
  width: 40rem;
}
</style>
