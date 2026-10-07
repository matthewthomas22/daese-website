import profileBanner from "/eksporEstetik.webp";
import cinematicMtm from "/cinematicMtmCompressed.webp";
// import Banner from "../components/Banner";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { partnerLogos } from "../data/partnerLogos";
import { useRef } from "react";
// import process from "process";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export default function ProfilePage() {
  const pageRef = useRef<HTMLDivElement>(null);
  const photoRef = useRef<HTMLImageElement>(null);
  useGSAP((_context, contextSafe) => {
    if (!contextSafe) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.from(".fade-in-left", {
      xPercent: -60,
      autoAlpha: 0,
      duration: 0.6,
      scrollTrigger: {
        trigger: ".fade-in-left",
        start: "top 90%",
        once: true,
      },
    });

    let cancelled = false;
    const animatePhoto = contextSafe(() => {
      if (cancelled) return;
      gsap.from(".fade-in-right", {
        xPercent: 60,
        autoAlpha: 0,
        duration: 0.6,
        scrollTrigger: {
          trigger: ".fade-in-right",
          start: "top 90%",
          once: true,
        },
      });
      ScrollTrigger.refresh();
    });
    void photoRef.current?.decode().then(animatePhoto, () => {});

    gsap.utils.toArray<HTMLDivElement>(".fade-in-top").forEach((el) => {
      gsap.from(el, {
        yPercent: -60,
        autoAlpha: 0,
        duration: 1,
        scrollTrigger: {
          trigger: el,
          start: "top 60%",
          toggleActions: "restart none none reverse",
        },
      });
    });
    return () => { cancelled = true; };
  }, { scope: pageRef });

  return (
    <div ref={pageRef} className="font-montserrat text-neutral-900">
       <section aria-labelledby="aboutUs-title" className="relative isolate flex min-h-[560px] items-end overflow-hidden bg-neutral-900 pt-40 pb-16 sm:min-h-[620px] sm:pb-20">
        <img src={profileBanner} alt="Garment cutting machinery at our factory" fetchPriority="high" className="absolute inset-0 -z-20 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/80 via-black/55 to-black/20" />
        <div className="page-container">
          <p className="eyebrow mb-6 text-white/80">From Indonesia to the World</p>
          <h1 id="aboutUs-title" className="max-w-3xl font-oswald text-4xl font-medium leading-[1.04] tracking-tight text-white sm:text-7xl lg:text-8xl">
            This is <br/> who we are.
          </h1>
          <p className="mt-7 max-w-md text-sm leading-7 text-white/85 sm:text-base">
            All your manufacturing needs, from the first cut to the finished garment, are met with precision and care at Daese Garmin. Our Bandung facility brings the stages of production together in one location, providing dedicated space for manufacturing, cutting, warehousing, and made-to-measure work.
          </p>
        </div>
      </section>

      {/* <!-- another section --> */}
      <div className="py-16 w-full h-auto overflow-hidden flex flex-col md:flex-row page-container">
        {/* <!-- Text Container --> */}
        <div className="font-montserrat p-8  text-left lg:w-300 fade-in-left">
          <div className="text-2xl font-bold pb-4">
            <span className="text-4xl tracking-tight">Daese Garmin</span> <br />
            Industries. LTD
          </div>
          <div className="text-sm pb-4 font-semibold">
            Pioneering Excellence in Garment Industries <br />
            since 1988
          </div>
          <div className="text-sm pb-6 text-justify">
            Daese Garmin stands as an Indonesian export garment factory,
            situated in Bandung, West Java, Indonesia. Since our inception in
            1988, PT Daese Garmin has been a beacon of quality, catering to
            discerning customers worldwide. We proudly hold the distinction of
            being the foremost men's suit maker, harnessing over 30 years of
            expertise.
          </div>
          <button
            id="company-profile-button"
            className="big-red-button"
          >
            Download Company Profile
          </button>
        </div>
        {/* <!-- image  --> */}
        <div className="w-full grid place-items-center fade-in-right">
          <div className="w-80 md:w-100 lg:w-140  overflow-hidden  rounded-xl shadow-xl">
            <img ref={photoRef} className="object-contain" src={cinematicMtm} alt="fotoMTM" decoding="async" />
          </div>
        </div>
      </div>

      {/* VIDEO YOUTUBE */}
      <section className="py-16 md:py-8 bg-merahDaese w-screen h-auto md:h-200 grid place-content-center">
        <div className="w-full h-[30vh] md:h-[70vh]">
          <iframe
            title="Daese Garmin company profile"
            loading="lazy"
            className="embed-responsive-item w-[80vw] h-full"
            src="https://www.youtube.com/embed/nYN_xDLkv9s?mute=0&amp;showinfo=1&amp;controls=1&amp;start=0"
          ></iframe>
        </div>
      </section>

      <section className="py-16 w-full h-auto bg-white page-container">
        <div>
          <div className="font-oswald text-2xl 2xl:text-3xl font-semibold pb-4 text-center">
            Our Global Reach
          </div>
          <div className="text-center text-sm px-40 md:px-60 xl:px-80">
            Our collective annual production capacity stands at an impressive
            3.0 million pieces. Today, our market extends to include regions
            such as the <b>USA</b>,<b> Europe</b>,<b> Japan</b>,<b> Korea</b>,
            <b> Singapore</b> and <b>Australia</b>. Among our esteemed clients
            are:
          </div>
          <div className="py-10 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10 items-center justify-items-center ">
            {partnerLogos.map((logo) => (
              <img
                key={logo.filename}
                src={`${import.meta.env.BASE_URL}bw_logo/${logo.filename}`}
                alt={logo.name}
                className="imgItem w-32"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
