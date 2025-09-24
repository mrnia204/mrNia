import React from "react";

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w 6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I'm proficient in a wide range of technologies and tools that help me build exceptional web experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">

            {/** frontend development */}
            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                  <i className="ri-palette-line text-white text-xl"></i>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900">Frontend Development</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700 font-medium">React</span>
                    <span className="text-gray-500 text-sm">95%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full transition-all duration-1000 ease-out" style={{ width: "95%"}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700 font-medium">TypeScript</span>
                    <span className="text-gray-500 text-sm">80%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full transition-all duration-1000 ease-out" style={{ width: "80%"}}></div>
                  </div>
                </div>
                 <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700 font-medium">JavaScript</span>
                    <span className="text-gray-500 text-sm">83%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full transition-all duration-1000 ease-out" style={{ width: "83%"}}></div>
                  </div>
                </div>
                 <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700 font-medium">HTML/CSS</span>
                    <span className="text-gray-500 text-sm">97%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full transition-all duration-1000 ease-out" style={{ width: "97%"}}></div>
                  </div>
                </div>
                 <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700 font-medium">Tailwind CSS</span>
                    <span className="text-gray-500 text-sm">92%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full transition-all duration-1000 ease-out" style={{ width: "92%"}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700 font-medium">Bootstrap</span>
                    <span className="text-gray-500 text-sm">81%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full transition-all duration-1000 ease-out" style={{ width: "81%"}}></div>
                  </div>
                </div>
                
              </div>
            </div>

            {/** backend development */}
            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                  <i className="ri-server-line text-white text-xl"></i>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900">Backend Development</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700 font-medium">Node.js</span>
                    <span className="text-gray-500 text-sm">65%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full transition-all duration-1000 ease-out" style={{ width: "65%"}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700 font-medium">Express.js</span>
                    <span className="text-gray-500 text-sm">65%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full transition-all duration-1000 ease-out" style={{ width: "65%"}}></div>
                  </div>
                </div>
                 <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700 font-medium">MongoDB</span>
                    <span className="text-gray-500 text-sm">76%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full transition-all duration-1000 ease-out" style={{ width: "76%"}}></div>
                  </div>
                </div>
                 <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700 font-medium">REST APIs</span>
                    <span className="text-gray-500 text-sm">75%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full transition-all duration-1000 ease-out" style={{ width: "75%"}}></div>
                  </div>
                </div>
                 <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700 font-medium">Firebase</span>
                    <span className="text-gray-500 text-sm">86%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full transition-all duration-1000 ease-out" style={{ width: "86%"}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700 font-medium">PostgreSQL</span>
                    <span className="text-gray-500 text-sm">67%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full transition-all duration-1000 ease-out" style={{ width: "67%"}}></div>
                  </div>
                </div>  
              </div>
            </div>

            {/** Tools & TEchnologies */}
            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                  <i className="ri-tools-line text-white text-xl"></i>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900">Tools & Technologies</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700 font-medium">Git</span>
                    <span className="text-gray-500 text-sm">87%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full transition-all duration-1000 ease-out" style={{ width: "87%"}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700 font-medium">Docker</span>
                    <span className="text-gray-500 text-sm">90%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full transition-all duration-1000 ease-out" style={{ width: "90%"}}></div>
                  </div>
                </div>
                 <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700 font-medium">Kubernetes</span>
                    <span className="text-gray-500 text-sm">65%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full transition-all duration-1000 ease-out" style={{ width: "65%"}}></div>
                  </div>
                </div>
                 <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700 font-medium">Canva</span>
                    <span className="text-gray-500 text-sm">98%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full transition-all duration-1000 ease-out" style={{ width: "98%"}}></div>
                  </div>
                </div>
              </div>
            </div>

            {/** Mobile Application */}
            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                  <i className="ri-smartphone-fill text-white text-xl"></i>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900">Mobile Application</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700 font-medium">React Native</span>
                    <span className="text-gray-500 text-sm">90%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full transition-all duration-1000 ease-out" style={{ width: "87%"}}></div>
                  </div>
                </div>
              </div>  
            </div>
          </div>

          {/**alwasy learning */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white text-center">
            <h3 className="text-xl md:text-2xl font-bold mb-4">Always Learning</h3>
            <p className="text-base md:text-lg mb-6 max-w-2xl mx-auto">
              With technology evolving rapidly, I remain dedicated to keeping up with the 
              latest trends and best practices in web development.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-white/20 px-4 py-2 rounded-full text-sm">Next.js</span>
              <span className="bg-white/20 px-4 py-2 rounded-full text-sm">Java</span>
              <span className="bg-white/20 px-4 py-2 rounded-full text-sm">Python</span>
              <span className="bg-white/20 px-4 py-2 rounded-full text-sm">Web3</span>
              <span className="bg-white/20 px-4 py-2 rounded-full text-sm">AI/ML</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default  Skills;