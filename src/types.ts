export const funcParams = 'data, theme, echartsInstance, echarts';

const funcBody = `const series = data.series.map((s) => {
  const sData = s.fields.find((f) => f.type === 'number').values.buffer;
  const sTime = s.fields.find((f) => f.type === 'time').values.buffer;

  return {
  };
});

const axisOption = {
  axisTick: {
    show: false,
  },
  axisLine: {
    show: false,
  },
  axisLabel: {
    color: 'rgba(128, 128, 128, .9)',
  },
  splitLine: {
    lineStyle: {
      color: 'rgba(128, 128, 128, .2)',
    },
  },
};

return {
  backgroundColor: '#262B30',
  tooltip: {
    trigger: 'axis',
  },
  legend: {
    left: '0',
    bottom: '0',
    data: data.series.map((s) => s.name),
    textStyle: {
      color: 'rgba(128, 128, 128, .9)',
    },
  },
  xAxis: Object.assign(
    {
      type: 'time',
    },
    axisOption
  ),
  yAxis: Object.assign(
    {
      type: 'value',
      min: 'dataMin',
    },
    axisOption
  ),
  grid: {
    left: 0,
    right: 16,
    top: 6,
    bottom: 24,
    containLabel: true,
  },
  series: [
    { name: 'piecharttemp1',
            type: 'pie',
            radius: [30, 110],
            center: ['50%', '50%'],
            roseType: 'area',
            data: [
                {value: 10, name: 'Data1', itemStyle: {color: '#195292'}},
                {value: 5, name: 'Data2', itemStyle: {color: '#19923C'}},
                {value: 15, name: 'Data3', itemStyle: {color: '#195292'}},
                {value: 25, name: 'Data4', itemStyle: {color: '#19923C'}},
                {value: 20, name: 'Data5', itemStyle: {color: '#195292'}},
                {value: 35, name: 'Data6', itemStyle: {color: '#19923C'}},
                {value: 30, name: 'Data7', itemStyle: {color: '#195292'}},
                {value: 40, name: 'Data8', itemStyle: {color: '#19923C'}}
            ]
    },
  ],
   graphic: [
    {
            type: 'image',
            id: 'logo',
            left: 6,
            top: 6,
            style: {
                image: 'https://i.ibb.co/P5XNVwY/softtek-logo2.png" alt="softtek-logo2',
                width: 60,
                height: 30,
                opacity: 1
            }
  },
     ],
};`;

// const getOption = `function (${funcParams}) {
//   ${funcBody}
// }`
// const funcBodyReg = /{\n([\S\s]*)\n}/;
// const matchResult = getOption.match(funcBodyReg);
// const funcBody = matchResult ? matchResult[1] : '';

export interface SimpleOptions {
  followTheme: boolean,
  getOption: string;
}

export const defaults: SimpleOptions = {
  followTheme: false,
  getOption: funcBody,
}



