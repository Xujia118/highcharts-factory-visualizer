import React, { useEffect, useRef } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import * as Grid from "@highcharts/grid-lite/grid-lite";
import "@highcharts/grid-lite/css/grid.css";

const VisualizationFactory = ({
  type = "line",
  data,
  options = {},
  gridColumns = [],
  title = "Data Visualization",
}) => {
  // Common configuration for all Highcharts
  const baseOptions = {
    title: { text: title },
    accessibility: { enabled: true },
    credits: { enabled: false },
    ...options,
  };

  // Handle different visualization types
  switch (type) {
    case "line":
      return renderLineChart(data, baseOptions);

    case "pie":
      return renderPieChart(data, baseOptions);

    case "table":
      return renderDataGrid(type, title, data);

    default:
      return <div>Unsupported visualization type: {type}</div>;
  }
};

// Line Chart Renderer
const renderLineChart = (seriesData, options) => {
  const chartOptions = {
    ...options,
    chart: { type: "line" },
    xAxis: { type: "category" },
    series: seriesData,
  };

  return <HighchartsReact highcharts={Highcharts} options={chartOptions} />;
};

// Pie Chart Renderer
const renderPieChart = (seriesData, options) => {
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
        data: seriesData,
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={chartOptions} />;
};

// Data Grid Renderer
const renderDataGrid = (type, title, data) => {
  function transformDataToColumns(data) {
    const columns = {};
    if (!data || data.length === 0) return columns;

    Object.keys(data[0]).forEach((key) => {
      columns[key] = [];
    });

    data.forEach((row) => {
      Object.entries(row).forEach(([key, value]) => {
        columns[key].push(value);
      });
    });

    return columns;
  }

  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current && data) {
      const columns = transformDataToColumns(data);
      const config = {
        caption: {
          text: title,
        },
        dataTable: {
          columns: columns,
        },
      };
      Grid.grid(containerRef.current, config);
    }
  }, [data]);

  return <div ref={containerRef} />;
};

export default VisualizationFactory;

