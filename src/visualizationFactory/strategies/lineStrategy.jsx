import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";

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

export default lineChartStrategy;
