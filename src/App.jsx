import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  About,
  Blog,
  Contact,
  Experience,
  Hero,
  Navbar,
  StarsCanvas,
  Tech,
  Works,
} from "./components";
import { MarkdownEditorPage } from "./pages/";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="topo-bg bg-contain bg-bottom bg-no-repeat">
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<MainLayout />} />
          <Route path="/editor" element={<MarkdownEditorPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

const MainLayout = () => {
  return (
    <>
      <Hero />
      <About />
      <div className="relative z-0">
        <Experience />
        <StarsCanvas />
      </div>
      <Tech />
      <div className="relative z-0">
        <Works />
        <Contact />
        <StarsCanvas />
        <Blog />
      </div>
    </>
  );
};

export default App;
