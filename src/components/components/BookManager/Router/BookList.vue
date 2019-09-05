<template>
  <div class="my-booklist">
    <el-card :body-style="{ padding: '0px' }" class="my-book-card" v-for="item in bookList">
      <el-popover
        placement="right"
        width="400"
        trigger="click">
        <el-image 
          :src="item.img"
          class="my-booklist-image-alert"
          fit="scale-down"/>
        <el-image 
          slot="reference"
          :src="item.img"
          class="my-booklist-image"
          fit="scale-down"/>
      </el-popover>
      
      <div class="my-booklist-info-container">
        <div class="my-booklist-info-container-inner">
          <div>
            <span style="font-weight:bold">作者：</span>{{item.author}}
          </div>
          <div>
            <span style="font-weight:bold">出版社：</span>{{item.public}}
          </div>
          <div class="my-booklist-two-line">
            <span style="font-weight:bold">描述：</span>{{item.desc}}
          </div>
          <div><span style="font-weight:bold">已借阅：</span>{{item.process}}</div>
        </div>
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  name: '',
  data() {
      return {
        bookList:[
          {
            img: "http://img60.ddimg.cn/digital/product/92/93/1900569293_ii_cover.jpg?version=c75cd16d-f14d-491f-a857-afb24adec001555",
            author: "刘羿",
            public: "人民出版社",
            desc: "此处主要讲述了一段斗罗大陆上的爱情故事，一只十万年魂兽化身为人形。",
            process: "7/8"
          },
          {
            img: "http://img60.ddimg.cn/digital/product/92/93/1900569293_ii_cover.jpg?version=c75cd16d-f14d-491f-a857-afb24adec001555",
            author: "刘羿",
            public: "人民出版社",
            desc: "此处主要讲述了一段斗罗大陆上的爱情故事，一只十万年魂兽化身为人形。",
            process: "7/8"
          },
          {
            img: "http://img60.ddimg.cn/digital/product/92/93/1900569293_ii_cover.jpg?version=c75cd16d-f14d-491f-a857-afb24adec001555",
            author: "刘羿",
            public: "人民出版社",
            desc: "此处主要讲述了一段斗罗大陆上的爱情故事，一只十万年魂兽化身为人形。",
            process: "7/8"
          },
          {
            img: "http://img60.ddimg.cn/digital/product/92/93/1900569293_ii_cover.jpg?version=c75cd16d-f14d-491f-a857-afb24adec001555",
            author: "刘羿",
            public: "人民出版社",
            desc: "此处主要讲述了一段斗罗大陆上的爱情故事，一只十万年魂兽化身为人形。",
            process: "7/8"
          },
          {
            img: "http://img60.ddimg.cn/digital/product/92/93/1900569293_ii_cover.jpg?version=c75cd16d-f14d-491f-a857-afb24adec001555",
            author: "刘羿",
            public: "人民出版社",
            desc: "此处主要讲述了一段斗罗大陆上的爱情故事，一只十万年魂兽化身为人形。",
            process: "7/8"
          },
          {
            img: "http://img60.ddimg.cn/digital/product/92/93/1900569293_ii_cover.jpg?version=c75cd16d-f14d-491f-a857-afb24adec001555",
            author: "刘羿",
            public: "人民出版社",
            desc: "此处主要讲述了一段斗罗大陆上的爱情故事，一只十万年魂兽化身为人形。",
            process: "7/8"
          },
          {
            img: "http://img60.ddimg.cn/digital/product/92/93/1900569293_ii_cover.jpg?version=c75cd16d-f14d-491f-a857-afb24adec001555",
            author: "刘羿",
            public: "人民出版社",
            desc: "此处主要讲述了一段斗罗大陆上的爱情故事，一只十万年魂兽化身为人形。",
            process: "7/8"
          },
          {
            img: "http://img60.ddimg.cn/digital/product/92/93/1900569293_ii_cover.jpg?version=c75cd16d-f14d-491f-a857-afb24adec001555",
            author: "刘羿",
            public: "人民出版社",
            desc: "此处主要讲述了一段斗罗大陆上的爱情故事，一只十万年魂兽化身为人形。",
            process: "7/8"
          },
          {
            img: "http://img60.ddimg.cn/digital/product/92/93/1900569293_ii_cover.jpg?version=c75cd16d-f14d-491f-a857-afb24adec001555",
            author: "刘羿",
            public: "人民出版社",
            desc: "此处主要讲述了一段斗罗大陆上的爱情故事，一只十万年魂兽化身为人形。",
            process: "7/8"
          },
          {
            img: "http://img60.ddimg.cn/digital/product/92/93/1900569293_ii_cover.jpg?version=c75cd16d-f14d-491f-a857-afb24adec001555",
            author: "刘羿",
            public: "人民出版社",
            desc: "此处主要讲述了一段斗罗大陆上的爱情故事，一只十万年魂兽化身为人形。",
            process: "7/8"
          },
          {
            img: "http://img60.ddimg.cn/digital/product/92/93/1900569293_ii_cover.jpg?version=c75cd16d-f14d-491f-a857-afb24adec001555",
            author: "刘羿",
            public: "人民出版社",
            desc: "此处主要讲述了一段斗罗大陆上的爱情故事，一只十万年魂兽化身为人形。",
            process: "7/8"
          },
          {
            img: "http://img60.ddimg.cn/digital/product/92/93/1900569293_ii_cover.jpg?version=c75cd16d-f14d-491f-a857-afb24adec001555",
            author: "刘羿",
            public: "人民出版社",
            desc: "此处主要讲述了一段斗罗大陆上的爱情故事，一只十万年魂兽化身为人形。",
            process: "7/8"
          },
          {
            img: "http://img60.ddimg.cn/digital/product/92/93/1900569293_ii_cover.jpg?version=c75cd16d-f14d-491f-a857-afb24adec001555",
            author: "刘羿",
            public: "人民出版社",
            desc: "此处主要讲述了一段斗罗大陆上的爱情故事，一只十万年魂兽化身为人形。",
            process: "7/8"
          },
          {
            img: "http://img60.ddimg.cn/digital/product/92/93/1900569293_ii_cover.jpg?version=c75cd16d-f14d-491f-a857-afb24adec001555",
            author: "刘羿",
            public: "人民出版社",
            desc: "此处主要讲述了一段斗罗大陆上的爱情故事，一只十万年魂兽化身为人形。",
            process: "7/8"
          },
        ]
      };
    },
  methods: {

  }
}
</script>

<style>
.my-booklist{
  width: 80rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.my-book-card{
  width: 12rem;
  margin: 0.5rem;
}
.my-booklist-image{
  width: 12rem;
  height: 12rem;
}
.my-booklist-info-container{
  margin: 0.5rem;
}
.my-booklist-info-container-inner{
  font-size: 0.7rem;
}
.my-booklist-two-line{
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow:hidden;/*超出隐藏*/
  display:-webkit-box;/*设置弹性盒模型*/
}
.my-booklist-image-alert{
  width: 100%;
}
</style>
