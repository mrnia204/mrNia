import { useEffect, useState } from 'react';
import BackgroundImg from '../assets/wallpaper-background.png';
import BackgroundPhoneImg from '../assets/background-phone.png';
import Logo from '../assets/mrnia.png'


const Home = () => {
  const[bgStyle, setBgStyle]=useState({});

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width < 640) {
        // small screens
        setBgStyle({
          backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${BackgroundPhoneImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          
        });
      } else if ( width < 1024) {
        setBgStyle({
          backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)),url(${BackgroundImg})`,
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        });
      } else {
        setBgStyle({
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),url(${BackgroundImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        });
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener('resize', handleResize);

  },[]);

    
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#474f55]" style={bgStyle} >
      <div className="container mx-auto px-6 text-center text-white">
      
        <div className="max-w-4xl mx-auto p-4 md:p-0">
          <h1 className="text-3xl md:text-7xl font-bold mb-6 leading-tight">Hi, I'm <span className="text-blue-500">mrNia</span></h1>
          <p 
            className='text-lg md:text-6xl mb-8 leading-relaxed'
            style={{animation: 'colorCycle 4s linear infinite'}}
          >
            Explore the space where code meets creativity
          </p>
          <p className="md:text-2xl text-lg mb-8 text-gray-200 leading-relaxed">
            Built with React, I create modern, affordable websites that help businesses and individuals grow online.
          </p>
          <p className="md:text-2xl text-lg mb-12 text-gray-300 max-2.3xl mx-auto">
            Explore my work and let’s turn your ideas into reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className='bg-blue-500 hover:bg-blue-600 active:bg-blue-600 text-white px-4 py-2 md:px-8 md:py-4 rounded-2xl md:rounded-full md:text-lg font-semibold transition-all duration-300 trasform hover:scale-105 focus:scale-95 focus:ring-blue-300 focus:ring-2 whitespace-nowrap cursor-pointer'>
              <a href="#services">View Services I offer</a>
            </button>
             <button className=' border-2 border-white text-white hover:bg-white active:bg-white hover:text-gray-900 active:text-gray-900 px-4 py-2 md:px-8 md:py-4 rounded-2xl md:rounded-full md:text-lg font-semibold transition-all duration-300 trasform hover:scale-105 focus:scale-95  whitespace-nowrap cursor-pointer'>
              <a href="#contact">Contact Me Today!</a>
            </button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <i className="ri-arrow-down-line text-white text-2xl"></i>
      </div>
    </section>
  )
}

export default Home;