import React from "react";

const Services = () => {
  const services = [
    {
      title: 'Web Development',
      icon: "ri-computer-fill",
      content: "Custom websites and web applications built with modern technologies like React, Next.js, and TypeScript.",
      list: [
        "Responsive Design",
        "Performance Optimization",
        "SOE-Friendly",
        "Cross-browser Compatibility",
      ],
    },
    {
      title: 'Mobile-First Design',
      icon: "ri-smartphone-line",
      content: "Mobile-optimised websites that provides excellent user experience across all devices and screen sizes.",
      list: [
       "Mobile Optimization",
       "Touch-Friendly UI",
       "Fast Loading",
       "Progressive Web Apps",
      ],
    },
    {
      title: 'Backend Development',
      icon: "ri-window-line",
      content: "Robust backend solutions with APIs, databases, and server-side logic to power your applications.",
      list: [
       "Restful APIs",
       "Database Design",
       "Authentication",
       "Cloud Deployment",
      ],
    },
  ]
  return (
    <>
      
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 px-4">
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">Services I Offer</h2>
              <p className="md:text-xl text-gray-600 max-w-3xl mx-auto">
                As a freelance web developer, I provide comprensive solutions to help bring your digital ideas to life.
              </p>
            </div>
            {/**grid cols */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">

              {services.map((service, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:translate-y-2">
                  <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mb-6">
                    <i className={`${service.icon} text-white text-2xl`}></i>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.content}</p>
                  <ul className="space-y-2 mb-6">
                    {service.list.map((item, index) => (
                      <li key={index} className="flex items-center text-gray-700"><i className="ri-check-line text-green-800 mr-2"></i>{item}</li>
                    ))}
                  </ul>
                  <div className="border-t pt-4">
                    <p className="text-lg font-semibold text-blue-400">Contact me for cost</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">Need Something Custom?</h3>
              <p className="text-lg mb-6 max-w-2xl mx-auto">
                Every project is unique. Let's discuss your specific requirements and 
                create a tailored solution that fits your needs and budget.
              </p>
              <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer">
                <a href="https://wa.me/+67574844904"> <i className="ri-whatsapp-line text-2xl text-green-600 pr-4"></i>Messag me on WhatsApp</a>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Services;