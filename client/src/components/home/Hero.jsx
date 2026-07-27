import Button from "../common/Button";
import Container from "../common/Container";
import HeroDashboard from "./HeroDashboard";
import { FaArrowRight } from "react-icons/fa";


function Hero() {

  const stats = [
    {
      value: "25+",
      label: "Completed Projects",
    },
    {
      value: "15+",
      label: "Happy Clients",
    },
    {
      value: "3",
      label: "Core Services",
    },
  ];


  return (

    <section
      id="home"
      className="
        relative
        flex
        min-h-screen
        items-center
        overflow-hidden
        bg-[var(--color-background)]
        pt-20
      "
    >

      {/* Background Glow */}

      <div
        className="
          absolute
          left-[-120px]
          top-[-120px]
          h-[420px]
          w-[420px]
          rounded-full
          bg-[var(--color-primary)]/15
          blur-[120px]
        "
      />


      <div
        className="
          absolute
          bottom-[-120px]
          right-[-120px]
          h-[420px]
          w-[420px]
          rounded-full
          bg-[var(--color-secondary)]/10
          blur-[120px]
        "
      />



      <Container>

        <div
          className="
            grid
            items-center
            gap-16
            lg:grid-cols-2
            lg:gap-20
          "
        >


          {/* LEFT SIDE */}

          <div
            className="
              animate-fade-in
            "
          >


            <p
              className="
                mb-6
                text-sm
                font-semibold
                uppercase
                tracking-[0.4em]
                text-[var(--color-primary)]
              "
            >
              Digital Services Agency
            </p>



            <h1
              className="
                text-4xl
                font-extrabold
                leading-tight
                text-[var(--color-heading)]
                sm:text-5xl
                lg:text-7xl
              "
            >

              Helping Businesses

              <br />

              Build Their


              <span
                className="
                  block
                  text-[var(--color-primary)]
                "
              >
                Digital Presence
              </span>


            </h1>




            <p
              className="
                mt-8
                max-w-xl
                text-lg
                leading-8
                text-[var(--color-text)]
              "
            >
              WorkHub creates modern websites, professional graphic
              design, and technology tutoring that empower businesses,
              professionals, and students to succeed in today's digital world.
            </p>





            {/* BUTTONS */}

            <div
              className="
                mt-10
                flex
                flex-wrap
                gap-5
              "
            >

              <Button
                href="#contact"
              >
                Get a Quote
              </Button>



              <Button
                href="#projects"
                variant="secondary"
              >

                View Projects

                <FaArrowRight
                  className="ml-2"
                />

              </Button>


            </div>





            {/* STATS */}

            <div
              className="
                mt-16
                grid
                grid-cols-2
                gap-8
                sm:grid-cols-3
              "
            >

              {stats.map((stat) => (

                <div
                  key={stat.label}
                >

                  <h3
                    className="
                      text-3xl
                      font-bold
                      text-[var(--color-primary)]
                      lg:text-4xl
                    "
                  >
                    {stat.value}
                  </h3>


                  <p
                    className="
                      mt-2
                      text-sm
                      text-[var(--color-muted)]
                    "
                  >
                    {stat.label}
                  </p>


                </div>

              ))}


            </div>


          </div>






          {/* RIGHT SIDE */}

          <div
            className="
              relative
              lg:pl-6
            "
          >

            <HeroDashboard />

          </div>




        </div>


      </Container>


    </section>

  );
}


export default Hero;