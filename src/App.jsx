import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './pages/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Skills from './pages/Skills';


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
