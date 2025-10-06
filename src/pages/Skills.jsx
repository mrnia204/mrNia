import React from "react";


const Skills = () => {
  const skillsData = [
    {
      title: "Frontend Development",
      icon: "ri-palette-line",
      className: "bg-blue-500",
      skills: [
        { name: "React", level: "95%" },
        { name: "TypeScript", level: "80%" },
        { name: "JavaScript", level: "83%"},
        { name: "HTML/CSS", level: "97%"},
        { name: "Tailwind CSS", level: "90%"},
        { name: "Bootstrap", level: "81%", },
      ],
    },
     {
      title: "Backend Development",
      icon: "ri-server-line",
      className: "bg-green-500",
      skills: [
        { name: "Node.js", level: "63%" },
        { name: "Express.js", level: "65%" },
        { name: "MongoDB", level: "76%" },
        { name: "REST APIs", level: "75%" },
        { name: "Firebase ", level: "86%" },
        { name: "MySQL", level: "67%" },
      ],
    },
    {
      title: "Tools & Technologies",
      icon: "ri-tools-line",
      className: "bg-purple-500",
      skills: [
        { name: "GIT", level: "87%" },
        { name: "Docker & Docker compose", level: "90%" },
        { name: "Kubernetes", level: "76%" },
        { name: "Canva", level: "94%" },
      ],
    },
    {
      title: "Mobile Application",
      icon: "ri-smartphone-fill",
      className: "bg-orange-500",
      skills: [
        { name: "React Native", level: "90%" },
      ],
    },

  ];

  const learningItems = [
    "Next.js",
    "Java", 
    "Python",
    "Web3",
    "AI/ML",
    "MySQL",
  ];

  return (
    <>
   
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

              {skillsData.map((data, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl p-8 transition-all duration-300 hover:bg-gradient-to-b hover:from-blue-200 hover:bg-purple-300 hover:shadow-xl focus:bg-gradient-to-b focus:from-blue-200 focus:bg-purple-300 focus:shadow-xl active:bg-gradient-to-b active:from-blue-200 active:bg-purple-300 active:shadow-xl">
                  <div className="flex items-center mb-6">
                    <div className={`${data.className} w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4`}>
                      <i className={`${data.icon} text-white text-xl`}></i>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-white">{data.title}</h3>
                  </div>

                  <div className="space-y-4">
                    {data.skills.map((skill, index) => (
                      <div key={index} >
                        <div className="flex justify-between mb-2">
                          <span className="text-gray-700 font-medium group-hover:text-white">{skill.name}</span>
                          <span className="text-gray-500 text-sm group-hover:text-white">{skill.level}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className={`${data.className} h-2 rounded-full transition-all duration-1000 ease-out group-hover:text-white`} style={{width: skill.level}}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            {/**alwasy learning */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white text-center">
              <h3 className="text-xl md:text-2xl font-bold mb-4">Always Learning</h3>
              <p className="text-base md:text-lg mb-6 max-w-2xl mx-auto">
                With technology evolving rapidly, I remain dedicated to keeping up with the 
                latest trends and best practices in web development.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {learningItems.map(items => (
                  <span key={items} className="bg-white/20 px-4 py-2 rounded-full text-sm">{items}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default  Skills;