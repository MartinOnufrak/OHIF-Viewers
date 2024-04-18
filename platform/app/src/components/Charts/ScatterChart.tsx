import React, {useEffect, useState} from "react";
import ReactECharts from "echarts-for-react";
import {getAllData, getPacientData} from "../../utils/apiConnectors";
import {MultipleRecords} from "../../types/apiTypes";
import {DEFAULT_CHART_OPTIONS, isHealthy, RED, SILVER, SILVER_OPAQUE} from "../../utils/chartsUtils";

function formatData(data: MultipleRecords) {
    const size = Math.min(data.RVEDV.length, data.RVESV.length);
    const healthy = [];
    const ill = [];
    for (let i = 0; i < size; i++) {
        const rvedv = data.RVEDV[i];
        const rvesv = data.RVESV[i];
        const rvef = data.RVEF[i];
        if (isHealthy(rvef)) {
            healthy.push([rvedv, rvesv, rvef]);
        } else {
            ill.push([rvedv, rvesv, rvef]);
        }
    }

    return { 'healthy': healthy, 'ill': ill };
}
const ScatterChart: React.FC = () => {
    const [parsedData, setParsedData] = useState({'healthy': [], 'ill': []});
    const [pacientData, setPacientData] = useState({'RVEDV': 0, 'RVESV': 0, 'RVEF': 0});

    // @ts-ignore
    useEffect(async () => {
        setParsedData(formatData(await getAllData()));
        setPacientData(await getPacientData());
    }, []);
    const options = {
        xAxis: {
            axisPointer: {},
            scale: false,
            name: 'RVEDV',
            splitLine: {
                lineStyle: {
                    color: SILVER_OPAQUE,
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
                    color: SILVER_OPAQUE,
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
                color: SILVER
            },
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
        visualMap: [
            {
                type: 'continuous',
                textStyle: {
                    color: SILVER
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
                color: RED,
                type: 'scatter',
                data: parsedData.ill
            },
            {
                name: 'Zdraví',
                color: 'green',
                type: 'scatter',
                data: parsedData.healthy
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
                data: [[pacientData.RVEDV, pacientData.RVESV, pacientData.RVEF]]
            }
        ]
    };

    return <ReactECharts option={{...DEFAULT_CHART_OPTIONS, ...options}} />;
};


export default ScatterChart;