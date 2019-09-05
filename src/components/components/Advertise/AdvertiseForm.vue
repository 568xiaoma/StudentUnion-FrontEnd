<template>
  <div class="my-register-form" :style="{width: adjustWidth}">
    <div class="my-register-form-title">电子信息与通信学院小红帽义务维修队维修报表</div>
    <div class="my-register-line"/>
    <div class="my-register-form-subtitle">宣传预约</div>
    <el-form ref="form" :model="form" label-width="120px" class="my-register-form-inner">
      <el-form-item label="姓名" prop="name" :rules="rules.name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="预约类型" prop="type" :rules="rules.type">
        <el-select v-model="form.type" placeholder="请选择预约类型">
          <el-option v-for="(item,index) in types" :label="item.label" :value="item.label"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="单位全称" prop="fullName" :rules="rules.fullName">
        <el-input v-model="form.fullName" placeholder="个人填写“本人姓名”"></el-input>
      </el-form-item>
      <el-form-item label="手机号码" prop="phone" :rules="rules.phone">
        <el-input v-model="form.phone"></el-input>
      </el-form-item>
      <el-form-item label="QQ" prop="QQ" :rules="rules.QQ">
        <el-input v-model="form.QQ"></el-input>
      </el-form-item>
      <el-form-item label="海报主题" prop="theme" :rules="rules.theme">
        <el-input v-model="form.theme"></el-input>
      </el-form-item>
      <el-form-item label="海报风格" prop="style" :rules="rules.style">
        <el-input v-model="form.style"></el-input>
      </el-form-item>
      <el-form-item label="海报内容" prop="content" :rules="rules.content">
        <el-input v-model="form.content" placeholder="简要填写，具体内容请与宣传部负责人联系"></el-input>
      </el-form-item>
      <el-form-item>
        <div class="my-buttons-container">
          <div class="my-two-buttons-container">
            <el-button type="primary" @click="onSubmit('form')">立即提交</el-button>
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
        form: {
          name: '',
          type: '',
          fullName: '',
          QQ: '',
          phone: '',
          theme:'',
          style: '',
          content: '',
        },
        adjustWidth:'',
        rules:{
          name:[
            { required: true, message: '姓名不能为空'}
          ],
          type:[
            { required: true, message: '预约类型不能为空'},
          ],
          fullName:[
            { required: true, message: '单位全称不能为空'}
          ],
          QQ:[
            // { required: true, message: 'QQ不能为空' },
          ],
          phone:[
            { required: true, message: '手机号码不能为空'},
          ],
          theme:[
            { required: true, message: '海报主题不能为空'},
          ],
          style:[
            { required: true, message: '海报风格不能为空'}
          ],
          content:[
            { required: true, message: '海报内容不能为空'}
          ],
        },
        types:[
          {
            label:"学院预约"
          },
          {
            label:"部门预约"
          },
          {
            label:"班级预约"
          },
          {
            label:"个人预约"
          },
        ],
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
      });
      
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
