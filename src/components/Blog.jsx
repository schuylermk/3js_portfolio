import { collection, getDocs } from "firebase/firestore";
import { motion } from "framer-motion";
import Markdown from "markdown-to-jsx";
import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import { db } from "../firebase";
import SectionWrapper from "../hoc/SectionWrapper";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      const querySnapshot = await getDocs(collection(db, "Snoop Blog"));
      const postsData = querySnapshot.docs.map((doc) => doc.data());
      setPosts(postsData);
    };

    fetchPosts();
  }, []);

  const openModal = (post) => {
    setSelectedPost(post);
  };

  const closeModal = () => {
    setSelectedPost(null);
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>
          Latest articles and insights
        </p>
        <h2 className={`${styles.sectionHeadText}`}>Blog.</h2>
      </motion.div>

      <Link to="/editor">
        <button className="w-fit rounded-xl bg-violet-500 px-6 py-2 font-semibold text-white shadow-md shadow-primary outline-none">
          Web <i>Your Own</i> &nbsp;Log &nbsp;;)
        </button>
      </Link>

      <section id="blog-section" className="mx-auto my-10 max-w-7xl">
        <div className="grid gap-6 sm:grid-cols-2">
          {posts.map((post, index) => (
            <div key={index} className="rounded-lg border p-6 shadow-md">
              <h3 className="mb-2 text-2xl font-semibold">{post.title}</h3>
              <p>{post.content.substring(0, 80)}...</p>
              <button
                onClick={() => openModal(post)}
                className="mt-2 rounded bg-blue-500 px-4 py-2 text-white"
              >
                Read on...
              </button>
            </div>
          ))}
        </div>
      </section>

      {selectedPost && (
        <Modal
          isOpen={!!selectedPost}
          onRequestClose={closeModal}
          contentLabel="Blog Post"
          className="modal"
          overlayClassName="overlay"
        >
          <h2>{selectedPost.title}</h2>
          <Markdown>{selectedPost.content}</Markdown>
          <button
            onClick={closeModal}
            className="mt-4 rounded bg-red-500 px-4 py-2 text-white"
          >
            Close
          </button>
        </Modal>
      )}
    </>
  );
};

export default SectionWrapper(Blog, "blog");
