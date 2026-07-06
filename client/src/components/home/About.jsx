import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import { FaCheckCircle } from "react-icons/fa";

function About() {
  return (
    <section
      id="about"
      className="bg-slate-950 py-24"
    >
      <Container>

        <SectionTitle
          eyebrow="ABOUT US"
          title="About WorkHub"
          description="Helping businesses and individuals grow through reliable digital solutions."
        />

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">

          {/* Image Placeholder */}

          <div className="flex h-96 items-center justify-center rounded-3xl border border-slate-800 bg-slate-900 text-slate-500">

            About Image

          </div>

          {/* Content */}

          <div>

            <h3 className="text-3xl font-bold text-white">
              Building Digital Experiences That Make an Impact
            </h3>

            <p className="mt-6 leading-8 text-slate-400">
              WorkHub provides modern web development,
              professional graphic design, and technology tutoring.
              Our goal is to help businesses establish a strong online
              presence while supporting students and professionals in
              developing valuable digital skills.
            </p>

            <div className="mt-8 space-y-4">

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-cyan-400" />
                <span>Modern Website Development</span>
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-cyan-400" />
                <span>Creative Graphic Design</span>
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-cyan-400" />
                <span>Personalized Technology Tutoring</span>
              </div>

            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}

export default About;