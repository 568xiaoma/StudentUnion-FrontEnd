<template>
  <div class="">
    <div class="my-flow-chart-outer">
      <div class="my-flow-chart-title">
        学生会官网流量统计
      </div>
      <div id="flowChart" class="my-flow-chart"></div>
    </div>
    <div class="my-register-chart-outer">
      <div class="my-register-chart-title">
        学生会招新报名统计
      </div>
      <div class="my-register-chart-all">
        <div id="registerChartSex" class="my-register-chart"></div>
        <div id="registerChartClass" class="my-register-chart"></div>
        <div id="registerChartFirstDepartment" class="my-register-chart"></div>
        <div id="registerChartSecondDepartment" class="my-register-chart"></div>
        <div id="registerChartAdjust" class="my-register-chart"></div>
      </div>
      <div id="registerChartMap" class="my-register-chart-map"></div>
      <div class='blank'></div>
    </div>
    <div class="my-statistisc-form">
      <div class="my-statistisc-form-item">
        <div class="my-statistisc-form-item-title">
          总浏览量：
        </div>
        <div class="my-statistisc-form-item-count">
          0
        </div>
      </div>
      <div class="my-statistisc-form-item">
        <div class="my-statistisc-form-item-title">
          总资料数：
        </div>
        <div class="my-statistisc-form-item-count">
          0
        </div>
      </div>
      <div class="my-statistisc-form-item">
        <div class="my-statistisc-form-item-title">
          权益反馈量：
        </div>
        <div class="my-statistisc-form-item-count">
          0
        </div>
      </div>
      <div class="my-statistisc-form-item">
        <div class="my-statistisc-form-item-title">
          报名表数量：
        </div>
        <div class="my-statistisc-form-item-count">
          0
        </div>
      </div>
      <div class="my-statistisc-form-item">
        <div class="my-statistisc-form-item-title">
          宣传预约数：
        </div>
        <div class="my-statistisc-form-item-count">
          0
        </div>
      </div>
      <div class="my-statistisc-form-item">
        <div class="my-statistisc-form-item-title">
          小红帽维修报表：
        </div>
        <div class="my-statistisc-form-item-count">
          0
        </div>
      </div>
      <div class="my-statistisc-form-item">
        <div class="my-statistisc-form-item-title">
          启明书屋借书量：
        </div>
        <div class="my-statistisc-form-item-count">
          0
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'hello',
  data () {
    return {
      browse: {
        date: ['12312'],
        count:[1],
      },
      geoCoordMap:{
        "海门":[121.15,31.89],
        "鄂尔多斯":[109.781327,39.608266],
        "招远":[120.38,37.35],
        "舟山":[122.207216,29.985295],
        "齐齐哈尔":[123.97,47.33],
        "盐城":[120.13,33.38],
        "赤峰":[118.87,42.28],
        "青岛":[120.33,36.07],
        "乳山":[121.52,36.89],
        "金昌":[102.188043,38.520089],
        "泉州":[118.58,24.93],
        "莱西":[120.53,36.86],
        "日照":[119.46,35.42],
        "胶南":[119.97,35.88],
        "南通":[121.05,32.08],
        "拉萨":[91.11,29.97],
        "云浮":[112.02,22.93],
        "梅州":[116.1,24.55],
        "文登":[122.05,37.2],
        "上海":[121.48,31.22],
        "攀枝花":[101.718637,26.582347],
        "威海":[122.1,37.5],
        "承德":[117.93,40.97],
        "厦门":[118.1,24.46],
        "汕尾":[115.375279,22.786211],
        "潮州":[116.63,23.68],
        "丹东":[124.37,40.13],
        "太仓":[121.1,31.45],
        "曲靖":[103.79,25.51],
        "烟台":[121.39,37.52],
        "福州":[119.3,26.08],
        "瓦房店":[121.979603,39.627114],
        "即墨":[120.45,36.38],
        "抚顺":[123.97,41.97],
        "玉溪":[102.52,24.35],
        "张家口":[114.87,40.82],
        "阳泉":[113.57,37.85],
        "莱州":[119.942327,37.177017],
        "湖州":[120.1,30.86],
        "汕头":[116.69,23.39],
        "昆山":[120.95,31.39],
        "宁波":[121.56,29.86],
        "湛江":[110.359377,21.270708],
        "揭阳":[116.35,23.55],
        "荣成":[122.41,37.16],
        "连云港":[119.16,34.59],
        "葫芦岛":[120.836932,40.711052],
        "常熟":[120.74,31.64],
        "东莞":[113.75,23.04],
        "河源":[114.68,23.73],
        "淮安":[119.15,33.5],
        "泰州":[119.9,32.49],
        "南宁":[108.33,22.84],
        "营口":[122.18,40.65],
        "惠州":[114.4,23.09],
        "江阴":[120.26,31.91],
        "蓬莱":[120.75,37.8],
        "韶关":[113.62,24.84],
        "嘉峪关":[98.289152,39.77313],
        "广州":[113.23,23.16],
        "延安":[109.47,36.6],
        "太原":[112.53,37.87],
        "清远":[113.01,23.7],
        "中山":[113.38,22.52],
        "昆明":[102.73,25.04],
        "寿光":[118.73,36.86],
        "盘锦":[122.070714,41.119997],
        "长治":[113.08,36.18],
        "深圳":[114.07,22.62],
        "珠海":[113.52,22.3],
        "宿迁":[118.3,33.96],
        "咸阳":[108.72,34.36],
        "铜川":[109.11,35.09],
        "平度":[119.97,36.77],
        "佛山":[113.11,23.05],
        "海口":[110.35,20.02],
        "江门":[113.06,22.61],
        "章丘":[117.53,36.72],
        "肇庆":[112.44,23.05],
        "大连":[121.62,38.92],
        "临汾":[111.5,36.08],
        "吴江":[120.63,31.16],
        "石嘴山":[106.39,39.04],
        "沈阳":[123.38,41.8],
        "苏州":[120.62,31.32],
        "茂名":[110.88,21.68],
        "嘉兴":[120.76,30.77],
        "长春":[125.35,43.88],
        "胶州":[120.03336,36.264622],
        "银川":[106.27,38.47],
        "张家港":[120.555821,31.875428],
        "三门峡":[111.19,34.76],
        "锦州":[121.15,41.13],
        "南昌":[115.89,28.68],
        "柳州":[109.4,24.33],
        "三亚":[109.511909,18.252847],
        "自贡":[104.778442,29.33903],
        "吉林":[126.57,43.87],
        "阳江":[111.95,21.85],
        "泸州":[105.39,28.91],
        "西宁":[101.74,36.56],
        "宜宾":[104.56,29.77],
        "呼和浩特":[111.65,40.82],
        "成都":[104.06,30.67],
        "大同":[113.3,40.12],
        "镇江":[119.44,32.2],
        "桂林":[110.28,25.29],
        "张家界":[110.479191,29.117096],
        "宜兴":[119.82,31.36],
        "北海":[109.12,21.49],
        "西安":[108.95,34.27],
        "金坛":[119.56,31.74],
        "东营":[118.49,37.46],
        "牡丹江":[129.58,44.6],
        "遵义":[106.9,27.7],
        "绍兴":[120.58,30.01],
        "扬州":[119.42,32.39],
        "常州":[119.95,31.79],
        "潍坊":[119.1,36.62],
        "重庆":[106.54,29.59],
        "台州":[121.420757,28.656386],
        "南京":[118.78,32.04],
        "滨州":[118.03,37.36],
        "贵阳":[106.71,26.57],
        "无锡":[120.29,31.59],
        "本溪":[123.73,41.3],
        "克拉玛依":[84.77,45.59],
        "渭南":[109.5,34.52],
        "马鞍山":[118.48,31.56],
        "宝鸡":[107.15,34.38],
        "焦作":[113.21,35.24],
        "句容":[119.16,31.95],
        "北京":[116.46,39.92],
        "徐州":[117.2,34.26],
        "衡水":[115.72,37.72],
        "包头":[110,40.58],
        "绵阳":[104.73,31.48],
        "乌鲁木齐":[87.68,43.77],
        "枣庄":[117.57,34.86],
        "杭州":[120.19,30.26],
        "淄博":[118.05,36.78],
        "鞍山":[122.85,41.12],
        "溧阳":[119.48,31.43],
        "库尔勒":[86.06,41.68],
        "安阳":[114.35,36.1],
        "开封":[114.35,34.79],
        "济南":[117,36.65],
        "德阳":[104.37,31.13],
        "温州":[120.65,28.01],
        "九江":[115.97,29.71],
        "邯郸":[114.47,36.6],
        "临安":[119.72,30.23],
        "兰州":[103.73,36.03],
        "沧州":[116.83,38.33],
        "临沂":[118.35,35.05],
        "南充":[106.110698,30.837793],
        "天津":[117.2,39.13],
        "富阳":[119.95,30.07],
        "泰安":[117.13,36.18],
        "诸暨":[120.23,29.71],
        "郑州":[113.65,34.76],
        "哈尔滨":[126.63,45.75],
        "聊城":[115.97,36.45],
        "芜湖":[118.38,31.33],
        "唐山":[118.02,39.63],
        "平顶山":[113.29,33.75],
        "邢台":[114.48,37.05],
        "德州":[116.29,37.45],
        "济宁":[116.59,35.38],
        "荆州":[112.239741,30.335165],
        "宜昌":[111.3,30.7],
        "义乌":[120.06,29.32],
        "丽水":[119.92,28.45],
        "洛阳":[112.44,34.7],
        "秦皇岛":[119.57,39.95],
        "株洲":[113.16,27.83],
        "石家庄":[114.48,38.03],
        "莱芜":[117.67,36.19],
        "常德":[111.69,29.05],
        "保定":[115.48,38.85],
        "湘潭":[112.91,27.87],
        "金华":[119.64,29.12],
        "岳阳":[113.09,29.37],
        "长沙":[113,28.21],
        "衢州":[118.88,28.97],
        "廊坊":[116.7,39.53],
        "菏泽":[115.480656,35.23375],
        "合肥":[117.27,31.86],
        "武汉":[114.31,30.52],
        "大庆":[125.03,46.58]
      },
    }
  },
  methods: {
    convertData(data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = this.geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value)
            });
        }
    }
    console.log(res)
    return res;
},
    drawflowLine(){
      var that = this
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('flowChart'))
      // 绘制图表
      myChart.setOption({
          //     title: {
          //     text: '学生会官网流量统计',
          //     x:'center',
          // },
          // title: { 
          //   text: '学生会官网流量统计' 
          // },
          // backgroundColor: '#000000',
          tooltip: {},
          xAxis: {
              type: 'category',
              data: that.browse.date,
              name: '日期',
              color: '#ffffff'
          },
          yAxis: {
            name: '访问量',
          },
          series: [{
            name: '总访问量',
            data: that.browse.count,
            type: 'line',
          }],
          tooltip: {
            trigger: 'axis'   // axis   item   none三个值
          },
      });
    },
    drawregisterSex(){
      var that = this
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('registerChartSex'))
      // 绘制图表
      myChart.setOption({
        series : [
          {
            name: '性别',
            type: 'pie',
            radius: '55%',
            roseType: 'angle',
            data:[
                {value:56, name:'男'},
                {value:13, name:'女'},
            ]
          }
        ],
        color: ['#77a4e9','#4e8ff0']
      });
    },
    drawregisterClass(){
      var that = this
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('registerChartClass'))
      // 绘制图表
      myChart.setOption({
        series : [
          {
              name: '性别',
              type: 'pie',
              radius: '55%',
              roseType: 'angle',
              data:[
                  {value:235, name:'男'},
                  {value:154, name:'女'},
              ]
          }
        ],
      });
    },
    drawregisterFirstDepartment(){
      var that = this
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('registerChartFirstDepartment'))
      // 绘制图表
      myChart.setOption({
        series : [
          {
              name: '性别',
              type: 'pie',
              radius: '55%',
              roseType: 'angle',
              data:[
                  {value:235, name:'男'},
                  {value:154, name:'女'},
              ]
          }
        ],
      });
    },
    drawregisterSecondDepartment(){
      var that = this
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('registerChartSecondDepartment'))
      // 绘制图表
      myChart.setOption({
        series : [
          {
              name: '性别',
              type: 'pie',
              radius: '55%',
              roseType: 'angle',
              data:[
                  {value:235, name:'男'},
                  {value:154, name:'女'},
              ]
          }
        ],
      });
    },
    drawregisterAdjust(){
      var that = this
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('registerChartAdjust'))
      // 绘制图表
      myChart.setOption({
        series : [
          {
              name: '性别',
              type: 'pie',
              radius: '55%',
              roseType: 'angle',
              data:[
                  {value:56, name:'服从调剂'},
                  {value:28, name:'不服从调剂'},
              ]
          },
        ],
        color: ['#52e099','#0cbe65']
      });
    },
    renderItem(params, api) {
    var coords = [
        [116.7,39.53],
        [103.73,36.03],
        [112.91,27.87],
        [120.65,28.01],
        [119.57,39.95]
    ];
    var points = [];
    for (var i = 0; i < coords.length; i++) {
        points.push(api.coord(coords[i]));
    }
    var color = api.visual('color');

    return {
        type: 'polygon',
        shape: {
            points: echarts.graphic.clipPointsByRect(points, {
                x: params.coordSys.x,
                y: params.coordSys.y,
                width: params.coordSys.width,
                height: params.coordSys.height
            })
        },
        style: api.style({
            fill: color,
            stroke: echarts.color.lift(color)
        })
    };
},
    drawregisterMap(){
      var that = this
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('registerChartMap'))
      // 绘制图表
      myChart.setOption({
        // backgroundColor: '#404a59',
    title: {
        text: '学生会成员报名分布图',
        x:'center',
        textStyle: {
            color: '#888888'
        }
    },
    color: ['#c23531','#2f4554', '#61a0a8', '#d48265', '#91c7ae','#749f83',  '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3'],
    tooltip: {
        trigger: 'item',
        formatter: function (params) {
            return params.name + ' : ' + params.value[2];
        }
    },
    bmap: {
        // 百度地图中心经纬度
        center: [107.114129, 29.550339],
        // 百度地图缩放
        zoom: 5,
        // 是否开启拖拽缩放，可以只设置 'scale' 或者 'move'
        roam: true,
        // 百度地图的自定义样式，见 http://developer.baidu.com/map/jsdevelop-11.htm
        mapStyle: {
          styleJson: [{
                'featureType': 'water',
                'elementType': 'all',
                'stylers': {
                    'color': '#ffffff'
                }
            }, {
                'featureType': 'land',
                'elementType': 'all',
                'stylers': {
                    'color': '#eeeeee'
                }
            }, {
                'featureType': 'railway',
                'elementType': 'all',
                'stylers': {
                    'visibility': 'off'
                }
            }, {
                'featureType': 'highway',
                'elementType': 'all',
                'stylers': {
                    'visibility': 'off'
                }
            }, {
                'featureType': 'highway',
                'elementType': 'labels',
                'stylers': {
                    'visibility': 'off'
                }
            }, {
                'featureType': 'arterial',
                'elementType': 'geometry',
                'stylers': {
                    'visibility': 'off'
                }
            }, {
                'featureType': 'arterial',
                'elementType': 'geometry.fill',
                'stylers': {
                    'color': '#535558ff'
                }
            }, {
                'featureType': 'poi',
                'elementType': 'all',
                'stylers': {
                    'visibility': 'off'
                }
            }, {
                'featureType': 'green',
                'elementType': 'all',
                'stylers': {
                    'visibility': 'off'
                }
            }, {
                'featureType': 'subway',
                'elementType': 'all',
                'stylers': {
                    'visibility': 'off'
                }
            }, {
                'featureType': 'manmade',
                'elementType': 'all',
                'stylers': {
                    "visibility": "off"
                }
            }, {
                'featureType': 'local',
                'elementType': 'all',
                'stylers': {
                    'color': '#103448ff'
                }
            }, {
                'featureType': 'arterial',
                'elementType': 'labels',
                'stylers': {
                    "color": "#535558ff",
                    "visibility": "on"
                }
            }, {
                'featureType': 'building',
                'elementType': 'all',
                'stylers': {
                    'color': '#041321ff'
                }
            }, {
                'featureType': 'label',
                'elementType': 'labels.text.fill',
                'stylers': {
                    "visibility": "off"
                }
            }]
        }
    },
    visualMap: {
        min: 0,
        max: 10,
        calculable: false,
        inRange: {
            color: ['#eeeeee', '#eac736', '#d94e5d']
        },
        textStyle: {
            color: '#fff'
        },
        show: false
    },
    series: [
        {
            name: '',
            type: 'scatter',
            coordinateSystem: 'bmap',
            data: [ 
              {
                name: '上海',
                value: [120, 32, 1]
              },
              {
                name: '上海',
                value: [114, 33, 2], 
              },
              {
                name: '上海',
                value: [120, 32, 1]
              },
              {
                name: '上海',
                value: [116, 36, 8], 
              },
              {
                name: '上海',
                value: [118, 31, 8], 
              },
            ],
            symbolSize: 8,
        }
    ]
      });
      var BMap = require('echarts/extension/bmap/bmap')
      var bmap = myChart.getModel().getComponent('bmap').getBMap();
    },
  },
  mounted(){
    var that = this
    that.drawregisterSex();
    that.drawregisterClass();
    that.drawregisterFirstDepartment();
    that.drawregisterSecondDepartment();
    that.drawregisterAdjust();
    that.drawregisterMap();
    that.browse.count = [123]
    jQuery.get(
      'https://husteicstu.cn:3000/Allcount',
      function (res) {
        // console.log(res)
        var countList = res.data.map(function (item) {
            return item.count;
        });
        var dateList = res.data.map(function (item) {
            return item.date;
        });
        that.browse.date = dateList
        that.browse.count = countList
        that.drawflowLine();
      }
    )
  }
}
</script>

