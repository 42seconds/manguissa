import { useState } from "react";
import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Accueil" },
  { to: "/circuits", label: "Nos Circuits" },
  { to: "/galerie", label: "Galerie" },
  { to: "/a-propos", label: "À Propos" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `text-[15px] font-medium pb-1.5 border-b-2 transition-opacity ${
      isActive ? "opacity-100 border-gold" : "opacity-70 border-transparent hover:opacity-100"
    }`;

  return (
    <header className="sticky top-0 z-[100] bg-bg/90 backdrop-blur-md border-b border-navy/10">
      <div className="max-w-[1180px] mx-auto px-8 py-4 flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <img src="/images/logo.png" alt="Manguissa en Afrique" className="h-14 w-auto" />
          <span className="font-bold text-xl tracking-tight">
            Manguissa <span className="text-gold">en Afrique</span>
          </span>
        </NavLink>

        <nav className={`md:flex gap-8 ${open ? "flex" : "hidden"} flex-col md:flex-row absolute md:static top-16 left-0 right-0 bg-bg md:bg-transparent border-b md:border-0 border-navy/10 px-8 py-6 md:p-0 gap-y-4`}>
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} className={linkClass} onClick={() => setOpen(false)}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        <NavLink
          to="/contact"
          className="hidden md:inline-flex bg-gold text-white px-[22px] py-[11px] rounded-full font-semibold text-sm whitespace-nowrap hover:bg-golddark transition-colors"
        >
          Demander un devis
        </NavLink>

        <button className="md:hidden text-2xl" onClick={() => setOpen(!open)} aria-label="Menu">
          ☰
        </button>
      </div>
    </header>
  );
}
