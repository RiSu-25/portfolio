// eslint-disable-next-line no-unused-vars
import React from "react";
import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsClipboardData, BsChatSquareText } from "react-icons/bs";
import { PiGraduationCap } from "react-icons/pi";

const Navbar = () => {
  return (
    <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
      <div className="container mx-auto px-4">
        {/* nav inner */}
        <div className="w-full bg-black/10 h-[70px] lg:h-[90px] backdrop-blur-3xl rounded-full max-w-[90%] md:max-w-[400px] lg:max-w-[460px] mx-auto px-4 lg:px-5 flex justify-between items-center text-xl lg:text-2xl text-white">
          <a href="#home">
            <p className="cursor-pointer w-[50px] lg:w-[60px] h-[50px] lg:h-[60px] flex items-center justify-center hover:bg-custom-gradient rounded-full transition-all duration-300">
              <BiHomeAlt />
            </p>
          </a>
          <a href="#about">
            <p className="cursor-pointer w-[50px] lg:w-[60px] h-[50px] lg:h-[60px] flex items-center justify-center hover:bg-custom-gradient rounded-full transition-all duration-300">
              <BiUser />
            </p>
          </a>
          <a href="#education">
            <p className="cursor-pointer w-[50px] lg:w-[60px] h-[50px] lg:h-[60px] flex items-center justify-center hover:bg-custom-gradient rounded-full transition-all duration-300">
              <PiGraduationCap />
            </p>
          </a>
          <a href="#project">
            <p className="cursor-pointer w-[50px] lg:w-[60px] h-[50px] lg:h-[60px] flex items-center justify-center hover:bg-custom-gradient rounded-full transition-all duration-300">
              <BsClipboardData />
            </p>
          </a>
          <a href="#contact">
            <p className="cursor-pointer w-[50px] lg:w-[60px] h-[50px] lg:h-[60px] flex items-center justify-center hover:bg-custom-gradient rounded-full transition-all duration-300">
              <BsChatSquareText />
            </p>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
