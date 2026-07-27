import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";

import {
  FaCheckCircle,
  FaCode,
  FaPalette,
  FaGraduationCap,
} from "react-icons/fa";


function About() {


  const strengths = [
    {
      icon: FaCode,
      title: "Modern Development",
      description:
        "Responsive websites and web applications built with modern technologies.",
    },

    {
      icon: FaPalette,
      title: "Creative Design",
      description:
        "Professional designs that improve branding and customer engagement.",
    },

    {
      icon: FaGraduationCap,
      title: "Technology Training",
      description:
        "Practical guidance to help students and professionals grow their skills.",
    },
  ];



  const achievements = [
    {
      value: "25+",
      label: "Projects Completed",
    },

    {
      value: "15+",
      label: "Satisfied Clients",
    },

    {
      value: "3",
      label: "Core Services",
    },
  ];



  return (

    <section
      id="about"
      className="
        bg-[var(--color-background)]
        py-24
      "
    >

      <Container>


        <SectionTitle
          eyebrow="ABOUT US"
          title="Building Digital Solutions That Create Impact"
          description="
          WorkHub helps businesses, professionals, and students
          succeed through reliable technology solutions and digital skills.
          "
        />



        <div
          className="
            mt-16
            grid
            items-center
            gap-12
            lg:grid-cols-2
          "
        >



          {/* Visual Side */}

          <div
            className="
              relative
              overflow-hidden
              rounded-3xl
              border
              border-slate-800
              bg-slate-900
              p-8
            "
          >


            <div
              className="
                absolute
                -left-20
                -top-20
                h-64
                w-64
                rounded-full
                bg-[var(--color-primary)]/10
                blur-3xl
              "
            />


            <div
              className="
                relative
                grid
                gap-6
              "
            >


              {achievements.map((item)=>(

                <div
                  key={item.label}
                  className="
                    rounded-2xl
                    border
                    border-slate-800
                    bg-[var(--color-background)]
                    p-6
                  "
                >

                  <h3
                    className="
                      text-4xl
                      font-bold
                      text-[var(--color-primary)]
                    "
                  >
                    {item.value}
                  </h3>


                  <p
                    className="
                      mt-2
                      text-slate-400
                    "
                  >
                    {item.label}
                  </p>


                </div>

              ))}


            </div>


          </div>







          {/* Content Side */}

          <div>


            <h3
              className="
                text-3xl
                font-bold
                text-white
              "
            >
              Empowering Businesses Through Technology
            </h3>



            <p
              className="
                mt-6
                leading-8
                text-slate-400
              "
            >
              At WorkHub, we combine creativity and technology
              to deliver digital solutions that solve real problems.
              From websites and branding to technology education,
              we help clients build confidence in the digital world.
            </p>




            <div
              className="
                mt-8
                space-y-5
              "
            >

              {strengths.map((item)=>(

                <div
                  key={item.title}
                  className="
                    flex
                    gap-4
                  "
                >


                  <div
                    className="
                      mt-1
                      text-[var(--color-primary)]
                    "
                  >

                    <item.icon />

                  </div>



                  <div>

                    <h4
                      className="
                        font-semibold
                        text-white
                      "
                    >
                      {item.title}
                    </h4>


                    <p
                      className="
                        mt-1
                        text-sm
                        text-slate-400
                      "
                    >
                      {item.description}
                    </p>


                  </div>


                </div>


              ))}


            </div>




            <div
              className="
                mt-10
                flex
                items-center
                gap-3
                text-slate-300
              "
            >

              <FaCheckCircle
                className="
                  text-[var(--color-primary)]
                "
              />

              <span>
                Focused on quality, innovation, and customer success
              </span>


            </div>



          </div>




        </div>



      </Container>


    </section>

  );

}


export default About;