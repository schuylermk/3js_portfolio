import { BrowserRouter } from "react-router-dom";
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

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="topo-bg bg-contain bg-bottom bg-no-repeat">
          <Navbar />
          <Hero />
        </div>
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
      </div>
    </BrowserRouter>
  );
};

export default App;
