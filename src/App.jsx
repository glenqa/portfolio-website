import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="scroll-smooth">
      <div className="overflow-x-hidden text-neutral-300">
        <div className="fixed top-0 -z-10 h-full w-full">
          <div
            className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 
        [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"
          ></div>
        </div>

        <div className="container mx-auto px-8">
          <Navbar />
          <Intro />
          <About />
          <Technologies />
          <Experience />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
