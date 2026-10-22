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
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  const solid = !atTop || menuOpen;

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
        fixed top-0 left-0 z-20 m-0 w-screen h-auto py-2 sm:py-0 sm:h-15 md:h-30
        transition-[background-color,color,box-shadow] duration-300
        ${
          solid
            ? "bg-white text-black shadow-xl"
            : "bg-transparent text-white"
        }
      `}
    >
      <div
        className="relative flex flex-wrap items-center sm:flex-nowrap sm:flex-row gap-1 sm:gap-3 md:gap-0 justify-between page-container just w-full h-full"
        id="navbar-inner-container"
      >
        <motion.div
          variants={fadeInTop}
          initial="initial_state"
          animate="end_state"
          className="w-auto min-w-0 flex-1 sm:flex-none flex gap-3 justify-start sm:justify-center items-center"
        >
          <div className="">
            <img className="w-8 sm:w-12" src={logoDaese} alt="logoDaese" />
          </div>
          <div className="opacity-100">
            <span
              id="navbarTitle1"
              className="p-0 m-0 text-lg md:text-xl sm:text-sm font-bold"
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
        <button
          type="button"
          className="sm:hidden grid h-11 w-11 shrink-0 place-content-center rounded-md cursor-pointer"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="primary-nav"
          onClick={() => setMenuOpen((o) => !o)}
        >
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            {menuOpen ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
        <nav
          id="primary-nav"
          className={`${menuOpen ? "grid" : "hidden"} w-full sm:w-auto sm:grid sm:place-content-center nav-menu`}
        >
          <motion.ul
            className="flex flex-col sm:flex-row sm:justify-start sm:gap-4 pb-2 sm:pb-0"
            variants={listVariants}
            initial="initial_state"
            animate="end_state"
          >
            <motion.li
              variants={fadeInTop}
              className="nav-menu-item block hover:bg-merahDaese hover:text-white transition duration-300  turn_black font-medium"
            >
              <Link to="/" onClick={closeMenu}>Home</Link>
            </motion.li>
            <motion.li
              variants={fadeInTop}
              className="nav-menu-item block hover:bg-merahDaese hover:text-white transition duration-300  turn_black font-medium"
            >
              <Link to="/profile" onClick={closeMenu} onPointerEnter={preloadProfileBanner} onFocus={preloadProfileBanner} onTouchStart={preloadProfileBanner}>About Us</Link>
            </motion.li>
            <motion.li
              variants={fadeInTop}
              className="nav-menu-item block hover:bg-merahDaese hover:text-white transition duration-300  turn_black font-medium"
            >
              <Link to="/facility" onClick={closeMenu}>Facility</Link>
            </motion.li>
            <motion.li
              variants={fadeInTop}
              className="nav-menu-item block hover:bg-merahDaese hover:text-white transition duration-300  turn_black font-medium"
            >
              <Link to="/contact" onClick={closeMenu}>Contact</Link>
            </motion.li>
            <motion.li
              variants={fadeInTop}
              className="nav-menu-item block hover:bg-merahDaese hover:text-white transition duration-300  turn_black font-medium"
            >
              <Link to="/product" onClick={closeMenu}>Product</Link>
            </motion.li>
          </motion.ul>
        </nav>
      </div>
    </header>
  );
}
