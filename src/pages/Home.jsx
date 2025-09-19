import BackgroundImg from '../assets/wallpaper-background.png';
import Logo from '../assets/mrnia.png'

const Home = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"   
      style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${BackgroundImg})`}}
       
    >
      <div className="container mx-auto px-6 text-center text-white">
        <div className="absolute top-6 left-6 bg-white rounded-full">
          <img src={Logo} alt="logo" className="w-14 h-14 rounded-full border-2 border-white text-white" />
        </div>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">Hi, I'm <span className="text-blue-400">mrNia</span></h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">Welcome to 
            my personal site. I built this site with React to showcase my work and share my journey as a web developer.</p>
          <p className="text-lg md:text-xl mb-12 text-gray-300 max-2.3xl mx-auto">Here you'll find my projects, skills, and the 
            services I offer as a freelance developer.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className='bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 trasform hover:scale-105 whitespace-nowrap cursor-pointer'>
              View My Work
            </button>
             <button className=' border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 trasform hover:scale-105 whitespace-nowrap cursor-pointer'>
             Get In Touch
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