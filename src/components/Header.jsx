import { useState } from 'react';
import {X, Menu} from 'lucide-react';

import Logo from '../assets/mrnia.png';

const Header = () => {
  const[openMenu, setOpenMenu]=useState(false);

  return (
    <header className="bg-gray-200 shadow-md sticky top-0 z-50">
      <div className="mx-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className='flex justify-between items-center h-20'>
          <div className="flex items-center p-4">
            <img src={Logo} alt="logo" className="w-15 h-15 rounded-full bg-white border-2 border-white text-white" />
          </div>

          {/**desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className='text-gray-900 hover:text-blue-400 active:text-blue-400 focus:text-blue-400 transition-colors cursor-pointer' >About Me</a>
            <a href="#skills" className='text-gray-900 hover:text-blue-400 active:text-blue-400 focus:text-blue-400 transition-colors cursor-pointer' >Skills</a>
            <a href="#services" className='text-gray-900 hover:text-blue-400 active:text-blue-400 focus:text-blue-400 transition-colors cursor-pointer' >Services</a>
          </nav>

          {/**desktop button */}
          <div className="hidden md:flex p-4">
            <button type='button' className='font-medium rounded-full transition-colors duration-200 cursor-pointer whitespace-nowrap flex items-center justify-centerpx-3 md:px-6 my-1 md:py-3 text-base'>
              <a href="https://wa.me/+67574844904"><i className="ri-whatsapp-line text-4xl text-green-700 animate"></i></a>
            </button>
            <button type='button' className='font-medium rounded-lg transition-colors duration-200 cursor-pointer whitespace-nowrap flex items-center justify-center bg-blue-400 hover:bg-blue-500 active:bg-blue-500 text-white px-3 md:px-6 my-1 md:py-3 text-base'>
              <a href="#contact">Contact Me</a>
            </button>
          </div>

          {/**moible menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setOpenMenu(!openMenu)}
              className='text-white focus:outline-none'
            >
              {openMenu ? <x size={28} className="text-blue-500"/> : <Menu size={28} className='text-blue-500'/>}
            </button>
          </div>
        </div>
      </div>

      {/**mobile drop down menu */}
      {openMenu && (
        <div className="md:hidden text-3xl px-4 py-3 space-y-2 flex flex-col bg-gray-50">
          <a 
            href="#about" 
            className="blog text-gray-900 hover:text-blue-600 active:text-blue-600 border-b border-gray-200 mt-4"
            onClick={() =>  setOpenMenu(false)}
          >
            About
          </a>
          <a 
            href="#skills" 
            className="blog text-gray-900 hover:text-blue-600 active:text-blue-600 border-b border-gray-200 mt-4"
            onClick={() =>  setOpenMenu(false)}
          >
            SKills
          </a>
          <a 
            href="#services" 
            className="blog text-gray-900 hover:text-blue-600 active:text-blue-600 border-b border-gray-200 mt-4"
            onClick={() =>  setOpenMenu(false)}
          >
            Services
          </a>
          <a 
            href="#contact" 
            className="blog text-gray-900 hover:text-blue-600 active:text-blue-600 border-b border-gray-200 mt-4"
            onClick={() =>  setOpenMenu(false)}
          >
            Contact Me
          </a>
          <button className='rounded-full bg-green-600 mt-12 p-4' >
            <a 
              href="https://wa.me/+67574844904" 
              target="_blank" rel="noopener noreferrer"
              className="blog text-gray-900 hover:text-blue-600 active:text-blue-600"
              onClick={() =>  setOpenMenu(false)}
            >
            WhatsApp NOW!
            </a>
          </button>
        </div>
      )}
    </header>
  )
}

export default Header;