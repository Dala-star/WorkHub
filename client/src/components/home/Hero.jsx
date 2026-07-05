import Button from "../common/Button";
import Container from "../common/Container";
import HeroDashboard from "./HeroDashboard";
import { FaArrowRight } from "react-icons/fa";

function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-slate-950 py-20 lg:py-32"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl"></div>
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl"></div>

      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Side */}
          <div className="relative z-10">

            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
              Digital Services Agency
            </p>

            <h1 className="text-5xl font-extrabold leading-tight text-white lg:text-7xl">
              Helping Businesses Build
              <span className="block text-cyan-400">
                Their Digital Presence
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-300">
              WorkHub delivers modern websites, creative graphic design,
              and technology tutoring that help businesses,
              professionals, and students achieve their goals.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button>
                Get a Quote
              </Button>

              <Button variant="secondary">
                View Projects
                <FaArrowRight className="ml-2 inline" />
              </Button>
            </div>

            <div className="mt-12 flex gap-10">
              <div>
                <h3 className="text-3xl font-bold text-white">
                  25+
                </h3>
                <p className="text-slate-400">
                  Projects Delivered
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-white">
                  15+
                </h3>
                <p className="text-slate-400">
                  Happy Clients
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-white">
                  3+
                </h3>
                <p className="text-slate-400">
                  Services
                </p>
              </div>
            </div>

          </div>

          {/* Right Side */}
          <div className="relative">
            <HeroDashboard />
          </div>

        </div>
      </Container>
    </section>
  );
}

export default Hero;