const HeroSection = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4 sm:px-6 md:px-8 lg:px-16">
      <h1 className="mb-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-none tracking-tight text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
        ManGeDev
      </h1>
      <p className="mb-6 text-base sm:text-lg md:text-xl lg:text-2xl font-normal text-gray-500 dark:text-gray-400">
        Video Game Developer | RPG, 3D Terror and Adventures <br />
        Specialized in creating immersive experiences in genres like RPG, 3D terror and adventure. I work with Unity 3D and other tools to bring interactive worlds to life, combining creativity, narrative, and technology to deliver unique and engaging games.
      </p>
    </div>
  );
};

export default HeroSection;
