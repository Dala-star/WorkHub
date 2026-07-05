function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="mb-14 text-center">
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
          {eyebrow}
        </p>
      )}

      <h2 className="text-3xl font-bold md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mx-auto mt-4 max-w-2xl text-slate-400">
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionTitle;