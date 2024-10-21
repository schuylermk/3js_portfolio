// Blog.jsx
import { motion } from "framer-motion";
import React from "react";
import { blogPosts } from "../constants";
import SectionWrapper from "../hoc/SectionWrapper";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const Blog = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>
          Latest articles and insights
        </p>
        <h2 className={`${styles.sectionHeadText}`}>Blog.</h2>
      </motion.div>

      <section id="blog-section" className="mx-auto my-10 max-w-7xl">
        <div className="grid gap-6 sm:grid-cols-2">
          {blogPosts.map((post) => (
            <div key={post.id} className="rounded-lg border p-6 shadow-md">
              <h3 className="mb-2 text-2xl font-semibold">{post.title}</h3>
              <p className="mb-4 text-sm text-gray-500">{post.date}</p>
              <p>{post.content}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default SectionWrapper(Blog, "blog");
