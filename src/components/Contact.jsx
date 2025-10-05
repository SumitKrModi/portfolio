import { motion } from "framer-motion";
import { FaPhoneAlt } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";

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
      <div className="flex gap-2 text-xl"><FaRegEnvelope /> <h1>sumitkumarmodi0514@gmail.com</h1></div>
      <div className="flex gap-2 text-xl"><FaPhoneAlt /> <h1>8935888196</h1></div>
      <motion.form
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        action="https://formsubmit.co/sumitkumarmodi0514@gmail.com"
        method="POST"
        id="form"
        className="max-w-xl mx-auto flex flex-col gap-4"
      >
        <motion.input
          whileFocus={{ scale: 1.02, borderColor: "#32CD32" }}type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value="https://sumitkrmodi-portfolio.vercel.app/" />

        <motion.input
          whileFocus={{ scale: 1.02, borderColor: "#32CD32" }}
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="p-3 rounded  border border-gray-700 focus:outline-none"
        />
        <motion.input
          whileFocus={{ scale: 1.02, borderColor: "#32CD32" }}
          type="email"
          name="email"
          placeholder="Your Email"
          className="p-3 rounded bg-gray-900 border border-gray-700 focus:outline-none"
          required
        />
        <motion.textarea
          whileFocus={{ scale: 1.02, borderColor: "#32CD32" }}
          rows="5"
          name="message"
          placeholder="Your Message"
          required
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

