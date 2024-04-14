import React from "react";
import ChartComponent from "../chartComponent";

const SalesChart = () => {
  return (
    <div className="md:w-[95%] w-[80%] bg-white shadow-sm rounded-xl mt-10 py-4">
      <div className="flex w-full  items-center justify-between px-5">
        <span className="font-bold text-[#202224]">Sales Chart</span>
        <select className="outline-none bg-[#FCFDFD] border border-[#d5d5d5] rounded-md px-2 text-[#2b3034]">
          <option value="">This year</option>
          <option value="">This Month</option>
          <option value="">This Week</option>
        </select>
      </div>
      <ChartComponent />
    </div>
  );
};

export default SalesChart;
