import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { fruitOptions } from "./data";

const BasicChart = () => {
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={fruitOptions} />
    </div>
  );
};

export default BasicChart;
