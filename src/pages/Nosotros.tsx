import { Layout } from "@/components/Layout";
import { Award, Users, Wrench, Heart } from "lucide-react";

const Nosotros = () => (
  <Layout>
    <section className="container py-16 max-w-4xl">
      <div className="text-sm font-display tracking-widest neon-text-cyan mb-3 text-center">SOBRE PROVISE</div>
      <h1 className="text-4xl md:text-5xl font-display neon-text-green animate-text-glow mb-6 text-center">37 años de experiencia</h1>
      <p className="text-lg text-muted-foreground text-center mb-12">
        Desde hace casi cuatro décadas, PROVISE ha sido el socio de confianza de operadores de maquinitas, dueños de
        negocios y coleccionistas en Puebla y todo México.
      </p>

      <div className="grid sm:grid-cols-2 gap-6 mb-16">
        {[
          { icon: Award, title: "Experiencia", desc: "37 años especializados en máquinas arcade y de garra." },
          { icon: Users, title: "Clientes Satisfechos", desc: "Cientos de negocios atendidos en todo el país." },
          { icon: Wrench, title: "Servicio Técnico", desc: "Reparaciones, refacciones y mantenimiento profesional." },
          { icon: Heart, title: "Pasión Arcade", desc: "Amamos lo que hacemos y lo notarás en cada detalle." },
        ].map(({ icon: Icon, title, desc }) => (
          <div key={title} className="arcade-card rounded-xl p-6">
            <Icon className="w-8 h-8 text-primary mb-3" />
            <h3 className="font-display mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground">{desc}</p>
          </div>
        ))}
      </div>

      <div className="arcade-card rounded-xl p-8">
        <h2 className="font-display text-2xl mb-4 neon-text-cyan">Nuestra Misión</h2>
        <p className="text-muted-foreground">
          Brindar a emprendedores y negocios soluciones integrales en maquinitas arcade y de garra,
          ofreciendo equipos de calidad, refacciones originales y servicio técnico confiable, con precios
          accesibles y atención personalizada en todo México.
        </p>
      </div>
    </section>
  </Layout>
);

export default Nosotros;
