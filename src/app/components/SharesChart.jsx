"use client"

import ReactECharts from "echarts-for-react";

export default function SharesChart({data}) {
    const days = data.days
    const axis = days.map(day => day.split("T")[0])


    const holdings = data.holdings;
    const series = Object.keys(holdings).map(etf => ({
        name: etf,
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
            focus: 'series'
        },
        data: Object.values(holdings[etf])
    })).sort((a, b) => a.data[a.data.length - 1] - b.data[b.data.length - 1])

    const legend = series.map(serie => serie.name)


    const options = {
        darkMode: true,
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            },
            order: 'seriesDesc'
        },
        legend: {
            data: legend
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: axis,
            }
        ],
        yAxis: [
            {
                type: 'value',
                splitLine: {
                    show: false
                }
            }
        ],
        series
    };

    return <ReactECharts option={options} style={{height: '450px', width: '700px'}}/>

}