import { useEffect, useRef, useState } from "react";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import ScrollProgress from "../UI/scrollProgress";
import Wrapper from "../Wrapper/wrapper";

const NAVBAR_MENU = [
  {
    id: 1,
    name: "home",
    to: "/#home",
  },
  {
    id: 2,
    name: "about",
    to: "/#about",
  },
  {
    id: 3,
    name: "projects",
    to: "/#projects",
  },
  {
    id: 4,
    name: "contact",
    to: "/#contact",
  },
];

function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("home");
  const sections = useRef<NodeListOf<HTMLElement>>();

  const handleScroll = () => {
    const pageYOffset = window.pageYOffset;

    let newActiveSection = "";

    sections.current?.forEach((section) => {
      // positionof each sections from top
      const sectionOffsetTop = section.offsetTop;

      // height of each section
      const sectionHeight = section.offsetHeight;

      // 50 subtracted from sectionOffsetTop and sectionHeight to make the active section change a little before the section is reached
      if (
        pageYOffset >= sectionOffsetTop - 50 &&
        pageYOffset < sectionOffsetTop + sectionHeight - 50
      ) {
        newActiveSection = section.id;
      }
    });
    setActiveSection(newActiveSection);
  };

  useEffect(() => {
    sections.current = document.querySelectorAll("[data-section]");
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [toggle, setToggle] = useState(false);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "end",
    });
  };

  return (
    <>
      <nav className="flex flex-col items-center justify-between shadow text-[--tertiary-text-color] fixed top-0 w-full z-10 bg-[color:var(--secondary-background-color)]">
        <ScrollProgress />
        <Wrapper>
          <section className="flex items-center justify-between w-full">
            <Link
              aria-label="Umair Saad Portfolio"
              to="/"
              className="flex gap-2 py-5 px-2 md:px-4 md:py-6 hover:text-[color:var(--primary-text-color)] duration-300 "
            >
              <h1 className="font-[650] tracking-wider text-xl lg:text-2xl">
                <span className="text-[color:var(--primary-text-color)] text-xl lg:text-2xl">
                  &lt;US/&gt;
                </span>
                &nbsp; UMAIR SAAD
              </h1>
            </Link>
            {/* For Screens greater than 640px */}
            <div className="hidden sm:flex">
              <div className=" flex items-center gap-4 md:gap-0 lg:gap-8 font-[650] tracking-wider text-md ">
                {NAVBAR_MENU.map((menu) => {
                  return (
                    <Link
                      aria-label={menu.name}
                      key={menu.id}
                      to={menu.to}
                      className={twMerge(
                        "py-5 px-2 md:px-4 md:py-6 hover:text-[color:var(--primary-text-color)] duration-300 group ",
                        activeSection === menu.name
                          ? "text-[color:var(--primary-text-color)]"
                          : ""
                      )}
                      onClick={() => scrollToSection(menu.name)}
                    >
                      <span
                        className={twMerge(
                          "group-hover:visible",
                          activeSection === menu.name ? "visible" : "invisible"
                        )}
                      >
                        &lt;
                      </span>
                      {menu.name.toUpperCase()}
                      <span
                        className={twMerge(
                          "group-hover:visible",
                          activeSection === menu.name ? "visible" : "invisible"
                        )}
                      >
                        &gt;
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
            {/* For Screens less than 640px */}
            <div className="sm:hidden">
              <button
                className="px-2 py-5 md:px-4 md:py-6"
                aria-label={toggle ? "show drop menu" : "hide drop menu"}
                onClick={() => setToggle(!toggle)}
              >
                {toggle ? (
                  <RxCross2 className="text-[24px]" />
                ) : (
                  <RxHamburgerMenu className="text-[24px]" />
                )}
              </button>
            </div>
          </section>
          <section className="w-full sm:hidden">
            {toggle ? (
              <div className="list-none flex flex-col items-center justify-center font-[650] tracking-wider text-md w-full border-t py-4">
                {NAVBAR_MENU.map((menu) => {
                  return (
                    <Link
                      key={menu.id}
                      to={menu.to}
                      aria-label={menu.name}
                      className={twMerge(
                        "py-4 w-full flex items-start justify-center px-2 hover:text-[color:var(--primary-text-color)] duration-300 ",
                        activeSection === menu.name
                          ? "text-[color:var(--primary-text-color)]"
                          : ""
                      )}
                      onClick={() => {
                        setToggle(!toggle);
                        scrollToSection(menu.name);
                      }}
                    >
                      <span
                        className={twMerge(
                          "group-hover:visible",
                          activeSection === menu.name ? "visible" : "invisible"
                        )}
                      >
                        &lt;
                      </span>
                      {menu.name.toUpperCase()}
                      <span
                        className={twMerge(
                          "group-hover:visible",
                          activeSection === menu.name ? "visible" : "invisible"
                        )}
                      >
                        &gt;
                      </span>
                    </Link>
                  );
                })}
              </div>
            ) : null}
          </section>
        </Wrapper>
      </nav>
    </>
  );
}

export default Navbar;
