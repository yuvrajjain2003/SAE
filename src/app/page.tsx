import Link from "next/link";
import BrandCard from "@/components/BrandCard";
import HeroCarousel from "@/components/HeroCarousel";

export const metadata = {
  title: "Shree Anurag Enterprises | Cutting Wheels & Power Tools",
  description:
    "Family-owned importer of Tailong, Cormenflex and Marksman industrial products since 1996.",
};

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* ───── HERO ───── */}
      <section className="-mx-4 sm:-mx-6 lg:-mx-8">
        <HeroCarousel />
      </section>

      {/* ───── MAIN CONTENT ───── */}
      <section className="mx-auto w-full max-w-6xl space-y-16 px-4 py-12 md:px-6 lg:px-8">
        {/* Story */}
        <div>
          <h2 className="mb-4 text-2xl font-semibold text-brand-marksman md:text-3xl">
            Our Story
          </h2>
          <p className="leading-relaxed">
            Founded in 1996 by <strong>Anil Kumar Jain</strong>—and now run
            by his son <strong>Anurag Jain</strong>—Shree Anurag
            Enterprises has grown from a single-counter shop into one of India’s
            most trusted suppliers of industrial abrasives and power-tool
            accessories. Three generations work together today, blending the
            personal touch of a neighbourhood business with the professionalism
            of a national distributor.
          </p>
        </div>

        {/* ───── BRAND CARDS ───── */}
        <header className="text-center">
          <h2 className="text-3xl font-semibold text-brand-marksman mb-4">View our Product Lines</h2>
          <p className="text-lg text-brand-charcoal/80">
            Premium abrasives and power-tool solutions for every workshop.
          </p>
        </header>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <BrandCard
            slug="cormenflex"
            color="brand-cormenflex"
            title="Cormenflex"
            tagline="Click here to see Gold-standard industrial cutting wheels"
            image="/images/logos/cormenflex-logo.png"
          />
          <BrandCard
            slug="marksman"
            color="brand-marksman"
            title="Marksman"
            tagline="Click here to see Power tools &amp; accessories"
            image="/images/logos/marksman-logo.png"
          />
          <BrandCard
            slug="tailong"
            color="brand-tailong"
            title="Tailong"
            tagline="Click here to see Green-label abrasives &amp; cutting wheels"
            image="/images/logos/tailong-logo.png"
          />
        </div>

        {/* Offer & Why Choose */}
        <div className="grid gap-10 md:grid-cols-2">
          {/* What We Offer */}
          <div>
            <h2 className="mb-4 text-2xl font-semibold text-brand-marksman md:text-3xl">
              What We Offer
            </h2>
            <ul className="list-inside list-disc space-y-2 marker:text-brand-marksman">
              <li>Tailong Green &amp; Black Series thin-cut wheels</li>
              <li>Cormenflex Gold, Green &amp; Standard grinding wheels</li>
              <li>Vitrified straight, cup, centreless &amp; cylindrical wheels</li>
              <li>Flap discs, Velcro/DA sanding discs &amp; “Magic Series” abrasives</li>
              <li>Diamond/CBN blades, TCT saws &amp; turbo blades for concrete</li>
            </ul>
            <p className="mt-4 leading-relaxed">
              Every batch is ISO-tested in-house and shipped with full after-sales
              technical support.
            </p>
          </div>

          {/* Why Choose Us */}
          <div>
            <h2 className="mb-4 text-2xl font-semibold text-brand-marksman md:text-3xl">
              Why Choose Us
            </h2>
            <ul className="list-inside list-disc space-y-2 marker:text-brand-marksman">
              <li>
                <strong>Reliability:</strong> Consistent wheel geometry, less
                vibration and longer spindle life.
              </li>
              <li>
                <strong>Honest Pricing:</strong> Transparent GST invoices with
                no hidden freight mark-ups.
              </li>
              <li>
                <strong>Service with a Human Touch:</strong> Same-day dispatch
                and technical guidance on call.
              </li>
              <li>
                <strong>Nation-wide Reach:</strong> Dealer network across every
                major industrial cluster.
              </li>
            </ul>
          </div>
        </div>

        {/* ───── ADDRESS BOX ───── */}
        <div className="rounded-lg border-l-4 border-brand-marksman bg-white shadow-lg">
          <div className="p-6 space-y-4">
            <h2 className="text-2xl font-semibold text-brand-marksman md:text-3xl">
              Visit Our Head Office
            </h2>

            <p>“Paras Bhawan”, 3944, Behind G.B. Road, Delhi 110006, India</p>

            {/* Google Map */}
            <iframe
              title="Shree Anurag Enterprises on Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14004.971223908855!2d77.21880733015938!3d28.65244766855532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd1600c6fb21%3A0xafbc0df13de48ff9!2sShree%20Anurag%20Tailong%20Abrasive%20Pvt%2C%20Ltd!5e0!3m2!1sen!2sus!4v1751327905559!5m2!1sen!2sus"
              className="w-full h-[300px] md:h-[400px] rounded-md border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />

            <Link
              href="https://maps.app.goo.gl/eKe1omaQVU8JVJix5"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-blue-700 underline hover:text-blue-900"
            >
              Open larger map
            </Link>
          </div>
        </div>

      </section>
    </div>
  );
}
