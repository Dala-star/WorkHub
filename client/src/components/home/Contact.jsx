import { useState } from "react";

import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

import contact from "../../constants/contact";
import services from "../../data/services";
import validateEmail from "../../utils/validateEmail";


function Contact() {


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });


  const [error, setError] = useState("");

  const [success, setSuccess] = useState("");




  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };




  const handleSubmit = (e) => {

    e.preventDefault();


    setError("");
    setSuccess("");



    if (!formData.name.trim()) {

      setError("Please enter your name.");
      return;

    }



    if (!validateEmail(formData.email)) {

      setError("Please enter a valid email address.");
      return;

    }



    if (!formData.service) {

      setError("Please select a service.");
      return;

    }



    if (!formData.message.trim()) {

      setError("Please tell us about your project.");
      return;

    }




    // Temporary submission
    console.log(formData);



    setSuccess(
      "Thank you! Your message has been received."
    );


    setFormData({
      name: "",
      email: "",
      service: "",
      message: "",
    });

  };





  return (

    <section
      id="contact"
      className="
        bg-slate-900
        py-24
      "
    >

      <Container>


        <SectionTitle
          eyebrow="CONTACT"
          title="Let's Build Something Great Together"
          description="
          Have a project, design request, or need technology tutoring?
          We'd love to hear from you.
          "
        />




        <div
          className="
            mt-16
            grid
            gap-12
            lg:grid-cols-2
          "
        >




          {/* Contact Information */}


          <div>


            <h3
              className="
                text-3xl
                font-bold
                text-white
              "
            >
              Get In Touch
            </h3>



            <p
              className="
                mt-6
                leading-8
                text-slate-400
              "
            >

              Whether you're looking for a website,
              graphic design, or technology tutoring,
              WorkHub is ready to help bring your
              ideas to life.

            </p>




            <div
              className="
                mt-10
                space-y-8
              "
            >


              <div className="flex items-center gap-4">

                <div
                  className="
                    rounded-xl
                    bg-cyan-500/10
                    p-4
                    text-[var(--color-primary)]
                  "
                >
                  <FaEnvelope />
                </div>


                <div>

                  <p className="font-semibold text-white">
                    Email
                  </p>

                  <p className="text-slate-400">
                    {contact.email}
                  </p>

                </div>

              </div>





              <div className="flex items-center gap-4">

                <div
                  className="
                    rounded-xl
                    bg-cyan-500/10
                    p-4
                    text-[var(--color-primary)]
                  "
                >
                  <FaPhoneAlt />
                </div>


                <div>

                  <p className="font-semibold text-white">
                    Phone
                  </p>

                  <p className="text-slate-400">
                    {contact.phone}
                  </p>

                </div>


              </div>





              <div className="flex items-center gap-4">


                <div
                  className="
                    rounded-xl
                    bg-cyan-500/10
                    p-4
                    text-[var(--color-primary)]
                  "
                >
                  <FaMapMarkerAlt />
                </div>



                <div>

                  <p className="font-semibold text-white">
                    Location
                  </p>


                  <p className="text-slate-400">
                    {contact.location}
                  </p>


                </div>


              </div>



            </div>


          </div>






          {/* Contact Form */}


          <div
            className="
              rounded-3xl
              border
              border-slate-800
              bg-[var(--color-background)]
              p-8
            "
          >


            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >



              <input

                name="name"

                value={formData.name}

                onChange={handleChange}

                type="text"

                placeholder="Full Name"

                className="
                  w-full
                  rounded-xl
                  border
                  border-slate-700
                  bg-slate-900
                  px-5
                  py-4
                  text-white
                  outline-none
                  focus:border-cyan-400
                "

              />





              <input

                name="email"

                value={formData.email}

                onChange={handleChange}

                type="email"

                placeholder="Email Address"

                className="
                  w-full
                  rounded-xl
                  border
                  border-slate-700
                  bg-slate-900
                  px-5
                  py-4
                  text-white
                  outline-none
                  focus:border-cyan-400
                "

              />






              <select

                name="service"

                value={formData.service}

                onChange={handleChange}

                className="
                  w-full
                  rounded-xl
                  border
                  border-slate-700
                  bg-slate-900
                  px-5
                  py-4
                  text-white
                  outline-none
                  focus:border-cyan-400
                "

              >

                <option value="">
                  Select a Service
                </option>


                {services.map((service)=>(

                  <option
                    key={service.id}
                    value={service.title}
                  >

                    {service.title}

                  </option>

                ))}


              </select>







              <textarea

                name="message"

                value={formData.message}

                onChange={handleChange}

                rows="6"

                placeholder="Tell us about your project..."

                className="
                  w-full
                  rounded-xl
                  border
                  border-slate-700
                  bg-slate-900
                  px-5
                  py-4
                  text-white
                  outline-none
                  focus:border-cyan-400
                "

              />






              {error && (

                <p className="text-red-400">
                  {error}
                </p>

              )}





              {success && (

                <p className="text-green-400">
                  {success}
                </p>

              )}






              <button

                type="submit"

                className="
                  w-full
                  rounded-xl
                  bg-[var(--color-primary)]
                  py-4
                  font-semibold
                  text-slate-950
                  transition
                  hover:brightness-110
                "

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