import React from "react";

const projects = [
  {
    title: "Vision-Connect",
    description: "A Next.js-based video conferencing platform with Clerk authentication and Stream integration.",
    image: "/Picture1.png",
    link: "#"
  },
  {
    title: "Telegram Bot",
    description: "A Telegram bot with earning, gaming, and reward systems built using Node.js and Express.",
    image: "/Picture1.png",
    link: "#"
  },
  {
    title: "AI Video Generator",
    description: "An AI-driven system to generate videos from text using ML models and Flask API.",
    image: "/Picture1.png",
    link: "#"
  },
  {
    title: "Task Reward System",
    description: "A reward-based system where users earn points by completing social media tasks.",
    image: "/Picture1.png",
    link: "#"
  }
];

const Portfolio = () => {
  return (
    <section className="bg-black text-white py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col gap-10 min-h-screen px-4 md:px-0 mt-11">
        <h2 className="text-4xl font-bold flex  gap-3">
          Projects
          <span className="border-b-4 border-green-500 w-16"></span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-gray-900 bg-opacity-30 backdrop-blur-md p-6 rounded-xl shadow-lg overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-green-400/50"
            >
              <div className="relative w-full h-52 overflow-hidden rounded-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-lg group-hover:opacity-80 transition"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70 group-hover:opacity-50"></div>
              </div>
              <h3 className="text-2xl font-semibold text-green-400 mt-4 group-hover:text-green-300 transition">
                {project.title}
              </h3>
              <p className="text-gray-300 text-sm mt-2 leading-relaxed">{project.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
