export const fruitOptions = {
  chart: {
    type: "spline", // or 'line', 'pie', etc.
  },
  title: {
    text: "My First Highcharts Chart",
  },
  xAxis: {
    categories: ["Apples", "Bananas", "Oranges"],
  },
  yAxis: {
    title: {
      text: "Fruit eaten",
    },
  },
  series: [
    {
      name: "Jane",
      data: [1, 0, 4],
    },
    {
      name: "John",
      data: [5, 7, 3],
    },
  ],
};
