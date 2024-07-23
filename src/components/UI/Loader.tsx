import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { ABOUT_ME } from "../../data/about";

const Loader = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-full gap-4">
        <div
          className="flex flex-col items-center justify-center gap-2"
          data-aos="zoom-in"
        >
          <motion.div
            initial={{
              translateY: 8,
            }}
            animate={{
              translateY: 2,
              transition: {
                repeat: Infinity,
                repeatType: "reverse",
                duration: 1,
              },
            }}
          >
            <img
              src={ABOUT_ME.codeImg}
              className="w-32 rounded-full aspect-square"
              alt=""
              data-aos="zoom-in-up"
              data-aos-duration="400"
            />
          </motion.div>
          <h1
            className="font-[650] tracking-wider text-2xl  text-[color:var(--tertiary-text-color)]"
            data-aos="zoom-in-up"
            data-aos-duration="400"
          >
            <span className="text-2xl text-[color:var(--primary-text-color)]">
              &lt;US/&gt;
            </span>
            &nbsp; UMAIR SAAD
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="h-1.5 bg-transparent rounded-full w-72">
            <motion.div
              className="bg-[color:var(--primary-text-color)] h-full rounded-full"
              initial={{ width: 0 }}
              animate={{
                width: "100%",
                transition: {
                  duration: 3,
                  ease: "anticipate",
                },
              }}
            ></motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loader;
