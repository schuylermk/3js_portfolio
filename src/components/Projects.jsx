import { motion } from "framer-motion";
import React from "react";
import Tilt from "react-parallax-tilt";

import { github } from "../../images";
import { projects } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const Projects = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}></p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="flex w-full">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 max-w-6xl text-[17px] leading-[30px] text-secondary"
        >
          The following projects showcase my skills with some recent
          projects/real-world examples of my work. Each project is briefly
          described with links to github code repositories and live demos. They
          are an attempt to show my ability to solve complex problems, work with
          different technologies, and manage projects effectively.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  live_demo_link,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="w-full rounded-2xl bg-tertiary p-5 sm:w-[360px]"
      >
        <div className="relative h-[230px] w-full">
          <img
            src={image}
            alt="project_image"
            className="h-full w-full rounded-2xl object-cover"
          />
          <div className="card-img_hover absolute inset-0 m-3 flex justify-end">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient flex h-10 w-10 cursor-pointer items-center justify-center rounded-full"
            >
              <img
                src={github}
                alt="source code"
                className="h-1/2 w-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div>
          <a href={live_demo_link} className="cursor-pointer" target="_blank">
            <h3 className="text-[24px] font-bold text-white">{name}</h3>
          </a>
          <p className="mt-2 text-[14px] text-secondary">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

export default SectionWrapper(Projects, "projects");
