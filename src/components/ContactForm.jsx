import React, {useState, useRef} from "react";
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm(
      "service_oc030vo",
      "template_y6pk5fq",
      form.current,
      "PNADbmFkKmJp8OePs"
    ).then(
      (result) =>  {
        console.log(result.text);
        setLoading(false);
        setSuccess(true);
        e.target.reset();
      },
      (error) => {
        console.log(error.text);
        setLoading(false);
        setSuccess(false);
      }
    );
  }
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <form ref={form} onSubmit={sendEmail}>
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
          {loading ? "Sending..." : "Send Message"}
        </button>
        {success && <p className="text-green-500 mt-2">Message sent</p>}
      </form>
    </div>
  );
};

export default  ContactForm;