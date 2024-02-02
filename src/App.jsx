import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div
          className="
         bg- hero- pattern
         bg-cover bg-center bg-no-repeat"
        >
          <Navbar />
          <Hero />
        </div>
        <About />
        <div className="relative z-0">
          <Experience />
          <StarsCanvas />
        </div>
        <Tech />
        <Works />
        <div className="relative z-0">
          <Feedbacks />
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
