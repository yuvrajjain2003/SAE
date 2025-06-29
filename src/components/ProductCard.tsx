import Image from "next/image";
import Link from "next/link";

interface CardProps {
  slug: string;
  title: string;
  image: string;
  grit?: string;
}

export default function ProductCard({ slug, title, image, grit }: CardProps) {
  return (
    <Link
      href={`/products/${slug}`}
      className="group block overflow-hidden rounded-xl bg-white shadow-md transition hover:shadow-xl"
    >
      <div className="relative aspect-square w-full">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(min-width: 640px) 50vw, 100vw"
          className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="p-4">
        <h3 className="font-medium text-brand-charcoal group-hover:text-brand-red">
          {title}
        </h3>
        {grit && (
          <p className="mt-1 text-xs text-brand-charcoal/70">Grit {grit}</p>
        )}
      </div>
    </Link>
  );
}
