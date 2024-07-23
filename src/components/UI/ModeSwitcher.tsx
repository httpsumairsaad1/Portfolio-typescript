import { useEffect } from "react";
import { MdDarkMode } from "react-icons/md";
import { RiSunFill } from "react-icons/ri";
import { useRecoilState } from "recoil";
import { twMerge } from "tailwind-merge";
import { darkModeAtom } from "../../recoil/atoms/darkModeAtom";

import { motion } from "framer-motion";

interface IPROPS {
  isVisible?: boolean;
}

const ModeSwitcher: React.FC<IPROPS> = ({ isVisible = true }) => {
  const [isDarkMode, setIsDarkMode] = useRecoilState(darkModeAtom);

  useEffect(() => {
    if (localStorage.getItem("vickygupta-portolio-dark-mode") === "true") {
      document.body.classList.add("dark-mode");
    }
  });

  const modeSwitcherHandler = () => {
    if (!isDarkMode) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("vickygupta-portolio-dark-mode", "true");
    } else {
      localStorage.setItem("vickygupta-portolio-dark-mode", "false");
      document.body.classList.remove("dark-mode");
    }
    setIsDarkMode(!isDarkMode);
  };

  if (!isVisible) return null;

  return (
    <motion.div
      className="button fixed bottom-12 bg-[color:var(--color-primary)] shadow-lg w-12 md:w-16 h-10 rounded-r-full flex justify-end items-center"
      initial={{ opacity: 0, transform: "translateY(-100px)" }}
      animate={{
        opacity: 1,
        transform: "translateY(0px)",
        transition: { duration: 1 },
      }}
    >
      <button
        aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
        className={twMerge(
          "p-2 ",
          isDarkMode
            ? "text-black hover:text-white"
            : "text-white hover:text-black"
        )}
        onClick={modeSwitcherHandler}
      >
        {isDarkMode && <MdDarkMode className="text-2xl " />}
        {!isDarkMode && <RiSunFill className="text-2xl " />}
      </button>
    </motion.div>
  );
};

export default ModeSwitcher;
