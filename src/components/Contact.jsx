import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen py-20 bg-gray-950   text-gray-200 px-6">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-green-400 mb-6"
      >
        Contact Me
      </motion.h2>

      <motion.form
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        id="form"
        className="max-w-xl mx-auto flex flex-col gap-4"
      >
        <motion.input
          whileFocus={{ scale: 1.02, borderColor: "#32CD32" }}
          type="text"
          placeholder="Your Name"
          className="p-3 rounded  border border-gray-700 focus:outline-none"
        />
        <motion.input
          whileFocus={{ scale: 1.02, borderColor: "#32CD32" }}
          type="email"
          placeholder="Your Email"
          className="p-3 rounded bg-gray-900 border border-gray-700 focus:outline-none"
        />
        <motion.textarea
          whileFocus={{ scale: 1.02, borderColor: "#32CD32" }}
          rows="5"
          placeholder="Your Message"
          className="p-3 rounded bg-gray-900 border border-gray-700 focus:outline-none"
        />
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="px-6 py-3 bg-green-400 text-black font-bold rounded-xl hover:bg-green-500 transition"
        >
          Send
        </motion.button>
      </motion.form>
    </section>
  );
}

