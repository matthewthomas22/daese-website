import { useEffect, useRef, useState } from "react";
import bannerImage1 from "/SewingHeaderCompressed.webp";
import bannerImage2 from "/homeImage1.webp";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { motion, AnimatePresence, animate, type PanInfo } from "motion/react";
import worldwideCustomer from "/worldwidecustomer.png";
import skilledHumanResources from "/skilledHumanResources.png";
import buildingFacility from "/buildingFacility.png";
import machine from "/machine.png";
import dindingMtm from "/dinding_mtmCompressed.webp";
import processIcon1 from "/processIcon1.png";
import processIcon2 from "/processIcon2.png";
import processIcon3 from "/processIcon3.png";
import processIcon4 from "/processIcon4.png";
import processIcon5 from "/processIcon5.png";
import { Link } from "react-router-dom";
// import fadeInTop from "../variants/fadeInTop";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const BANNER_TEXT: string[] = [
  "Defining Quality, Shaping Perfection",
  "Trust your garment needs with us and experience excellence at every step",
];

const SLIDES = [bannerImage1, bannerImage2];
const SLIDE_DURATION = 6; // seconds
const SWIPE_THRESHOLD = 50; // px

const HERO_STATS = [
  { value: new Date().getFullYear() - 1988, label: "Years of Experience" },
  { value: 4200, label: "Skilled Workers" },
  { value: 4000, label: "Machines" },
  { value: 8, label: "Buildings" },
];

function CountUp({ to, delay = 0 }: { to: number; delay?: number }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const controls = animate(0, to, {
      duration: 2,
      delay,
      ease: "easeOut",
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = String(Math.round(v));
      },
    });
    return () => controls.stop();
  }, [to, delay]);

  return <span ref={ref}>0</span>;
}

