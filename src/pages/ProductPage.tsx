import { useState } from "react";
import { Link } from "react-router-dom";
import BannerProduct from "/ProductBackgroundCompressed.webp";
import tailoringImage from "/cinematicMtmCompressed.webp";
import SplitLines from "../components/SplitLines";

const categories = ["All products", "Tailoring", "Separates"] as const;
type Category = (typeof categories)[number];

type Product = {
  name: string;
  category: Exclude<Category, "All products">;
  description: string;
  image: string | null;
  imageAlt: string;
};

// Example content: replace with your confirmed product range and photography.
// For images in public/products, use `${import.meta.env.BASE_URL}products/filename.webp`.
const products: Product[] = [
  {
    name: "Suits",
    category: "Tailoring",
    description: "A coordinated foundation for a complete formal wardrobe.",
    image: null,
    imageAlt: "",
  },
  {
    name: "Jackets & blazers",
    category: "Tailoring",
    description: "Individual layers that bring structure to everyday dressing.",
    image: null,
    imageAlt: "",
  },
  {
    name: "Trousers",
    category: "Separates",
    description: "Versatile essentials, from formal pairings to relaxed combinations.",
    image: null,
    imageAlt: "",
  },
  {
    name: "Waistcoats",
    category: "Separates",
    description: "A finishing layer for a considered, coordinated look.",
    image: null,
    imageAlt: "",
  },
];

const focusRing = "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-merahDaese";

export default function ProductPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All products");
  const visibleProducts = products.filter(
    (product) => activeCategory === "All products" || product.category === activeCategory,
  );

  return (
    <div className="bg-white font-montserrat text-neutral-900">
      <section aria-label="Our products" className="relative isolate flex min-h-[560px] items-end overflow-hidden bg-neutral-900 pt-40 pb-16 sm:min-h-[620px] sm:pb-20">
        <img src={BannerProduct} alt="" fetchPriority="high" className="absolute inset-0 -z-20 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/80 via-black/55 to-black/20" />
        <div className="page-container">
          <p className="eyebrow mb-6 text-white/80">Our products / Daese Garmin</p>
          <SplitLines as="h1" className="max-w-3xl font-oswald text-6xl font-medium leading-[1.04] tracking-tight text-white sm:text-7xl lg:text-8xl">
            Take a peek<br />at our products.
          </SplitLines>
          <p className="mt-7 max-w-md text-sm leading-7 text-white/85 sm:text-base">
            From the first cut to the finishing details, explore the garments at the heart of what we do.
          </p>
          <a href="#product-collection" className="mt-8 inline-flex items-center gap-6 border-b border-white/50 pb-2 text-xs font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:border-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
            Explore the collection <span aria-hidden="true">↓</span>
          </a>
        </div>
      </section>

      <section id="product-collection" aria-labelledby="collection-title" className="page-container scroll-mt-32 py-16 sm:py-24">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="eyebrow mb-5 text-merahDaese">01 / Our collection</p>
            <h2 id="collection-title" className="heading">A closer look<br />at what we make.</h2>
          </div>
          <p className="max-w-lg self-end text-sm leading-7 text-neutral-700 sm:text-base sm:leading-8">
            Explore by category, then talk to our team about the styles, fabrics, and details for your next collection.
          </p>
        </div>

        <div role="group" aria-label="Filter products by category" className="mt-10 flex flex-wrap gap-3 border-b border-neutral-400 pb-6 sm:mt-14">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              aria-pressed={activeCategory === category}
              aria-controls="product-grid"
              onClick={() => setActiveCategory(category)}
              className={`min-h-11 cursor-pointer rounded-full border px-5 py-2.5 text-xs font-semibold transition-colors ${focusRing} ${activeCategory === category ? "border-neutral-900 bg-neutral-900 text-white" : "border-neutral-400 bg-neutral-100 text-neutral-700 hover:border-neutral-900 hover:bg-neutral-200 hover:text-neutral-900"}`}
            >
              {category}
            </button>
          ))}
        </div>
        <p role="status" className="mt-5 text-xs text-neutral-600">
          Showing {visibleProducts.length} of {products.length} product categories
        </p>

        <div id="product-grid" className="mt-8 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:gap-x-12">
          {visibleProducts.map((product) => (
            <article key={product.name}>
              <div className="relative aspect-[4/3] overflow-hidden border border-neutral-400 bg-[#e7e5e0]">
                {product.image ? (
                  <img src={product.image} alt={product.imageAlt} loading="lazy" decoding="async" className="h-full w-full object-cover" />
                ) : (
                  <div className="flex h-full flex-col items-center justify-center gap-4 p-6 text-center">
                    <span aria-hidden="true" className="h-10 w-px bg-merahDaese" />
                    <p className="font-oswald text-3xl font-medium text-neutral-700 sm:text-4xl">{product.name}</p>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-600">Product photo placeholder</p>
                    <span aria-hidden="true" className="h-10 w-px bg-merahDaese" />
                  </div>
                )}
                <span className="absolute top-4 left-4 border border-neutral-400 bg-white px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-neutral-700 sm:top-6 sm:left-6">{product.category}</span>
              </div>
              <div className="border-b border-neutral-400 py-6">
                <h3 className="font-oswald text-3xl font-medium tracking-tight">{product.name}</h3>
                <p className="mt-3 max-w-md text-sm leading-7 text-neutral-700">{product.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="detail-title" className="border-y border-neutral-400 bg-[#eeece7] py-16 sm:py-24">
        <div className="page-container grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
          <div className="aspect-[4/3] overflow-hidden border border-neutral-400 bg-neutral-200">
            <img src={tailoringImage} alt="Inside the Daese Garmin made-to-measure facility" loading="lazy" decoding="async" className="h-full w-full object-cover" />
          </div>
          <div>
            <p className="eyebrow mb-5 text-merahDaese">02 / Behind the garment</p>
            <h2 id="detail-title" className="heading">It starts<br />with the details.</h2>
            <p className="mt-6 max-w-md text-sm leading-7 text-neutral-700 sm:text-base sm:leading-8">
              Every collection starts with an idea. Share your design direction, material preferences, and finishing requirements with our team to discuss the next steps.
            </p>
            <Link to="/facility" className={`mt-8 inline-flex min-h-11 items-center gap-6 border-b border-neutral-600 pb-2 text-xs font-semibold uppercase tracking-[0.14em] transition-colors hover:border-merahDaese hover:text-merahDaese ${focusRing}`}>
              Explore our facility <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>

      <section aria-labelledby="product-contact-title" className="bg-merahDaese py-16 text-white sm:py-20">
        <div className="page-container flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center lg:gap-16">
          <div>
            <p className="eyebrow mb-5 text-white/75">Your next collection</p>
            <h2 id="product-contact-title" className="heading">Let’s make it together.</h2>
            <p className="mt-5 max-w-lg text-sm leading-7 text-white/85">Have a product in mind? Tell us what you’re looking to create.</p>
          </div>
          <Link to="/contact" className="inline-flex min-h-12 shrink-0 items-center gap-8 bg-white px-7 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-neutral-900 transition-colors hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
            Contact our team <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
