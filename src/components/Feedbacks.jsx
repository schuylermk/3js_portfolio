import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="w-full rounded-3xl bg-black-200 p-10 xs:w-[320px]"
  >
    <p className="text-xl font-medium italic leading-none text-white">
      "
      <span className="mx-2 text-[18px] not-italic tracking-wide text-white">
        {testimonial}
      </span>
      "
    </p>
    <div className="mt-7 flex items-center justify-between gap-1">
      <div className="flex flex-1 flex-col">
        <p className="font-medium text-[16-px] text-white">
          <span className="blue-text-gradient">@</span>
          {name}
        </p>
        <p className="mt-1 text-[12px] text-secondary">
          {designation} of {company}
        </p>
      </div>

      <img
        src={image}
        alt={`feedback-by-${name}`}
        className="h-10 w-10 rounded-full object-cover"
      />
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <>
      <div className={`mt-12 rounded-[20px]`}>
        <div
          className={`bg-tertiary ${styles.padding} min-h-[200px] rounded-2xl xs:min-h-[225px] sm:min-h-[275px] md:min-h-[300px]`}
        >
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>Colleagues have said</p>
            <h2 className={styles.sectionHeadText}>Referrals.</h2>
          </motion.div>
        </div>
        <div className={`${styles.paddingX} -mt-20 flex flex-wrap gap-7 pb-14`}>
          {testimonials.map((testimonial, index) => (
            <FeedbackCard
              key={testimonial.name}
              index={index}
              {...testimonial}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Feedbacks, "");
