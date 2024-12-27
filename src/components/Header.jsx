// eslint-disable-next-line no-unused-vars
import React from 'react';
import logo from '../assets/logo.png'
import { FaDownload } from 'react-icons/fa6';
import resume from '../assets/Resume.pdf'

const Header = () => {
  return (
    <header className='py-8 bg-gray-950'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center ml-5'>
            <img className='w-[75px]' src={logo} alt="" /> 
            <button className='mr-5 px-3 py-2 flex items-center gap-2 bg-custom-gradient rounded-md text-white transition-all'>
                <a href={resume} className='flex items-center'>
                  <FaDownload className='mr-2'/>Download CV
                </a>
            </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
