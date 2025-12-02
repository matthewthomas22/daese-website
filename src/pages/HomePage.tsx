import { useEffect, useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitText from "gsap/src/SplitText";
import TextPlugin from "gsap/TextPlugin";
import bannerImage1 from "/DSC02262.jpg";
import bannerImage2 from "/homeImage1.webp";
import { motion } from "motion/react";
import worldwideCustomer from "/worldwidecustomer.png";
import skilledHumanResources from "/skilledHumanResources.png";
import buildingFacility from "/buildingFacility.png";
import machine from "/machine.png";
import dindingMtm from "/dinding_mtm.webp";
import processIcon1 from "/processIcon1.png";
import processIcon2 from "/processIcon2.png";
import processIcon3 from "/processIcon3.png";
import processIcon4 from "/processIcon4.png";
import processIcon5 from "/processIcon5.png";
import leftIcon from "/left-arrow-white-nobg.png";
import rightIcon from "/right-arrow-white-nobg.png";
// import fadeInTop from "../variants/fadeInTop";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(SplitText);
gsap.registerPlugin(TextPlugin);

// const BANNER_TEXT: string[] = [
//   "Defining Quality, Shaping Perfection",
//   "Trust your garment needs with us and experience excellence at every step",
// ];

export default function HomePage() {
  const slides = [bannerImage1, bannerImage2];
  const [slideIndex, setSlideIndex] = useState<number>(0);

  useEffect(() => {
    console.log("slideIndex Changed! -> ", slideIndex);
  }, [slideIndex]);

  const bannerContainer = useRef<HTMLDivElement>(null);

  const tl = useRef<gsap.core.Timeline>(null);
  const { contextSafe } = useGSAP({ scope: bannerContainer });

  useGSAP(
    () => {
      document.fonts.ready.then(() => {
        const split = SplitText.create(".bannerText1", {
          type: "words",
        });

        gsap.from(split.words, {
          y: 100,
          autoAlpha: 0,
          mask: "words",
          stagger: 0.05,
          duration: 1.2,
          ease: "power1.inOut",
        });

        requestAnimationFrame(() => {
          // ----- Banner Text -----
          const splitBanner1 = SplitText.create(".banner-title-1", {
            type: "words",
          });
          const splitBanner2 = SplitText.create(".banner-title-2", {
            type: "words",
          });

          // DEBUG 🪲
          console.log("splitBanner1:", splitBanner1.words.length);
          console.log("splitBanner2:", splitBanner2.words.length);

          gsap.set(splitBanner1.words, { y: 14 });
          // gsap.set(splitBanner2.words, {
          // autoAlpha: 0,
          // position: "absolute",
          // top: "50%",
          // left: "50%",
          // x: -50,
          // y: -50,
          // });

          tl.current = gsap.timeline({ paused: true });
          tl.current
            .to(splitBanner1.words, {
              y: -40,
              autoAlpha: 0,
              duration: 0.5,
              stagger: 0.05,
            })
            .from(splitBanner2.words, {
              yPercent: 60,
              // autoAlpha: 0,
              duration: 0.5,
              stagger: 0.05,
            });
        });
      });
    },
    { scope: bannerContainer }
  );

  const goNext = contextSafe(() => {
    setSlideIndex((prev) => Math.min(prev + 1, slides.length - 1));

    tl.current?.play();
    // changeBannerText();
  });

  const goPrev = contextSafe(() => {
    setSlideIndex((prev) => Math.max(prev - 1, 0));
    tl.current?.reverse();
  });

  return (
    <>
      {/* Banner / Header Section */}
      <div
        ref={bannerContainer}
        className="banner-slideshow w-screen h-screen overflow-hidden relative  bg-black"
      >
        <div className="flex flex-col justify-center items-center text-white font-oswald gap-4 absolute z-10 w-full h-full">
          <h4 className="bannerSmall1 text-2xl font-light bannerText1">
            PT Daese Garmin Industries.LTD
          </h4>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <h1 className="text-4xl  bannerText1 bannerBigText banner-title-1">
              Defining Quality, Shaping Perfection
            </h1>
          </div>
          <div className="w-full">
            <h1 className="text-4xl banner-title-2">
              Trust your garment needs with us and experience excellence at
              every step
            </h1>
          </div>
          <h4 className="text-xl font-light bannerText1">since 1988</h4>
        </div>
        <div
          className="flex h-full relative transition-all duration-500"
          style={{
            transform: `translateX(-${slideIndex * 100}vw)`,
          }}
        >
          {slides.map((src, index) => (
            <>
              <img key={index} src={src} alt={`banner image ${index + 1}`} />
            </>
          ))}
        </div>
        <motion.button
          onClick={goPrev}
          className="absolute left-0  top-1/2 -translate-y-1/2 outline-none motion-btn  w-20 h-full z-10"
          initial={{ opacity: 0, pointerEvents: "none" }}
          animate={
            slideIndex === 0
              ? { opacity: 0, pointerEvents: "none" }
              : { opacity: 1, pointerEvents: "auto" }
          }
          transition={{ duration: 0.5 }}
        >
          <img className="object-contain" src={leftIcon} alt="left arrow" />
        </motion.button>
        <motion.button
          onClick={goNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 outline-none motion-btn  w-20 h-full z-10"
          initial={{ opacity: 1, pointerEvents: "auto" }}
          animate={
            slideIndex < slides.length - 1
              ? { opacity: 1, pointerEvents: "auto" }
              : { opacity: 0, pointerEvents: "none" }
          }
          transition={{ duration: 0.5 }}
        >
          <img className="object-contain" src={rightIcon} alt="right arrow" />
        </motion.button>
      </div>

      {/* Text Below Banner */}
      <div className="h-auto p-8 box-border w-full m-0 md:flex responsive-x-padding">
        <div className="w-full h-auto py-6">
          <div className="text-merahDaese tracking-wide text-2xl font-oswald font-bold">
            WELCOME TO
          </div>
          <br />
          <div className="relative tracking-wide text-4xl mt-2 font-oswald font-bold before:content[''] before:absolute before:bg-merahDaese before:w-[80%] before:h-2 before:-bottom-10">
            Daese Garmin
            <br />
            Industries. LTD
          </div>
          <br />
          <div className="mt-10 font-montserrat font-bold italic text-2xl tracking-wider text-gray-400 leading-[2.44]">
            Over Three Decades <br />
            of Garment Manufacturing Expertise!
          </div>
        </div>
        <div className="w-full h-auto p-6">
          <div className="font-montserrat font-semibold leading-[2.44] text-justify">
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
      <section className="bg-merahDaese h-auto w-full m-0 responsive-x-padding pt-16">
        {/* <!-- 
        worldwidecustomer.png
        skilledHumanResources.png
        buildingFacility.png
        machine.png 
      --> */}
        <div className="flex flex-col md:flex-row items-center gap-4 pb-16">
          <div className="w-60 h-60 text-center text-white font-montserrat flex flex-col justify-center items-center p-4 rounded-xl shadow-xl bg-[hsla(357,65%,56%,1)]">
            <img
              className="object-contain w-20 h-20"
              src={worldwideCustomer}
              alt=""
            />
            <div className="mt-8"> Worldwide Customer </div>
          </div>
          <div className="w-60 h-60 text-center text-white font-montserrat flex flex-col justify-center items-center p-4 rounded-xl shadow-xl bg-[hsla(357,65%,56%,1)]">
            <img
              className="object-contain w-20 h-20"
              src={skilledHumanResources}
              alt=""
            />
            <div className="mt-8"> 4200+ Skilled Human Resources </div>
          </div>
          <div className="w-60 h-60 text-center text-white font-montserrat flex flex-col justify-center items-center p-4 rounded-xl shadow-xl bg-[hsla(357,65%,56%,1)]">
            <img
              className="object-contain w-20 h-20"
              src={buildingFacility}
              alt=""
            />
            <div className="mt-8"> 8 Building Facility </div>
          </div>
          <div className="w-60 h-60 text-center text-white font-montserrat flex flex-col justify-center items-center p-4 rounded-xl shadow-xl bg-[hsla(357,65%,56%,1)]">
            <img className="object-contain w-20 h-20" src={machine} alt="" />
            <div className="mt-8"> 4000+ Machine </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4 pb-16">
          {/* <!-- gambar di Section ini --> */}
          <div className="w-full">
            <img className="object-contain w-full" src={dindingMtm} alt="" />
          </div>
          {/* <!-- Tulisan lagi disampingnya --> */}
          <div className="w-full">
            <span className="block w-full h-auto text-4xl font-semibold pb-4 text-white font-montserrat tracking-wide">
              Men’s Suit
            </span>
            <span className="text-justify text-white font-semibold text-sm font-montserrat leading-[2.44] relative before:content[''] before:absolute before:bg-white before:w-60 before:h-2 before:bottom-[-60px] ">
              Our core product is Men’s Suit, in which we have a very long and
              deep experience. In Indonesia, we’re the first and the best men’s
              suit maker. Due the market requirement, we are also producing
              men’s coat, vest and ladies suit (5%). Today, our company, is one
              of the most reliable manufacture and exporter for high quality
              Men’s and Ladies Suits.
            </span>
            <br />
            <button className="big-button-white mt-32">OUR FACILITY</button>
          </div>
        </div>
      </section>

      {/* <!-- Our Process section  --> */}
      <section className="py-24 m-0 w-full h-fit">
        <div className="text-center pb-16">
          <span className="uppercase font-oswald text-4xl font-extrabold">
            our process
          </span>
        </div>
        <div className="flex flex-col px-8 items-center gap-14 md:gap-10 md:flex-row w-auto h-auto justify-evenly">
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
                alt=""
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
    </>
  );
}
