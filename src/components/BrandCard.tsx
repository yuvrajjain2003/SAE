import Link from "next/link";
import Image from "next/image";

export interface BrandCardProps {
  slug: "tailong" | "cormenflex" | "marksman";
  color: "brand-tailong" | "brand-cormenflex" | "brand-marksman";
  title: string;
  tagline: string;
  image?: string;                 // NEW – path in /public/
}

export default function BrandCard({
  slug,
  color,
  title,
  tagline,
  image = "/placeholder-brand.svg",
}: BrandCardProps) {
  // map color prop → actual Tailwind class
  const bgClass = {
    "brand-tailong": "bg-brand-tailong",
    "brand-cormenflex": "bg-brand-cormenflex",
    "brand-marksman": "bg-brand-marksman",
  }[color];

  return (
    <Link
      href={`/${slug}`}
      className={`${bgClass} group overflow-hidden rounded-2xl shadow-lg
                  text-white flex flex-col transition-transform hover:-translate-y-1`}
    >
      {/* Logo */}
      <div className="relative h-48 w-full bg-white/10 flex items-center justify-center">
        <Image src={image} alt={`${title} logo`} width={180} height={180} priority />
      </div>

      {/* Text */}
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="opacity-90 group-hover:opacity-100">{tagline}</p>
      </div>
    </Link>
  );
}
