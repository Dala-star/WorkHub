function Button({
  children,
  variant = "primary",
  className = "",
}) {
  const styles = {
    primary:
      "bg-cyan-500 hover:bg-cyan-400 text-white",

    secondary:
      "border border-slate-600 hover:border-cyan-400 hover:text-cyan-400 bg-transparent text-white",
  };

  return (
    <button
      className={`rounded-xl px-6 py-3 font-medium transition-all duration-300 hover:-translate-y-1 ${styles[variant]} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;