import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import { FaArrowRight } from "react-icons/fa";

const projects = [
  {
    title: "Network Latency Tracer",
    tech: "Python • SQLite",
    description:
      "A desktop application for monitoring network latency and generating reports.",
  },
  {
    title: "Library Management System",
    tech: "React • MySQL",
    description:
      "A complete library management solution for books, members, and borrowing records.",
  },
  {
    title: "WorkHub Website",
    tech: "React • Tailwind CSS",
    description:
      "The official website for WorkHub, showcasing digital services and projects.",
  },
];

function Projects() {
  return (
    <section id="projects" className="bg-slate-900 py-24">
      <Container>
        <SectionTitle
          eyebrow="PROJECTS"
          title="Featured Projects"
          description="A selection of some of our recent work."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950"
            >
              {/* Placeholder Image */}
              <div className="flex h-52 items-center justify-center bg-slate-800 text-slate-500">
                Project Screenshot
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white">
                  {project.title}
                </h3>

                <p className="mt-2 text-sm text-cyan-400">
                  {project.tech}
                </p>

                <p className="mt-4 text-slate-400">
                  {project.description}
                </p>

                <button className="mt-6 flex items-center gap-2 font-medium text-cyan-400">
                  View Project
                  <FaArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Projects;