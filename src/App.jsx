import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
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
          style={{
            backgroundImage:
              "linear-gradient(rgba(5, 8, 22, 0.85), rgba(5, 8, 22, 0.8)), url(/assets/Topo-Lines-4.webp), url(/assets/Topo-Lines-4.png)",
          }}
          className="bg-contain bg-bottom bg-no-repeat"
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
        <div className="relative z-0">
          <Works />
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
