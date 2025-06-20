import * as Grid from "@highcharts/grid-lite/grid-lite";
import "@highcharts/grid-lite/css/grid.css";
import { useEffect, useRef } from "react";

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

export default tableStrategy;