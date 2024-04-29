import React, {useEffect, useState} from "react";
import ReactECharts from "echarts-for-react";
import {getAllData, getPatientData} from "../../utils/apiConnectors";
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
// @ts-ignore
const ScatterChart: React.FC = ({mrn}) => {
    const [parsedData, setParsedData] = useState({'healthy': [], 'ill': []});
    const [patientData, setPatientData] = useState({'RVEDV': 0, 'RVESV': 0, 'RVEF': 0});

    // @ts-ignore
    useEffect(async () => {
        const allData = await getAllData();
        const patientData = await getPatientData(mrn);

        if (allData !== null) setParsedData(formatData(allData));
        if (patientData !== null) setPatientData(patientData);
    }, []);
    const options = {
        xAxis: {
            axisPointer: {},
            scale: false,
            name: 'EDV',
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
            name: 'ESV',
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
                right: 15,
                top: 'center',
                text: ['EF'],
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
                name: 'Sick',
                color: RED,
                type: 'scatter',
                data: parsedData.ill
            },
            {
                name: 'Healthy',
                color: 'green',
                type: 'scatter',
                data: parsedData.healthy
            },
            {
                name: 'Patient',

                type: 'effectScatter',
                symbolSize: 15,
                color: 'rgb(20,148,208)',
                rippleEffect: {
                    brushType: 'stroke',
                    scale: '3',
                },
                data: [[patientData.RVEDV, patientData.RVESV, patientData.RVEF]]
            }
        ]
    };

    return <ReactECharts option={{...DEFAULT_CHART_OPTIONS, ...options}} />;
};


export default ScatterChart;