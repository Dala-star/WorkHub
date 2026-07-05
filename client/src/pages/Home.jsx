import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import Services from "../components/home/Services";
import WhyChoose from "../components/home/WhyChoose";
import Portfolio from "../components/home/Portfolio";
import Testimonials from "../components/home/Testimonials";
import Footer from "../components/layout/Footer";

import Section from "../components/common/Section";

function Home() {
  return (
    <>
      <Navbar />

      <Section>
        <Hero />
      </Section>

      <Section>
        <Services />
      </Section>

      <Section>
        <WhyChoose />
      </Section>

      <Section>
        <Portfolio />
      </Section>

      <Section>
        <Testimonials />
      </Section>

      <Footer />
    </>
  );
}

export default Home;