import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl max-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">

            {/**mrNia */}
            <div className="md:col-span-2">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: "Pacifico, serif"}}>mrNia</h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Passionate web developer, creating beautiful, functional, 
                  and user-friendly digital experiences. Let's build something amazing togeter.
                </p>
              </div>
              {/**social media link */}
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/mrnia" 
                  target="_blank" 
                  rel="nooper noreferrer"
                  className="w-12 h-12 bg-gray-800 hover:bg-blue-500 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 cursor-pointer"
                  aria-label="GitHub"
                >
                  <i className="ri-github-line text-xl"></i>
                </a>
                <a 
                  href="https://facebook.com/daddykove" 
                  target="_blank" 
                  rel="nooper noreferrer"
                  className="w-12 h-12 bg-gray-800 hover:bg-blue-500 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 cursor-pointer"
                  aria-label="faceboook"
                >
                  <i className="ri-facebook-line text-xl"></i>
                </a>
                <a 
                  href="https://www.linkedin.com/in/christopher-nia-57b24823b/" 
                  target="_blank" 
                  rel="nooper noreferrer"
                  className="w-12 h-12 bg-gray-800 hover:bg-blue-500 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 cursor-pointer"
                  aria-label="LinkedIn"
                >
                  <i className="ri-linkedin-line text-xl"></i>
                </a>
                 <a 
                  href="https://www.linkedin.com/in/christopher-nia-57b24823b/" 
                  target="_blank" 
                  rel="nooper noreferrer"
                  className="w-12 h-12 bg-gray-800 hover:bg-blue-500 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 cursor-pointer"
                  aria-label="Instagram"
                >
                  <i className="ri-instagram-line text-xl"></i>
                </a>
                 <a 
                  href="mailto:204codetribe@gmail.com" 
                  target="_blank" 
                  rel="nooper noreferrer"
                  className="w-12 h-12 bg-gray-800 hover:bg-blue-500 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 cursor-pointer"
                  aria-label="Email"
                >
                  <i className="ri-mail-line text-xl"></i>
                </a>
              </div>
            </div>

            {/**quick links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <button className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">About</button>
                </li>
                <li>
                  <button className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">Skills</button>
                </li>
                <li>
                  <button className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">Services</button>
                </li>
                <li>
                  <button className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">Contact</button>
                </li>
              </ul>
            </div>

            {/**contck info */}
            <div>
              <h4 className="text-lg font-semibold bm-4">Contact Info</h4>
              <div className="space-y-3 text-gray-400">
                <div className="flext items-center">
                  <i className="ri-mail-line mr-3"></i>
                  <span>204codetribe@gmail.com</span>
                </div>
                <div className="flext items-center">
                  <i className="ri-map-pin-line mr-3"></i>
                  <span>Remote Worldwide</span>
                </div>
                <div className="flext items-center">
                  <i className="ri-time-line mr-3"></i>
                  <span>Available for Projects</span>
                </div>
              </div>
            </div>
          </div>

          {/**bottom line */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-gray-400 text-center md:text-left">
                <p>@2025 mrNia. All rights reserved.</p>
              </div>
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
                <a href="#" className="hover:text-white transition-colors cursor-pointer">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors cursor-pointer">Terms of Service</a>
                <a href="#" className="hover:text-white transition-colors cursor-pointer">Code with Christopher Nia</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;