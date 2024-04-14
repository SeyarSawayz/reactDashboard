import React, { useRef, useState } from "react";
import {
  IoGrid,
  IoCube,
  IoLayers,
  IoArchiveSharp,
  IoDocumentTextOutline,
  IoCalendarClearSharp,
} from "react-icons/io5";
import { MdFavorite } from "react-icons/md";
import { FaMessage } from "react-icons/fa6";
import { FaCog } from "react-icons/fa";
const Sidebar = () => {
  const [activePage, setActivePage] = useState("home");
  const indicatorDiv = useRef(null);

  const sidebarItems = [
    { title: "home", icon: IoGrid },
    { title: "products", icon: IoCube },
    { title: "favorites", icon: MdFavorite },
    { title: "messages", icon: FaMessage },
    { title: "applications", icon: IoLayers },
    { title: "archieve", icon: IoArchiveSharp },
    { title: "documents", icon: IoDocumentTextOutline },
    { title: "calendar", icon: IoCalendarClearSharp },
  ];

  const handleSubmitClick = (item, e) => {
    setActivePage(item.title);
    const offsetTop = e.currentTarget.offsetTop;
    const scrollTop = document.documentElement.scrollTop;
    const topPosition = `${offsetTop - scrollTop}px`;

    if (indicatorDiv.current) {
      indicatorDiv.current.style.top = topPosition;
    }
  };

  return (
    <div className="fixed h-[calc(100vh-70px)] left-0 top-[70px] w-[79px] bg-white shadow-sm border-r border-gray-200 flex items-center flex-col gap-5">
      <div
        className="absolute w-[3px] h-[45px] bg-[#4379EE] top-0 right-0 transition-all duration-300"
        ref={indicatorDiv}
      ></div>
      {sidebarItems.map((item) => (
        <div
          key={item.title}
          className="w-full cursor-pointer py-2 flex items-center justify-center"
          onClick={(e) => handleSubmitClick(item, e)}
        >
          <item.icon
            className="transition-all duration-300"
            size={"24px"}
            color={activePage === item.title ? "#4379EE" : "#bfbfbf"}
          />
        </div>
      ))}
      <div className="absolute bottom-2 w-full cursor-pointer border-r-[3px] py-2 border-transparent flex items-center justify-center">
        <FaCog size={"24px"} color="#bfbfbf" />
      </div>
    </div>
  );
};

export default Sidebar;
