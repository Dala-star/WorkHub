import Button from "../common/Button";
import Container from "../common/Container";
import HeroDashboard from "./HeroDashboard";
import { FaArrowRight } from "react-icons/fa";

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-slate-950 pt-20"
    >
      {/* Background Glow */}
      <div className="absolute left-[-120px] top-[-120px] h-[420px] w-[420px] rounded-full bg-cyan-500/15 blur-[120px]" />

      <div className="absolute right-[-120px] bottom-[-120px] h-[420px] w-[420px] rounded-full bg-purple-500/10 blur-[120px]" />

      <Container>
        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* LEFT */}
          <div>

            <p className="mb-6 text-sm font-semibold uppercase tracking-[0.4em] text-cyan-400">
              DIGITAL SERVICES AGENCY
            </p>

            <h1 className="text-5xl font-extrabold leading-tight text-white lg:text-7xl">

              Helping Businesses

              <br />

              Build Their

              <span className="block text-cyan-400">
                Digital Presence
              </span>

            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-300">
              WorkHub creates modern websites, professional graphic
              design, and technology tutoring that empower businesses,
              professionals, and students to succeed in today's digital world.
            </p>

            <div className="mt-10 flex flex-wrap gap-5">

              <Button>
                Get a Quote
              </Button>

              <Button variant="secondary">
                View Projects
                <FaArrowRight className="ml-2 inline" />
              </Button>

            </div>

            <div className="mt-16 flex flex-wrap gap-12">

              <div>
                <h3 className="text-4xl font-bold text-cyan-400">
                  25+
                </h3>

                <p className="mt-2 text-slate-400">
                  Completed Projects
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-cyan-400">
                  15+
                </h3>

                <p className="mt-2 text-slate-400">
                  Happy Clients
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-cyan-400">
                  3
                </h3>

                <p className="mt-2 text-slate-400">
                  Core Services
                </p>
              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div className="relative lg:pl-6">
            <HeroDashboard />
          </div>

        </div>
      </Container>
    </section>
  );
}

export default Hero;