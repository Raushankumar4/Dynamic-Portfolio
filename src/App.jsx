import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Skills from "./pages/Skills";
import Marque from "./components/Marque";
import LocomotiveScroll from "locomotive-scroll";

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <>
      <Router>
        <div className="bg-[#000000] ">
          <Navbar />
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skill" element={<Skills />} />
          <Route path="/service" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>

      <Marque />
      <About />
      <Skills />
      <Services />
      <Contact />
    </>
  );
};

export default App;
