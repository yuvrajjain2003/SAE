// src/app/products/[...slug]/page.tsx
import { getAllProducts, getProductBySlug } from "@/lib/products";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

/* ---- 1.  Static paths ---- */
export async function generateStaticParams() {
  return getAllProducts().map((p) => ({ slug: p.slug.split("/") }));
}

/* ---- 2.  Page component with proper typing ---- */
type ParamsPromise = Promise<{ slug: string[] }>;

export default async function ProductDetail(
  { params }: { params?: ParamsPromise }
) {
  /* In prod `params` is undefined (because we prerender). In dev it's a proxy-promise. */
  const { slug } = params ? await params : { slug: [] };
  const slugPath = slug.join("/");                  // "abrasives/cut14x2-5"

  const product = getProductBySlug(slugPath);
  if (!product) return <p className="p-8">Product not found.</p>;

  const { frontMatter, content } = product;

  return (
    <article className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-4">{frontMatter.title}</h1>

      <div className="relative w-full h-60 mb-6">
        <Image
          src={frontMatter.image}
          alt={frontMatter.title}
          fill
          className="object-contain"
          sizes="500px"
        />
      </div>

      <table className="text-sm mb-6">
        <tbody>
          {Object.entries(frontMatter).map(([k, v]) =>
            ["title", "image", "category"].includes(k) ? null : (
              <tr key={k}>
                <td className="pr-4 font-semibold capitalize">{k}</td>
                <td>{String(v)}</td>
              </tr>
            )
          )}
        </tbody>
      </table>

      {/* Table wrapper so long tables scroll on mobile */}
      <div className="prose max-w-none lg:prose-lg prose-headings:text-brand-marksman prose-table:w-full overflow-x-auto">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {content}
        </ReactMarkdown>
      </div>
    </article>
  );
}