<style>
.my-flow-chart{
  width: 50rem;
  height: 30rem;
  color: #0cbe65;
}
.blank{
  width: 60rem;
  height: 3.2rem;
  background-color: #ffffff;
  position: relative;
  bottom: 3.2rem;
}
.my-flow-chart-outer{
  margin-top: 3rem;
  width: 80rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.my-flow-chart-title{
  font-size: 2rem;
  font-weight: bold;
  /* margin-bottom: 1rem; */
}
.my-register-chart{
  width: 25rem;
  height: 25rem;
}
.my-register-chart-map{
  width: 60rem;
  height: 60rem;
  box-shadow: -0.5rem -0.5rem 0.5rem #888888;
}
.my-register-chart-outer{
  margin-top: 1rem;
  width: 80rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.my-register-chart-title{
  font-size: 2rem;
  font-weight: bold;
  /* margin-bottom: 1rem; */
}
.my-statistisc-form{
  margin-top: 3rem;
  width: 80rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
.my-statistisc-form-item{
  width: 18rem;
  height: 12rem;
  background-color: #e7e7e775;
  border-radius: 2rem;
  margin: 1rem;
}
.my-statistisc-form-item-title{
  font-weight: bold;
  font-size: 1.2rem;
  margin: 1rem 0rem 0rem 2rem;
  color: #fc0101ec;
}
.my-statistisc-form-item-count{
  font-weight: bold;
  font-size: 5.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.my-register-chart-all{
  width: 80rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
