import React, {useEffect, useState} from "react";
import ReactECharts from "echarts-for-react";
import {getAllData, getPatientData} from "../../utils/apiConnectors";
import {MultipleRecords} from "../../types/apiTypes";
import {
    ascendingSort,
    DEFAULT_CHART_OPTIONS,
    isHealthy,
    isInsufficient,
    RED,
    rightShift, SILVER, SILVER_OPAQUE
} from "../../utils/chartsUtils";

function formatData(data: MultipleRecords, patientRvef: number) {
    const size = Math.min(data.RVEDV.length, data.RVESV.length);
    const healthy = [];
    const insuffiecient = [];
    const excessive = [];
    let belowPatientCounter = 0;
    let whole = [];
    for (let i = 0; i < size; i++) {
        const rvef = data.RVEF[i];
        whole.push(rvef);
    }

    whole = ascendingSort(whole);
    let newWhole = [];
    let seenGreater = false;
    for (let i = 0; i < size; i++) {
        const rvef = whole[i];
        if (!seenGreater && rvef > patientRvef) {
            newWhole.push(0);
            seenGreater = true;
            belowPatientCounter = i;
        }

        newWhole.push(rvef);
    }

    let separatorIndex = 0;
    for (let i = 0; i <= size; i++) {
        if (isHealthy(newWhole[i])) {
            separatorIndex = i;
            break;
        }
        insuffiecient.push(newWhole[i]);
    }

    for (let i = separatorIndex; i <= size; i++) {
        if (!isInsufficient(newWhole[i]) && !isHealthy(newWhole[i])) {
            separatorIndex = i;
            break;
        }
        healthy.push(newWhole[i]);
    }

    for (let i = separatorIndex; i <= size; i++) {
        excessive.push(newWhole[i]);
    }

    return {
        insuffiecient: insuffiecient,
        healthy: rightShift(healthy, insuffiecient.length),
        excessive: rightShift(excessive, insuffiecient.length + healthy.length),
        patient: rightShift([patientRvef], belowPatientCounter)
    };
}

// @ts-ignore
const AreaChart: React.FC = ({patientHash}) => {
    const [parsedData, setParsedData] = useState({'insuffiecient': [], 'healthy': [], 'excessive': [], 'patient': []});
    const [dataSize, setDataSize] = useState(0);
    // @ts-ignore
    useEffect(async () => {
        const allData = await getAllData();
        if (allData !== null) {
            setParsedData(formatData(allData, (await getPatientData(patientHash)).RVEF));
            setDataSize(allData.RVEF.length);
        }
    }, []);
    const options = {
        legend: {
            show: true,
            selectedMode: false,
            textStyle: {
                color: SILVER
            },
        },

        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross'
            },
            formatter: (params) => {
                return '<b>RVEF</b>: ' + Math.round(params[0].value * 10) / 10;
            }
        },

        xAxis: {
            name: 'Records',
            type: 'category',
            categories: [1],
            lineStyle: {
                color: "white",
                type: 'solid',
                width: 2,
            },
            splitLine: {
                show: false
            },
            splitArea: {
                show: false
            },
            axisPointer: {
                show: true,
            },
            axisLabel: {
                show: true,
                interval: Math.floor(dataSize / 8),
                showMaxLabel: true
            },
            axisTick: {
                interval: Math.floor(dataSize / 8)
            }
        },
        yAxis: {
            name: 'EF',
            type: 'value',
            axisPointer: {
                show: false,
            },
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
        series: [
            {
                name: 'Sick',
                stack: 'DEFAULT',
                data: parsedData.insuffiecient,
                type: 'bar',
                color: RED,
                large: true,
                barCategoryGap: '0%'
            },
            {
                name: 'Healthy',
                stack: 'DEFAULT',
                data: parsedData.healthy,
                type: 'bar',
                color: 'rgb(42, 230, 0)', // TODO TO GRADIENT
                barCategoryGap: '0%'
            },
            {
                name: 'Sick',
                stack: 'DEFAULT',
                data: parsedData.excessive,
                type: 'bar',
                color: RED,
                barCategoryGap: '0%'
            },
            {
                name: 'Patient',
                stack: 'DEFAULT',
                data: parsedData.patient,
                type: 'bar',
                color: 'rgb(0, 100, 255)',
                barWidth: '500%',
                barMinWidth: '100%'
            }
        ]
    };

    return <ReactECharts option={{...DEFAULT_CHART_OPTIONS, ...options}} />;
};


export default AreaChart;