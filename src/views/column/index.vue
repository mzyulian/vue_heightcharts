<template>
<!-- heightcharts 柱状图表 -->
    <div class='page_column'>
      <!-- 配置图标 -->
      <column :id='id' :option='option'></column>
    </div>
</template>

<script>
import column from '@/components/column'
export default {
  components: {
    column
  },
  data () {
    return {
      // 配置图标设置
      id: 'test',
      // 柱状图表配置
      option: {
        // 图表类型
        chart: {
          type: 'column'
        },
        // 大标题
        title: {
          text: '月平均降雨量'
        },
        // 二级标题
        subtitle: {
          text: '数据来源: WorldClimate.com'
        },
        // 设置x轴数据选项
        xAxis: {
          categories: [
            '一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'
          ],
          // 鼠标经过阴影效果
          crosshair: true
        },
        // y轴设置选项
        yAxis: {
          min: 0,
          title: {
            text: '降雨量 (mm)'
          }
        },
        tooltip: {
          // head + 每个 point + footer 拼接成完整的 table
          headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
          pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' + '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
          footerFormat: '</table>',
          shared: true,
          useHTML: true
        },
        plotOptions: {
          column: {
            borderWidth: 0
            // 配置颜色选项
            // colorByPoint: true
          }
        },
        series: [{
          name: '东京',
          data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
        }, {
          name: '纽约',
          data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]
        }, {
          name: '伦敦',
          data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]
        }, {
          name: '柏林',
          data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]
        }]
      }
    }
  }
}
</script>

<style lang='scss'>

</style>
