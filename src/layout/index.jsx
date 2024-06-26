import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="w-screen bg-slate-100 relative">
      <Sidebar />
      <Navbar />
      <div className="w-full  ml-[76px] mt-[70px] border-t border-gray-200 px-6 box-border flex flex-col">
        <span className="font-bold text-[#202224] text-[30px]">Dashboard</span>
        {children}
      </div>
    </div>
  );
};

export default Layout;
