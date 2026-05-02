import { Link } from "react-router-dom";
import { Gamepad2, MapPin, Phone, Mail, Facebook, Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-primary/30 bg-card/40 mt-20">
      <div className="container py-12 grid gap-8 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img 
              src="/logo-provise.png" 
              alt="PROVISE Logo" 
              className="w-9 h-9 rounded-md object-contain"
            />
            <div>
              <div className="font-display text-lg neon-text-green animate-text-glow">PROVISE</div>
              <div className="text-[10px] text-muted-foreground tracking-widest">ARCADE & TECH</div>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            37 años de experiencia en maquinitas, arcade, refacciones y servicio técnico profesional.
          </p>
        </div>

        <div>
          <h3 className="font-display text-sm mb-4 neon-text-cyan">NAVEGACIÓN</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-primary">Inicio</Link></li>
            <li><Link to="/productos" className="hover:text-primary">Productos</Link></li>
            <li><Link to="/servicios" className="hover:text-primary">Servicios</Link></li>
            <li><Link to="/nosotros" className="hover:text-primary">Nosotros</Link></li>
            <li><Link to="/contacto" className="hover:text-primary">Contacto</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm mb-4 neon-text-cyan">CONTACTO</h3>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2"><MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" /> Puebla, México</li>
            <li className="flex gap-2"><Phone className="w-4 h-4 text-primary shrink-0 mt-0.5" /> (222) 123-4567</li>
            <li className="flex gap-2"><Mail className="w-4 h-4 text-primary shrink-0 mt-0.5" /> contacto@provise.mx</li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm mb-4 neon-text-cyan">SÍGUENOS</h3>
          <div className="flex gap-3">
            <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-md border border-primary/40 flex items-center justify-center hover:bg-primary/10">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-md border border-primary/40 flex items-center justify-center hover:bg-primary/10">
              <Instagram className="w-4 h-4" />
            </a>
          </div>
          <p className="text-xs text-muted-foreground mt-6">
            Envíos a todo México 🇲🇽
          </p>
        </div>
      </div>
      <div className="border-t border-border py-4">
        <p className="container text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} PROVISE Arcade & Tech. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};
