<template>
  <div class="my-allproblem">
    <!-- <el-input style="width: 15rem;" prefix-icon="el-icon-search" placeholder="输入查找资料名称"/>
    <el-select v-model="value" placeholder="选择分类"> -->
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
  </el-select>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="time"
        label="更新时间"
        width="180">
        <template slot-scope="scope">
          {{scope.row.time.slice(0,15)}}
        </template>
      </el-table-column>
      <el-table-column
        prop="title"
        label="资料名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="content"
        label="资料描述"
        width="180">
      </el-table-column>
      <el-table-column
        prop="url"
        label="云盘链接"
        width="280">
      </el-table-column>
      <el-table-column
        prop="code"
        label="提取码"
        width="180">
      </el-table-column>
      <!-- <el-table-column
        prop="tags"
        label="分类"
        width="380">
        <template slot-scope="scope">
          <el-tag style="margin-right:0.2rem;" v-for="item in scope.row.tags">{{item}}</el-tag>
        </template>
      </el-table-column> -->
    </el-table>
  </div>
</template>
<script>
export default {
  name: 'MyRights',
  data() {
      return {
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: '',
        tableData: [{
            time:"2019-06-03",
            name:"数学建模",
            url:"123132",
            code:"123132",
            tags:["数学","学习","笔记","PPT"],
          }]
      };
    },
  methods: {
  },
  mounted(){
    var that = this
    jQuery.get(
      'https://husteicstu.cn:3000/dataCenter',
      {
        tag: 'material'
      },
      function (res) {
        console.log(res.data)
        that.tableData = res.data
      }
    )
  }
}
</script>

<style>
.my-allproblem{
  width: 60rem;
  padding: 5rem 10%;
}
</style>
