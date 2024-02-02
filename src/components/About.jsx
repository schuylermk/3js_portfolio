import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="w-full xs:w-[250px]">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className=" green-pink-gradient w-full rounded-[20px] p-[1px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="flex min-h-[280px] flex-col items-center justify-evenly rounded-[20px] bg-tertiary px-12 py-5 "
      >
        <img
          src={icon}
          alt="web-development"
          className="h-16 w-16 object-contain"
        />

        <h3 className="text-center text-[20px] font-bold text-white">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 max-w-6xl text-[17px] leading-[30px] text-secondary"
      >
        I'm a skilled web developer with experience in{" "}
        <span className="text-slate-100 [word-spacing:4px]">
          JavaScript and TypeScript
        </span>
        , frameworks like{" "}
        <span className="text-slate-100 [word-spacing:4px]">
          Angular, React, Node.js, Three.js, etc.
        </span>
        , and have always welcomed opportunities to go deeper down the stack –
        digging into areas of codebases written in{" "}
        <span className="text-slate-100 [word-spacing:4px]">
          C#, .NET, SQL, Python
        </span>
        , and other languages. I'm a quick and enthusiastic learner who loves
        collaborating closely with clients, stakeholders, and teammates to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together!
      </motion.p>
      <div className="mx-auto mt-20 flex max-w-4xl flex-wrap justify-center gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "About");
