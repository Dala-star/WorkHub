import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

function Counter({ target, label }) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const interval = setInterval(() => {
        start += Math.ceil(target / 50);
        if (start >= target) {
          start = target;
          clearInterval(interval);
        }
        setCount(start);
      }, 30);
    }
  }, [inView, target]);

  return (
    <div ref={ref} className="text-center">
      <h3 className="text-4xl font-bold text-cyan-400">
        {count}+
      </h3>
      <p className="text-slate-400 mt-2">{label}</p>
    </div>
  );
}

function WhyChoose() {
  return (
    <section className="py-24 px-6 bg-slate-900">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold">Why Choose Me</h2>
        <p className="text-slate-400 mt-3">
          Results that speak for themselves
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-10 max-w-6xl mx-auto">
        <Counter target={50} label="Projects Completed" />
        <Counter target={30} label="Happy Clients" />
        <Counter target={3} label="Years Experience" />
        <Counter target={24} label="Support Hours" />
      </div>
    </section>
  );
}

export default WhyChoose;