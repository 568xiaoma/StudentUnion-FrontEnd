<template>
  <div>
    <router-view v-if="show"/>
    <div v-else class="my-login-page">
      <div class="my-login-title">管理员登录</div>
      <el-form ref="form" :model="form" label-width="40px">
        <el-form-item label="部门">
          <el-input v-model="form.account" style="width:20rem"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.password" type="password" style="width:20rem"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AdminPage',
  components:{
  },
  data(){
    return {
      show:false,
      form: {
        account: "",
        password: "",
      }
    }
  },
  mounted(){
    if(window.document.cookie == "办公室"){
      this.show = true
    }
    jQuery.post(
      'https://husteicstu.cn:3000/count',
      function (res) {
        console.log(res)
      }
    )
  },
  methods:{
    onSubmit() {
      var that = this
      jQuery.post(
        'https://husteicstu.cn:3000/login',
        this.form,
        function (res) {
          console.log(res)
          if(res.code != "-1"){
            that.$message({
              message: '登陆成功',
              type: 'success'
            });
            that.$router.push({ name: 'Statistics' })
            
            that.show = true
            // window.document.cookie = that.form.account
          }
          else{ 
            that.$message({
              message: '登陆失败',
              type: 'warning'
            });
          }
        }
      )
    }
  }
}
</script>

<style>
.my-login-page{
  margin: 5rem;
  width: 80rem;
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content: center;
}
.my-login-title{
  font-size: 2rem;
  font-weight: bold;
  margin: 2rem;
  color: rgb(77, 77, 77);
}
</style>
