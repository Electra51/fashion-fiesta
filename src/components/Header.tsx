import Container from "./Container";
import navlogo from "../../public/logoNav.png";
import Image from "next/image";
import { FiSearch } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import { IoMdCart } from "react-icons/io";
const Header = () => {
  return (
    <div className="bg-bodycolor h-20">
      <Container className="h-full flex items-center md:gap-x-5 justify-between md:justify-start">
        <Image src={navlogo} alt="" className="w-40" />
        <div className="w-full bg-white hidden md:flex items-center gap-x-1 border-[1px] border-lightText/50 rounded-full px-4 py-1.5 focus-within:border-[#C44E8A] group">
          <FiSearch className="text-gray-400 group-focus-within:text-darktext duration-200" />
          <input
            type="text"
            placeholder="Search for products"
            className="placeholder:text-sm flex-1 outline-none"
          />
        </div>
        <div className="bg-lightbg text-gray-500 flex items-center justify-center p-1.5 rounded-full hover:bg-white border-[1px] border-gray-200 hover:border-pink-500 duration-200">
          <AiOutlineUser className="text-xl" />
          <p>Login/Register</p>
        </div>
        <div className="bg-black hover:bg-slate-950 flex items-center justify-center p-1.5 rounded-full text-slate-100 hover:text-white border-[1px] border-gray-200 hover:border-pink-500 duration-200 relative">
          <IoMdCart className="text-xl" />
          <p>$00</p>
          <span className="bg-white text-pink-500 rounded-full text-xs font-semibold absolute -top-1 -right-2 h-5 w-5 flex justify-center items-center shadow-xl shadow-black">
            0
          </span>
        </div>
      </Container>
    </div>
  );
};

export default Header;
