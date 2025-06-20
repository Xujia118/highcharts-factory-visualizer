import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";

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

export default pieChartStrategy;