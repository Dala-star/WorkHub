import { FaLaptopCode, FaPaintBrush, FaChalkboardTeacher } from "react-icons/fa";

function Services() {
  const services = [
    {
      icon: <FaLaptopCode />,
      title: "Website Development",
      desc: "Modern, responsive websites using React and Node.js.",
      color: "cyan",
    },
    {
      icon: <FaPaintBrush />,
      title: "Graphic Design",
      desc: "Logos, posters, branding, and social media designs.",
      color: "purple",
    },
    {
      icon: <FaChalkboardTeacher />,
      title: "Tutoring",
      desc: "Programming, databases, and web development lessons.",
      color: "pink",
    },
  ];

  return (
    <section id="services" className="py-24 px-6 bg-slate-950">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold">My Services</h2>
        <p className="text-slate-400 mt-3">
          What I offer professionally
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="group p-8 rounded-2xl border border-slate-800 bg-slate-900 hover:scale-105 transition duration-300 hover:shadow-xl hover:shadow-cyan-500/10"
          >
            <div className="text-4xl mb-4 text-cyan-400 group-hover:scale-110 transition">
              {service.icon}
            </div>

            <h3 className="text-xl font-semibold mb-2">
              {service.title}
            </h3>

            <p className="text-slate-400">
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;