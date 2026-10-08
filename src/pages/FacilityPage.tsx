import FacilityBanner from "/mesinCuttingCompressed.webp";
import SplitLines from "../components/SplitLines";

const buildings = [
  { count: "4", name: "Production plants", detail: "The heart of our garment manufacturing operations." },
  { count: "1", name: "Central cutting facility", detail: "A dedicated space for fabric preparation and cutting." },
  { count: "1", name: "Central warehouse", detail: "Storage and coordination for materials and supplies." },
  { count: "1", name: "Finished goods warehouse", detail: "The final stop before our garments reach the world." },
  { count: "1", name: "Made-to-measure building", detail: "A dedicated home for individually tailored garments." },
];

const machinery = [
  { title: "Sewing & specialist operations", description: "Industrial high-speed sewing and dedicated equipment for critical garment operations.", brands: "Juki / Brother / Dürkopp Adler / Pfaff / Strobel" },
  { title: "Pattern design & cutting", description: "Integrated CAD systems, automatic spreaders, and multipurpose CAM cutters.", brands: "Lectra / Gerber / Topcut Bullmer / Sinajet / Jingwei" },
  { title: "Pressing & fusing", description: "Computer-programmed pressing and high-performance fusing equipment.", brands: "Macpi / Kumsung / Weishi / Kannegiesser / Veit" },
  { title: "Colour consistency", description: "Spectrophotometers to measure colour and help eliminate shading differences.", brands: "Data Color / CTEX" },
];

const gallery = [
  { filename: "alatCuttingCompressed.webp", title: "Precision in preparation", caption: "Inside the cutting facility", alt: "Cutting equipment inside the Daese Garmin factory" },
  { filename: "FOTO_CWH_EKSPOR.webp", title: "Ready for the world", caption: "Our export warehouse", alt: "Interior of the Daese Garmin export warehouse" },
  { filename: "cwhEksporRailingCompressed.webp", title: "Space to keep moving", caption: "A closer look at our facilities", alt: "Railing and work areas inside the warehouse" },
];

// const container = "w-full  responsive-x-padding";
const eyebrow = "text-[11px] font-semibold uppercase tracking-[0.22em]";
const heading = "font-oswald text-4xl font-medium leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl";

