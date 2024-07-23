import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { twMerge } from "tailwind-merge";
import ACHIVEMENTS from "../../data/achievements";
import Bubbles from "../Bubbles/Bubbles";
import Wrapper from "../Wrapper/wrapper";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { darkModeAtom } from "../../recoil/atoms/darkModeAtom";
import "./achievement.styles.css";

function Achievements() {
  const isDarkMode = useRecoilValue(darkModeAtom);
  useEffect(() => {
    AOS.init({ duration: 700 });
    AOS.refresh();
  }, []);
  return (
    <>
      <Wrapper>
        <section data-section id="achievement" className="pt-20">
          <div
            className="flex flex-col items-center justify-center px-8 header"
            data-aos="fade-in"
          >
            <h1 className="text-[color:var(--color-primary)] text-3xl font-bold mb-2 text-center tracking-wide">
              ACHIEVEMENTS
            </h1>
            <div className="h-[0.30rem] w-10 bg-[color:var(--color-primary)] rounded-full"></div>
          </div>
          <div className="my-12">
            <VerticalTimeline
              lineColor={isDarkMode ? "#0078e1" : "#05cbf7"}
              className="pt-16 "
              animate={true}
            >
              {ACHIVEMENTS.map((achieve, index) => {
                return (
                  <VerticalTimelineElement
                    key={achieve.id}
                    className="mb-20 vertical-timeline-element--work"
                    iconClassName="shadow-md shadow-[color:var(--secondary-shadow-color)] "
                    icon={
                      <div className="flex items-center justify-center w-full h-full bg-[color:var(--secondary-background-color)] rounded-full ">
                        <img
                          src={achieve.icon}
                          className="object-center w-6 lgm:w-8 aspect-square"
                          alt="icon"
                        />
                      </div>
                    }
                    contentStyle={{
                      boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <h3
                      className={twMerge(
                        "absolute -top-11 bg-[color:var(--color-primary)] text-white font-semibold px-4 py-1 rounded-full ",
                        index & 1 ? "lgm:left-0" : "lgm:right-0 "
                      )}
                    >
                      {achieve.date}
                    </h3>
                    <div className="mb-2">
                      <h2
                        style={{
                          color: "var(--primary-text-color)",
                          fontWeight: 600,
                          fontSize: "1.5rem",
                          letterSpacing: "0.05rem",
                        }}
                      >
                        {achieve.title}
                      </h2>
                      <h4
                        style={{
                          color: "var(--primary-text-color)",
                          fontWeight: 500,
                          fontSize: "0.9rem",
                          letterSpacing: "0.02rem",
                        }}
                      >
                        {achieve.subTitle}
                      </h4>
                      <p className="text-[color:var(--secondary-text-color)] whitespace-pre-wrap ">
                        {achieve.description}
                      </p>
                      <button
                        className="px-6 py-2 rounded-sm text-sm mt-4 text-white bg-[color:var(--primary-text-color)] font-semibold shadow-md hover:scale-105 duration-1000 hover:duration-300 active:scale-95"
                        aria-label={`${achieve.title} View`}
                        onClick={() => window.open(achieve.link, "_blank")}
                      >
                        VIEW
                      </button>
                    </div>
                  </VerticalTimelineElement>
                );
              })}
            </VerticalTimeline>
          </div>
        </section>
      </Wrapper>
      <Bubbles yStart={200} yEnd={-3000} />
    </>
  );
}

export default Achievements;
