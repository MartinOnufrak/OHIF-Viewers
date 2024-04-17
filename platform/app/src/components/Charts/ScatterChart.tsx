import React, {useEffect, useState} from "react";
import ReactECharts from "echarts-for-react";

function isHealthy(rvef) {
    return 41.9 <= rvef && rvef <= 69.5;
}

function getRvef(rvedv, rvesv) {
    return ((rvedv - rvesv) / rvedv) * 100;
}

function formatData(rvedvList, rvesvList, rvefList) {
    const size = Math.min(rvedvList.length, rvesvList.length);
    const healthy = [];
    const ill = [];
    for (let i = 0; i < size; i++) {
        const rvedv = rvedvList[i];
        const rvesv = rvesvList[i];
        const rvef = rvefList[i];
        if (isHealthy(rvef)) {
            healthy.push([rvedv, rvesv, rvef]);
        } else {
            ill.push([rvedv, rvesv, rvef]);
        }
    }

    return { 'healthy': healthy, 'ill': ill };
}

function getPacientData() {
    return {'rvedv': 69, 'rvesv': 25};
}
const ScatterChart: React.FC = () => {
    const [allData, setAllData] = useState({'RVEDV': [0], 'RVESV': [0], 'RVEF': [0]});
    const [pacientData, setPacientData] = useState({'RVEDV': 0, 'RVESV': 0, 'RVEF': 0});

    useEffect(() => {
        fetch('http://localhost:8000/getTest', { mode: 'cors', headers: {"Cross-Origin-Resource-Policy": "cross-origin"}})
            .then(async (response) => JSON.parse(await response.json()))
            .then((data) => {
                setAllData(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);
    const options = {
        backgroundColor: 'black',
        textStyle: {
            color: "white"
        },
        xAxis: {
            axisPointer: {},
            scale: false,
            name: 'RVEDV',
            splitLine: {
                lineStyle: {
                    color: "rgba(231,231,231,0.4)",
                    type: 'solid',
                }
            },
            lineStyle: {
                color: "white",
                type: 'solid',
                width: 2,
            },
        },
        yAxis: {
            scale: false,
            name: 'RVESV',
            splitLine: {
                lineStyle: {
                    color: "rgba(231,231,231,0.4)",
                    type: 'solid',
                }
            },
            lineStyle: {
                color: "white",
                type: 'solid',
                width: 2,
            },
        },
        legend: {
            show: true,
            textStyle: {
                color: "#e7e7e7"
            },
        },
        toolbox: {
            show: true,
            iconStyle: {
                borderColor: "#e7e7e7"
            },
            feature: {
                dataZoom: {},
                saveAsImage: {}
            }
        },
        tooltip: {
            trigger: 'item',
            axisPointer: {
                type: 'cross'
            },
            formatter: (params) => {
                return "<b>RVEF</b>: " + Math.round(params.value[2] * 10) / 10
            },
        },
        dataZoom: [
            {
                type: 'slider',
                show: true,
                xAxisIndex: [0],
                handleSize: '100%',
                selectedDataBackground: {
                    lineStyle: {
                        width: 0
                    },
                    areaStyle: {
                        opacity: 0
                    }
                },
                backgroundColor: 'rgba(47,69,84,0)',
                //fillerColor: 'rgba(47,69,84,0.25)',
                borderColor: '#d2dbee',
                height: '5%',
                bottom: '6%'
            },
            {
                type: 'slider',
                show: true,
                handleSize: '100%',
                selectedDataBackground: {
                    lineStyle: {
                        width: 0
                    },
                    areaStyle: {
                        opacity: 0
                    }
                },
                backgroundColor: 'rgba(47,69,84,0)',
                //fillerColor: 'rgba(47,69,84,0.25)',
                borderColor: '#d2dbee',
                width: '1%',
                yAxisIndex: [0],
                left: '5.5%'
            }
        ],
        visualMap: [
            {
                type: 'continuous',
                textStyle: {
                    color: "#e7e7e7"
                },
                min: 0,
                max: 100,
                range: [0, 100],
                orient: 'vertical',
                right: 20,
                top: 'center',
                text: ['RVEF'],
                calculable: true,
                inRange: {
                    color: [
                        'rgba(230, 40, 0, 0.5)',
                        'rgba(230, 40, 0, 0.5)',
                        'rgba(230, 40, 0, 0.5)',
                        'rgba(230, 40, 0, 0.5)',
                        'rgba(42, 230, 0, 0.5)',
                        'rgba(42, 230, 0, 0.5)',
                        'rgba(42, 230, 0, 0.5)',
                        'rgba(230, 40, 0, 0.5)',
                        'rgba(230, 40, 0, 0.5)',
                        'rgba(230, 40, 0, 0.5)'
                    ]
                },
                seriesIndex: [0, 1]
            }
        ],
        series: [
            {
                name: 'Chorí',
                color: 'rgba(230, 40, 0, 1)',
                type: 'scatter',
                // prettier-ignore
                data: formatData(allData.RVEDV, allData.RVESV, allData.RVEF).ill
            },
            {
                name: 'Zdraví',
                color: 'green',
                type: 'scatter',
                // prettier-ignore
                data: formatData(allData.RVEDV, allData.RVESV, allData.RVEF).healthy
            },
            {
                name: 'Pacient',

                type: 'effectScatter',
                symbolSize: 15,
                color: 'rgb(20,148,208)',
                rippleEffect: {
                    brushType: 'stroke',
                    scale: '3',
                },
                data: [[getPacientData().rvedv, getPacientData().rvesv, getRvef(getPacientData().rvedv, getPacientData().rvesv)]]
            }
        ]
    };

    return <ReactECharts option={options} />;
};


export default ScatterChart;