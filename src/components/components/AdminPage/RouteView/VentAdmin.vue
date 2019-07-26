<template>
  <div class="my-vent-admin-show">
    <el-table
      :data="tableData"
      max-height="600"
      stripe
      style='width: 100%'>
      <el-table-column
        prop="index"
        label="序号"
        width="60">
      </el-table-column>
      <el-table-column
        prop="date"
        label="提交时间"
        width="250">
        <template slot-scope="scope">
          <el-date-picker
            v-model="scope.row.date"
            align="right"
            type="date"
            placeholder="选择日期"
            :picker-options="pickerOptions">
          </el-date-picker>
        </template>
      </el-table-column>
      <el-table-column
        prop="brief"
        label="问题简称"
        width="280">
        <template slot-scope="scope">
          <el-input v-model="scope.row.name" placeholder="请输入内容"></el-input>
        </template>
      </el-table-column>
      <el-table-column
        prop="describe"
        label="问题描述"
        width="180">
        <template slot-scope="scope">
          <el-input v-model="scope.row.name" placeholder="请输入内容"></el-input>
        </template>
      </el-table-column>
      <el-table-column
        prop="process"
        label="处理进度"
        width="280">
        <template slot-scope="scope">
          <el-input v-model="scope.row.name" placeholder="请输入内容"></el-input>
        </template>
      </el-table-column>
      <el-table-column
        prop="scheme"
        label="解决方案"
        width="180">
        <template slot-scope="scope">
          <el-input v-model="scope.row.name" placeholder="请输入内容"></el-input>
        </template>
      </el-table-column>
      <el-table-column
        label="操作">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">确认</el-button>
          <el-button type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <i @click="addOne()" class="el-icon-plus" style="font-size: 2rem;margin:0.5rem;"></i>
  </div>
</template>

<script>

export default {
  name: 'HomepageAlert',
  data() {
    return {
      dialogImageUrl: '',
      dialogVisible: false,
      tableData: [
        {
          index: '',
          date: '',
          title: '',
          content: '',
          photo: '',
        },
      ]
    }
  },
  components:{
  },
  methods: {
    onSubmit() {
      console.log('submit!');
    },
    handleAvatarSuccess(res, file) {
      console.log(file)
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return isJPG && isLt2M;
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    addOne(){
      this.tableData.unshift(
        {
          date: '',
          name: '',
          address: ''
        }
      )
    }
  },
  mounted(){
  }
}
</script>

<style>
.my-vent-admin-show{
  display: flex;
  width: 90%;
  padding: 3rem 5rem;
  flex-direction: column;
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
