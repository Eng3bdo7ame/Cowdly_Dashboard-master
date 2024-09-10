"use client";
import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';


export default function AreaChartSpline({
  prices,
  dates,
  color,
  showLegend


}) {
  const series = {
    monthDataSeries1: {
      prices: prices,
      dates: dates,
    },
  };

  const [state, setState] = useState({
    series: [
      {
        name: "STOCK ABC",
        data: series.monthDataSeries1.prices,
        color: color,
      },
    ],
    options: {
      chart: {
        type: 'area',
        height: 350,
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth', // تغيير شكل الرسم البياني ليكون موجه
      },
      title: {
        text: 'Fundamental Analysis of Stocks',
        align: 'left',
      },
      subtitle: {
        text: 'Price Movements',
        align: 'left',
      },
      labels: series.monthDataSeries1.dates,
      // xaxis: {
      //   type: 'datetime',
      //   axisBorder: {
      //     show: t,
      //   },
      //   axisTicks: {
      //     show: false,
      //   },
      //   labels: {
      //     show: false,
      //   },
      // },
      // yaxis: {
      //   opposite: true,
      //   axisBorder: {
      //     show: false,
      //   },
      //   axisTicks: {
      //     show: false,
      //   },
      //   labels: {
      //     show: false,
      //   },
      // },
      grid: {
        show: showLegend, // إخفاء الخطوط الخلفية
      },
      legend: {
        horizontalAlign: 'right',
      },
    },
  });

  return (
    <div>
      <ReactApexChart options={state.options} series={state.series} type="area" height={200} width="100%" />
    </div>
  );
}
