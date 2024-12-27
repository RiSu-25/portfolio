// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BiHomeAlt, BiUser } from 'react-icons/bi';
import { BsClipboardData, BsChatSquareText } from 'react-icons/bs';
import { PiGraduationCap } from 'react-icons/pi';

const Navbar = () => {
   return (
    <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
      <div className='container mx-auto'>
        {/* nav inner */}
        <div className='w-full bg-black/20 h-[90px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center text-2xl text-white'>
           <a href="#home"><p className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center hover:bg-custom-gradient rounded-full'><BiHomeAlt /></p></a>
           <a href="#about"><p className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center hover:bg-custom-gradient rounded-full'><BiUser /></p></a>
           <a href="#education"><p className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center hover:bg-custom-gradient rounded-full'><PiGraduationCap /></p></a>
           <a href="#project"><p className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center hover:bg-custom-gradient rounded-full'><BsClipboardData /></p></a>
           <a href="#contact"><p className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center hover:bg-custom-gradient rounded-full'><BsChatSquareText /></p></a>
        </div>
      </div>
    </nav>
  );
}


export default Navbar;
