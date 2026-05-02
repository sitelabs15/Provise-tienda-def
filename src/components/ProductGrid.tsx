import { useEffect, useState } from "react";
import { fetchProducts, type ShopifyProduct } from "@/lib/shopify";
import { ProductCard } from "./ProductCard";
import { Loader2 } from "lucide-react";

interface ProductGridProps {
  query?: string;
  limit?: number;
  title?: string;
  subtitle?: string;
}

export const ProductGrid = ({ query, limit = 50, title, subtitle }: ProductGridProps) => {
  const [products, setProducts] = useState<ShopifyProduct[] | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetchProducts(query, limit)
      .then((p) => !cancelled && setProducts(p))
      .catch((e) => {
        console.error(e);
        !cancelled && setProducts([]);
      });
    return () => { cancelled = true; };
  }, [query, limit]);

  return (
    <section className="container py-16">
      {(title || subtitle) && (
        <div className="text-center mb-10">
          {subtitle && <div className="text-sm font-display tracking-widest neon-text-cyan mb-2">{subtitle}</div>}
          {title && <h2 className="text-3xl md:text-4xl font-display neon-text-green animate-text-glow">{title}</h2>}
        </div>
      )}

      {products === null ? (
        <div className="flex justify-center py-20">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
        </div>
      ) : products.length === 0 ? (
        <div className="text-center py-16 arcade-card rounded-xl">
          <p className="text-lg font-display mb-2">No hay productos disponibles</p>
          <p className="text-sm text-muted-foreground">Vuelve pronto o contáctanos para más info.</p>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((p) => (
            <ProductCard key={p.node.id} product={p} />
          ))}
        </div>
      )}
    </section>
  );
};
