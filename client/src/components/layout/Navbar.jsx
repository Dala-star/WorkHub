import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import Logo from "../common/Logo";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    "Home",
    "Services",
    "Portfolio",
    "About",
    "Contact",
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="transition hover:text-cyan-400"
            >
              {item}
            </a>
          ))}
        </nav>

        <button className="hidden rounded-full bg-cyan-500 px-6 py-3 font-semibold transition hover:scale-105 hover:bg-cyan-400 md:block">
          Hire Me
        </button>

        {/* Mobile Menu Button */}
        <button
          className="text-3xl md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav className="border-t border-slate-800 bg-slate-900 md:hidden">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block px-6 py-4 hover:bg-slate-800"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

export default Navbar;