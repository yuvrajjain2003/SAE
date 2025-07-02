import fs from "fs";
import path from "path";
import matter from "gray-matter";

const root = path.join(process.cwd(), "content/products");

/* ---------- types ---------- */
export interface FrontMatter {
  title: string;
  image: string;
  brand: "cormenflex" | "tailong" | "marksman";
  category: string;
  sku?: string;
  rpm?: number;
  grit?: string;
}


export interface Product {
  slug: string;
  frontMatter: FrontMatter;
  content: string;
}

/* ---------- loader ---------- */
export function getAllProducts(): Product[] {
  const walk = (dir: string): string[] =>
    fs.readdirSync(dir).flatMap((file) => {
      const full = path.join(dir, file);
      return fs.statSync(full).isDirectory()
        ? walk(full)
        : full.endsWith(".mdx")
        ? [full]
        : [];
    });

  return walk(root).map((fp) => {
    const raw         = fs.readFileSync(fp, "utf8");
    const parsed      = matter(raw);
    const frontMatter = parsed.data as unknown as FrontMatter;

    // optional guard
    if (!frontMatter.title || !frontMatter.image) {
      throw new Error(`Missing required front-matter in ${fp}`);
    }

    return {
      slug: fp.replace(root + "/", "").replace(/\.mdx$/, ""),
      frontMatter,
      content: parsed.content,
    };
  });
}

export function getProductBySlug(slug: string): Product | undefined {
  return getAllProducts().find((p) => p.slug === slug);
}
