import bg_video from '../assets/bg-vid.mp4';


const Home = () => {

  return(
    <section className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat">
        <video autoPlay loop muted playsInline className='absolute top-0 left-0 w-full h-full object-cover z-0'>
          <source src={bg_video} type='video/mp4' />
          Your browser does not support the video tag.
        </video>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/50 to-black/60 z-10"></div>
        <div className="container mx-auto px-6 text-center text-white relative z-20">
        
          <div className="max-w-4xl mx-auto p-4 md:p-0">
            <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight">Hi, I'm <span className="text-blue-500">mrNia</span></h1>
            <p className='text-2xl md:text-5xl mb-8 leading-relaxed  text-orange-400'>
              Explore the space where code meets creativity
            </p>
            <p className="md:text-2xl text-base mb-8 text-gray-200 leading-relaxed">
              Built with React, I create modern, affordable websites that help businesses and individuals grow online.
            </p>
            <p className="md:text-2xl text-xl mb-12 text-gray-300 max-2.3xl mx-auto">
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
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
          <i className="ri-arrow-down-line text-white text-2xl"></i>
        </div>
      </section>

  )
}

export default Home;