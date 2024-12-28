// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';



const Education = () => {
  return (
    <section id='education' className="py-16 bg-gray-950 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Education</h2>
        <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-8 justify-center">
          {/* Vertical Line (White) - Visible on tablet and larger screens */}
          <div className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 border-l-4 border-white z-0 lg:block hidden"></div>

          {/* Column 1 */}
          <div className="bg-gray-900 p-4 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 w-4/5 mx-auto">
            <p className="text-3xl font-bold">2020</p> 
            <h3 className="text-2xl font-bold mt-2">Master of Computer Application</h3>
            <p className="text-lg font-light mt-2"  style={{  fontFamily: 'Roboto, serif' }}>Kalinga University</p>
          </div>

          <div className="bg-gray-900 p-4 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 w-4/5 mx-auto">
            <p className="text-3xl font-bold">2017</p>
            <h3 className="text-2xl font-bold mt-2">Bachelor of Science (Computer Science)</h3>
            <p className="text-lg font-light mt-2" style={{ fontFamily: 'Roboto, serif' }}>Mats University</p>
          </div>

          {/* Graduation Icon on the Vertical Line - Visible on tablet and larger screens */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-900 p-4 rounded-full shadow-lg z-10 lg:block hidden hover:bg-custom-gradient transition-all duration-300 hover:scale-110 hover:shadow-2xl">
            <FaGraduationCap className="text-white text-4xl transition-transform duration-300 ease-in-out" />
          </div>

          {/* Column 2 */}
          <div className="bg-gray-900 p-4 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 w-4/5 mx-auto">
            <p className="text-3xl font-bold">2014</p> 
            <h3 className="text-2xl font-bold mt-2">High School (12<sup>th</sup>)</h3>
            <p className="text-lg font-light mt-2" style={{ fontFamily: 'Roboto, serif' }}>St. Xavier’s Public School</p>
          </div>

          <div className="bg-gray-900 p-4 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 w-4/5 mx-auto">
            <p className="text-3xl font-bold">2012</p> 
            <h3 className="text-2xl font-bold mt-2">Secondary School (10<sup>th</sup>)</h3>
            <p className="text-lg font-light mt-2" style={{ fontFamily: 'Roboto, serif' }}>St. Xavier’s Public School</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
