// eslint-disable-next-line no-unused-vars
import React from "react";
import about from "../assets/aboutImg.png";
import { FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiMongodb } from "react-icons/di";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div id="about" className="py-20 bg-gray-900 z-50 text-gray-300">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="text-4xl md:text-5xl font-bold mb-11 text-center"
        >
          About Me
        </motion.h2>
        <div className="flex flex-col md:flex-row gap-20 items-center">
          {/* img section */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.4 }}
          >
            <img src={about} className="w-[300px] md:w-[1550px]" alt="" />
          </motion.div>
          {/* paragraph section */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.4 }}
            className="p-5 md:p-10 bg-gray-950 rounded-md shadow-shade shadow-purple-700"
          >
            <p className="text-base leading-6 mb-6">
              Hello, I’m Rishita, a passionate and detail-oriented Web Developer
              with expertise in the MERN stack. I specialize in creating
              user-friendly, visually appealing websites that deliver
              exceptional performance and accessibility. While my primary focus
              is on the MERN stack, I am always eager to explore and learn new
              technologies and frameworks that align with evolving industry
              trends.
            </p>
            <p className="text-base leading-6 mb-6">
              My goal is to design websites that not only meet but exceed client
              expectations. I strive to craft seamless digital experiences that
              are accessible across devices, ensuring satisfaction and
              measurable results for my clients.
            </p>
            <p className="text-base leading-6">
              I am excited about the prospect of contributing to your esteemed
              organization and collaborating on innovative web solutions. Let’s
              build something extraordinary together!
            </p>
          </motion.div>
        </div>
        {/* skills section */}
        <div className="pb-12">
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="my-20 text-center text-5xl font-bold mb-11"
          >
            My Skills
          </motion.h1>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <motion.div
              initial={{ y: -5 }}
              animate={{ y: [5, -5] }}
              transition={{
                duration: 3,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="rounded-2xl border-4 border-neutral-800 p-4"
            >
              <FaReact className="text-7xl text-cyan-400" />
            </motion.div>
            <motion.div
              initial={{ y: -5 }}
              animate={{ y: [5, -5] }}
              transition={{
                duration: 3.2,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="rounded-2xl border-4 border-neutral-800 p-4"
            >
              <FaNodeJs className="text-7xl text-green-500" />
            </motion.div>
            <motion.div
              initial={{ y: -5 }}
              animate={{ y: [5, -5] }}
              transition={{
                duration: 3.1,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="rounded-2xl border-4 border-neutral-800 p-4"
            >
              <IoLogoJavascript className="text-7xl text-yellow-300" />
            </motion.div>
            <motion.div
              initial={{ y: -5 }}
              animate={{ y: [5, -5] }}
              transition={{
                duration: 3,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="rounded-2xl border-4 border-neutral-800 p-4"
            >
              <FaHtml5 className="text-7xl text-red-500" />
            </motion.div>
            <motion.div
              initial={{ y: -5 }}
              animate={{ y: [5, -5] }}
              transition={{
                duration: 3.2,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="rounded-2xl border-4 border-neutral-800 p-4"
            >
              <DiMongodb className="text-7xl text-green-500" />
            </motion.div>
            <motion.div
              initial={{ y: -5 }}
              animate={{ y: [5, -5] }}
              transition={{
                duration: 3.1,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="rounded-2xl border-4 border-neutral-800 p-4"
            >
              <RiTailwindCssFill className="text-7xl text-cyan-400" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
