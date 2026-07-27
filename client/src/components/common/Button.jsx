function Button({
  children,
  variant = "primary",
  href,
  className = "",
}) {

  const styles = {
    primary:
      `
      bg-[var(--color-primary)]
      text-slate-950
      hover:brightness-110
      `,

    secondary:
      `
      border
      border-slate-600
      bg-transparent
      text-white
      hover:border-[var(--color-primary)]
      hover:text-[var(--color-primary)]
      `,
  };


  const buttonClasses = `
    inline-flex
    items-center
    justify-center
    rounded-xl
    px-6
    py-3
    font-medium
    transition-all
    duration-300
    hover:-translate-y-1
    ${styles[variant]}
    ${className}
  `;



  // If href exists, render a link
  if (href) {
    return (
      <a
        href={href}
        className={buttonClasses}
      >
        {children}
      </a>
    );
  }



  // Otherwise render a normal button
  return (
    <button
      className={buttonClasses}
    >
      {children}
    </button>
  );
}


export default Button;