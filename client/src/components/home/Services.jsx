import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import { FaArrowRight, FaCheck } from "react-icons/fa";
import useServices from "../../hooks/useServices";

function Services() {

  const {
    services,
    loading
  } = useServices();

  return (
    <section
      id="services"
      className="bg-[var(--color-background)] py-24"
    >

      <Container>

        <SectionTitle
          eyebrow="OUR SERVICES"
          title="What We Do"
          description="Helping businesses, professionals, and students succeed through reliable digital solutions."
        />


        <div className="mt-16 grid gap-8 lg:grid-cols-3">

          {services.map((service) => {

            const Icon = service.icon;


            return (

              <div
                key={service.id}
                className="
                  group
                  rounded-3xl
                  border
                  border-slate-800
                  bg-slate-900
                  p-8
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-cyan-400
                "
              >

                {/* Icon */}

                <div
                  className="
                    mb-8
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    bg-cyan-500/10
                    text-[var(--color-primary)]
                    transition
                    group-hover:bg-cyan-500
                    group-hover:text-white
                  "
                >
                  <Icon size={28}/>
                </div>


                <h3
                  className="
                    text-2xl
                    font-bold
                    text-white
                  "
                >
                  {service.title}
                </h3>


                <p
                  className="
                    mt-4
                    leading-7
                    text-slate-400
                  "
                >
                  {service.description}
                </p>



                <div className="mt-8 space-y-3">

                  {service.items.map((item)=>(
                    <div
                      key={item}
                      className="flex items-center gap-3"
                    >

                      <FaCheck
                        className="text-[var(--color-primary)]"
                      />

                      <span className="text-slate-300">
                        {item}
                      </span>

                    </div>
                  ))}

                </div>



                <button
                  className="
                    mt-10
                    flex
                    items-center
                    gap-2
                    font-semibold
                    text-[var(--color-primary)]
                    transition
                    hover:gap-3
                  "
                >
                  Learn More
                  <FaArrowRight/>

                </button>


              </div>

            );

          })}

        </div>

      </Container>

    </section>
  );
}


export default Services;