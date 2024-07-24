import React, { useState } from "react";
import { LuExternalLink, LuGithub } from "react-icons/lu";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { twMerge } from "tailwind-merge";
import { darkModeAtom } from "../../recoil/atoms/darkModeAtom";

interface IPROPS {
  index: number;
  project: IProjectInfo;
}

const ProjectCard: React.FC<IPROPS> = ({ index, project }) => {
  const [currDescriptionIndx, setCurrDescriptionIndx] = useState(0);
  const isDarkMode = useRecoilValue(darkModeAtom);

  return (
    <div
      className={twMerge(
        "flex items-center justify-center flex-col-reverse group",
        index & 1 ? "md:flex-row-reverse" : "md:flex-row"
      )}
      key={project.id}
      data-aos={"fade-" + (index & 1 ? "left" : "right")}
    >
      <div
        className={twMerge(
          "flex flex-col justify-center basis-1/2 bg-[color:var(--secondary-background-color)] md:bg-transparent p-6 group-hover:translate-y-4 group-hover:duration-500 md:group-hover:translate-y-0 duration-1000 rounded-lg shadow-lg -mt-5 md:mt-0 md:rounded-none md:shadow-none md:p-0",
          index & 1 ? "md:items-end" : "md:items-start"
        )}
      >
        <h2 className="text-2xl font-[550] whitespace-nowrap flex items-center justify-center text-[color:var(--tertiary-text-color)]">
  <img
    src={project.icon}
    className="w-24 h-auto mr-[22px]" // Adjust width and add margin-right (mr-4)
    alt={project.name}
  />
  {project.name}
</h2>

        <div
          className={twMerge(
            "pt-6 md:p-6 md:rounded-lg md:shadow-lg md:bg-[color:var(--secondary-background-color)] text-[color:var(--secondary-text-color)] text-center mt-4",
            index & 1 ? "md:text-right" : "md:text-left"
          )}
        >
          <p className="tracking-wide whitespace-pre-wrap">
            {project.description[currDescriptionIndx]}
          </p>
          <div className="flex items-center justify-center gap-2 mt-5 md:mt-3">
            {project.description.map((_, index) => {
              return (
                <div
                  key={index}
                  className={twMerge(
                    "h-1.5 bg-[color:var(--color-primary)] duration-700 rounded-full cursor-pointer aspect-square",
                    index === currDescriptionIndx ? "w-6 " : "w-1.5"
                  )}
                  onClick={() => setCurrDescriptionIndx(index)}
                ></div>
              );
            })}
          </div>
        </div>
        <ul className="flex items-center gap-4 mt-6 text-[color:var(--secondary-text-color)] justify-center md:mt-5">
          {project.techStack.map((tech) => {
            return (
              <li
                key={tech}
                className="duration-1000 hover:scale-110 hover:text-[color:var(--primary-text-color)] hover:duration-300 text-sm cursor-default"
              >
                {tech}
              </li>
            );
          })}
        </ul>
        <div className="flex items-center justify-center gap-4 mt-4 text-[color:var(--secondary-text-color)]">
          <Link
            to={project.githubLink}
            aria-label={`${project.name} project github Link`}
            target="_blank"
          >
            <LuGithub className="text-xl hover:text-[color:var(--primary-text-color)] hover:scale-125 duration-1000 hover:duration-300" />
          </Link>
          <Link
            to={project.liveLink}
            aria-label={`${project.name} project live Link`}
            target="_blank"
          >
            <LuExternalLink className="text-xl hover:text-[color:var(--primary-text-color)] hover:scale-125 duration-1000 hover:duration-300" />
          </Link>
        </div>
      </div>
      <div
        className={twMerge(
          "relative basis-1/2 aspect-video shadow-md rounded-sm  -z-10 group-hover:-translate-y-4 group-hover:duration-1000 md:group-hover:-translate-y-0 duration-1000",
          index & 1
            ? " md:-mr-28 md:group-hover:-translate-x-10"
            : "md:-ml-28 md:group-hover:translate-x-10"
        )}
      >
        <img
          src={isDarkMode ? project.imgUrl.dark : project.imgUrl.light}
          className="object-cover object-top w-full h-full duration-500 border-4 border-[color:var(--primary-background-color)] rounded-sm "
          alt=""
        />
        {/* <div
          className={twMerge(
            "absolute top-0 rounded-md -z-30 scale-[1.04] left-0 w-[calc(100%+0px)] h-[calc(100%+0px)] bg-[#ff2d75] ",
            index & 1 ? "-rotate-6" : "rotate-6"
          )}
        ></div> */}
      </div>
    </div>
  );
};

export default ProjectCard;
