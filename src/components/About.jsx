// eslint-disable-next-line no-unused-vars
import React from 'react';
import about from '../assets/aboutImg.png'
import { FaHtml5, FaNodeJs, FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { RiTailwindCssFill } from 'react-icons/ri';
import { DiMongodb } from 'react-icons/di';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div id='about' className='py-20 bg-gray-900 z-50 text-gray-300'>
      <div className='max-w-6xl mx-auto px-4'>
        <motion.h2 initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2 }}
          className='text-4xl md:text-5xl font-bold mb-11 text-center'>About Me</motion.h2>
        <div className='flex flex-col md:flex-row gap-20 items-center'>
          {/* img section */}
          <motion.div initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1.4 }}>
            <img src={about} className='w-[300px] md:w-[950px]' alt="" />
          </motion.div>
          {/* paragraph section */}
          <motion.div initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1.4 }}
            className='p-5 md:p-10 bg-gray-950 rounded-md shadow-shade shadow-purple-700'>
              <p className='text-lg leading-7 mb-6'>Hello,I&apos;m RISHITA a web developer with a focus on the MERN stack, but still exploring other technologies and frameworks that catch my interest!</p>
              <p className='text-lg leading-7 mb-6'> I loves to create and beautify websites and love making new websites which are easy to use and can be accessed by anyone. I love to have my clients happy with the site’s performance, which they are able to see on their personal devices.</p>
              <p className='text-lg leading-7'>I hope I get the opportunity to work in your esteemed organization. That’s all from my side.</p>
          </motion.div>
        </div>
        {/* skills section */}
        <div className='pb-12'>
          <motion.h1 initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2 }}
            className='my-20 text-center text-5xl font-bold mb-11'>My Skills</motion.h1>
          <div className='flex flex-wrap items-center justify-center gap-4'>
            <motion.div initial={{ y: -10 }} animate={{ y: [ 10, -10 ] }} transition={{ duration: 2.5, ease: "linear", repeat: Infinity, repeatType: 'reverse' }}
              className='rounded-2xl border-4 border-neutral-800 p-4'>
              <FaReact className='text-7xl text-cyan-400'/>
            </motion.div>
            <motion.div initial={{ y: -10 }} animate={{ y: [ 10, -10 ] }} transition={{ duration: 3, ease: "linear", repeat: Infinity, repeatType: 'reverse' }}
              className='rounded-2xl border-4 border-neutral-800 p-4'>
              <FaNodeJs className='text-7xl text-green-500'/>
            </motion.div>
            <motion.div initial={{ y: -10 }} animate={{ y: [ 10, -10 ] }} transition={{ duration: 2.5, ease: "linear", repeat: Infinity, repeatType: 'reverse' }}
              className='rounded-2xl border-4 border-neutral-800 p-4'>
              <IoLogoJavascript className='text-7xl text-yellow-300'/>
            </motion.div>
            <motion.div initial={{ y: -10 }} animate={{ y: [ 10, -10 ] }} transition={{ duration: 2, ease: "linear", repeat: Infinity, repeatType: 'reverse' }}
              className='rounded-2xl border-4 border-neutral-800 p-4'>
              <FaHtml5 className='text-7xl text-red-500'/>
            </motion.div>
            <motion.div initial={{ y: -10 }} animate={{ y: [ 10, -10 ] }} transition={{ duration: 6, ease: "linear", repeat: Infinity, repeatType: 'reverse' }}
              className='rounded-2xl border-4 border-neutral-800 p-4'>
              <DiMongodb className='text-7xl text-green-500'/>
            </motion.div>
            <motion.div initial={{ y: -10 }} animate={{ y: [ 10, -10 ] }} transition={{ duration: 4, ease: "linear", repeat: Infinity, repeatType: 'reverse' }}
              className='rounded-2xl border-4 border-neutral-800 p-4'>
              <RiTailwindCssFill className='text-7xl text-cyan-400'/>
            </motion.div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default About;
