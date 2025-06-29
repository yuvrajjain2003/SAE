import { getAllProducts, getProductBySlug } from "@/lib/products";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

interface Props {
  params: { slug: string[] };
}

export async function generateStaticParams() {
  return getAllProducts().map((p) => ({ slug: p.slug.split("/") }));
}

export default async function ProductDetail({ params: rawParams }: Props) {
  // Next has now “awaited” the proxy and params is plain data
  const { slug } = await rawParams;
  const slugPath = slug.join("/");          // "abrasives/cut14x2-5"
  const product  = getProductBySlug(slugPath);

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

      <div className="prose">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </article>
  );
}
