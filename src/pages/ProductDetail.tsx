import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { fetchProductByHandle } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { Loader2, ShoppingCart, ArrowLeft, ShieldCheck, Truck, Phone } from "lucide-react";
import { toast } from "sonner";

interface Product {
  id: string;
  title: string;
  description: string;
  handle: string;
  productType: string;
  images: { edges: Array<{ node: { url: string; altText: string | null } }> };
  variants: {
    edges: Array<{
      node: {
        id: string;
        title: string;
        price: { amount: string; currencyCode: string };
        availableForSale: boolean;
        selectedOptions: Array<{ name: string; value: string }>;
      };
    }>;
  };
}

const ProductDetail = () => {
  const { handle } = useParams<{ handle: string }>();
  const [product, setProduct] = useState<Product | null | undefined>(undefined);
  const [activeImg, setActiveImg] = useState(0);
  const addItem = useCartStore((s) => s.addItem);
  const isLoading = useCartStore((s) => s.isLoading);

  useEffect(() => {
    if (!handle) return;
    fetchProductByHandle(handle).then(setProduct).catch(() => setProduct(null));
  }, [handle]);

  if (product === undefined) {
    return (
      <Layout>
        <div className="container py-32 flex justify-center">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
        </div>
      </Layout>
    );
  }

  if (!product) {
    return (
      <Layout>
        <div className="container py-20 text-center">
          <h1 className="font-display text-3xl mb-4">Producto no encontrado</h1>
          <Button asChild><Link to="/productos">Ver catálogo</Link></Button>
        </div>
      </Layout>
    );
  }

  const variant = product.variants.edges[0]?.node;
  const images = product.images.edges;

  const handleAdd = async () => {
    if (!variant) return;
    await addItem({
      product: { node: product as never },
      variantId: variant.id,
      variantTitle: variant.title,
      price: variant.price,
      quantity: 1,
      selectedOptions: variant.selectedOptions ?? [],
    });
    toast.success("Agregado al carrito", { description: product.title, position: "top-right" });
  };

  return (
    <Layout>
      <div className="container py-10">
        <Link to="/productos" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-6">
          <ArrowLeft className="w-4 h-4" /> Volver al catálogo
        </Link>

        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <div className="aspect-square arcade-card rounded-xl overflow-hidden">
              {images[activeImg]?.node && (
                <img
                  src={images[activeImg].node.url}
                  alt={images[activeImg].node.altText ?? product.title}
                  className="w-full h-full object-cover"
                  width={1024}
                  height={1024}
                />
              )}
            </div>
            {images.length > 1 && (
              <div className="grid grid-cols-5 gap-2 mt-3">
                {images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImg(i)}
                    className={`aspect-square rounded-md overflow-hidden border-2 ${
                      i === activeImg ? "border-primary" : "border-border"
                    }`}
                  >
                    <img src={img.node.url} alt="" className="w-full h-full object-cover" loading="lazy" />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div>
            <div className="text-xs font-display tracking-widest neon-text-cyan mb-2">{product.productType}</div>
            <h1 className="text-3xl md:text-4xl font-display mb-4 neon-text-green animate-text-glow">{product.title}</h1>
            <div className="text-4xl font-bold neon-text-cyan mb-6">
              ${parseFloat(variant?.price.amount ?? "0").toLocaleString("es-MX")} {variant?.price.currencyCode}
            </div>
            <p className="text-muted-foreground mb-8 whitespace-pre-line">{product.description}</p>

            <div className="flex flex-wrap gap-3 mb-8">
              <Button
                onClick={handleAdd}
                disabled={isLoading || !variant?.availableForSale}
                size="lg"
                className="font-display transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_#00FF7F]"
                style={{
                  background: 'var(--gradient-button)'
                }}
              >
                {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : (
                  <><ShoppingCart className="w-4 h-4 mr-2" /> AGREGAR AL CARRITO</>
                )}
              </Button>
              <Button asChild size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary/10 font-display">
                <a href="tel:+522221234567"><Phone className="w-4 h-4 mr-2" /> COTIZA POR TELÉFONO</a>
              </Button>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              <div className="arcade-card rounded-lg p-4 flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-secondary" />
                <div className="text-sm">Garantía PROVISE</div>
              </div>
              <div className="arcade-card rounded-lg p-4 flex items-center gap-3">
                <Truck className="w-5 h-5 text-secondary" />
                <div className="text-sm">Envíos a todo México</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
