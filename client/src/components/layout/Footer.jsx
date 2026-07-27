import Logo from "../common/Logo";
import Container from "../common/Container";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import contact from "../../constants/contact";
import navigation from "../../constants/navigation";
import services from "../../data/services";


function Footer() {
  return (
    <footer
      className="
        border-t
        border-slate-800
        bg-[var(--color-background)]
      "
    >

      <Container>

        <div
          className="
            grid
            gap-12
            py-16
            md:grid-cols-2
            lg:grid-cols-4
          "
        >

          {/* Company */}

          <div>

            <Logo />

            <p
              className="
                mt-6
                leading-7
                text-slate-400
              "
            >
              WorkHub provides modern web development,
              creative graphic design, and technology
              tutoring for businesses, professionals,
              and students.
            </p>


            {/* Social Links */}

            <div
              className="
                mt-6
                flex
                gap-4
              "
            >

              <a
                href={contact.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="
                  rounded-lg
                  bg-slate-900
                  p-3
                  text-slate-400
                  transition
                  hover:bg-[var(--color-primary)]
                  hover:text-white
                "
              >
                <FaGithub />
              </a>


              <a
                href={contact.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="
                  rounded-lg
                  bg-slate-900
                  p-3
                  text-slate-400
                  transition
                  hover:bg-[var(--color-primary)]
                  hover:text-white
                "
              >
                <FaLinkedin />
              </a>

            </div>

          </div>



          {/* Quick Links */}

          <div>

            <h3
              className="
                mb-6
                text-lg
                font-semibold
                text-white
              "
            >
              Quick Links
            </h3>


            <ul
              className="
                space-y-3
                text-slate-400
              "
            >

              {navigation.map((item) => (

                <li key={item.id}>

                  <a
                    href={item.link}
                    className="
                      transition
                      hover:text-[var(--color-primary)]
                    "
                  >
                    {item.name}
                  </a>

                </li>

              ))}

            </ul>

          </div>




          {/* Services */}

          <div>

            <h3
              className="
                mb-6
                text-lg
                font-semibold
                text-white
              "
            >
              Services
            </h3>


            <ul
              className="
                space-y-3
                text-slate-400
              "
            >

              {services.map((service) => (

                <li
                  key={service.id}
                >
                  {service.title}
                </li>

              ))}

            </ul>

          </div>





          {/* Contact */}

          <div>

            <h3
              className="
                mb-6
                text-lg
                font-semibold
                text-white
              "
            >
              Contact
            </h3>


            <div
              className="
                space-y-5
              "
            >

              <div
                className="
                  flex
                  items-center
                  gap-3
                  text-slate-400
                "
              >

                <FaEnvelope
                  className="
                    text-[var(--color-primary)]
                  "
                />

                <span>
                  {contact.email}
                </span>

              </div>



              <div
                className="
                  flex
                  items-center
                  gap-3
                  text-slate-400
                "
              >

                <FaPhoneAlt
                  className="
                    text-[var(--color-primary)]
                  "
                />

                <span>
                  {contact.phone}
                </span>

              </div>




              <div
                className="
                  flex
                  items-center
                  gap-3
                  text-slate-400
                "
              >

                <FaMapMarkerAlt
                  className="
                    text-[var(--color-primary)]
                  "
                />

                <span>
                  {contact.location}
                </span>

              </div>


            </div>

          </div>


        </div>





        {/* Bottom Copyright */}

        <div
          className="
            border-t
            border-slate-800
            py-6
            text-center
            text-sm
            text-slate-500
          "
        >

          © {new Date().getFullYear()} WorkHub.
          All rights reserved.

        </div>


      </Container>

    </footer>
  );
}


export default Footer;