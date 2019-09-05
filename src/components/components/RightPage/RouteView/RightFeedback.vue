<template>
  <div class="my-right-form">
    <div class="my-right-form-title">权益问题反馈</div>
    <div class="my-right-line"/>
    <div class="my-right-form-subtitle">
      权益问题关系着广大同学们的生活、学习的便利性，希望在您遇到问题时可以积极向学生会反馈，
      学生会会帮助同学解决问题或提供解决方法。您提出的权益问题我们会通过短信或邮件的方式联系您。
    </div>
    <el-form ref="form" :model="form" label-width="80px" class="my-right-form-inner">
      <el-form-item prop="name" :rules="rules.name" label="姓名">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item prop="class" :rules="rules.class" label="班级">
        <el-input v-model="form.class"/>
      </el-form-item>
      <el-form-item prop="uid" :rules="rules.uid" label="学号">
        <el-input v-model="form.uid"></el-input>
      </el-form-item>
      <el-form-item prop="phone" :rules="rules.phone" label="电话">
        <el-input v-model="form.phone"></el-input>
      </el-form-item>
      <el-form-item prop="email" :rules="rules.email" label="邮箱">
        <el-input v-model="form.email"></el-input>
      </el-form-item>
      <el-form-item prop="questionName" :rules="rules.questionName" label="问题简称">
        <el-input v-model="form.questionName"></el-input>
      </el-form-item>
      <el-form-item prop="question" :rules="rules.question" label="问题描述">
        <el-input type="textarea" v-model="form.question"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit('form')">立即提交</el-button>
        <!-- <el-button>取消</el-button> -->
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  name: 'DepartmentPage',
  data() {
      return {
        form: {
          name: '',
          class: '',
          uid: '',
          phone: '',
          email: '',
          questionName: '',
          question: '',
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
        rules:{
          name:[
            { required: true, message: '姓名不能为空'},
          ],
          class:[
            { required: true, message: '班级不能为空'},
          ],
          uid:[
            { required: true, message: '学号不能为空'},
          ],
          phone:[
            { required: true, message: '电话不能为空'},
          ],
          email:[
            { required: true, message: '邮箱不能为空'},
          ],
          questionName:[
            { required: true, message: '问题简称不能为空'},
          ],
          question:[
            { required: true, message: '问题描述不能为空'},
          ],
        }
      };
    },
  methods: {
    onSubmit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          var that = this
          jQuery.post(
            'https://husteicstu.cn:3000/RightCenter',
            that.form,
            function (res) {
              console.log(res)
              that.$message({
                message: "提交成功",
                type: "success"
              })
            }
          )
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    }
  },
}
</script>

<style>
body{
  margin:0px;
  height: 1rem;
}
.my-right-form{
  padding-top: 2rem;
  width: 80rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.my-right-line{
  border-top: 1px rgb(141, 141, 141) solid;
  width: 3rem;
  margin-bottom: 0.2rem;
}
.my-right-form-title{
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.2rem;
}
.my-right-form-subtitle{
  margin-bottom: 2rem;
  font-size: 0.8rem;
  color: rgb(160, 160, 160);
  width: 40rem;
  text-indent: 2em;
}
.my-right-form-inner{
  width: 40rem;
}
</style>
