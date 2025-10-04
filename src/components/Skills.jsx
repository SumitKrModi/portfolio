import { motion } from "framer-motion";

const skills = [
  { name: "HTML/CSS", level: "Expert" },
  { name: "Javascript", level: "Expert" },
  { name: "React", level: "Expert" },
  { name: "Python", level: "Experienced" },
  { name: "MongoDB", level: "Expert" },
  // { name: "AWS", level: "Experienced" },
  // ... add more
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-950  text-gray-200 px-6">
      <h2 className="text-4xl font-bold text-green-400 mb-12">Know My Skills</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {skills.map((s, index) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, duration: 0.2 }}
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px #32CD32" }}
            className="p-6 bg-gray-900 rounded-xl shadow cursor-pointer"
          >
            <h3 className="text-xl font-semibold">{s.name}</h3>
            <p className="text-green-400">{s.level}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
