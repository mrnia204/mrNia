import React, { useEffect, useState } from "react";
import Logo from './assets/mrnia.png';

import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Footer from './pages/Footer';




function App() {
  const[loading, setLoading] = useState(true);

  useEffect(()=> {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  },[]);

  if (loading) {
    return(
      <div className="flex items-center justify-center min-h-screen bg-gray-500 text-white text-2xl">
        <img src={Logo} alt="logo" className="w-24 h-24 animate-bounce mb-6" /> 
        <div className="w-12 h-12 border-4 border-t-transparent border-orange-500 rounded-full animate-spin mb-4"></div>
        <p className="text-2xl font-semibold">Welcome</p>
      </div>
    )
  }
  return (
    <div className="min-h-screen bg-white">
      <Home />
      <About />
      <Skills />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App