export default function FacilityPage() {
  return (
    <div className="bg-white font-montserrat text-neutral-900">
      <section aria-labelledby="facility-title" className="relative isolate flex min-h-[560px] items-end overflow-hidden bg-neutral-900 pt-40 pb-16 sm:min-h-[620px] sm:pb-20">
        <img src={FacilityBanner} alt="Garment cutting machinery at our factory" fetchPriority="high" className="absolute inset-0 -z-20 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/80 via-black/55 to-black/20" />
        <div className="page-container">
          <p className={`${eyebrow} mb-6 text-white/80`}>Our facility / Bandung, Indonesia</p>
          <SplitLines as="h1" className="max-w-3xl font-oswald text-6xl font-medium leading-[1.04] tracking-tight text-white sm:text-7xl lg:text-8xl">
            The space behind<br />every stitch.
          </SplitLines>
          {/* <h1 id="facility-title" className="max-w-3xl font-oswald text-6xl font-medium leading-[1.04] tracking-tight text-white sm:text-7xl lg:text-8xl">
            The space behind<br />every stitch.
          </h1> */}
          <p className="mt-7 max-w-md text-sm leading-7 text-white/85 sm:text-base">
            Discover the spaces, equipment, and capabilities behind Daese Garmin’s garment manufacturing.
          </p>
          <a href="#facility-overview" className="mt-8 inline-flex items-center gap-6 border-b border-white/50 pb-2 text-xs font-semibold uppercase tracking-[0.16em] !text-white transition-colors hover:border-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
            Explore our facility <span aria-hidden="true">↓</span>
          </a>
        </div>
      </section>

      <section id="facility-overview" aria-labelledby="overview-title" className="page-container scroll-mt-32 py-16 sm:py-24">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className={`${eyebrow} mb-5 text-merahDaese`}>01 / At a glance</p>
            <h2 id="overview-title" className={heading}>Room for every<br />stage of production.</h2>
          </div>
          <div className="max-w-lg self-end text-sm leading-7 text-neutral-600 sm:text-base sm:leading-8">
            <p>From the first cut to the finished garment, our Bandung facility brings the stages of production together in one location.</p>
            <p className="mt-4">Eight buildings provide dedicated space for manufacturing, cutting, warehousing, and made-to-measure work.</p>
          </div>
        </div>
        <dl className="mt-12 grid border-y border-neutral-200 sm:mt-16 sm:grid-cols-3">
          {[
            { value: "67,586", unit: "m²", label: "Total land area" },
            { value: "26,650", unit: "m²", label: "Building area" },
            { value: "08", unit: "", label: "Dedicated buildings" },
          ].map((stat) => (
            <div key={stat.label} className="border-b border-neutral-200 py-8 last:border-b-0 sm:border-r sm:border-b-0 sm:px-8 sm:first:pl-0 sm:last:border-r-0">
              <dd className="flex items-baseline gap-2 font-oswald text-5xl font-normal tracking-tight text-merahDaese lg:text-6xl">{stat.value}<span className="text-xl text-neutral-500">{stat.unit}</span></dd>
              <dt className="mt-3 text-xs font-medium tracking-wide text-neutral-600">{stat.label}</dt>
            </div>
          ))}
        </dl>
      </section>

      <section aria-labelledby="buildings-title" className="bg-[#f5f4f1] py-16 sm:py-24">
        <div className="page-container grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <p className={`${eyebrow} mb-5 text-merahDaese`}>02 / The factory</p>
            <h2 id="buildings-title" className={heading}>A place for<br />every process.</h2>
            <p className="mt-6 max-w-sm text-sm leading-7 text-neutral-600">A closer look at the eight buildings that make up our facility.</p>
          </div>
          <ul className="border-t border-neutral-300">
            {buildings.map((building) => (
              <li key={building.name} className="grid grid-cols-[48px_1fr] gap-4 border-b border-neutral-300 py-6 sm:grid-cols-[64px_1fr]">
                <span className="font-oswald text-4xl font-normal text-merahDaese" aria-label={`${Number(building.count)} buildings`}>{building.count}</span>
                <div>
                  <h3 className="text-base font-semibold leading-6 tracking-tight sm:text-lg">{building.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-neutral-600">{building.detail}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="machinery-title" className="page-container py-16 sm:py-24">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className={`${eyebrow} mb-5 text-merahDaese`}>03 / Our equipment</p>
            <h2 id="machinery-title" className={heading}>Precision, at<br />every step.</h2>
          </div>
          <p className="max-w-lg self-end text-sm leading-7 text-neutral-600 sm:text-base sm:leading-8">Specialist machinery supports each stage of garment making, from digital pattern preparation to pressing and finishing.</p>
        </div>
        <div className="mt-12 grid gap-x-12 sm:mt-16 md:grid-cols-2">
          {machinery.map((item, index) => (
            <article key={item.title} className="border-t border-neutral-200 py-8 sm:py-10">
              <p className={`${eyebrow} mb-5 text-merahDaese`}>0{index + 1}</p>
              <h3 className="font-oswald text-2xl font-medium tracking-tight sm:text-3xl">{item.title}</h3>
              <p className="mt-4 max-w-md text-sm leading-7 text-neutral-600">{item.description}</p>
              <p className="mt-6 max-w-md text-[11px] font-semibold uppercase leading-6 tracking-[0.08em] text-neutral-800">{item.brands}</p>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="gallery-title" className="bg-[#f5f4f1] py-16 sm:py-24">
        <div className="page-container">
          <div className="mb-10 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className={`${eyebrow} mb-5 text-merahDaese`}>04 / Inside Daese Garmin</p>
              <h2 id="gallery-title" className={heading}>A closer look.</h2>
            </div>
            <p className="max-w-xs text-sm leading-7 text-neutral-600">Explore the spaces where our garments take shape.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {gallery.map((photo, index) => (
              <figure key={photo.filename} className={index === 0 ? "md:col-span-2" : ""}>
                <div className={`overflow-hidden bg-neutral-200 ${index === 0 ? "aspect-[4/3] sm:aspect-[2/1]" : "aspect-[4/3]"}`}>
                  <img src={`${import.meta.env.BASE_URL}slideshow_images/${photo.filename}`} alt={photo.alt} loading="lazy" decoding="async" className="h-full w-full object-cover" />
                </div>
                <figcaption className="flex items-start gap-4 border-b border-neutral-300 py-5">
                  <span className="pt-1 text-xs text-merahDaese">0{index + 1}</span>
                  <div>
                    <h3 className="text-sm font-semibold sm:text-base">{photo.title}</h3>
                    <p className="mt-1 text-xs leading-5 text-neutral-600">{photo.caption}</p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
