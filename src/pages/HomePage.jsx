import React from "react";
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Services from './Services';
import Contact from './Contact';

const HomePage = () => {
  return (
    <div className="flex-1">
      <Home />
      <About />
      <Skills />
      <Services />
      <Contact />
    </div>
  )
}

export default HomePage;