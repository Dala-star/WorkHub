function Portfolio() {
  const projects = [
    {
      title: "Social Pulse",
      desc: "Social media analytics dashboard",
      tags: ["React", "Node", "MongoDB"],
    },
    {
      title: "Network Tracer",
      desc: "Latency monitoring system",
      tags: ["Python", "Flask", "Charts"],
    },
    {
      title: "Library System",
      desc: "Full database management system",
      tags: ["MySQL", "PHP", "CRUD"],
    },
  ];

  return (
    <section id="portfolio" className="py-24 px-6 bg-slate-950">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold">My Work</h2>
        <p className="text-slate-400 mt-3">
          Some projects I've built
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:scale-105 transition duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
          >
            <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400">
              {project.title}
            </h3>

            <p className="text-slate-400 mb-4">
              {project.desc}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-xs px-3 py-1 rounded-full bg-slate-800 text-cyan-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;