export default function HomePage() {
  const slides = SLIDES;
  const [slideIndex, setSlideIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  // Preload every banner so the crossfade never shows an empty frame
  useEffect(() => {
    SLIDES.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // const leftTextContainer = useRef<HTMLDivElement>(null);
  // const rightTextContainer = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    // Hero parallax: background drifts slower than the page, text lifts and fades out
    const heroScroll = {
      trigger: ".banner-slideshow",
      start: "top top",
      end: "bottom top",
      scrub: true,
    };
    gsap.to(".hero-bg", { yPercent: 25, ease: "none", scrollTrigger: heroScroll });
    gsap.to(".hero-content", {
      yPercent: -20,
      autoAlpha: 0,
      ease: "none",
      scrollTrigger: { ...heroScroll },
    });

    gsap.utils.toArray<HTMLDivElement>(".fade-in-left").forEach((el) => {
      gsap.from(el, {
        xPercent: -60,
        autoAlpha: 0,
        duration: 1,
        scrollTrigger: {
          trigger: el,
          start: "top 60%",
          toggleActions: "restart none none reverse",
        },
      });
    });

    gsap.utils.toArray<HTMLDivElement>(".fade-in-right").forEach((el) => {
      gsap.from(el, {
        xPercent: 60,
        autoAlpha: 0,
        duration: 1,
        scrollTrigger: {
          trigger: el,
          start: "top 60%",
          toggleActions: "restart none none reverse",
        },
      });
    });

    gsap.from(".our-process-title", {
      yPercent: 60,
      autoAlpha: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".our-process-title",
        start: "top 60%",
        toggleActions: "restart none none reverse",
      },
    });

    //
    gsap.from(".animate-section-card", {
      yPercent: 60,
      autoAlpha: 0,
      duration: 1,
      stagger: 0.1,
      scrollTrigger: {
        trigger: ".animate-section-card",
        start: "top 60%",
        toggleActions: "restart none none reverse",
      },
    });

    // Our Process Cards
    gsap.from(".process-section-card", {
      yPercent: 60,
      autoAlpha: 0,
      duration: 1,
      stagger: 0.1,
      scrollTrigger: {
        trigger: ".our-process-container",
        start: "top 60%",
        toggleActions: "restart none none reverse",
      },
    });
  });

  // Autoplay is driven by the active progress bar's CSS animation ending,
  // so pausing the bar on hover also pauses the slideshow.
  const goNext = () => {
    setSlideIndex((prev) => (prev + 1) % slides.length);
  };

  const goPrev = () => {
    setSlideIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Horizontal swipe on touch devices; vertical scrolling stays native (touch-action: pan-y)
  const handleSwipe = (event: PointerEvent, info: PanInfo) => {
    if (event.pointerType === "mouse") return;
    const { x, y } = info.offset;
    if (Math.abs(x) < SWIPE_THRESHOLD || Math.abs(x) < Math.abs(y)) return;
    if (x < 0) goNext();
    else goPrev();
  };

  const pauseHandlers = {
    onMouseEnter: () => setIsPaused(true),
    onMouseLeave: () => setIsPaused(false),
  };

  return (
    <>
      <div className="font-montserrat text-neutral-900">

        {/* Banner / Header Section */}
        <div className="banner-slideshow group w-full h-screen min-h-[34rem] overflow-hidden relative bg-black">
          {/* Background images: crossfade + slow zoom */}
          <div className="hero-bg absolute inset-0">
          <AnimatePresence initial={false}>
            <motion.div
              key={slideIndex}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            >
              <motion.img
                className="h-full"
                src={slides[slideIndex]}
                alt={`banner image ${slideIndex + 1}`}
                initial={{ scale: 1 }}
                animate={{ scale: 1.08 }}
                transition={{ duration: SLIDE_DURATION + 1.2, ease: "linear" }}
              />
            </motion.div>
          </AnimatePresence>
          </div>

          <motion.div
            className="flex flex-col justify-center items-center text-white font-oswald absolute z-10 w-full h-full bg-gradient-to-t from-black/80 via-black/55 to-black/20"
            style={{ touchAction: "pan-y" }}
            onPanEnd={handleSwipe}
          >
            <div className="hero-content flex flex-col items-center gap-2 w-full">
            {/* <p className="eyebrow text-white/80">From Indonesia to the World</p> */}
            <AnimatePresence mode="wait">
              <motion.div
                className="flex flex-col w-full page-container h-40 justify-center items-center text-center"
                key={slideIndex}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={{
                  visible: { transition: { staggerChildren: 0.08 } },
                  exit: { opacity: 0, transition: { duration: 0.3 } },
                }}
              >
                <h1 className="text-[clamp(2.5rem,1rem+4vw,5rem)] leading-[1.1] bannerText1 bannerBigText banner-title-1">
                  {BANNER_TEXT[slideIndex].split(" ").map((word, i) => (
                    <span key={i}>
                      <motion.span
                        className="inline-block"
                        variants={{
                          hidden: { y: 40, opacity: 0 },
                          visible: {
                            y: 0,
                            opacity: 1,
                            transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
                          },
                        }}
                      >
                        {word}
                      </motion.span>{" "}
                    </span>
                  ))}
                </h1>
              </motion.div>
            </AnimatePresence>
            {/* <h4 className="bannerSmall1 text-[clamp(1rem,0.8rem_+_1vw,1.5rem)] text-white/80 font-extralight bannerText1 mt-4">
              PT Daese Garmin Industries.LTD
            </h4> */}
            {/* <h4 className="text-[clamp(1rem,0.9rem_+_0.4vw,1.25rem)] text-white/85 font-extralight bannerText1">since 1988</h4> */}

           

            {/* Key figures with count-up */}
            <motion.div
              className="hidden md:grid grid-cols-4 divide-x divide-white/20 mt-6 pt-6 border-t border-white/20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              {HERO_STATS.map((stat, i) => (
                <div key={stat.label} className="px-8 text-center">
                  <div className="text-3xl lg:text-4xl font-semibold">
                    <CountUp to={stat.value} delay={0.9 + i * 0.15} />
                    {stat.value > 10 && "+"}
                  </div>
                  <div className="eyebrow text-white/70 mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* Call to action */}
            <motion.div
              className="flex flex-wrap justify-center gap-4 mt-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link to="/product" className="big-red-button">
                OUR PRODUCTS
              </Link>
              <Link to="/contact" className="big-white-button">
                CONTACT US
              </Link>
            </motion.div>
            </div>
          </motion.div>

          {/* Prev / next arrows: always visible on mobile, on hover on desktop */}
          <button
            onClick={goPrev}
            {...pauseHandlers}
            aria-label="Previous slide"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 grid place-content-center w-9 h-9 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full border border-white/40 bg-black/20 text-white backdrop-blur-sm cursor-pointer transition duration-300 hover:bg-white/20 md:opacity-0 md:group-hover:opacity-100"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            onClick={goNext}
            {...pauseHandlers}
            aria-label="Next slide"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 grid place-content-center w-9 h-9 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full border border-white/40 bg-black/20 text-white backdrop-blur-sm cursor-pointer transition duration-300 hover:bg-white/20 md:opacity-0 md:group-hover:opacity-100"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          {/* Slide progress indicators */}
          <div
            className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 flex gap-3"
            {...pauseHandlers}
          >
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setSlideIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
                className="relative w-12 h-1 py-2 bg-clip-content bg-white/30 cursor-pointer overflow-hidden"
              >
                {index === slideIndex && (
                  <span
                    key={slideIndex}
                    className="absolute inset-x-0 top-2 h-1 bg-white origin-left"
                    style={{
                      animation: `hero-progress ${SLIDE_DURATION}s linear forwards`,
                      animationPlayState: isPaused ? "paused" : "running",
                    }}
                    onAnimationEnd={goNext}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Scroll down cue */}
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center text-white/70"
            aria-hidden="true"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="eyebrow">Scroll</span>
            <svg className="w-5 h-5 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </motion.div>
        </div>

        {/* Text Below Banner */}
        <div className="h-auto py-14 box-border w-full m-0 md:flex page-container bg-white text-neutral-900">
          <div className="w-full h-auto py-6 fade-in-left">
            <div className="text-merahDaese tracking-wide eyebrow">
              WELCOME TO
            </div>
            <div className="relative tracking-tight text-4xl mt-2 font-bold before:content[''] before:absolute before:bg-merahDaese before:w-[80%] before:h-2 before:-bottom-10">
              Daese Garmin
              <br />
              Industries. LTD
            </div>
            <br />
            <div className="mt-10 font-montserrat font-bold italic text-2xl tracking-normal text-gray-400 leading-[2.44]">
              Over Three Decades <br />
              of Garment Manufacturing Expertise!
            </div>
          </div>
          <div className="w-full h-auto p-6 fade-in-right">
            <div className="font-montserrat font-semibold leading-[2.3] tracking-wide text-left md:text-justify">
              Embarking on a Remarkable Journey: PT DAESE GARMIN itself was
              established on March 15, 1988, as a joint venture with Daewoo
              Company (Segye Corporation) from Korea. With its growth, the joint
              venture concluded in 1992, and the present company, Metro Group,
              took full charge of management ever since.
            </div>
            <button className="big-red-button mt-4">READ MORE</button>
          </div>
        </div>

        {/* <!-- Section Icon dan Penjelasannya --> */}
        <section className="bg-merahDaese h-auto w-full m-0 page-container pt-16">
          {/* <!-- 
          worldwidecustomer.png
          skilledHumanResources.png
          buildingFacility.png
          machine.png 
        --> */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 pb-16">
            <div className="animate-section-card w-60 h-60 text-center text-white font-montserrat flex flex-col justify-center items-center p-4 rounded-xl shadow-xl bg-[hsla(357,65%,56%,1)]">
              <img
                className="object-contain w-20 h-20"
                src={worldwideCustomer}
                alt=""
              />
              <div className="mt-8"> Worldwide Customer </div>
            </div>
            <div className="animate-section-card w-60 h-60 text-center text-white font-montserrat flex flex-col justify-center items-center p-4 rounded-xl shadow-xl bg-[hsla(357,65%,56%,1)]">
              <img
                className="object-contain w-20 h-20"
                src={skilledHumanResources}
                alt=""
              />
              <div className="mt-8"> 4200+ Skilled Human Resources </div>
            </div>
            <div className="animate-section-card w-60 h-60 text-center text-white font-montserrat flex flex-col justify-center items-center p-4 rounded-xl shadow-xl bg-[hsla(357,65%,56%,1)]">
              <img
                className="object-contain w-20 h-20"
                src={buildingFacility}
                alt=""
              />
              <div className="mt-8"> 8 Building Facility </div>
            </div>
            <div className="animate-section-card w-60 h-60 text-center text-white font-montserrat flex flex-col justify-center items-center p-4 rounded-xl shadow-xl bg-[hsla(357,65%,56%,1)]">
              <img className="object-contain w-20 h-20" src={machine} alt="" />
              <div className="mt-8"> 4000+ Machine </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4 pb-16">
            {/* <!-- gambar di Section ini --> */}
            <div className="w-full fade-in-left">
              <img className="object-contain w-full" src={dindingMtm} alt="" />
            </div>
            {/* <!-- Tulisan lagi disampingnya --> */}
            <div className="w-full fade-in-right">
              <span className="block w-full h-auto text-4xl font-semibold pb-4 text-white font-montserrat tracking-wide">
                Men’s Suit
              </span>
              <span className="text-left md:text-justify text-white font-semibold text-sm font-montserrat leading-[2.44] relative before:content[''] before:absolute before:bg-white before:w-60 before:h-2 before:bottom-[-60px] ">
                Our core product is Men’s Suit, in which we have a very long and
                deep experience. In Indonesia, we’re the first and the best men’s
                suit maker. Due the market requirement, we are also producing
                men’s coat, vest and ladies suit (5%). Today, our company, is one
                of the most reliable manufacture and exporter for high quality
                Men’s and Ladies Suits.
              </span>
              <br />
              <button className="big-white-button mt-18">OUR FACILITY</button>
            </div>
          </div>
        </section>

        {/* <!-- Our Process section  --> */}
        <section className="py-24 m-0 w-full h-fit our-process-container overflow-hidden">
          <div className="text-center pb-16 our-process-title">
            <span className="uppercase font-oswald text-4xl font-extrabold">
              our process
            </span>
          </div>
          <div className="flex flex-col px-8 items-center gap-14 md:gap-x-6 md:gap-y-14 md:flex-row md:flex-wrap w-auto h-auto justify-evenly">
            <div className="process-section-card">
              <div className="bg-merahDaese rounded-full w-25 h-25 relative grid place-content-center">
                <img
                  className="object-contain w-15 h-15 center-absolute"
                  src={processIcon1}
                  alt=""
                />
              </div>
              <div className="process-card-container">
                <div className="process-card-title">
                  <span className="ourProcess-title">Pre-Production</span>
                </div>
                <div className="process-card-text">
                  <span className=" ourProcess-description">
                    Pre-production encompasses fabric and trim sourcing, fabric
                    development, pattern making, and sampling.
                  </span>
                </div>
              </div>
            </div>
            <div className="process-section-card">
              <div className="bg-merahDaese rounded-full w-25 h-25 relative grid place-content-center">
                <img
                  className="object-contain w-15 h-15 center-absolute"
                  src={processIcon2}
                  alt="process Icon"
                />
              </div>
              <div className="process-card-container">
                <div className="process-card-title">
                  <span className="ourProcess-title ">Plan​ning</span>
                </div>
                <div className="process-card-text">
                  <span className=" ourProcess-description">
                    Our garment factory's production planner meticulously
                    schedules all activities well in advance.
                  </span>
                </div>
              </div>
            </div>
            <div className="process-section-card">
              <div className="bg-merahDaese rounded-full w-25 h-25 relative grid place-content-center">
                <img
                  className="object-contain w-15 h-15 center-absolute"
                  src={processIcon3}
                  alt=""
                />
              </div>
              <div className="process-card-container">
                <div className="process-card-title">
                  <span className="ourProcess-title ">Cutting Process</span>
                </div>
                <div className="process-card-text">
                  <span className=" ourProcess-description">
                    The cutting process is key to the quality of finished goods
                  </span>
                </div>
              </div>
            </div>
            <div className="process-section-card">
              <div className="bg-merahDaese rounded-full w-25 h-25 relative grid place-content-center">
                <img
                  className="object-contain w-15 h-15 center-absolute"
                  src={processIcon4}
                  alt=""
                />
              </div>
              <div className="process-card-container">
                <div className="process-card-title">
                  <span className="ourProcess-title ">
                    Manufacturing and Quality Control
                  </span>
                </div>
                <div className="process-card-text">
                  <span className=" ourProcess-description">
                    Garment Manufacturing Process from Fabric to Finished
                    Products.&nbsp;
                  </span>
                </div>
              </div>
            </div>
            <div className="process-section-card">
              <div className="bg-merahDaese rounded-full w-25 h-25 relative grid place-content-center">
                <img
                  className="object-contain w-15 h-15 center-absolute"
                  src={processIcon5}
                  alt=""
                />
              </div>
              <div className="process-card-container">
                <div className="process-card-title">
                  <span className="ourProcess-title ">Delivery</span>
                </div>
                <div className="process-card-text">
                  <span className=" ourProcess-description ">
                    After the items have been reviewed by the fashion company, the
                    rest of the order will be delivered to your warehouse
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
