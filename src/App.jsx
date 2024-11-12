import React, { useEffect } from "react";
import Modal from "react-modal";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import { scroller } from "react-scroll";
import {
  About,
  Blog,
  Contact,
  Experience,
  Hero,
  Navbar,
  Projects,
  StarsCanvas,
  Tech,
} from "./components";
import { MarkdownEditorPage } from "./pages/";

// Set the app element for react-modal for #a11y
Modal.setAppElement("#root");

const App = () => {
  return (
    <Router>
      <div className="relative z-0 bg-primary">
        <div className="topo-bg bg-contain bg-bottom bg-no-repeat">
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<MainLayout />} />
          <Route path="/work" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/editor" element={<MarkdownEditorPage />} />
        </Routes>
      </div>
    </Router>
  );
};

const MainLayout = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      scroller.scrollTo(id, {
        duration: 500,
        delay: 0,
        smooth: "easeInOutQuart",
        offset: -70, // Adjust this value based on your navbar height
      });
    }
  }, [location]);

  return (
    <>
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="experience">
        <div className="relative z-0">
          <Experience />
          <StarsCanvas />
        </div>
      </section>
      <section id="tech">
        <Tech />
      </section>
      <section id="projects">
        <div className="relative z-0">
          <Projects />
          <Contact />
          <StarsCanvas />
          <Blog />
        </div>
      </section>
    </>
  );
};

export default App;
