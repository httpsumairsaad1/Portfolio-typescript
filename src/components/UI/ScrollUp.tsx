import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { twMerge } from "tailwind-merge";

import { motion } from "framer-motion";

const ScrollUp = () => {
  const [isVisible, setIsVisible] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
    let HeightToHide = 200;
    const windowScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (windowScroll > HeightToHide) setIsVisible(true);
    else setIsVisible(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      className=" fixed bottom-12 right-4  bg-[color:var(--secondary-background-color)] shadow-lg  aspect-square rounded-full flex justify-center items-center"
      initial={{ opacity: 0, transform: "translateY(-100px)" }}
      animate={{
        opacity: 1,
        transform: "translateY(0px)",
        transition: { duration: 0.5 },
      }}
    >
      <button
        aria-label="Scroll to top"
        className={twMerge(
          "p-2 text-white w-[48px] sm:w-[56px] flex items-center justify-center "
        )}
        onClick={scrollToTop}
      >
        <FaArrowUp className="text-2xl text-[color:var(--primary-text-color)]" />
      </button>
    </motion.div>
  );
};

export default ScrollUp;
