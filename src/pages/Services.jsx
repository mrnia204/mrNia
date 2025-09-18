import React from "react";

const Services = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Services I Offer</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              As a freelance web developer, I provide comprensive solutions to help bring your digital ideas to life.
            </p>
          </div>
          {/**grid cols */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">

            {/**web tech services */}
            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:translate-y-2">
              <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mb-6">
                <i className="ri-computer-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Web Development</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Custom websites and web applications built with morden technologies like React, Next.js, and TypeScript.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-700"><i className="ri-check-line text-green-800 mr-2"></i>Responseve Design</li>
                <li className="flex items-center text-gray-700"><i className="ri-check-line text-green-800 mr-2"></i>Performace Optimization</li>
                <li className="flex items-center text-gray-700"><i className="ri-check-line text-green-800 mr-2"></i>SEO-Friendly</li>
                <li className="flex items-center text-gray-700"><i className="ri-check-line text-green-800 mr-2"></i>Cross-browser Compatibility</li>
              </ul>
              <div className="border-t pt-4">
                <p className="text-lg font-semibold text-blue-400">Contact me for cost</p>
              </div>
            </div>

             {/**Mobile first design*/}
            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:translate-y-2">
              <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mb-6">
                <i className="ri-computer-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Mobile-First Design</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Mobile-optimised websites that provides excellent user experience across all devices and screen sizes
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-700"><i className="ri-check-line text-green-800 mr-2"></i>Mobile Optimization</li>
                <li className="flex items-center text-gray-700"><i className="ri-check-line text-green-800 mr-2"></i>Touch-Friendly UI</li>
                <li className="flex items-center text-gray-700"><i className="ri-check-line text-green-800 mr-2"></i>Fast Loading</li>
                <li className="flex items-center text-gray-700"><i className="ri-check-line text-green-800 mr-2"></i>Progressive Web Apps</li>
              </ul>
              <div className="border-t pt-4">
                <p className="text-lg font-semibold text-blue-400">Contact me for cost</p>
              </div>
            </div>

              {/** Backend Development*/}
            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:translate-y-2">
              <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mb-6">
                <i className="ri-computer-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Backend Development</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Robust backend solutions with APIs, databases, and server-side logic to power your applications.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-700"><i className="ri-check-line text-green-800 mr-2"></i>Restful APIs</li>
                <li className="flex items-center text-gray-700"><i className="ri-check-line text-green-800 mr-2"></i>Database Design</li>
                <li className="flex items-center text-gray-700"><i className="ri-check-line text-green-800 mr-2"></i>Authentication</li>
                <li className="flex items-center text-gray-700"><i className="ri-check-line text-green-800 mr-2"></i>Cloud Deployment</li>
              </ul>
              <div className="border-t pt-4">
                <p className="text-lg font-semibold text-blue-400">Contact me for cost</p>
              </div>
            </div>
          </div>


          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Need Something Custom?</h3>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              Every project is unique. Let's discuss your specific requirements and 
              create a tailored solution taht fits your needs and budget.
            </p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer">Send me a Message</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services;