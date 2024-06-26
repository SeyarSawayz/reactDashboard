import Chart from "react-apexcharts";
const ChartComponent = () => {
  const options = {
    chart: {
      type: "area",
    },
    xaxis: {
      labels: {
        formatter: function (value) {
          const date = [
            "2024-01-01",
            "2024-01-02",
            "2024-01-03",
            "2024-01-04",
            "2024-01-05",
            "2024-01-06",
            "2024-01-07",
            "2024-01-08",
            "2024-01-09",
            "2024-01-10",
          ];
          return date[value];
        },
      },
    },
  };

  const series = [
    { name: "sales", data: [30, 40, 125, 68, 40, 120, 154, 90, 60] },
  ];
  return (
    <div className="w-full bg-white shadow-sm rounded-xl py-4 px-3">
      <Chart options={options} series={series} type="area" height={350} />
    </div>
  );
};

export default ChartComponent;
