import BrandCard from "@/components/BrandCard";

export const metadata = {
  title: "Shree Anurag Enterprises | Cutting Wheels & Power Tools",
  description: "Importer of Tailong, Cormenflex and Marksman industrial products",
};

export default function Home() {
  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <header className="text-center">
        <h1 className="text-4xl font-bold">Choose Your Brand</h1>
        <p className="mt-4 text-lg text-brand-charcoal/80">
          Premium abrasives and power-tool solutions for every workshop.
        </p>
      </header>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <BrandCard
          slug="cormenflex"
          color="brand-cormenflex"
          title="Cormenflex"
          tagline="Gold-standard industrial cutting wheels"
          image="/images/logos/cormenflex-logo.png"
        />

        <BrandCard
          slug="marksman"
          color="brand-marksman"
          title="Marksman"
          tagline="Power tools & accessories"
          image="/images/logos/marksman-logo.png"
        />

        <BrandCard
          slug="tailong"
          color="brand-tailong"
          title="Tailong"
          tagline="Green-label abrasives & cutting wheels"
          image="/images/logos/tailong-logo.png"
        />
      </div>
    </section>
  );
}
