import { getAllProducts } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

export const metadata = { title: "Products | Shree Anurag Enterprises" };

export default function ProductsPage() {
  const products = getAllProducts(); // runs at build-time

  return (
    <section className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">All Products</h1>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-6">
        {products.map((p) => (
          <ProductCard
            key={p.slug}
            slug={p.slug}
            title={p.frontMatter.title as string}
            image={p.frontMatter.image as string}
            grit={p.frontMatter.grit as string | undefined}
          />
        ))}
      </div>
    </section>
  );
}
