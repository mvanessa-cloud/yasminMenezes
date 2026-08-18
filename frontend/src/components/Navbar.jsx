import { useState } from "react";
import { NavLink } from "react-router-dom";

const links = [
  { to: "/quem-somos", label: "Quem sou eu" },
  { to: "/procedimentos", label: "Procedimentos" },
  { to: "/contato", label: "Clínica" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `text-base tracking-wide transition-colors hover:text-pink-300 ${
      isActive ? "text-pink-300 font-semibold" : "text-white/80"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 backdrop-blur" style={{background: 'linear-gradient(to right, #3b0a0a, #7f1d1d, #f472b6)'}}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <NavLink to="/" className="font-display text-2xl tracking-tight text-white">
          Yasmin<span className="italic text-pink-300"> Menezes</span>
        </NavLink>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} className={linkClass}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        <button
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Abrir menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`h-0.5 w-6 bg-white transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-6 bg-white transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 bg-white transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-4 border-t border-white/10 px-6 py-6 md:hidden" style={{background: 'linear-gradient(to bottom, #3b0a0a, #f472b6)'}}>
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} className={linkClass} onClick={() => setOpen(false)}>
              {l.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}
