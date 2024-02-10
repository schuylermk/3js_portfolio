import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section id="hero-section" className="relative mx-auto h-screen w-full">
      <div
        id="welcome"
        className={`top-30 absolute inset-0 mx-auto max-w-7xl sm:top-28 ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div
          id="purple-pinhead"
          className="mt-5 flex flex-col items-center justify-center "
        >
          <div className="h-4 w-4 rounded-full bg-[#915EFF]" />
          <div className="violet-gradient h-40 w-1 sm:h-80" />
        </div>

        <div id="welcome-text" className="-ml-[1vw] sm:ml-0">
          <h1 className={`${styles.heroHeadText} text-zinc-300`}>
            Hi, I'm <span className="text-[#915EFF] underline">Schuyler</span>.
          </h1>
          <p
            className={`${styles.heroSubText} mt-2 text-zinc-50 [word-spacing:5px]`}
          >
            I develop websites, user-interfaces, 3D-visuals, animations, and
            software applications of all purposes, shapes and sizes.
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div
        id="scroll-y-animation"
        className="absolute bottom-0 flex w-full items-center justify-center"
      >
        <div className="flex h-[64px] w-[35px] items-start justify-center rounded-3xl border-4 border-secondary p-2 ">
          <motion.div
            animate={{
              y: [0, 24, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="mb-1 h-3 w-3 rounded-full bg-secondary"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
