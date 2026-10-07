import { useState } from "react";
import logoDaese from "/logoDaese.png";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { Link } from "react-router-dom";
import type { Variants } from "motion/react";
import fadeInTop from "../variants/fadeInTop";
import profileBanner from "/eksporEstetik.webp";

let profileBannerPreload: HTMLImageElement | undefined;
function preloadProfileBanner() {
  if (profileBannerPreload) return;
  profileBannerPreload = new Image();
  profileBannerPreload.src = profileBanner;
  profileBannerPreload.onerror = () => { profileBannerPreload = undefined; };
}

export default function Navbar() {
  const { scrollY } = useScroll();
  const [atTop, setAtTop] = useState(true);

  // Variants for <ul> element
  const listVariants: Variants = {
    initial_state: { opacity: 0 },
    end_state: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        // delayChildren: 0.2,
      },
    },
  };

  // variant for <li> element

  // const variants: Variants = {
  //   initial_state: { opacity: 0, y: -60 },
  //   end_state: {
  //     opacity: 1,
  //     y: 0,
  //     transition: { duration: 0.8, ease: "easeInOut" },
  //   },
  // };

  useMotionValueEvent(scrollY, "change", (latest) => {
    setAtTop(latest === 0);
  });

  return (
    <header
      className={`
        fixed top-0 left-0 z-10 m-0 w-screen h-30
        transition-[background-color,color,box-shadow] duration-300
        ${
          atTop
            ? "bg-transparent text-white"
            : "bg-white text-black shadow-xl"
        }
      `}
    >
      <div
        className="relative flex flex-col gap-3 md:gap-0 md:flex-row justify-around just w-full h-full"
        id="navbar-inner-container"
      >
        <motion.div
          variants={fadeInTop}
          initial="initial_state"
          animate="end_state"
          className="w-auto  flex gap-3 justify-center items-center"
        >
          <div className="">
            <img className="w-12" src={logoDaese} alt="logoDaese" />
          </div>
          <div className="opacity-100">
            <span
              id="navbarTitle1"
              className="p-0 m-0 text-lg md:text-xl sm:text-lg  font-bold"
            >
              Daese Garmin
            </span>
            <br className="hidden md:block" />
            <span
              id="navbarTitle2"
              className="pl-2 md:p-0 m-0 text-xs  turn_black"
            >
              Industries. LTD
            </span>
          </div>
        </motion.div>
        <nav className="grid place-content-center nav-menu">
          <motion.ul
            className="flex gap-4"
            variants={listVariants}
            initial="initial_state"
            animate="end_state"
          >
            <motion.li
              variants={fadeInTop}
              className="nav-menu-item block hover:bg-merahDaese hover:text-white transition duration-300  turn_black font-medium"
            >
              <Link to="/">Home</Link>
            </motion.li>
            <motion.li
              variants={fadeInTop}
              className="nav-menu-item block hover:bg-merahDaese hover:text-white transition duration-300  turn_black font-medium"
            >
              <Link to="/profile" onPointerEnter={preloadProfileBanner} onFocus={preloadProfileBanner} onTouchStart={preloadProfileBanner}>About Us</Link>
            </motion.li>
            <motion.li
              variants={fadeInTop}
              className="nav-menu-item block hover:bg-merahDaese hover:text-white transition duration-300  turn_black font-medium"
            >
              <Link to="/facility">Facility</Link>
            </motion.li>
            <motion.li
              variants={fadeInTop}
              className="nav-menu-item block hover:bg-merahDaese hover:text-white transition duration-300  turn_black font-medium"
            >
              <Link to="/contact">Contact</Link>
            </motion.li>
            <motion.li
              variants={fadeInTop}
              className="nav-menu-item block hover:bg-merahDaese hover:text-white transition duration-300  turn_black font-medium"
            >
              <Link to="/product">Product</Link>
            </motion.li>
          </motion.ul>
        </nav>
      </div>
    </header>
  );
}
