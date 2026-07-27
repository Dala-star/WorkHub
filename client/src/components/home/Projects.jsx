import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";

import {
  FaArrowRight,
  FaGithub,
  FaExternalLinkAlt
} from "react-icons/fa";

import useProjects from "../../hooks/useProjects";


function Projects() {

  const {
    projects,
    loading
  } = useProjects();


  return (

    <section
      id="projects"
      className="
        bg-slate-900
        py-24
      "
    >

      <Container>


        <SectionTitle

          eyebrow="PROJECTS"

          title="Featured Projects"

          description="
          Explore some of the digital solutions,
          applications, and designs created by WorkHub.
          "

        />



        {/* Loading State */}

        {
          loading && (

            <div
              className="
                mt-16
                text-center
                text-slate-400
              "
            >

              Loading projects...

            </div>

          )
        }



        {/* Empty State */}

        {
          !loading && projects.length === 0 && (

            <div
              className="
                mt-16
                rounded-3xl
                border
                border-slate-800
                bg-[var(--color-background)]
                p-10
                text-center
                text-slate-400
              "
            >

              No projects available yet.

            </div>

          )
        }




        {/* Projects Grid */}

        {
          !loading && projects.length > 0 && (

            <div
              className="
                mt-16
                grid
                gap-8
                md:grid-cols-2
                lg:grid-cols-3
              "
            >


              {
                projects.map((project)=>(


                  <div

                    key={project.id}

                    className="
                      group
                      overflow-hidden
                      rounded-3xl
                      border
                      border-slate-800
                      bg-[var(--color-background)]

                      transition
                      duration-300

                      hover:-translate-y-2
                      hover:border-[var(--color-primary)]
                    "

                  >



                    {/* Image */}

                    <div

                      className="
                        relative
                        h-52
                        overflow-hidden
                        bg-slate-800
                      "

                    >

                      {
                        project.image

                        ?

                        <img

                          src={project.image}

                          alt={project.title}

                          className="
                            h-full
                            w-full
                            object-cover

                            transition
                            duration-500

                            group-hover:scale-110
                          "

                        />

                        :

                        <div

                          className="
                            flex
                            h-full
                            items-center
                            justify-center
                            text-slate-500
                          "

                        >

                          Project Preview

                        </div>

                      }



                      {/* Hover Overlay */}

                      <div

                        className="
                          absolute
                          inset-0
                          flex
                          items-center
                          justify-center

                          bg-black/60

                          opacity-0

                          transition

                          group-hover:opacity-100
                        "

                      >

                        <FaExternalLinkAlt

                          className="
                            text-3xl
                            text-white
                          "

                        />

                      </div>


                    </div>





                    {/* Content */}


                    <div
                      className="
                        p-6
                      "
                    >



                      <h3

                        className="
                          text-xl
                          font-bold
                          text-white
                        "

                      >

                        {project.title}

                      </h3>





                      <p

                        className="
                          mt-2
                          text-sm
                          text-[var(--color-primary)]
                        "

                      >

                        {project.tech}

                      </p>





                      <p

                        className="
                          mt-4
                          text-sm
                          leading-7
                          text-slate-400
                        "

                      >

                        {project.description}

                      </p>





                      {/* Buttons */}

                      <div

                        className="
                          mt-6
                          flex
                          gap-5
                        "

                      >


                        {
                          project.demo && (

                            <a

                              href={project.demo}

                              target="_blank"

                              rel="noopener noreferrer"

                              className="
                                flex
                                items-center
                                gap-2

                                text-sm
                                font-medium

                                text-[var(--color-primary)]

                                transition

                                hover:opacity-80
                              "

                            >

                              View Project

                              <FaArrowRight size={13}/>


                            </a>

                          )

                        }





                        {
                          project.github && (

                            <a

                              href={project.github}

                              target="_blank"

                              rel="noopener noreferrer"

                              className="
                                flex
                                items-center
                                gap-2

                                text-sm

                                text-slate-400

                                transition

                                hover:text-white
                              "

                            >

                              <FaGithub />

                              Code


                            </a>

                          )

                        }


                      </div>



                    </div>



                  </div>


                ))
              }


            </div>

          )
        }



      </Container>


    </section>

  );

}


export default Projects;