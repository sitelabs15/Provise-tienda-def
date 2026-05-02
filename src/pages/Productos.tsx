import { Layout } from "@/components/Layout";
import { ProductGrid } from "@/components/ProductGrid";

const Productos = () => {
  return (
    <Layout>
      <section className="container py-12 text-center border-b border-primary/20">
        <h1 className="text-4xl md:text-5xl font-display neon-text-green animate-text-glow mb-3">Nuestros Productos</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Maquinitas, máquinas de garra, arcade y refacciones. 37 años de experiencia respaldando tu inversión.
        </p>
      </section>
      <ProductGrid />
    </Layout>
  );
};

export default Productos;
