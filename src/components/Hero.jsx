// eslint-disable-next-line no-unused-vars
import React from "react";
import headerImg from "../assets/header-img.svg";
import { BsGithub, BsInstagram, BsTwitterX } from "react-icons/bs";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";

const Hero = () => {
  return (
    <section
      id="home"
      className="h-max md:h-[90vh] bg-gradient-to-l bg-gray-950 text-white flex flex-col items-start justify-center relative z-10 pb-5"
    >
      <div className="max-w-7xl mx-auto items-center flex flex-col md:flex-row gap-12 justify-between">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="flex flex-wrap gap-4 md:flex-col mt-1 ml-5"
        >
          <a href="https://www.linkedin.com/">
            <span className="card shadow-2xl">
              <FaLinkedinIn className="w-8 h-8 hover:text-[#427ac9]" />
            </span>
          </a>
          <a href="https://x.com/">
            <span className="card shadow-2xl">
              <BsTwitterX className="w-7 h-7 hover:text-[#00acee]" />
            </span>
          </a>
          <a href="https://www.instagram.com/">
            <span className="card shadow-2xl">
              <BsInstagram className="w-7 h-7 hover:text-[#d62976]" />
            </span>
          </a>
          <a href="https://www.facebook.com/">
            <span className="card shadow-2xl">
              <FaFacebookF className="w-8 h-8 hover:text-[#3b5998]" />
            </span>
          </a>
          <a href="https://github.com/">
            <span className="card shadow-2xl">
              <BsGithub className="w-8 h-8 hover:text-[#4c3de9]" />
            </span>
          </a>
        </motion.div>
        <div className="md:space-y-7 px-4 ml-10">
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="text-[55px] font-bold leading-[0.8] mb-4 lg:text-[65px]"
          >
            Hi, It&apos;s{" "}
            <span
              className="bg-gradient-to-text bg-clip-text text-transparent"
              style={{ fontFamily: "Dancing Script, cursive" }}
            >
              Rishita Sarkar
            </span>
          </motion.h1>
          <div className="text-[36px] lg:text-[40px] font-semibold uppercase">
            <motion.span
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.4 }}
              className="text-white mr-4"
            >
              I am a
            </motion.span>
            <TypeAnimation
              sequence={[
                "Web Developer",
                2000,
                "ReactJS Developer",
                2000,
                "Front-End Developer",
                2000,
              ]}
              speed={55}
              className="text-[#ce33c1]"
              wrapper="span"
              repeat={Infinity}
            />
          </div>

          <motion.p
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="lg:w-[600px] mt-5 mb-7 md:mb-0 text-sm text-gray-300"
          >
            I&apos;m a web developer, proficient in coding and maintaining
            websites to ensure functionality and responsiveness.
          </motion.p>

          <a href="#contact">
            <motion.button
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.4 }}
              className="px-3 py-2 flex items-center gap-2 bg-custom-gradient rounded-md text-white transition-all mt-4"
            >
              Contact Me
            </motion.button>
          </a>
        </div>
        <div className="relative group">
          <motion.img
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.4, delay: 0 }}
            src={headerImg}
            className="md:w-[500px] w-[300px]"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
