import { useEffect, useState } from "react";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import { twMerge } from "tailwind-merge";
import Wrapper from "../Wrapper/wrapper";

import { motion } from "framer-motion";

import TECH_STACK from "../../data/techStackDetails";
import "../../styles.css";
import Tooltip from "../UI/Tooltip";

import AOS from "aos";
import "aos/dist/aos.css";

function Skill() {
  const [currentStackType, setCurrentStackType] = useState(TECH_STACK[0].name);
  const techStack = TECH_STACK.find((item) => item.name === currentStackType);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <section data-section className="mt-64 mb-12" id="tech-stack">
      <Wrapper className="flex flex-col items-center justify-center">
        <div
          className="flex flex-col items-center justify-center px-8 header"
          data-aos="fade-in"
        >
          <h1 className="text-[color:var(--color-primary)] text-3xl font-bold mb-2 text-center">
            TECH STACK
          </h1>
          <div className="h-[0.30rem] w-10 bg-[color:var(--color-primary)] rounded-full"></div>
        </div>
        <div
          className="relative p-6 mt-8 font-medium text-black rounded-full"
          data-aos="zoom-in"
        >
          {/* <div className="absolute top-1 left-1 -z-10 w-full h-full bg-[color:var(--color-primary)] rounded-full"></div> */}
          <div className="z-30 flex flex-wrap items-center justify-around gap-4 font-semibold text-[color:var(--tertiary-text-color)]">
            {TECH_STACK.map((item) => {
              return (
                <button
                  aria-label={item.name}
                  key={item.id}
                  onClick={() => setCurrentStackType(item.name)}
                  className={twMerge(
                    item.name === currentStackType
                      ? " text-[color:var(--primary-text-color)] py-.5 px-3  rounded-full"
                      : " py-.5 px-3  rounded-full",
                    "group hover:text-[color:var(--primary-text-color)] tracking-wider font-[550]"
                  )}
                >
                  <span
                    className={twMerge(
                      "invisible group-hover:visible  text-[color:var(--primary-text-color)]",
                      item.name === currentStackType ? "visible" : null
                    )}
                  >
                    &lt;
                  </span>
                  {item.name.toUpperCase()}
                  <span
                    className={twMerge(
                      "invisible group-hover:visible  text-[color:var(--primary-text-color)] ",
                      item.name === currentStackType ? "visible" : null
                    )}
                  >
                    &gt;
                  </span>
                </button>
              );
            })}
          </div>
        </div>
        <ParallaxProvider>
          <Parallax
            className="w-full mt-20 "
            speed={0.3}
            translateY={["-105px", "100px"]}
          >
            <div className="relative w-full h-[300px] flex flex-col font-semibold text-gray-300 items-center justify-center">
              <div
                className="flex flex-wrap items-center justify-center w-full gap-12 sm:justify-around"
                data-aos="zoom-in"
              >
                {techStack?.list.map((item, index) => {
                  return (
                    <motion.div
                      key={item.id}
                      className={twMerge(
                        "flex items-center justify-center  w-16 h-16 relative group",
                        item.className
                      )}
                      title={item.name}
                      initial={{
                        translateY: 20,
                      }}
                      animate={{
                        translateY: 0,
                        transition: {
                          repeat: Infinity,
                          repeatType: "mirror",
                          duration: 2,
                          delay: index,
                        },
                      }}
                    >
                      <img
                        src={item.icon}
                        className="object-cover duration-1000 hover:scale-125 hover:duration-500 "
                        alt=""
                      />
                      <Tooltip
                        className="-top-[52px] "
                        tooltipClassName="border-b-0 border-t-[16px] top-[100%]"
                        title={item.name}
                      />
                    </motion.div>
                  );
                })}
              </div>
              <div
                className="cursor-default absolute right-0  -top-4 hover:text-[color:var(--primary-text-color)] duration-300 hover:scale-125"
              >
              <p
                data-aos="fade-left"
                className="text-2xl"
              >
                HTML5
              </p>
              </div>
              <div
                className="cursor-default absolute -top-0 left-10 hover:text-[color:var(--primary-text-color)] duration-300 hover:scale-125"
              >
              <p
                data-aos="fade-right"
                className="text-2xl "
              >
                Redux
              </p>
              </div>
              <div
                className="cursor-default absolute left-[30%] top-[12%] hover:text-[color:var(--primary-text-color)] duration-300 hover:scale-125"
              >
              <p
                data-aos="fade-up"
                className="text-lg "
              >
                CSS3
              </p>
              </div>
              <div
                className="cursor-default absolute top-3/4 -left-4 hover:text-[color:var(--primary-text-color)] duration-300 hover:scale-125"
              >
              <p
                data-aos="fade-right"
                className="text-xl "
              >
                Tailwind
              </p>
              </div>
              <div
                className="cursor-default absolute right-[6%] -bottom-12 hover:text-[color:var(--primary-text-color)] duration-300 hover:scale-125"
              >
              <p
                data-aos="fade-left"
                className="text-xl"
              >
                MongoDB
              </p>
              </div>
              <div
                className="cursor-default absolute right-[30%] top-[8%] hover:text-[color:var(--primary-text-color)] duration-300 hover:scale-125"
              >
              <p
                data-aos="fade-up"
                className="text-xl "
              >
                Git
              </p>
              </div>
              <div
                className="cursor-default absolute bottom-[8%] right-[50%] hover:text-[color:var(--primary-text-color)] duration-300 hover:scale-125"
              >
              <p
                data-aos="fade-up"
                className="text-xl"
              >
                Express
              </p>
              </div>
              <div
                className="cursor-default absolute left-[20%] -bottom-8  hover:text-[color:var(--primary-text-color)] duration-300 hover:scale-125"
              >
              <p
                data-aos="fade-up"
                className="text-xl"
              >
                Github
              </p>
              </div>
              <div
                className="cursor-default absolute  right-[25%] bottom-0 hover:text-[color:var(--primary-text-color)] duration-300 hover:scale-125"
              >
              <p
                data-aos="fade-up"
                className="text-xl"
              >
                Firebase
              </p>
              </div>
            </div>
          </Parallax>
        </ParallaxProvider>
      </Wrapper>
    </section>
  );
}

export default Skill;
