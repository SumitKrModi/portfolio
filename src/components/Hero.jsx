import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaCodepen } from "react-icons/fa";
export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col md:flex-row items-center  justify-center bg-gray-950  gap-10 text-center md:text-left"
    >
      {/* Image with neon border */}
      <div className="relative w-60 h-60 md:w-72 md:h-72 rounded-full p-[5px] bg-gradient-to-r from-purple-500 via-cyan-400 to-pink-500 animate-spin-slow">
        <img
          src="/mp.png"  // put your image in public/myphoto.jpg
          alt="My Profile"
          className="w-full h-full rounded-full object-cover border-[5px] border-gray-900"
        />
      </div>

      {/* Text Content */}
      <div>
        <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl text-gray-300 font-bold mb-4"
      >Hi, I’m Sumit 👋</motion.h1>
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-xl text-gray-300"
      >
          A passionate Web Developer who loves building modern websites & apps.
          <div className="flex mt-5 gap-5">
          <a target="_blank" href="https://github.com/SumitKrModi"><FaGithub /></a>
          <a target="_blank" href="https://linkedin.com/in/sumit-kumar-modi-b88b44316/"><FaLinkedin /></a>
          <a target="_blank" href="https://instagram.com/_ksumit18_/"><FaInstagram /></a>
          </div>
        </motion.div>
        </div>
        <motion.a
        href="#contact"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
        className="mt-6 px-6 py-3 border border-green-400 text-green-400 rounded-xl hover:bg-green-400 hover:text-black transition"
      >
        Let’s Connect
      </motion.a>
      
    </section>
  );
}
