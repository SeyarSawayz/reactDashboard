import { AiOutlineSearch } from "react-icons/ai";
import { IoMdPerson } from "react-icons/io";
import { IoMdChatboxes } from "react-icons/io";
import { IoIosNotifications } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="fixed left-0 top-0 w-full h-[70px] bg-white py-5 pl-20 pr-5 flex items-center justify-between z-[100]">
      <span className="font-black text-[28px] absolute left-[26px] text-[#4379EE] ">
        D.
      </span>
      <div className="flex items-center md:w-[450px] w-[200px] px-4">
        <AiOutlineSearch color={"#454545"} size={"25px"} />
        <input
          type="text"
          placeholder="search"
          className="md:w-[450px] w-[200px] outline-none px-4 py-2 placeholder:text-[#454545] border-b border-transparent focus:border-[#4379EE]"
        />
      </div>
      <div className="flex items-center  gap-5">
        <IoIosNotifications
          color="#bfbfbf"
          size={"24px"}
          className="cursor-pointer"
        />
        <IoMdPerson color="#bfbfbf" size={"24px"} className="cursor-pointer" />
        <IoMdChatboxes
          color="#bfbfbf"
          size={"24px"}
          className="cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Navbar;
