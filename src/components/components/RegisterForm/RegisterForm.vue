<template>
  <div class="my-register-form">
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
          class: '',
          sex: '',
          uid: '',
          phone: '',
          phoneValid:'',
          hobby: '',
          FirstExcept: '',
          SecondExcept: '',
          SelfIntroduction: '',
          AdjustedOrNot: ''
        },
        rules:{
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
          SelfIntroduction:[
            { required: true, message: '是否调剂不能为空'}
          ],
          AdjustedOrNot:[
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
        ],
        departments:[
          {
            label:"办公室"
          },
          {
            label:"文艺部"
          },
          {
            label:"心理部"
          },
          {
            label:"体育部"
          },
          {
            label:"权益部"
          },
          {
            label:"宣传部"
          },
          {
            label:"新闻中心"
          },
          {
            label:"组织部"
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
            jQuery.post(
              'https://husteicstu.cn:3000/sign',
              this.form,
              function (res) {
                console.log(res)
              }
            )
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
