import React from "react";

import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Footer from './pages/Footer';




function App() {
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
