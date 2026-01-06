export default function Hero() {
  return (
    <div className="group w-full bg-gray-900 text-white flex items-start justify-start pt-12 px-6 md:px-12 box-border">
      <div className="w-full max-w-[560px] mx-auto lg:mx-0 lg:ml-4 lg:w-auto lg:mr-40">
        {/* subtle highlight bar under the name that changes color on hover */}
        {/* <div className="h-1 w-28 bg-white/10 rounded mb-6 transition-colors duration-300 group-hover:bg-violet-300/90" /> */}
        <h1 className="text-2xl sm:text-6xl font-bold mb-2 text-left">Sathvik Ram Lanka</h1>
        <h2 className="text-xl text-gray-400 mb-6 text-left">Full Stack Developer</h2>
        <p className="text-lg text-gray-300 mb-8 max-w-[350px] leading-relaxed text-left">
          I build scalable web applications with modern technologies. Passionate about clean code and great user experiences.
        </p>
      </div>
      <div className="hidden lg:block flex-1"></div>
    </div>
  )
}

