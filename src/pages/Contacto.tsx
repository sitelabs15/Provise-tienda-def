import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";

const Contacto = () => {
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      toast.success("¡Mensaje enviado!", {
        description: "Te contactaremos a la brevedad.",
        position: "top-right",
      });
      (e.target as HTMLFormElement).reset();
      setSending(false);
    }, 800);
  };

  return (
    <Layout>
      <section className="container py-16 grid gap-10 lg:grid-cols-2">
        <div>
          <div className="text-sm font-display tracking-widest neon-text-cyan mb-3">CONTACTO</div>
          <h1 className="text-4xl md:text-5xl font-display neon-text-green animate-text-glow mb-4">Hablemos de tu proyecto</h1>
          <p className="text-muted-foreground mb-8">
            Pide tu catálogo, solicita servicio técnico o cotiza una máquina. Te respondemos rápido.
          </p>

          <div className="space-y-5">
            {[
              { icon: MapPin, label: "Ubicación", value: "Puebla, México" },
              { icon: Phone, label: "Teléfono", value: "(222) 123-4567", href: "tel:+522221234567" },
              { icon: Mail, label: "Email", value: "contacto@provise.mx", href: "mailto:contacto@provise.mx" },
              { icon: Clock, label: "Horario", value: "Lun - Sáb · 9:00 - 19:00" },
            ].map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-xs font-display tracking-widest text-muted-foreground">{label}</div>
                  {href ? (
                    <a href={href} className="font-semibold hover:text-primary">{value}</a>
                  ) : (
                    <div className="font-semibold">{value}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="arcade-card rounded-xl p-6 md:p-8 space-y-4">
          <div>
            <Label htmlFor="name">Nombre</Label>
            <Input id="name" required placeholder="Tu nombre" />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" required placeholder="tu@email.com" />
            </div>
            <div>
              <Label htmlFor="phone">Teléfono</Label>
              <Input id="phone" type="tel" placeholder="222 123 4567" />
            </div>
          </div>
          <div>
            <Label htmlFor="msg">Mensaje</Label>
            <Textarea id="msg" required rows={5} placeholder="¿Cómo podemos ayudarte?" />
          </div>
          <Button
            type="submit"
            disabled={sending}
            className="w-full font-display transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_#00FF7F]"
            size="lg"
            style={{
              background: 'var(--gradient-button)'
            }}
          >
            {sending ? "ENVIANDO..." : "ENVIAR MENSAJE"}
          </Button>
        </form>
      </section>
    </Layout>
  );
};

export default Contacto;
