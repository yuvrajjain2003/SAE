import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-brand-charcoal text-white px-4 py-3">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        {/* Home link */}
        <Link href="/" className="font-bold tracking-wide text-lg">
          Shree Anurag Enterprises
        </Link>

        {/* Nav items */}
        <ul className="flex flex-wrap gap-6 text-sm">
        <li><Link href="/tailong">Tailong</Link></li>
        <li><Link href="/cormenflex">Cormenflex</Link></li>
        <li><Link href="/marksman">Marksman</Link></li>
        <li><Link href="/products">All Products</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}
