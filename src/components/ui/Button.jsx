function Button({ href, text }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full sm:w-auto text-center px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors duration-300"
    >
      {text}
    </a>
  )
}

export default Button
