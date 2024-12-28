// eslint-disable-next-line no-unused-vars
import React from "react";
import { motion } from "framer-motion";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import { AiFillGithub } from "react-icons/ai";

const Project = () => {
  const projects = [
    {
      img: project1,
      title: "Travel Blog Website",
      description:
        "Explore various travel destinations with an interactive blog.",
      technology: "HTML, CSS and JavaScript",  
      links: {
        site: "https://travelblog-g8h0.onrender.com/",
        github: "https://github.com/RiSu-25/travelblog",
      },
    },
    {
      img: project3,
      title: "E-Commerce Website",
      description: "An e-commerce platform for online shopping enthusiasts.",
      technology: "MongoDB, ExpressJS, ReactJS and NodeJS", 
      links: {
        site: "https://ecommerce-frontend-snowy.vercel.app/",
        github: "https://github.com/RiSu-25/ecommerce",
      },
    },
    {
      img: project2,
      title: "Hotel Booking System",
      description:
        "A modern hotel booking platform with seamless user experience.",
      technology: "HTML, CSS, JavaScript and Bootstrap",  
      links: {
        site: "https://hotelbooking-4wcq.onrender.com/",
        github: "https://github.com/RiSu-25/hotelbooking",
      },
    },
    
  ];

  // Animation Variants
  const imageAnimation = {
    hidden: { x: "100%", opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  const textAnimation = {
    hidden: { x: "-100%", opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  return (
    <section id="project" className="bg-gradient-to-r bg-gray-900 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-5xl font-bold text-center text-gray-300 mb-12"
          initial="hidden"
          animate="visible"
          variants={textAnimation}
          transition={{ duration: 1.2 }} 
        >
          My Projects
        </motion.h2>

        {projects.map((project, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            } mb-12`}
          >
            {/* Image Section */}
            <motion.div
              className="w-full md:w-1/2 p-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={imageAnimation}
              transition={{
                duration: 1.5, // Slower image animation
                delay: 0.3,
                type: "spring",
                stiffness: 150,
              }}
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </motion.div>

            {/* Text Section */}
            <motion.div
              className="w-full md:w-1/2 p-4 flex flex-col justify-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={textAnimation}
              transition={{
                duration: 1.5, // Slower text animation
                delay: 0.5, // Slight delay after image
                type: "spring",
                stiffness: 150,
              }}
            >
              <h3 className="text-2xl font-semibold text-gray-200 mb-4">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <p className="text-gray-300 mb-4 text-sm">{project.technology}</p>
              <div className="flex space-x-4">
                <a
                  href={project.links.site}
                  className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300"
                >
                  View Site
                </a>
                <a
                  href={project.links.github}
                  className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300"
                >
                  <AiFillGithub size={20} />
                </a>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
