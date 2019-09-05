<template>
  <div class="my-allproblem">
    <a href="../../../../static/excel/students.xlsx">
      <el-button type="primary" slot="reference">下载表格</el-button>
    </a>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="name"
        label="姓名"
        width="65">
      </el-table-column>
      <el-table-column
        prop="uid"
        label="学号"
        width="120">
      </el-table-column>
      <el-table-column
        prop="sex"
        label="性别"
        :filters="filters.sex"
        :filter-method="filterHandler"
        sortable
        width="100">
        <template slot-scope="scope">
          {{scope.row.sex == "boy"?"男":"女"}}
        </template>
      </el-table-column>
      <el-table-column
        prop="class"
        label="班级"
        :filters="filters.class"
        :filter-method="filterHandler"
        sortable
        width="180">
      </el-table-column>
      <el-table-column
        prop="phone"
        label="电话"
        width="120">
      </el-table-column>
      <el-table-column
        prop="FirstExcept"
        label="第一志愿"
        :filters="filters.FirstExcept"
        :filter-method="filterHandler"
        sortable
        width="120">
      </el-table-column>
      <el-table-column
        prop="SecondExcept"
        label="第二志愿"
        :filters="filters.SecondExcept"
        :filter-method="filterHandler"
        sortable
        width="120">
      </el-table-column>
      <el-table-column
        prop="AdjustedOrNot"
        label="服从调剂"
        :filters="filters.AdjustedOrNot"
        :filter-method="filterHandler"
        sortable
        width="120">
        <template slot-scope="scope">
          {{scope.row.AdjustedOrNot == "1"?"服从调剂":"不服从调剂"}}
        </template>
      </el-table-column>
      <el-table-column
        prop="SelfIntroduction"
        label="自我介绍"
        width="120">
        <template slot-scope="scope">
          <el-collapse style="background-color:rgba(0,0,0,0);">
            <el-collapse-item name="1">
              <template slot="title">
                <div class="my-desc-text-container">{{scope.row.SelfIntroduction}}</div>
              </template>
              <div style="padding-left:1rem;padding-right:1rem;">{{scope.row.SelfIntroduction}}</div>
            </el-collapse-item>
          </el-collapse>
        </template>
      </el-table-column>
      <el-table-column
        prop="hobby"
        label="爱好"
        width="120">
        <template slot-scope="scope">
          <el-collapse style="background-color:rgba(0,0,0,0);">
            <el-collapse-item name="1">
              <template slot="title">
                <div class="my-desc-text-container">{{scope.row.hobby}}</div>
              </template>
              <div style="padding-left:1rem;padding-right:1rem;">{{scope.row.hobby}}</div>
            </el-collapse-item>
          </el-collapse>
        </template>
      </el-table-column>
      <el-table-column
        prop="img"
        label="照片"
        sortable
        width="180">
        <template slot-scope="scope">
          <el-image
            :src="scope.row.img"
            class="my-headimg-row"
            :fit="'contain'">
          </el-image>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  name: 'MyRights',
  data() {
      return {
        filters:{
          sex:[
            { text: "男", value: "boy"},
            { text: "女", value: "girl"}
          ],
          FirstExcept:[
            { text: "办公室", value: "办公室"},
            { text: "辩论队", value: "辩论队"},
            { text: "技术部", value: "技术部"},
            { text: "礼仪队", value: "礼仪队"},
            { text: "权益部", value: "权益部"},
            { text: "赛事部", value: "赛事部"},
            { text: "社会实践部", value: "社会实践部"},
            { text: "体育部", value: "体育部"},
            { text: "外联部", value: "外联部"},
            { text: "小红帽", value: "小红帽"},
            { text: "心理部", value: "心理部"},
            { text: "新闻中心", value: "新闻中心"},
            { text: "宣传部", value: "宣传部"},
            { text: "学术部", value: "学术部"},
            { text: "组织部", value: "组织部"},
            { text: "文艺部", value: "文艺部"},
            { text: "启明书屋", value: "启明书屋"},
            { text: "主持人队", value: "主持人队"}
          ],
          SecondExcept:[
            { text: "办公室", value: "办公室"},
            { text: "辩论队", value: "辩论队"},
            { text: "技术部", value: "技术部"},
            { text: "礼仪队", value: "礼仪队"},
            { text: "权益部", value: "权益部"},
            { text: "赛事部", value: "赛事部"},
            { text: "社会实践部", value: "社会实践部"},
            { text: "体育部", value: "体育部"},
            { text: "外联部", value: "外联部"},
            { text: "小红帽", value: "小红帽"},
            { text: "心理部", value: "心理部"},
            { text: "新闻中心", value: "新闻中心"},
            { text: "宣传部", value: "宣传部"},
            { text: "学术部", value: "学术部"},
            { text: "组织部", value: "组织部"},
            { text: "文艺部", value: "文艺部"},
            { text: "启明书屋", value: "启明书屋"},
            { text: "主持人队", value: "主持人队"}
          ],
          AdjustedOrNot:[
            { text: "服从调剂", value: "1"},
            { text: "不服从调剂", value: "2"},
          ],
          class:[
            { text: "信息类数理提高班1901", value: "信息类数理提高班1901"},
            { text: "电子信息类卓越班1901", value: "电子信息类卓越班1901"},
            { text: "电子信息类1901", value: "电子信息类1901"},
            { text: "电子信息类1902", value: "电子信息类1902"},
            { text: "电子信息类1903", value: "电子信息类1903"},
            { text: "电子信息类1904", value: "电子信息类1904"},
            { text: "电子信息类1905", value: "电子信息类1905"},
            { text: "电子信息类1906", value: "电子信息类1906"},
            { text: "电子信息类1907", value: "电子信息类1907"},
            { text: "电子信息类1908", value: "电子信息类1908"},
            { text: "电子信息类1909", value: "电子信息类1909"},
            { text: "电子信息类1910", value: "电子信息类1910"},
          ],
        },
        tableData: [
        ]
      };
    },
  methods: {
    passItem(id){
      jQuery.post(
        'https://husteicstu.cn:3000/RightCenter/setTag',
        {
          tag: 1,
          id: id,
        },
        function (res) {
          console.log(res)
          this.$message({
            message: '更新成功',
            type: 'success'
          });
        }
      )
    },
    delItem(id){
      jQuery.post(
        'https://husteicstu.cn:3000/RightCenter/setTag',
        {
          tag: -1,
          id: id,
        },
        function (res) {
          console.log(res)
          this.$message({
            message: '更新成功',
            type: 'success'
          });
        }
      )
    },
    filterHandler(value, row, column) {
      const property = column['property'];
      return row[property] === value;
    }
  },
  mounted(){
    var that = this
    jQuery.get(
      'https://husteicstu.cn:3000/sign/searchAll',
      function (res) {
        console.log(res.data)
        that.tableData = res.data
      }
    )
    jQuery.get(
      'https://husteicstu.cn:3000/download/excel',
      function (res) {
        console.log(res)
      }
    )
  }
}
</script>

<style>
.my-allproblem{
  width: 100%;
  padding: 2rem;
}
.my-desc-text-container{
  padding-left:1rem;
  padding-right:1rem;
  border:0;
  margin:0;
  font-size:0.9rem;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}
.my-headimg-row{
  height: 10rem;
  width: 10rem;
}
</style>
