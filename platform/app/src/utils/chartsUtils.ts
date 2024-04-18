export function ascendingSort(array) {
    return array.sort(function (a, b) {
        return a - b;
    });
}

export function isHealthy(rvef) {
    return 41.9 <= rvef && rvef <= 69.5;
}

export function isInsufficient(rvef) {
    return rvef < 41.9;
}

export function getRvef(rvedv, rvesv) {
    return ((rvedv - rvesv) / rvedv) * 100;
}

export function rightShift(array, n) {
    var shifted = array.slice();
    for (let i = 0; i < n; i++) {
        shifted.unshift(0);
    }

    return shifted;
}

export const RED = 'rgb(230, 40, 0)';
export const SILVER = '#e7e7e7';
export const SILVER_OPAQUE = 'rgba(231,231,231,0.4)';

export const DEFAULT_CHART_OPTIONS = {
    backgroundColor: 'black',
    textStyle: {
        color: "white"
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
    toolbox: {
        show: true,
        iconStyle: {
            borderColor: SILVER
        },
        feature: {
            dataZoom: {},
            saveAsImage: {}
        }
    },
}