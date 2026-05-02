import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import { ProductGrid } from "@/components/ProductGrid";
import { Award, Truck, Wrench, Phone, ShieldCheck, Star, MapPin, ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-arcade.jpg";

const Index = () => {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-primary/30">
        <div className="absolute inset-0 animate-gradient" style={{
          background: 'var(--gradient-hero)',
          backgroundSize: '600% 600%'
        }}>
          <img src={heroImg} alt="Sala arcade PROVISE" className="w-full h-full object-cover opacity-40" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        </div>
        <div className="container relative py-20 md:py-32 grid gap-8 md:grid-cols-2 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/50 bg-accent/10 text-accent text-xs font-display tracking-widest">
              <Star className="w-3 h-3" /> 37 AÑOS DE EXPERIENCIA
            </div>
            <h1 className="text-4xl md:text-6xl font-display leading-tight">
              <span className="neon-text-green animate-text-glow">PROVISE</span>
              <br />
              <span className="text-foreground">Maquinitas, Arcade</span>
              <br />
              <span className="neon-text-cyan">y Refacciones</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl">
              Tu socio de confianza en cada jugada. Máquinas de garra, arcade, refacciones y servicio técnico profesional.
              Envíos a todo México desde Puebla.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="font-display transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_#00FF7F]" style={{
                background: 'var(--gradient-button)'
              }}>
                <Link to="/productos">VER CATÁLOGO <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary/10 font-display">
                <a href="tel:+522221234567"><Phone className="mr-2 w-4 h-4" /> LLAMA AHORA</a>
              </Button>
            </div>
            <div className="flex flex-wrap gap-6 pt-4 text-sm">
              <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-secondary" /> Garantía incluida</div>
              <div className="flex items-center gap-2"><Truck className="w-4 h-4 text-secondary" /> Envíos a todo México</div>
              <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-secondary" /> Puebla, MX</div>
            </div>
          </div>
        </div>
      </section>

      {/* DIFERENCIADORES */}
      <section className="container py-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { icon: Award, title: "37 Años", desc: "De experiencia comprobada en el rubro arcade." },
          { icon: ShieldCheck, title: "Confiables", desc: "Garantía y soporte técnico profesional." },
          { icon: Truck, title: "Envíos MX", desc: "A todo México desde Puebla." },
          { icon: Wrench, title: "Servicio Técnico", desc: "Reparación y mantenimiento especializado." },
        ].map(({ icon: Icon, title, desc }) => (
          <div key={title} className="arcade-card rounded-xl p-6 text-center">
            <div className="w-12 h-12 mx-auto rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center mb-4">
              <Icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-display text-lg mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground">{desc}</p>
          </div>
        ))}
      </section>

      {/* PRODUCTOS */}
      <ProductGrid subtitle="CATÁLOGO PROVISE" title="Nuestros Productos" />

      {/* CTA */}
      <section className="container py-16">
        <div className="arcade-card rounded-2xl p-10 md:p-14 text-center bg-gradient-to-br from-primary/20 via-card to-secondary/20">
          <div className="text-sm font-display tracking-widest neon-text-yellow mb-3">¿NECESITAS ASESORÍA?</div>
          <h2 className="text-3xl md:text-4xl font-display mb-4 neon-text-green animate-text-glow">Pide tu catálogo o solicita servicio técnico</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Hablemos de tu proyecto. Atención personalizada y precios accesibles para emprendedores y negocios.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="font-display transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_#00FF7F]" style={{
              background: 'var(--gradient-button)'
            }}>
              <Link to="/contacto">PIDE TU CATÁLOGO</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-accent text-accent hover:bg-accent/10 font-display">
              <Link to="/servicios">SOLICITA SERVICIO</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
