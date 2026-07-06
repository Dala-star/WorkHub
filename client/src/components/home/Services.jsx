import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import {
  FaArrowRight,
  FaCode,
  FaGraduationCap,
  FaPalette,
  FaCheck,
} from "react-icons/fa";

const services = [
  {
    icon: <FaCode size={28} />,
    title: "Web Development",
    description:
      "Modern, responsive websites and web applications built for performance and growth.",
    items: [
      "Business Websites",
      "Landing Pages",
      "Web Applications",
      "Dashboards",
    ],
  },
  {
    icon: <FaPalette size={28} />,
    title: "Graphic Design",
    description:
      "Professional visuals that strengthen your brand and communicate your message.",
    items: [
      "Logos & Branding",
      "Social Media Graphics",
      "Posters & Flyers",
      "Marketing Materials",
    ],
  },
  {
    icon: <FaGraduationCap size={28} />,
    title: "Technology Tutoring",
    description:
      "One-on-one guidance to help students and professionals master modern technology.",
    items: [
      "HTML & CSS",
      "React",
      "Databases",
      "Programming Support",
    ],
  },
];

function Services() {
  return (
    <section
      id="services"
      className="bg-slate-950 py-24"
    >
      <Container>

        <SectionTitle
          eyebrow="OUR SERVICES"
          title="What We Do"
          description="Helping businesses, professionals, and students succeed through reliable digital solutions."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-3">

          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-3xl border border-slate-800 bg-slate-900 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400"
            >

              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400 transition group-hover:bg-cyan-500 group-hover:text-white">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold text-white">
                {service.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                {service.description}
              </p>

              <div className="mt-8 space-y-3">

                {service.items.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >
                    <FaCheck className="text-cyan-400" />

                    <span className="text-slate-300">
                      {item}
                    </span>
                  </div>
                ))}

              </div>

              <button className="mt-10 flex items-center gap-2 font-semibold text-cyan-400 transition hover:gap-3">
                Learn More

                <FaArrowRight />
              </button>

            </div>
          ))}

        </div>

      </Container>
    </section>
  );
}

export default Services;