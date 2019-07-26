<template>
  <div class="my-star-form-show">
    <el-table
      :data="tableData"
      max-height="800"
      stripe
      style='width: 100%'>
      <el-table-column
        prop="index"
        label="序号"
        width="60">
      </el-table-column>
      <el-table-column
        prop="time"
        label="时间"
        width="250">
        <template slot-scope="scope">
          <el-date-picker
            v-model="scope.row.time"
            align="right"
            type="date"
            placeholder="选择日期"
            :picker-options="pickerOptions">
          </el-date-picker>
        </template>
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
        <template slot-scope="scope">
          <el-input v-model="scope.row.name" placeholder="请输入内容"></el-input>
        </template>
      </el-table-column>
      <el-table-column
        prop="content"
        label="内容">
        <template slot-scope="scope">
          <el-input type="textarea" :rows="6" v-model="scope.row.address" placeholder="请输入内容"></el-input>
        </template>
      </el-table-column>
      <el-table-column
        prop="img"
        label="照片"
        width="180">
        <el-upload
          action="https://jsonplaceholder.typicode.com/posts/"
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove">
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
      </el-table-column>
      <el-table-column
        label="操作"
        width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">确认</el-button>
          <el-button type="text" size="small" @click="handleDeleteClick(scope.row)">删除</el-button>
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
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
        shortcuts: [{
          text: '今天',
          onClick(picker) {
            picker.$emit('pick', new Date());
          }
        }, {
          text: '昨天',
          onClick(picker) {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24);
            picker.$emit('pick', date);
          }
        }, {
          text: '一周前',
          onClick(picker) {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', date);
          }
        }]
      },
      dialogImageUrl: '',
      dialogVisible: false,
      tableData: [
        {
          index: 1,
          time: '',
          name: '',
          content: '',
          img: '',
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
          index: this.tableData.length+1,
          time: '',
          name: '',
          content: '',
          img: '',
        }
      )
    },
    handleClick(data){
      console.log(data)
      jQuery.post(
        'https://husteicstu.cn:3000/stars',
        data,
        function (res) {
          console.log(res)
        }
      )
    },
    handleDeleteClick(data){
      console.log(data.index)
      jQuery.post(
        'https://husteicstu.cn:3000/stars/delete',
        {index: data.index},
        function (res) {
          console.log(res)
        }
      )
    },
  },
  mounted(){
  },
  created(){
    jQuery.get(
      'https://husteicstu.cn:3000/stars',
      function (res) {
        console.log(res.data)
        this.tableData = res.data
      }
    )
  }
}
</script>

<style>
.my-star-form-show{
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
