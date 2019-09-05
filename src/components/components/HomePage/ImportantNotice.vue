<template>
  <el-card class="my-notice-box-card">
  <div slot="header" class="clearfix">
    <span>学院重要消息通知</span>
    <!-- <el-button style="float: right; padding: 3px 0" type="text">更多></el-button> -->
  </div>
  <el-collapse style="padding-top:0">
    <el-collapse-item 
        v-for="(item,index) in notice" 
        :key="index" class="text item" 
        :title="item.title" 
        :name="item.index">
      <div>{{item.content}}</div>
    </el-collapse-item>
  </el-collapse>
  <!-- <div v-for="item in notice" :key="item" class="text item">
    {{item.content}}
  </div> -->
</el-card>
</template>
<script>
export default {
  name: 'ImportantNotice',
  data() {
      return {
        notice:[{
          id:1,
          content:"毕业晚会时间",
          detail:"时间为2019年2月31日，地点韵苑体育馆，时间为2019年2月31日，地点韵苑体育馆，时间为2019年2月31日，地点韵苑体育馆，时间为2019年2月31日，地点韵苑体育馆，时间为2019年2月31日，地点韵苑体育馆，时间为2019年2月31日，地点韵苑体育馆",
          url:""
        },{
          id:2,
          content:"新生大会时间",
          detail:"",
          url:""
        },{
          id:3,
          content:"新生讲座的注意事项",
          detail:"",
          url:""
        },{
          id:4,
          content:"军训安排",
          detail:"",
          url:""
        },{
          id:5,
          content:"学生会招新宣讲时间",
          detail:"",
          url:""
        },{
          id:6,
          content:"资助委员会招新宣讲时间",
          detail:"",
          url:""
        },{
          id:7,
          content:"资助委员会招新宣讲时间",
          detail:"",
          url:""
        },
        ]
      };
    },
  methods: {
  },
  mounted(){
    var that = this
    jQuery.get(
      'https://husteicstu.cn:3000/message',
      function (res) {
        that.notice = res.data
      }
    )
  }
}
</script>

<style>
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both
}

.my-notice-box-card {
  width: 35rem;
  margin: 2rem;
  padding: 0;
}
</style>
