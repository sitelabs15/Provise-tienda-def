import { Link } from "react-router-dom";
import { Loader2, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/stores/cartStore";
import type { ShopifyProduct } from "@/lib/shopify";
import { toast } from "sonner";

interface ProductCardProps {
  product: ShopifyProduct;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const addItem = useCartStore((s) => s.addItem);
  const isLoading = useCartStore((s) => s.isLoading);
  const variant = product.node.variants.edges[0]?.node;
  const image = product.node.images.edges[0]?.node;

  const handleAdd = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!variant) return;
    await addItem({
      product,
      variantId: variant.id,
      variantTitle: variant.title,
      price: variant.price,
      quantity: 1,
      selectedOptions: variant.selectedOptions ?? [],
    });
    toast.success("Agregado al carrito", {
      description: product.node.title,
      position: "top-right",
    });
  };

  return (
    <Link
      to={`/product/${product.node.handle}`}
      className="arcade-card rounded-xl overflow-hidden group flex flex-col"
    >
      <div className="relative aspect-square bg-muted overflow-hidden">
        {image ? (
          <img
            src={image.url}
            alt={image.altText ?? product.node.title}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-muted-foreground">Sin imagen</div>
        )}
        <div className="absolute top-3 left-3 px-2 py-1 rounded bg-accent/90 text-accent-foreground text-[10px] font-display tracking-wider">
          {product.node.productType || "PRODUCTO"}
        </div>
      </div>

      <div className="p-5 flex-1 flex flex-col gap-3">
        <h3 className="font-display text-base leading-tight group-hover:neon-text-green transition-all">
          {product.node.title}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2 flex-1">
          {product.node.description}
        </p>
        <div className="flex items-center justify-between gap-2 pt-2">
          <div>
            <div className="text-[10px] text-muted-foreground tracking-wider">PRECIO</div>
            <div className="font-bold text-xl neon-text-cyan">
              ${parseFloat(product.node.priceRange.minVariantPrice.amount).toLocaleString("es-MX")}
            </div>
          </div>
          <Button
            onClick={handleAdd}
            disabled={isLoading || !variant}
            size="sm"
            className="font-display transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_#00FF7F]"
            style={{
              background: 'var(--gradient-button)'
            }}
          >
            {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : (
              <><ShoppingCart className="w-4 h-4 mr-1" /> Agregar</>
            )}
          </Button>
        </div>
      </div>
    </Link>
  );
};
