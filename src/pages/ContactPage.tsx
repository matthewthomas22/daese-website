import ContactBanner from "/contactBackgroundCompressed.webp";
import SplitLines from "../components/SplitLines";

export default function ContactPage() {
  return <>
    <div className="bg-white font-montserrat text-neutral-900">
       <section aria-labelledby="contact-title" className="relative isolate flex min-h-[560px] items-end overflow-hidden bg-neutral-900 pt-40 pb-16 sm:min-h-[620px] sm:pb-20">
        <img src={ContactBanner} alt="Garment cutting machinery at our factory" fetchPriority="high" className="absolute inset-0 -z-20 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/80 via-black/55 to-black/20" />
        <div className="page-container">
          {/* <p className={`${eyebrow} mb-6 text-white/80`}>Our contact / Bandung, Indonesia</p> */}
          
          <SplitLines as="h1" className="max-w-3xl font-oswald text-6xl font-medium leading-[1.04] tracking-tight text-white sm:text-7xl lg:text-8xl">
            Contact us for<br />your garment needs.
          </SplitLines>
          <p className="mt-7 max-w-md text-sm leading-7 text-white/85 sm:text-base">
            We are here to assist you with any inquiries or requests regarding our garment manufacturing services. Please feel free to reach out to us through the contact information provided below, and our team will be happy to help you.
          </p>
        </div>
      </section>
    </div>
  </>;
}
