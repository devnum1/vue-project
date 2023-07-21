<template>
  <div class="echarts" >
    <ECharts  :options="option" id="candleChart" style="width: 100%;"></ECharts>
  </div>
</template>

<script>
    import ECharts from "vue-echarts";
    import "echarts/lib/chart/candlestick";
    import "echarts/lib/component/title";
    import "echarts/lib/component/grid"
    import "echarts/lib/component/dataZoom";
    import "echarts/lib/component/tooltip";
    import { ChartConfig } from "Constants/chart-config";
  
  var chartData = splitData([
    ['2019/1/24', 2320.26, 2320.26, 2287.3, 2362.94],
    ['2019/1/25', 2300, 2291.3, 2288.26, 2308.38],
    ['2019/1/28', 2295.35, 2346.5, 2295.35, 2346.92],
    ['2019/1/29', 2347.22, 2358.98, 2337.35, 2363.8],
    ['2019/1/30', 2360.75, 2382.48, 2347.89, 2383.76],
    ['2019/1/31', 2383.43, 2385.42, 2371.23, 2391.82],
    ['2019/2/1', 2377.41, 2419.02, 2369.57, 2421.15],
    ['2019/2/4', 2425.92, 2428.15, 2417.58, 2440.38],
    ['2019/2/5', 2411, 2433.13, 2403.3, 2437.42],
    ['2019/2/6', 2432.68, 2434.48, 2427.7, 2441.73],
    ['2019/2/7', 2430.69, 2418.53, 2394.22, 2433.89],
    ['2019/2/8', 2416.62, 2432.4, 2414.4, 2443.03],
    ['2019/2/18', 2441.91, 2421.56, 2415.43, 2444.8],
    ['2019/2/19', 2420.26, 2382.91, 2373.53, 2427.07],
    ['2019/2/20', 2383.49, 2397.18, 2370.61, 2397.94],
    ['2019/2/21', 2378.82, 2325.95, 2309.17, 2378.82],
    ['2019/2/22', 2322.94, 2314.16, 2308.76, 2330.88],
    ['2019/2/25', 2320.62, 2325.82, 2315.01, 2338.78],
    ['2019/2/26', 2313.74, 2293.34, 2289.89, 2340.71],
    ['2019/2/27', 2297.77, 2313.22, 2292.03, 2324.63],
    ['2019/2/28', 2322.32, 2365.59, 2308.92, 2366.16],
    ['2019/3/1', 2364.54, 2359.51, 2330.86, 2369.65],
    ['2019/3/4', 2332.08, 2273.4, 2259.25, 2333.54],
    ['2019/3/5', 2274.81, 2326.31, 2270.1, 2328.14],
    ['2019/3/6', 2333.61, 2347.18, 2321.6, 2351.44],
    ['2019/3/7', 2340.44, 2324.29, 2304.27, 2352.02],
    ['2019/3/8', 2326.42, 2318.61, 2314.59, 2333.67],
    ['2019/3/11', 2314.68, 2310.59, 2296.58, 2320.96],
    ['2019/3/12', 2309.16, 2286.6, 2264.83, 2333.29],
    ['2019/3/13', 2282.17, 2263.97, 2253.25, 2286.33],
    ['2019/3/14', 2255.77, 2270.28, 2253.31, 2276.22],
    ['2019/3/15', 2269.31, 2278.4, 2250, 2312.08],
    ['2019/3/18', 2267.29, 2240.02, 2239.21, 2276.05],
    ['2019/3/19', 2244.26, 2257.43, 2232.02, 2261.31],
    ['2019/3/20', 2257.74, 2317.37, 2257.42, 2317.86],
    ['2019/3/21', 2318.21, 2324.24, 2311.6, 2330.81],
    ['2019/3/22', 2321.4, 2328.28, 2314.97, 2332]
  ])

  function splitData (rawData) {
    var categoryData = []
    var values = []
    for (var i = 0; i < rawData.length; i++) {
      categoryData.push(rawData[i].splice(0, 1)[0])
      values.push(rawData[i])
    }
    return {
      categoryData: categoryData,
      values: values
    }
  }

  export default {
    components: {
      ECharts
    },
   data() {
     return {
      option: {
        title: {
          left: 0
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          }
        },
        grid: {
          left: '10%',
          right: '10%',
          bottom: '15%'
        },
        xAxis: {
          type: 'category',
          data: chartData.categoryData,
          scale: true,
          boundaryGap: false,
          axisLine: { onZero: false },
          splitLine: { show: false },
          splitNumber: 20,
          min: 'dataMin',
          max: 'dataMax'
        },
        yAxis: {
          scale: true,
          splitArea: {
            show: true
          }
        },
        dataZoom: [
          {
            type: 'inside',
            start: 0,
            end: 100
          },
          {
            show: true,
            type: 'slider',
            start: 50,
            end: 100,
            top:10,
            height: 30,
            onGap:true,
            handleIcon: 'M10.7,11.9H9.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
            handleSize: '120%'
          }
        ],
        series: [
          {
            type: 'candlestick',
            data: chartData.values,
            itemStyle:{
              normal:{
                color: ChartConfig.color.primary,
                color0: ChartConfig.color.success,
                borderColor:ChartConfig.color.primary,
                borderColor0:ChartConfig.color.success
              }
            }
          }
        ]
      }
    }
  }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .echarts {
    width: 100%;
    height: 400px;
  }
  #candleChart > :first-child{
    width: 100% !important; 
  }
  #candleChart > :first-child :first-child{
    width: 100% !important; 
  }
</style>
