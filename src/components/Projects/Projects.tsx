import Wrapper from "../Wrapper/wrapper";
import ProjectCard from "./ProjectCard";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import { PROJECTS } from "../../data/projectDetails";

import Bubbles from "../Bubbles/Bubbles";

function Projects() {

  useEffect(() => {
    AOS.init({ duration: 700 });
    AOS.refresh();
  }, []);

  return (
    <section data-section className="pt-24 mt-36" id="projects">
      <Wrapper>
        <div
          className="flex flex-col items-center justify-center px-8 header"
          data-aos="fade-in"
        >
          <h1 className="text-[color:var(--color-primary)] text-3xl font-bold mb-2 text-center tracking-wide">
            PROJECTS
          </h1>
          <div className="h-[0.30rem] w-10 bg-[color:var(--color-primary)] rounded-full"></div>
        </div>
        <div className="flex flex-col items-center justify-center gap-24 mt-16 ">
          {PROJECTS.map((project, index) => {
            return <ProjectCard key={index} index={index} project={project} />;
          })}
        </div>
      </Wrapper>
      <Bubbles yStart={200} yEnd={-3000} />
    </section>
  );
}

export default Projects;
