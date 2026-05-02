import { Link, NavLink } from "react-router-dom";
import { Phone } from "lucide-react";
import { CartDrawer } from "./CartDrawer";

const navLinks = [
  { to: "/", label: "Inicio" },
  { to: "/productos", label: "Productos" },
  { to: "/servicios", label: "Servicios" },
  { to: "/nosotros", label: "Nosotros" },
  { to: "/contacto", label: "Contacto" },
];

export const Header = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-primary/30 bg-background/90 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2 group">
          <img 
            src="/logo-provise.png" 
            alt="PROVISE Logo" 
            className="w-9 h-9 rounded-md object-contain group-hover:animate-pulse-neon"
          />
          <div className="leading-none">
            <div className="font-display text-lg neon-text-green animate-text-glow">PROVISE</div>
            <div className="text-[10px] text-muted-foreground tracking-widest">ARCADE & TECH</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-primary ${
                  isActive ? "text-primary" : "text-foreground/80"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="tel:+522221234567"
            className="hidden sm:flex items-center gap-2 text-sm text-secondary hover:text-secondary/80 font-semibold"
          >
            <Phone className="w-4 h-4" />
            (222) 123-4567
          </a>
          <CartDrawer />
        </div>
      </div>
    </header>
  );
};
