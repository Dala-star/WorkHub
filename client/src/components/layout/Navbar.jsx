import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { FaArrowRight } from "react-icons/fa";

import Logo from "../common/Logo";
import navigation from "../../constants/navigation";
import useScroll from "../../hooks/useScroll";


function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const scrollY = useScroll();


  const scrolled = scrollY > 50;


  return (

    <header
      className={`
        fixed
        top-0
        left-0
        right-0
        z-50
        border-b
        transition-all
        duration-300

        ${
          scrolled
            ?
            `
            border-slate-800
            bg-[var(--color-background)]/95
            shadow-lg
            `
            :
            `
            border-white/10
            bg-[var(--color-background)]/40
            `
        }

        backdrop-blur-xl
      `}
    >


      <div
        className="
          mx-auto
          flex
          h-20
          max-w-7xl
          items-center
          justify-between
          px-6
        "
      >


        {/* Logo */}

        <Logo />




        {/* Desktop Navigation */}

        <nav
          className="
            hidden
            items-center
            gap-10
            md:flex
          "
        >

          {navigation.map((item) => (

            <a
              key={item.id}
              href={item.link}
              className="
                relative
                text-sm
                font-medium
                text-slate-300
                transition
                duration-300

                hover:text-[var(--color-primary)]

                after:absolute
                after:-bottom-2
                after:left-0
                after:h-0.5
                after:w-0
                after:bg-[var(--color-primary)]
                after:transition-all
                after:duration-300

                hover:after:w-full
              "
            >

              {item.name}

            </a>

          ))}


        </nav>





        {/* Desktop CTA */}

        <a
          href="#contact"
          className="
            hidden
            items-center
            gap-2
            rounded-xl
            bg-[var(--color-primary)]
            px-6
            py-3
            font-semibold
            text-slate-950

            transition-all
            duration-300

            hover:-translate-y-1
            hover:shadow-lg

            md:flex
          "
        >

          Get a Quote

          <FaArrowRight
            size={14}
          />

        </a>






        {/* Mobile Menu Button */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="
            text-3xl
            text-white
            md:hidden
          "
          aria-label="Toggle menu"
        >

          {
            menuOpen
              ?
              <HiX />
              :
              <HiMenu />
          }


        </button>



      </div>





      {/* Mobile Menu */}

      {menuOpen && (

        <div
          className="
            border-t
            border-slate-800
            bg-[var(--color-background)]
            md:hidden
          "
        >


          <nav
            className="
              flex
              flex-col
              py-4
            "
          >


            {navigation.map((item) => (

              <a
                key={item.id}
                href={item.link}
                onClick={() => setMenuOpen(false)}
                className="
                  px-6
                  py-4
                  text-slate-300

                  transition

                  hover:bg-slate-900
                  hover:text-[var(--color-primary)]
                "
              >

                {item.name}

              </a>


            ))}






            {/* Mobile CTA */}

            <div
              className="
                px-6
                pt-4
              "
            >

              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="
                  block
                  w-full
                  rounded-xl
                  bg-[var(--color-primary)]
                  py-3
                  text-center
                  font-semibold
                  text-slate-950
                "
              >

                Get a Quote

              </a>


            </div>



          </nav>


        </div>

      )}


    </header>

  );
}


export default Navbar;