import Logo from "../common/Logo";
import Container from "../common/Container";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <Container>
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">

          {/* Company */}

          <div>

            <Logo />

            <p className="mt-6 text-slate-400 leading-7">
              WorkHub provides modern web development,
              creative graphic design, and technology
              tutoring for businesses, professionals,
              and students.
            </p>

            <div className="mt-6 flex gap-4">

              <a
                href="#"
                className="rounded-lg bg-slate-900 p-3 text-slate-400 transition hover:bg-cyan-500 hover:text-white"
              >
                <FaGithub />
              </a>

              <a
                href="#"
                className="rounded-lg bg-slate-900 p-3 text-slate-400 transition hover:bg-cyan-500 hover:text-white"
              >
                <FaLinkedin />
              </a>

            </div>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="mb-6 text-lg font-semibold text-white">
              Quick Links
            </h3>

            <ul className="space-y-3 text-slate-400">

              <li><a href="#home">Home</a></li>

              <li><a href="#services">Services</a></li>

              <li><a href="#projects">Projects</a></li>

              <li><a href="#about">About</a></li>

              <li><a href="#contact">Contact</a></li>

            </ul>

          </div>

          {/* Services */}

          <div>

            <h3 className="mb-6 text-lg font-semibold text-white">
              Services
            </h3>

            <ul className="space-y-3 text-slate-400">

              <li>Web Development</li>

              <li>Graphic Design</li>

              <li>Technology Tutoring</li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="mb-6 text-lg font-semibold text-white">
              Contact
            </h3>

            <div className="space-y-5">

              <div className="flex items-center gap-3 text-slate-400">
                <FaEnvelope className="text-cyan-400" />
                <span>hello@workhub.com</span>
              </div>

              <div className="flex items-center gap-3 text-slate-400">
                <FaPhoneAlt className="text-cyan-400" />
                <span>+256 XXX XXX XXX</span>
              </div>

              <div className="flex items-center gap-3 text-slate-400">
                <FaMapMarkerAlt className="text-cyan-400" />
                <span>Kampala, Uganda</span>
              </div>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="border-t border-slate-800 py-6 text-center text-sm text-slate-500">

          © 2026 WorkHub. All rights reserved.

        </div>

      </Container>
    </footer>
  );
}

export default Footer;