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
  backgroundColor: '#2c343c',
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
  
  tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
  
  series: [
        {
            name: 'piechart3',
            type: 'pie',
            radius: '55%',
            center: ['50%', '50%'],
            data: [
                {value: 335, name: 'Data1'},
                {value: 310, name: 'Data2'},
                {value: 274, name: 'Data3'},
                {value: 235, name: 'Data4'},
                {value: 400, name: 'Data5'}
            ].sort(function (a, b) { return a.value - b.value; }),
            roseType: 'radius',
            label: {
                color: 'rgba(255, 255, 255, 0.5)',
                fontWeight: 'bold'
            },
            labelLine: {
                lineStyle: {
                    color: 'rgba(64, 224, 208, 0.3)'
                },
                smooth: 0.5,
                length: 40,
                length2: 20
            },
            itemStyle: {
                color: '#3FB9C6',
                shadowBlur: 200,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            },

            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function (idx) {
                return Math.random() * 200;
            }
        }
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
  }
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



