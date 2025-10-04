export default function About() {
  return (
    <section id="about" className="py-20  bg-gray-950 text-gray-200 px-6">
      <h2 className="text-4xl font-bold text-green-400 mb-6">About Me</h2>
      <p className="max-w-3xl text-xl">
        I am a Bachelor Of Computer Application student at Sarala Birla University, passionate about building modern web applications and exploring AI-powered solutions. I enjoy solving real-world problems with technology and constantly improving my skills through projects and online learning.
      </p>
      {/* <div className="flex flex-wrap gap-3 mt-6">
        {["Odoo","ERPNext","Django","Flask","Docker","Nginx","AWS"].map(skill => (
          <span key={skill} className="px-4 py-2 bg-gray-800 border border-green-400 rounded-full">
            {skill}
          </span>
        ))}
      </div> */}
    </section>
  );
}
