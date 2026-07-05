function Testimonials() {
  const testimonials = [
    {
      name: "Sarah M.",
      text: "WorkHub delivered my website faster than expected. Clean design and very professional.",
    },
    {
      name: "James K.",
      text: "The graphics and branding work was top tier. Highly recommended!",
    },
    {
      name: "Anna L.",
      text: "Very helpful tutor. I finally understand web development concepts clearly.",
    },
  ];

  return (
    <section id="testimonials" className="py-24 px-6 bg-slate-900">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold">Testimonials</h2>
        <p className="text-slate-400 mt-3">
          What clients say about me
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="bg-slate-950 border border-slate-800 p-6 rounded-2xl hover:scale-105 transition"
          >
            <p className="text-slate-300 mb-6">"{item.text}"</p>
            <h4 className="text-cyan-400 font-semibold">
              - {item.name}
            </h4>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;