<template>
  <div class="my-image-news-show">
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
        prop="title"
        label="标题"
        width="180">
        <template slot-scope="scope">
          <el-input v-model="scope.row.title" placeholder="请输入内容"></el-input>
        </template>
      </el-table-column>
      <el-table-column
        prop="content"
        label="内容">
        <template slot-scope="scope">
          <el-input type="textarea" :rows="6" v-model="scope.row.content" placeholder="请输入内容"></el-input>
        </template>
      </el-table-column>


      <el-table-column
        prop="img"
        label="照片"
        width="160"
        @click="test(scope.$index)">
        <template slot-scope="scope">
          <el-upload
            :show-file-list="false"
            @click="test(scope.$index)"
            :data="postData"
            :on-exceed="Onexceed"
            class="avatar-uploader"
            :action="actionPath"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="scope.row.img" @click="test(scope.$index)" :src="scope.row.img" class="avatar">
            <i v-else @click="test(scope.$index)" class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </template>
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
  name: 'ImageNews',
  data() {
    return {
      nowIndex: null,
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
      ],
      imgsTemp:[],
      actionPath:"https://up.qbox.me/",
      postData:{             //上传图片携带的参数
        token : "",
        key: "",
      }
    }
  },
  components:{
  },
  methods: {
    Onexceed(){
      this.$message({
        message: '文件数量超出限制',
        type: 'warning'
      });
    },
    test(index){
      this.nowIndex = index
    },
    handleAvatarSuccess(res, file) {
      this.tableData[this.nowIndex].img = 'http://cdn.husteicstu.cn/'+ res.key
    },
    beforeAvatarUpload(file) {
      var that = this
      let suffix = file.name
      let key = encodeURI(`${suffix}`)
      this.postData.key = key;
    },
    handleRemove(file, fileList) {
      var i = this.imageUrlList.indexOf('http://cdn.husteicstu.cn/'+file.name)
      this.imageUrlList.splice(i,1)
      console.log(this.imageUrlList)
    },
    addOne(){
      var myDate = new Date();
      this.tableData.unshift(
        {
          index: myDate.getTime(),
          time: '',
          title: '',
          content: '',
          img: '',
        }
      )
    },
    handleClick(data){
      var that = this
      jQuery.post(
        'https://husteicstu.cn:3000/imgNews',
        data,
        function (res) {
          console.log(res)
          that.$message({
            message: "提交成功",
            type: "success"
          })
        }
      )
    },
    handleDeleteClick(data){
      var that = this
      console.log(data.index)
      jQuery.post(
        'https://husteicstu.cn:3000/imgNews/delete',
        {index: data.index},
        function (res) {
          that.$message({
            message: '删除成功',
            type: 'success'
          });
          jQuery.get(
            'https://husteicstu.cn:3000/imgNews',
            function (res) {
              that.tableData = res.data
              console.log(res.data)
            }
          )
        }
      )
    },
  },
  mounted(){
  },
  created(){
    var that = this
    jQuery.get(
      'https://husteicstu.cn:3000/imgNews',
      function (res) {
        that.tableData = res.data
        console.log(res.data)
      }
    ),
    jQuery.get(
      'https://husteicstu.cn:3000/qiniutoken',
      function (res) {
        that.postData.token = res.token
      }
    )
  }
}
</script>

<style>
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
.my-homepage-slide-show-form-photo{
  margin-bottom: 1rem;
}
.my-image-news-show-form-photo{
  margin-left: 80px;
  margin-bottom: 3rem;
}
.my-image-news-show{
  display: flex;
  width: 90%;
  padding: 3rem 5rem;
  flex-direction: column;
}
.my-image-news-show-form{
  width: 80%;
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
  width: 128px;
  height: 128px;
  line-height: 128px;
  text-align: center;
}
.avatar {
  width: 128px;
  height: 128px;
  display: block;
}
</style>
