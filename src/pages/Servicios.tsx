import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Wrench, Settings, Truck, Headphones, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  { icon: Wrench, title: "Reparación de Máquinas", desc: "Diagnóstico y reparación de máquinas arcade y de garra de cualquier marca." },
  { icon: Settings, title: "Mantenimiento Preventivo", desc: "Visitas programadas para mantener tus máquinas siempre operativas." },
  { icon: Truck, title: "Instalación a Domicilio", desc: "Entregamos e instalamos en tu negocio en cualquier parte de México." },
  { icon: Headphones, title: "Asesoría Técnica", desc: "Te ayudamos a elegir la mejor máquina para tu negocio y ubicación." },
];

const Servicios = () => (
  <Layout>
    <section className="container py-16">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="text-sm font-display tracking-widest neon-text-cyan mb-3">SERVICIOS PROFESIONALES</div>
        <h1 className="text-4xl md:text-5xl font-display neon-text-green animate-text-glow mb-4">Servicio Técnico Especializado</h1>
        <p className="text-muted-foreground">
          37 años reparando, instalando y manteniendo maquinitas para negocios en todo México.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-12">
        {services.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="arcade-card rounded-xl p-6">
            <div className="w-12 h-12 rounded-lg bg-secondary/10 border border-secondary/30 flex items-center justify-center mb-4">
              <Icon className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="font-display mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground">{desc}</p>
          </div>
        ))}
      </div>

      <div className="arcade-card rounded-2xl p-10 text-center bg-gradient-to-br from-secondary/20 via-card to-primary/20">
        <h2 className="text-2xl md:text-3xl font-display mb-4 neon-text-yellow">Solicita Servicio Hoy</h2>
        <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
          Atendemos negocios en Puebla y enviamos refacciones a todo México. Contáctanos y recibe atención inmediata.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button asChild size="lg" className="font-display transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_#00FF7F]" style={{
            background: 'var(--gradient-button)'
          }}>
            <a href="tel:+522221234567"><Phone className="mr-2 w-4 h-4" /> LLAMA AHORA</a>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary/10 font-display">
            <Link to="/contacto">ENVIAR MENSAJE</Link>
          </Button>
        </div>
      </div>
    </section>
  </Layout>
);

export default Servicios;
