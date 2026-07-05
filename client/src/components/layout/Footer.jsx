function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

        <h1 className="text-2xl font-bold text-cyan-400">
          WorkHub
        </h1>

        <p className="text-slate-400 text-center">
          © {new Date().getFullYear()} WorkHub. All rights reserved.
        </p>

        <div className="flex gap-6 text-slate-400">
          <a className="hover:text-cyan-400" href="#">Home</a>
          <a className="hover:text-cyan-400" href="#">Services</a>
          <a className="hover:text-cyan-400" href="#">Contact</a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;