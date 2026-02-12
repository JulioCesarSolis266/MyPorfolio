import Header from "../components/layout/Header.jsx";

export default function Hero() {
  return (
    <>
      <Header />

      <section className="relative min-h-screen">
        {/* Fondo */}
        <div className="relative bg-[url('/src/assets/hero-image.jpg')] bg-cover bg-center md:bg-fixed min-h-screen flex items-center justify-center">

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/70"></div>

          {/* Contenido */}
          <div className="relative z-10 text-white text-center px-6 max-w-4xl mx-auto">
            
            <p className="text-base sm:text-lg md:text-xl">
              Hi there
            </p>

            <h2 className="mt-4 font-semibold leading-tight
              text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              I’m <span className="font-bold">Julio César Solis</span>
              <span className="block mt-2 text-lg sm:text-xl md:text-2xl font-normal">
                Junior Full-Stack Developer (React.js + Node.js)
              </span>
            </h2>

            <h3 className="mt-4 text-sm sm:text-base md:text-lg text-gray-200">
              I build complete, functional web applications from idea to deployment.
            </h3>

          </div>
        </div>
      </section>
    </>
  );
}
