import ProductCard from "@/components/ProductCard";
import { getAllProducts } from "@/lib/products";

export default function ProductsPage() {
  const products = getAllProducts();
  return (
    <section className="mx-auto max-w-6xl py-10">
      <h1 className="text-3xl font-bold mb-8">All Products</h1>

      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((p) => (
          <ProductCard
            key={p.slug}
            slug={p.slug}
            title={p.frontMatter.title}
            image={p.frontMatter.image}
            grit={p.frontMatter.grit}
          />
        ))}
      </div>
    </section>
  );
}
