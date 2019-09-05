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
        label="软件名称"
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
        value: '',
        tableData: []
      };
    },
  methods: {
  },
  mounted(){
    var that = this
    jQuery.get(
      'https://husteicstu.cn:3000/dataCenter',
      {
        tag: 'software'
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
