import React from "react";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className=" text-2xl md:text-4xl font-bold text-gray-900 mb-4">Lets' Work Together</h2>
            <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to bring your project to life? Get in touch and let's discuss how I can help you to achieve your goals.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">Get In Touch</h3>
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

            <div className="bg-blue-50 rounded-lg mt-16 p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-5">Quick Contact</h3>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 text-white hover:bg-blue-800 font-semibold rounded-full transition-all duration-300 cursor-pointer whitespace-nowrap px-4 py-2 md:px-8 md:py-4 text-lg w-full sm:w-auto animate-pulse">
                  <a href="https://wa.me/+67574844904">
                    <i className="ri-whatsapp-line pr-1 text-green-400 text-2xl"></i>
                    WhatsApp
                  </a>
                </button>
                <button className="text-blue-600 border border-blue-600 hover:bg-blue-100 font-semibold rounded-full transition-all duration-300 cursor-pointer whitespace-nowrap px-4 py-2 md:px-8 md:py-4 text-lg w-full sm:w-auto">
                  <a href="mailto:nia.chrix@gmail.com">
                    <i className='ri-mail-star-line pr-1 text-blue-500 text-2xl'></i>
                    Email
                  </a>
                </button>
              </div>
            </div>

            </div>
           
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}

export default  Contact;