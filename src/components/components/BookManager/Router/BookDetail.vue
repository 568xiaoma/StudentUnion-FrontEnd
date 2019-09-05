<template>
  <div class="my-bookdetail">
    <div class="my-bookdetail-row">
      <el-image 
        slot="reference"
        :src="bookDetail.img"
        class="my-bookdetail-image"
        fit="scale-down"/>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span style="font-size: 1rem;font-weight: bold;">书籍信息</span>
          <el-button style="float: right; padding: 3px 0" type="text">立即借阅</el-button>
        </div>
        <div class="item">
          <span class="my-lable-red">#</span>
          <span style="font-weight:bold;">编号：</span>
          {{bookDetail.index}}
        </div>
        <div class="item">
          <span class="my-lable-red">#</span>
          <span style="font-weight:bold;">书名：</span>
          {{bookDetail.name}}
        </div>
        <div class="item">
          <span class="my-lable-red">#</span>
          <span style="font-weight:bold;">作者：</span>
          {{bookDetail.author}}
        </div>
        <div class="item">
          <span class="my-lable-red">#</span>
          <span style="font-weight:bold;">出版社：</span>
          {{bookDetail.public}}
        </div>
        <div class="item">
          <span class="my-lable-red">#</span>
          <span style="font-weight:bold;">页数：</span>
          {{bookDetail.pages}}
        </div>
        <div class="item my-bookdetail-two-line">
          <span class="my-lable-red">#</span>
          <span style="font-weight:bold;">描述：</span>
          {{bookDetail.desc}}
        </div>
        <div class="item">
          <span class="my-lable-red">#</span>
          <span style="font-weight:bold;">已借阅：</span>
          {{bookDetail.process}}
        </div>
        <div class="item">
          <span class="my-lable-red">#</span>
          <span style="font-weight:bold;">分类：</span>
          <el-tag style="margin-right: 0.2rem;" type="success" v-for="it in bookDetail.tag">{{it}}</el-tag>
        </div>
      </el-card>
    </div>
    <div class="my-bookdetail-comment-container">
      <div class="my-bookdetail-subtitle">
        评论
      </div>
      <div v-for="ele in bookDetail.comment" style="margin-bottom: 0.5rem;margin-left: 1rem;">
        <div class='my-bookdetail-comment-row'>
          <el-image :src="ele.headImg" class="my-bookdetail-comment-headImg"/>
          <div class='my-bookdetail-comment-col'>
            <div class="my-bookdetail-comment-name">{{ele.name}}</div>
            <div class="my-bookdetail-comment-time">{{ele.time}}</div>
          </div>
        </div>
        <div class="my-bookdetail-comment-content">{{ele.content}}</div>
      </div>
      <div class="my-bookdetail-comment-input-row">
        评论：<el-input
          type="textarea"
          :rows="9"
          style="width: 60rem;"
          placeholder="请输入内容"
          v-model="comment">
        </el-input>
      </div>
      <el-button type="primary" @click="onSubmit" style="margin-left: 3rem;margin-top: 1rem;">提交</el-button>
    </div>
  </div>
</template>
<script>
export default {
  name: '',
  data() {
      return {
        comment: '',
        bookDetail:{
          name: "大手笔是怎样的练成的",
          img: "http://img60.ddimg.cn/digital/product/92/93/1900569293_ii_cover.jpg?version=c75cd16d-f14d-491f-a857-afb24adec001555",
          author: "刘羿",
          public: "人民出版社",
          desc: "此处主要讲述了一段斗罗大陆上的爱情故事，一只十万年魂兽化身为人形。此处主要讲述了一段斗罗大陆上的爱情故事，一只十万年魂兽化身为人形。",
          process: "7/8",
          pages: 195,
          index: '46513548465146566',
          tag: ['文学','搞笑','漫画','青春','热血','激情'],
          comment: [
            {
              headImg: 'http://cdn.husteicstu.cn/xueshubu.jpg',
              name: '小饺子',
              time: '2019年05月06日 20:56',
              content: '讲述了我做想要看到的一些内容，十分值得一读。讲述了我做想要看到的一些内容，十分值得一读。讲述了我做想要看到的一些内容，十分值得一读。讲述了我做想要看到的一些内容，十分值得一读。讲述了我做想要看到的一些内容，十分值得一读。讲述了我做想要看到的一些内容，十分值得一读。'
            },
            {
              headImg: 'http://cdn.husteicstu.cn/xueshubu.jpg',
              name: '小饺子',
              time: '2019年05月06日 20:56',
              content: '讲述了我做想要看到的一些内容，十分值得一读。讲述了我做想要看到的一些内容，十分值得一读。讲述了我做想要看到的一些内容，十分值得一读。讲述了我做想要看到的一些内容，十分值得一读。讲述了我做想要看到的一些内容，十分值得一读。讲述了我做想要看到的一些内容，十分值得一读。'
            },
            {
              headImg: 'http://cdn.husteicstu.cn/xueshubu.jpg',
              name: '小饺子',
              time: '2019年05月06日 20:56',
              content: '讲述了我做想要看到的一些内容，十分值得一读。讲述了我做想要看到的一些内容，十分值得一读。讲述了我做想要看到的一些内容，十分值得一读。讲述了我做想要看到的一些内容，十分值得一读。讲述了我做想要看到的一些内容，十分值得一读。讲述了我做想要看到的一些内容，十分值得一读。'
            },
          ]
        },
      };
    },
  methods: {
    
  }
}
</script>

<style>
.my-bookdetail-comment-input-row{
  display: flex;
  flex-direction: row;
  font-weight: bold;
  margin-top: 2rem;
}
.my-bookdetail{
  display: flex;
  flex-direction: column;
}
.my-bookdetail-comment-container{
  width: 100%;
  margin-left: 5rem;
}
.my-bookdetail-comment-headImg{
  width: 4rem;
  height: 4rem;
  border-radius: 10rem;
  margin: 0.5rem;
}
.my-bookdetail-comment-col{
  display: flex;
  flex-direction: column;
}
.my-bookdetail-comment-row{
  display: flex;
  flex-direction: row;
  height: 5rem;
  align-items: center;
}
.my-bookdetail-comment-name{
  font-size: 1rem;
  font-weight: bold;
}
.my-bookdetail-comment-time{
  font-size: 0.8rem;
  color: rgb(182, 182, 182);
}
.my-bookdetail-comment-content{
  margin-left: 5rem;
  width: 50rem;
  font-size: 0.8rem;
}
.my-bookdetail-subtitle{
  font-size: 1.2rem;
  font-weight: bold;
  width: 50rem;
  border-bottom: 1px rgb(0, 0, 0) solid;
  padding-bottom: 0.2rem;
  margin-bottom: 1rem;
}
.my-lable-red{
  display: inline-block;
  font-weight: bold;
  font-size: 1.1rem;
  color: rgb(243, 45, 45);
  width: 1rem;
}
.my-bookdetail-two-line{
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow:hidden;/*超出隐藏*/
  display:-webkit-box;/*设置弹性盒模型*/
}
.my-bookdetail-image{
  width: 25rem;
  height: 25rem;
  margin: 3rem;
}
.box-card{
  font-size: 0.8rem;
  width: 30rem;
  margin: 3rem;
}
.my-bookdetail-row{
  display: flex;
  flex-direction: row;
}
.item {
  margin-bottom: 11px;
}
</style>
