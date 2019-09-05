<template>
  <div class="my-register-form" :style="{width: adjustWidth}">
    <div class="my-register-form-title">电子信息与通信学院小红帽义务维修队维修报表</div>
    <div class="my-register-line"/>
    <div class="my-register-form-subtitle">电子信息与通信学院小红帽义务维修队为您服务</div>
    <el-form ref="form" :model="form" label-width="120px" class="my-register-form-inner">
      <el-form-item label="姓名" prop="name" :rules="rules.name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="学院" prop="college" :rules="rules.college">
        <el-input v-model="form.college"></el-input>
      </el-form-item>
      <el-form-item label="班级" prop="class" :rules="rules.class">
        <el-input v-model="form.class"></el-input>
      </el-form-item>
      <el-form-item label="手机号码" prop="phone" :rules="rules.phone">
        <el-input v-model="form.phone"></el-input>
      </el-form-item>
      <el-form-item label="QQ" prop="QQ" :rules="rules.QQ">
        <el-input v-model="form.QQ"></el-input>
      </el-form-item>
      <el-form-item label="维修物品类型" prop="type" :rules="rules.type">
        <el-input v-model="form.type"></el-input>
      </el-form-item>
      <div class="my-type-tag">
        <el-tag v-for="item in dynamicTags" style="margin-left: 0.2rem;" @click="addNewType(item)">{{item}}</el-tag>
      </div>
      <el-form-item label="问题描述" prop="desc" :rules="rules.desc" style="margin-top: 1rem;">
        <el-input type="textarea" v-model="form.desc" style="font-size:1.0rem;font-family:'Arial'"></el-input>
      </el-form-item>
      <el-form-item>
        <div class="my-buttons-container">
          <div class="my-two-buttons-container">
            <el-button type="primary" @click="onSubmit('form')">立即提交</el-button>
            <!-- <el-button>取消</el-button> -->
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
      inputVisible: false,
      inputValue: '',
      adjustWidth: '',
      form: {
        name: '',
        college: '',
        class: '',
        QQ: '',
        phone: '',
        type:'',
        desc: '',
      },
      rules:{
        name:[
          { required: true, message: '姓名不能为空'}
        ],
        college:[
          { required: true, message: '学院不能为空'}
        ],
        class:[
          { required: true, message: '班级不能为空'},
        ],
        QQ:[
          { required: true, message: 'QQ不能为空'},
        ],
        phone:[
          { required: true, message: '手机号码不能为空'},
          { validator: validatePhone }
        ],
        type:[
          { required: true, message: '维修物品类型不能为空'},
        ],
        desc:[
          { required: true, message: '问题描述不能为空'}
        ],
      },
      dynamicTags:['电脑','电风扇','热水壶','键盘','插板'],
      find:{
        stuID:"",
        tel:""
      }
    };
  },
  methods: {
    onSubmit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if(this.form.phone != this.form.phoneValid){
            this.$message({
              message: "两次输入手机号不一致",
              type: 'warning'
            });
          }
          else{
            this.$message({
              message: "招新尚未开始",
              type: 'warning'
            });
            // jQuery.post(
            //   'https://husteicstu.cn:3000/sign',
            //   this.form,
            //   function (res) {
            //     console.log(res)
            //   }
            // )
          }
        } else {
          console.log('error submit!!');
          return false;
        }
      })
    },
    addNewType(item){
      if(this.form.type.slice(-1) != '；' && this.form.type.slice(-1) != ';'){
        if(this.form.type == ''){
          this.form.type = this.form.type + item
        }else{
          this.form.type = this.form.type + '；' + item
        }
      }
      else{
      }
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
          that.form = res.data;
          if(res.code == -1){
            that.$message({
              message: res.msg,
              type: 'warning'
            });
          }
        }
      )
    }
  },
  mounted(){
  }
}
</script>

<style>
body{
  margin:0px;
  height: 1rem;
}
.my-type-tag{
  margin-left: 120px;
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
