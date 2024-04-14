import userIcon from "../../assets/images/userIcon.png";
import ordersIcon from "../../assets/images/ordersIcon.png";
import salesIcon from "../../assets/images/salesIcon.png";
import revenueIcon from "../../assets/images/revenueIcon.png";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

const StateCards = () => {
  const cards = [
    {
      title: "Total Users",
      value: "40,689",
      icon: userIcon,
      profit: true,
      percentage: "8.5%",
    },
    {
      title: "Total Orders",
      value: "10293",
      icon: ordersIcon,
      profit: false,
      percentage: "1.3%",
    },
    {
      title: "Today Sales",
      value: "$89,000",
      icon: salesIcon,
      profit: true,
      percentage: "4.7%",
    },
    {
      title: "Total Revenue",
      value: "$26,000",
      icon: revenueIcon,
      profit: false,
      percentage: "1.6%",
    },
  ];
  return (
    <div className="flex md:w-[95%] w-[80%] items-center justify-between md:flex-row flex-col gap-8 my-5 transition-all duration-500 ">
      {cards.map((card) => (
        <div
          key={card.title}
          className=" flex flex-row p-4 shadow-sm md:w-[23%] w-full bg-white rounded-md"
        >
          <div className="flex flex-1 flex-col gap-3">
            <h1 className="text-[16px] text-black font-normal">{card.title}</h1>
            <h1 className="text-[20px] text-black font-bold">{card.value}</h1>
            <div className="flex w-full  items-center justify-start gap-1">
              {card.profit ? (
                <IoMdArrowDropup
                  size={"44px"}
                  className="text-green-300  cursor-pointer"
                />
              ) : (
                <IoMdArrowDropdown
                  size={"44px"}
                  className="text-red-700   cursor-pointer"
                />
              )}
              <h1 className="text-green-300 text-[16px]">{card.percentage}</h1>
              <h1 className="text-black md:text-[12px] text-[16px]">
                {card.profit ? "up" : "down"} from yesterday
              </h1>
            </div>
          </div>
          <div>
            <img src={card.icon} width="44px" height="44px" alt="" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default StateCards;
