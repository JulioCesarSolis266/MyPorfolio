import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      {/* Footer normal */}
      <footer className="bg-black text-white py-12 text-center font-mono">
        <p>
          💻 Julio César Solis - {new Date().getFullYear()}
        </p>
      </footer>

      {/* Botón flotante */}
<a
  href="https://wa.me/543416699125"
  target="_blank"
  rel="noopener noreferrer"
className="
  fixed
  bottom-5
  right-2 sm:right-6
  bg-green-500 hover:bg-green-600
  text-white
  p-3 sm:p-4
  text-xl sm:text-3xl
  rounded-full
  shadow-lg
  transition-all duration-300
  z-50
"
>
  <FaWhatsapp />
</a>
    </>
  );
}
