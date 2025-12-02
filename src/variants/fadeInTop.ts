import type { Variants } from "motion";

const fadeInTop: Variants = {
  initial_state: { opacity: 0, y: -60 },
  end_state: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeInOut" },
  },
};

export default fadeInTop;
