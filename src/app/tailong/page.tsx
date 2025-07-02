import { getAllProducts } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

export const metadata = {
  title: "Tailong Products",
  description: "Green-label abrasives by Tailong",
};

export default function TailongPage() {
  const products = getAllProducts().filter(
    (p) => p.frontMatter.brand === "tailong"
  );

  return (
    <section className="mx-auto max-w-6xl py-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-8">Tailong Catalogue</h1>

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
