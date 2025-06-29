import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brand-charcoal text-brand-light text-sm">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
        {/* Company blurb */}
        <div className="max-w-xs">
          <h4 className="font-semibold text-brand-light">
            Shree Anurag Enterprises
          </h4>
          <p className="mt-2 leading-relaxed text-brand-light/80">
            Importer & distributor of premium cutting wheels, grinding wheels,
            abrasives and power-tools under the Marksman, Cormenflex & Tailong
            brands.
          </p>
        </div>

        {/* Quick links */}
        <ul className="space-y-2">
          <li>
            <Link href="/" className="hover:text-brand-red font-medium">
              Home
            </Link>
          </li>
          <li>
            <Link href="/products" className="hover:text-brand-red font-medium">
              Products
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-brand-red font-medium">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-brand-red font-medium">
              Contact
            </Link>
          </li>
        </ul>

        {/* Contact details */}
        <div className="space-y-2">
          <p className="font-semibold">Get in touch</p>
          <a
            href="tel:+91XXXXXXXXXX"
            className="block hover:text-brand-red underline-offset-4"
          >
            📞 +91 XX-XXXX-XXXX
          </a>
          <a
            href="mailto:info@cormenflex.com"
            className="block hover:text-brand-red underline-offset-4"
          >
            ✉️ info@cormenflex.com
          </a>
          <p className="text-brand-light/70">
            © {new Date().getFullYear()} Shree Anurag Enterprises
          </p>
        </div>
      </div>
    </footer>
  );
}
