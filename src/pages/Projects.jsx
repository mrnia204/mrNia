import React from "react";

const Projects = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="md:text-xl text-gray-600 max-w-3xl mx-auto">
              Here are some of my recent projects that showcase my skills and passion for development
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button className="px-4 py-2 md:px-6 md:py-3 rounded-full font-medium transition-all duration-300 whitespace-nowrap cursor-pointer bg-white text-gray-700 hover:bg-gray-100 shadow-sm active:bg-gray-100 focus:ring-1">All Projects</button>
            <button className="px-4 py-2 md:px-6 md:py-3 rounded-full font-medium transition-all duration-300 whitespace-nowrap cursor-pointer bg-white text-gray-700 hover:bg-gray-100 shadow-sm active:bg-gray-100 focus:ring-1">Frontend</button>
            <button className="px-4 py-2 md:px-6 md:py-3 rounded-full font-medium transition-all duration-300 whitespace-nowrap cursor-pointer bg-white text-gray-700 hover:bg-gray-100 shadow-sm active:bg-gray-100 focus:ring-1">Backend</button>
            <button className="px-4 py-2 md:px-6 md:py-3 rounded-full font-medium transition-all duration-300 whitespace-nowrap cursor-pointer bg-white text-gray-700 hover:bg-gray-100 shadow-sm active:bg-gray-100 focus:ring-1">Full Stack</button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 active:-translate-y-2">
              <div className="relative overflow-hidden">
                <img 
                  src="ghtap.jpg" 
                  alt="E-commerce platform"
                  className="w-full h-48 object-cover object-top transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a href="#" className="bg-white text-gray-900 p-3 rounded-full hover:bg-gray-100 active:bg-gray-100 transition-colors cursor-pointer">
                    <i className="ri-external-link-line text-lg"></i>
                  </a>
                  <a href="#" className="bg-white text-gray-900 p-3 rounded-full hover:bg-gray-100 active:bg-gray-100 transition-colors cursor-pointer">
                    <i className="ri-external-github-line text-lg"></i>
                  </a>
                </div>
                <div className="p-3 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">E-Commerce Project</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    A full-stack e-commerce solution built with React, Node.js, tailwindcss, and PostgreSQL,. Features in
                    user auhentication, payment processing and admin dashboard.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">React</span>
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Node.js</span>
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">PostgreSQL</span>
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Stripe</span>
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Tailwindcss</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 active:-translate-y-2">
              <div className="relative overflow-hidden">
                <img 
                  src="ghtap.jpg" 
                  alt="E-commerce platform"
                  className="w-full h-48 object-cover object-top transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a href="#" className="bg-white text-gray-900 p-3 rounded-full hover:bg-gray-100 active:bg-gray-100 transition-colors cursor-pointer">
                    <i className="ri-external-link-line text-lg"></i>
                  </a>
                  <a href="#" className="bg-white text-gray-900 p-3 rounded-full hover:bg-gray-100 active:bg-gray-100 transition-colors cursor-pointer">
                    <i className="ri-external-github-line text-lg"></i>
                  </a>
                </div>
                <div className="p-3 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">E-Commerce Project</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    A full-stack e-commerce solution built with React, Node.js, tailwindcss, and PostgreSQL,. Features in
                    user auhentication, payment processing and admin dashboard.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">React</span>
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Node.js</span>
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">PostgreSQL</span>
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Stripe</span>
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Tailwindcss</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 active:-translate-y-2">
              <div className="relative overflow-hidden">
                <img 
                  src="ghtap.jpg" 
                  alt="E-commerce platform"
                  className="w-full h-48 object-cover object-top transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a href="#" className="bg-white text-gray-900 p-3 rounded-full hover:bg-gray-100 active:bg-gray-100 transition-colors cursor-pointer">
                    <i className="ri-external-link-line text-lg"></i>
                  </a>
                  <a href="#" className="bg-white text-gray-900 p-3 rounded-full hover:bg-gray-100 active:bg-gray-100 transition-colors cursor-pointer">
                    <i className="ri-external-github-line text-lg"></i>
                  </a>
                </div>
                <div className="p-3 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">E-Commerce Project</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    A full-stack e-commerce solution built with React, Node.js, tailwindcss, and PostgreSQL,. Features in
                    user auhentication, payment processing and admin dashboard.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">React</span>
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Node.js</span>
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">PostgreSQL</span>
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Stripe</span>
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Tailwindcss</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 active:-translate-y-2">
              <div className="relative overflow-hidden">
                <img 
                  src="ghtap.jpg" 
                  alt="E-commerce platform"
                  className="w-full h-48 object-cover object-top transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a href="#" className="bg-white text-gray-900 p-3 rounded-full hover:bg-gray-100 active:bg-gray-100 transition-colors cursor-pointer">
                    <i className="ri-external-link-line text-lg"></i>
                  </a>
                  <a href="#" className="bg-white text-gray-900 p-3 rounded-full hover:bg-gray-100 active:bg-gray-100 transition-colors cursor-pointer">
                    <i className="ri-external-github-line text-lg"></i>
                  </a>
                </div>
                <div className="p-3 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">E-Commerce Project</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    A full-stack e-commerce solution built with React, Node.js, tailwindcss, and PostgreSQL,. Features in
                    user auhentication, payment processing and admin dashboard.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">React</span>
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Node.js</span>
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">PostgreSQL</span>
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Stripe</span>
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Tailwindcss</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 active:-translate-y-2">
              <div className="relative overflow-hidden">
                <img 
                  src="ghtap.jpg" 
                  alt="E-commerce platform"
                  className="w-full h-48 object-cover object-top transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a href="#" className="bg-white text-gray-900 p-3 rounded-full hover:bg-gray-100 active:bg-gray-100 transition-colors cursor-pointer">
                    <i className="ri-external-link-line text-lg"></i>
                  </a>
                  <a href="#" className="bg-white text-gray-900 p-3 rounded-full hover:bg-gray-100 active:bg-gray-100 transition-colors cursor-pointer">
                    <i className="ri-external-github-line text-lg"></i>
                  </a>
                </div>
                <div className="p-3 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">E-Commerce Project</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    A full-stack e-commerce solution built with React, Node.js, tailwindcss, and PostgreSQL,. Features in
                    user auhentication, payment processing and admin dashboard.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">React</span>
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Node.js</span>
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">PostgreSQL</span>
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Stripe</span>
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Tailwindcss</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 active:-translate-y-2">
              <div className="relative overflow-hidden">
                <img 
                  src="ghtap.jpg" 
                  alt="E-commerce platform"
                  className="w-full h-48 object-cover object-top transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a href="#" className="bg-white text-gray-900 p-3 rounded-full hover:bg-gray-100 active:bg-gray-100 transition-colors cursor-pointer">
                    <i className="ri-external-link-line text-lg"></i>
                  </a>
                  <a href="#" className="bg-white text-gray-900 p-3 rounded-full hover:bg-gray-100 active:bg-gray-100 transition-colors cursor-pointer">
                    <i className="ri-external-github-line text-lg"></i>
                  </a>
                </div>
                <div className="p-3 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">E-Commerce Project</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    A full-stack e-commerce solution built with React, Node.js, tailwindcss, and PostgreSQL,. Features in
                    user auhentication, payment processing and admin dashboard.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">React</span>
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Node.js</span>
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">PostgreSQL</span>
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Stripe</span>
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Tailwindcss</span>
                  </div>
                </div>
              </div>
            </div>

          {/**text */}
          <div className="text-center mt-6 md:mt-12">
            <button className="bg-blue-500 hover:bg-blue-600 active:bg-blue-600 text-white px-4 md:px-8 py-2 md:py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 focus:scaled-95 whitespace-nowrap cursor-pointer">
              View All projects on GitHub
            </button>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;