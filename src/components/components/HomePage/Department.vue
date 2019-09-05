<template>
  <div class="my-department-block">
    <div class="my-department-header">
      部门风采
      <div class="my-department-title-line"></div>
      <div class="my-department-title-content">
        学生会大家庭欢迎你欢迎你欢迎你
      </div>
    </div>
    <div class="my-department-row">
      <div class="my-department-item" v-for="department in departments">
        <el-card :body-style="{ padding: '0.2rem'}" class="my-department-card">
          <el-image 
            @click="addIndex(department.name)"
            class="my-department-image"
            :src="department.imgs.featureImg"
            :fit="fit"></el-image>
          <div class="my-department-show-detail-container">
            <div class="my-department-show-detail" style="padding: 5px 14px;"
              @click="addIndex(department.name)">
              <el-avatar :size="50" :src="department.imgs.LOGO[0]"/>
              <div class="my-department-title-name">{{department.name}}</div>
            </div>
            <div class="my-department-show-detail-line"/>
            <div style="margin: 0.5rem 1rem" class="my-department-show-detail-brief"
              @click="addIndex(department.name)">{{department.describe}}</div>
            
            <el-popover
              placement="right"
              width="400"
              trigger="click">
              <img 
              :src="department.imgs.Qrcode[0]" 
              class="my-qrcode-image"/>
              <img 
              :src="ImgURL" 
              slot="reference"
              class="my-scan-image"/>
              
            </el-popover>
          </div>
        </el-card>
      </div>
    </div>
  </div>
</template>
<script>
import merge from 'webpack-merge'
export default {
  name: 'Department',
  data() {
      return {
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        ImgURL: "../../static/img/scan.png",
        fit: "cover",
        departments:[
            {
              imgs:{
                featureImg:[],
                LOGO:[],
                Qrcode:[],
                showImg:[]
              },
              describe:'',
              fullName:'',
            },
        ],
      };
    },
  methods: {
    addIndex(name){
      console.log(name)
      this.$router.push({ name: 'DepartmentPage'})
      this.$router.push({
        query:merge(this.$route.query,{'department':name})
      })
    },
  },
  mounted(){
    var that = this
    jQuery.get(
      'https://husteicstu.cn:3000/Alldepartment',
      function (res) {
        that.departments = res.data
        // console.log(that.departments)
      }
    )
  }
}
</script>

<style>
body{
  margin:0px;
  height: 1rem;
}
.my-qrcode-image{
  height: 100%;
  width: 100%;
}
.my-department-card{
  width: 16rem;
}
.my-scan-image{
  width: 1.2rem;
  margin: 0 0 0.5rem 13rem;
}
.my-department-title-name{
  margin: 1rem;
  font-weight: bold;
}
.my-department-show-detail{
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 14rem;
}
.my-department-show-detail-brief{
  text-indent: 1em;
  font-size: 0.8rem;
  color: rgb(175, 175, 175);
  width: 95%;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow:hidden;/*超出隐藏*/
  display:-webkit-box;/*设置弹性盒模型*/
}
.my-department-show-detail-line{
  border-top: 1px rgb(189, 189, 189) solid;
  width: 7rem;
  margin-left: 1rem;
}
.my-department-show-detail-container{
  display: flex;
  flex-direction: column;
  width: 95%;
}
.my-department-block{
  width:100%;
  display: flex;
  flex-wrap:wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.my-department-header{
  width: 80rem;
  font-size: 2rem;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 3rem;
}
.my-department-title-line{
  width: 3rem;
  margin:0.2rem;
  border-top: 1px rgb(211, 211, 211) solid;
}
.my-department-title-content{
  margin-top: 0.5rem;
  font-size: 1rem;
  color: rgb(148, 148, 148);
  font-weight: 100;
}
.my-department-row{
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  width: 74rem;
}
.my-department-item{
  margin: 1rem;
}
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.my-department-image {
  width: 15.5rem;
  height: 15.5rem;
  display: block;
}

.clearfix:before,
.clearfix:after {
    display: table;
    content: "";
}

.clearfix:after {
    clear: both
}

</style>
