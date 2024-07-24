import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { twMerge } from "tailwind-merge";
import TypewriterComponent from "typewriter-effect";
import { ABOUT_ME } from "../../data/about";
import CONTACTS from "../../data/contact";
import { darkModeAtom } from "../../recoil/atoms/darkModeAtom";
import "../../styles.css";
import Bubbles from "../Bubbles/Bubbles";
import Wrapper from "../Wrapper/wrapper";

function Home() {
  const isDarkMode = useRecoilValue(darkModeAtom);

  useEffect(() => {
    AOS.init({ duration: 1000 });
    AOS.refresh();
  }, []);

  return (
    <>
      <Wrapper>
        <section
          data-section
          id="home"
          className="relative flex min-h-[580px] items-center justify-between px-4 pt-32 md:pt-8 md:px-8 md:h-screen  md:min-h-[800px]"
          data-aos="fade-down"
        >
          <div
            className={twMerge(
              "flex flex-col items-start justify-center cursor-default ",
              isDarkMode ? "text-slate-700" : "text-gray-300"
            )}
          >
            <p className="text-sm duration-1000 hover:translate-x-5 hover:duration-300 hover:scale-110">
              &lt;html&gt;
            </p>
            <p className="px-3 mt-1 text-sm duration-1000 hover:translate-x-5 hover:duration-300 hover:scale-110">
              &lt;body&gt;
            </p>
            <p className="px-6 mt-4 text-sm duration-1000 hover:translate-x-5 hover:duration-300 hover:scale-110">
              &lt;h1&gt;
            </p>
            <div className="flex flex-col mt-2 px-9">
              <h1 className="text-4xl font-semibold tracking-wider duration-1000 sm:text-5xl hover:translate-x-8 hover:duration-300 hover:scale-110 drop-shadow-lg shadow-black text-[color:var(--tertiary-text-color)]">
                Hello
                <br />
              </h1>
              <h1 className="mt-2 text-4xl font-semibold tracking-wider duration-1000 sm:text-5xl hover:translate-x-8 hover:duration-300 hover:scale-110 drop-shadow-lg shadow-black text-[color:var(--tertiary-text-color)] ">
                I'm{" "}
                <span className="text-[color:var(--primary-text-color)] text-4xl  sm:text-5xl font-semibold ">
                  {ABOUT_ME.name}
                </span>
                ,
              </h1>
            </div>
            <p className="px-6 mt-2 text-sm duration-1000 hover:translate-x-5 hover:duration-300 hover:scale-110">
              &lt;/h1&gt;
            </p>
            <p className="px-6 mt-2 text-sm duration-1000 hover:translate-x-5 hover:duration-300 hover:scale-110">
              &lt;/h3&gt;
            </p>
            <div className="flex pt-2 text-3xl font-semibold tracking-wider duration-1000 lg:max-w-lg pl-9 hover:translate-x-8 hover:duration-300 hover:scale-105 text-[color:var(--tertiary-text-color)]">
              I'm&nbsp;
              <TypewriterComponent
                options={{
                  strings: ABOUT_ME.skills,
                  autoStart: true,
                  delay: 100,
                  loop: true,
                  cursorClassName:
                    " text-3xl text-[color:var(--primary-text-color)] ",
                  wrapperClassName:
                    "text-[color:var(--primary-text-color)] text-3xl sm:text-3xl font-semibold drop-shadow-lg shadow-black",
                }}
              />
            </div>
            <p className="px-6 mt-1.5 text-sm  duration-1000 hover:translate-x-5 hover:duration-300 hover:scale-110">
              &lt;/h3&gt;
            </p>
            <p className="px-3 mt-2 text-sm duration-1000 hover:translate-x-5 hover:duration-300 hover:scale-110">
              &lt;button&gt;
            </p>
            {/* <Link
              aria-label="Resume"
              to={ABOUT_ME.resumeLink}
              target="_blank"
              className=" border-[--primary-text-color] border-2 px-6 py-2 font-semibold mx-9 mt-2 text-[color:var(--primary-text-color)] hover:bg-[color:var(--primary-text-color)] hover:text-white duration-1000 hover:translate-x-8 hover:duration-300 hover:scale-110 drop-shadow-lg shadow-black"
            >
              SEE MY RESUME
            </Link> */}
            <div className="flex gap-4 mt-2 mx-9">
              {CONTACTS.map((contact) => {
                return (
                  <Link
                    key={contact.id}
                    to={contact.link}
                    aria-label={contact.name}
                    className="p-1.5 rounded-full  hover:scale-110 duration-1000 hover:duration-300 active:scale-95 hover:translate-x-2"
                  >
                    {/* 3 logos */}
                    <img
                      src={
                        isDarkMode && contact.icon_dark
                          ? contact.icon_dark
                          : contact.icon
                      }
                      className={twMerge(
                        "w-7",
                        isDarkMode ? contact.className : ""
                      )}
                      alt=""
                    />
                  </Link>
                );
              })}
            </div>
            <p className="px-3 mt-2 text-sm duration-1000 hover:translate-x-5 hover:duration-300 hover:scale-110">
              &lt;/button&gt;
            </p>
            <p className="px-3 mt-4 text-sm duration-1000 hover:translate-x-5 hover:duration-300 hover:scale-110">
              &lt;/body&gt;
            </p>
            <p className="mt-1 text-sm duration-1000 hover:translate-x-5 hover:duration-300 hover:scale-110">
              &lt;/html&gt;
            </p>
          </div>
          <div className="absolute h-10 w-6 border-2 border-[color:var(--tertiary-text-color)]  rounded-3xl bottom-14 translate-x-[50%] right-[50%] hidden md:flex items-start justify-center">
            <div className="w-1.5 my-1 bg-[color:var(--tertiary-text-color)] rounded-full aspect-square mouse"></div>
          </div>
          <div className="absolute overflow-hidden change aspect-auto h-96 hidden sm:flex sm:w-[200px]  md:w-[240px] right-0 lg:w-[400px]  items-center justify-center xl:w-[480px] mb-12">
            <img
              src={ABOUT_ME.image}
              alt=""
              className="object-cover object-top w-full h-full"
              // data-aos="fade-down"
            />
          </div>
        </section>
      </Wrapper>
      <Bubbles yStart={300} yEnd={-1100} />
    </>
  );
}

export default Home;
