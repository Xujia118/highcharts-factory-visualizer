import "@highcharts/grid-lite/css/grid.css";
import { strategyMap } from './strategies/index';

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
