import { motion } from "framer-motion";

const Work = () => {
  const projects = [
    { title: "Portfolio Website", desc: "Built with React & Tailwind." },
    { title: "Tic Tac Toe Game", desc: "Classic game using HTML, CSS, JS." },
    { title: "Blog Platform", desc: "Full-stack MERN blogging app." },
  ];

  return (
    <section
      id="work"
      className="min-h-screen flex flex-col justify-center  bg-gray-950 items-center py-20"
    >
      <h2 className="text-4xl text-green-400 font-bold mb-8">My Work</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px #32CD32" }}
            className="p-6 bg-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition"
          >
            <a href="https://sumitkrmodi.github.io/tictactoe/" className="text-2xl text-white font-semibold">{p.title}</a>
            <p className="text-gray-200 mt-2">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Work;
