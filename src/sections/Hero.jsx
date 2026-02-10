import Header from "../components/layout/Header.jsx";

export default function Hero() {
  return (
    <>
      <Header />

      <section className="relative">
        {/* Fondo */}
        <div className="relative bg-[url('/src/assets/hero-image.jpg')] bg-cover bg-center bg-fixed min-h-screen flex items-center justify-center">
          {/* Overlay oscuro */}
          <div className="absolute inset-0 bg-black/70"></div>

          {/* Contenido (por encima del overlay) */}
          <div className="relative z-10 text-white text-center px-6">
            <p className="text-xl">Hi there</p>

            <h2 className="text-4xl mt-4">
              <span className="font-bold">Julio César Solis |</span> Full-Stack
              Developer Junior (React.js + Node.js) • Higher Degree in
              Programming
            </h2>

            <h3 className="mt-2">
              I build complete web applications focusing on functionality and
              deployment.
            </h3>
          </div>
        </div>
      </section>
    </>
  );
}
