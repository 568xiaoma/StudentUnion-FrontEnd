<template>
  <div class="my-vent-submit">
    <div class="my-vent-submit-title">
      饺子宣泄墙
      <i class="el-icon-sunny" style="color:#F56C6C;font-size:4rem;margin-left:0.5rem;"/>
    </div>
    <div class="my-vent-submit-line"></div>
    <div class="my-vent-submit-subtitle">
      把你开心的事情分享一下让大家开心开心，把你不开心的事情说出来让大家快乐快乐
    </div>
    <el-input
      placeholder="请输入内容"
      style="margin-top: 2rem;margin-bottom: 2rem;"
      v-model="content"
      clearable>
    </el-input>
    <div class="my-vent-submit-tags">
      <el-tag
        :key="tag"
        v-for="tag in dynamicTags"
        closable
        :disable-transitions="false"
        @close="handleClose(tag)">
        {{tag}}
      </el-tag>
      <el-input
        class="input-new-tag"
        v-if="inputVisible"
        v-model="inputValue"
        ref="saveTagInput"
        size="small"
        @keyup.enter.native="handleInputConfirm"
        @blur="handleInputConfirm"
      >
      </el-input>
      <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>
    </div>
    <el-button 
      type="primary" 
      @click="onSubmit"
      style="margin-top: 2rem;margin-bottom: 20rem;">立即创建</el-button>
  </div>
</template>
<script>
var colors = ["#909399","#F56C6C","#67C23A","#409EFF"]
export default {
  name: 'SubmitVent',
  data() {
      return {
        content: '',
        dynamicTags: [],
        inputVisible: false,
        inputValue: ''
      };
    },
  methods: {
    redirect(pathname){
      this.$router.push({ name: pathname })
    },
    handleClose(tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
    },
    showInput() {
      this.inputVisible = true;
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },
    handleInputConfirm() {
      let inputValue = this.inputValue;
      if (inputValue) {
        this.dynamicTags.push(inputValue);
      }
      this.inputVisible = false;
      this.inputValue = '';
    },
    onSubmit(){
      var that = this
      var myDate = new Date();
      console.log(that.dynamicTags)
      jQuery.post(
        'https://husteicstu.cn:3000/PsychologyBoard/send',
        {
          index: myDate.getTime(),
          size: Math.ceil(Math.random()*6)+6,
          color: colors[Math.ceil(Math.random()*4)-1],
          content: that.content,
          reply:[],
          tags: JSON.stringify(that.dynamicTags),
        },
        function (res) {
          console.log(res)
          that.tableData = res.data
        }
      )
    }
  },
}
</script>

<style>
.el-tag + .el-tag {
  margin-left: 10px;
}
.button-new-tag {
  margin-left: 10px;
  height: 32px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
}
.input-new-tag {
  width: 90px;
  margin-left: 10px;
  vertical-align: bottom;
}
.my-vent-submit{
  width: 80%;
  padding: 3rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.my-vent-submit-line{
  border-top:1px rgb(182, 182, 182) solid;
  width: 4rem;
}
.my-vent-submit-title{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: bold;
}
.my-vent-submit-subtitle{
  font-size: 0.9rem;
  margin-top: 0.5rem;
  color:rgb(143, 143, 143);
}
.my-vent-submit-tags{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
</style>
