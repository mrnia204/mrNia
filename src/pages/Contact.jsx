import React from "react";

const Contact = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Lets' Work Together</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to bring your project to life? Get in touch and let's discuss how I can help you to achieve your goals.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h3>
              <div className="space-y-6 mb-8">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                    <i className="ri-mail-line text-white"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">204codetribe@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                    <i className="ri-phone-line text-white"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Phone</h4>
                    <p className="text-gray-600">Available via email first</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                    <i className="ri-time-line text-white"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Response Time</h4>
                    <p className="text-gray-600">Within 8 hours</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <form data-readdy-form="true">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <input 
                      type="text" 
                      id="name" 
                      required 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm" 
                      placeholder="Your full name"
                      name="name"
                    />
                  </div>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <input 
                      type="email" 
                      id="email" 
                      required 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm" 
                      placeholder="your@email.com"
                      name="email"
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Project Subject *</label>
                    <input 
                      type="text" 
                      id="subject" 
                      required 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm" 
                      placeholder="e.g., E-commerce website development"
                      name="subject"
                    />
                </div>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">Project Budget</label>
                    <input 
                      type="text"  
                      id="budget" 
                      name="budget"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-8 text-sm"
                      placeholder="K1,000.00"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">Timeline</label>
                    <input 
                      type="text"  
                      id="timeline" 
                      name="timeline"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-8 text-sm"
                      placeholder="e.g, 2-weeks, 1-month, 1-year"
                      required
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label htmlFor="message" name="message" className="block text-sm font-medium text-gray-700 mb-2">Project Details</label>
                  <textarea 
                    name="message" 
                    id="message" 
                    rows="6" 
                    maxLength="500"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-trasparent resize-none text-sm"
                    placeholder="Tell me about your projects, goals, and any specific requirements...."
                  />
                  <div className="text-right text-sm text-gray-500 mt-1">0 /500 characters</div>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-blue-500 hover:bg-blue-600 disabled:bg-blue-300 text-white py-4 px-6 rounded-lg font-semibold transition-colors duration-300 whitespace-nowrap cursor-pointer"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default  Contact;