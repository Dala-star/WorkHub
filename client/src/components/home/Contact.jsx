import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-900 py-24"
    >
      <Container>

        <SectionTitle
          eyebrow="CONTACT"
          title="Let's Build Something Great Together"
          description="Have a project, design request, or need technology tutoring? We'd love to hear from you."
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-2">

          {/* Contact Information */}

          <div>

            <h3 className="text-3xl font-bold text-white">
              Get In Touch
            </h3>

            <p className="mt-6 leading-8 text-slate-400">
              Whether you're looking for a website, graphic design, or
              technology tutoring, WorkHub is ready to help bring your
              ideas to life.
            </p>

            <div className="mt-10 space-y-8">

              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-cyan-500/10 p-4 text-cyan-400">
                  <FaEnvelope />
                </div>

                <div>
                  <p className="font-semibold text-white">Email</p>
                  <p className="text-slate-400">
                    hello@workhub.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-cyan-500/10 p-4 text-cyan-400">
                  <FaPhoneAlt />
                </div>

                <div>
                  <p className="font-semibold text-white">Phone</p>
                  <p className="text-slate-400">
                    +256 XXX XXX XXX
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-cyan-500/10 p-4 text-cyan-400">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <p className="font-semibold text-white">Location</p>
                  <p className="text-slate-400">
                    Kampala, Uganda
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Contact Form */}

          <div className="rounded-3xl border border-slate-800 bg-slate-950 p-8">

            <form className="space-y-6">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full rounded-xl border border-slate-700 bg-slate-900 px-5 py-4 outline-none focus:border-cyan-400"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-xl border border-slate-700 bg-slate-900 px-5 py-4 outline-none focus:border-cyan-400"
              />

              <select
                className="w-full rounded-xl border border-slate-700 bg-slate-900 px-5 py-4 outline-none focus:border-cyan-400"
              >
                <option>Select a Service</option>
                <option>Web Development</option>
                <option>Graphic Design</option>
                <option>Technology Tutoring</option>
              </select>

              <textarea
                rows="6"
                placeholder="Tell us about your project..."
                className="w-full rounded-xl border border-slate-700 bg-slate-900 px-5 py-4 outline-none focus:border-cyan-400"
              ></textarea>

              <button
                type="submit"
                className="w-full rounded-xl bg-cyan-500 py-4 font-semibold text-white transition hover:bg-cyan-400"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </Container>
    </section>
  );
}

export default Contact;