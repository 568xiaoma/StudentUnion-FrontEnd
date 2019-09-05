<template>
  <el-card class="my-image-card-box-card">
    <div slot="header" class="clearfix">
      <span>图片新闻</span>
      <!-- <el-button style="float: right; padding: 3px 0" type="text" @click="showMore()">更多></el-button> -->
    </div>
    <div v-for="(item,index) in tableData" :key="index" class="my-image-card-item">
      <el-popover
        placement="right"
        width="400"
        trigger="click">
        <img
        :src="item.img"
        :fit="fit"
        class="my-image-card-text-image-out"/>
        <div slot="reference" class="my-image-card-item">
          <img
          :src="item.img"
          :fit="fit"
          class="my-image-card-text-image"/>
          <div class="my-image-card-text-content">
            <div class="my-image-card-text-content-title">
              {{item.title}}
            </div>
            <p class="my-image-card-text-content-content">
              {{item.content}}
            </p>
          </div>
        </div>
      </el-popover>
    </div>
  </el-card>
</template>
<script>
export default {
  name: 'ImageNotice',
  data() {
      return {
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        fit: "none",
        tableData: []
      };
    },
  methods: {
    showMore(){
      this.$message({
        message: '暂无更多',
        type: 'warning'
      });
    }
  },
  mounted(){
    var that = this
    jQuery.get(
      'https://husteicstu.cn:3000/imgNews',
      function (res) {
        that.tableData = res.data
        // console.log(res.data)
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
.my-image-card-text-image{
  width: 6rem;
  height: 4.5rem;
}
.my-image-card-text-image-out{
  width: 100%;
}
.my-image-card-text-content{
  margin: 0rem 0.5rem;
  width: 90%;
}
.my-image-card-text-content-title{
  text-indent: 0.8em;
  font-size: 1rem;
  font-family: "微软雅黑";
  font-weight: 600;
}
.my-image-card-text-content-content{
  text-indent: 1em;
  margin:0;
  font-size: 0.8rem;
  height: 3rem;
  width: 100%;
  color: rgb(100,100,100);
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow:hidden;/*超出隐藏*/
  display:-webkit-box;/*设置弹性盒模型*/
}
.my-image-notice{
  width: 35rem;
  margin: 3rem;
}

.my-image-card-item {
  margin-bottom: 0.8rem;
  width: 99%;
  font-size: 14px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both
}

.my-image-card-box-card {
  width: 35rem;
  margin: 2rem;
}
</style>
