import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import Services from "../components/home/Services";
import Projects from "../components/home/Projects";
import About from "../components/home/About";
import Contact from "../components/home/Contact";
import Footer from "../components/layout/Footer";

function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <Services />

      <Projects />

      <About />

      <Contact />

      <Footer />
    </>
  );
}

export default Home;