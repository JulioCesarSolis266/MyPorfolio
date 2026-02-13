import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://formspree.io/f/mwvnvjbr", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("Message sent successfully.");
        e.target.reset();
      } else {
        setStatus("There was an error. Please try again.");
      }
    } catch (error) {
      setStatus("Network error. Please try later.");
    }

    setLoading(false);
  }

  return (
    <section id="contact" className="py-16 px-4 bg-gray-50 scroll-mt-24">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">
          Contact
        </h2>

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-xl p-6 sm:p-8 flex flex-col gap-5"
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            className="w-full border border-gray-300 rounded-md px-4 py-3 
                       focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full border border-gray-300 rounded-md px-4 py-3 
                       focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <textarea
            name="message"
            placeholder="Message"
            rows="5"
            required
            className="w-full border border-gray-300 rounded-md px-4 py-3 
                       focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className="w-full sm:w-auto self-start px-6 py-3 bg-green-600 text-white 
                       rounded-md hover:bg-green-700 transition-colors duration-300 
                       disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {status && (
            <p className="text-sm text-center mt-2 text-gray-600">
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
