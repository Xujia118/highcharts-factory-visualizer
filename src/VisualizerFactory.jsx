// VisualizationFactory.jsx
import React, { useRef, useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import * as Grid from "@highcharts/grid-lite/grid-lite";
import "@highcharts/grid-lite/css/grid.css";

// Line Chart Strategy
const lineChartStrategy = ({ data, title, options }) => {
  const chartOptions = {
    ...options,
    chart: { type: "line" },
    xAxis: { type: "category" },
    series: data,
    title: { text: title },
  };
  return <HighchartsReact highcharts={Highcharts} options={chartOptions} />;
};

// Pie Chart Strategy
const pieChartStrategy = ({ data, title, options }) => {
  const chartOptions = {
    ...options,
    chart: { type: "pie" },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: { enabled: true },
      },
    },
    series: [
      {
        name: "Data",
        colorByPoint: true,
        data,
      },
    ],
    title: { text: title },
  };
  return <HighchartsReact highcharts={Highcharts} options={chartOptions} />;
};

// Table/Grid Strategy
const tableStrategy = ({ data, title }) => {
  const containerRef = useRef(null);

  const transformDataToColumns = (data) => {
    const columns = {};
    if (!data?.length) return columns;
    Object.keys(data[0]).forEach((key) => (columns[key] = []));
    data.forEach((row) => {
      Object.entries(row).forEach(([key, value]) => {
        columns[key].push(value);
      });
    });
    return columns;
  };

  useEffect(() => {
    if (containerRef.current && data) {
      const columns = transformDataToColumns(data);
      Grid.grid(containerRef.current, {
        caption: { text: title },
        dataTable: { columns },
      });
    }
  }, [data]);

  return <div ref={containerRef} />;
};

// Strategy Map
const strategyMap = {
  line: lineChartStrategy,
  pie: pieChartStrategy,
  table: tableStrategy,
};

const VisualizationFactory = ({
  type = "line",
  data,
  title = "Data Visualization",
  options = {},
}) => {
  const strategy = strategyMap[type];

  if (!strategy) {
    return <div>Unsupported visualization type: {type}</div>;
  }

  const baseOptions = {
    accessibility: { enabled: true },
    credits: { enabled: false },
    ...options,
  };

  return strategy({ data, title, options: baseOptions });
};

export default VisualizationFactory;
