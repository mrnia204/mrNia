import React from "react";
import Dummuy_person from '../assets/mrnia-profile.png';

const About = () => {
  return(
    <section id="about" className="py-20 bg-gray-50 leading-relaxed">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/** left side text*/}
            <div>
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">About Me</h2>
              <p className="text-base md:text-lg text-gray-700 mb-6 leading-relaxed">I'm a passionate web developer with a 
                love for creating beautiful, functional, and user-friendly websites and applications. 
                My journey in web development started several years ago, and I've been constantly learning 
                and evolving ever since.
              </p>
              <p className="text-base md:text-lg text-gray-700 mb-6 leading-relaxed">
                I specialize in modern web technologies like React, JavaScript, and 
                TypeScript, and I'm always excited to take on new challenges that push me to grow as a developer.
              </p>
              <p className="text-base md:text-lg text-gray-700 mb-8 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to 
                open source projects, or sharing my knowledge with the developer community.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                  <i className="ri-map-pin-line text-blue-500"></i>
                  <span className="text-gray-700">Remote Worldwide</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                  <i className="ri-time-line text-green-500"></i>
                  <span className="text-gray-700">Available for Projects</span>
                </div>
              </div>
            </div>

            {/**image container - right side */}
            <div className="relative">
              <img 
                src={Dummuy_person} 
                alt="mrnia - developer"
                className="rounded-2xl object-cover w-full h-[500px] object-top"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-500 text-white p-6 rounded-2xl shadow-2xl">
                <div className="text-center">
                  <div className="text-3xl font-bold">+3</div>
                  <div className="text-sm">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;