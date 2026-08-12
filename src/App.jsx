import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact"; // Import file contact baru

function App() {
  return (
    <div className="bg-[#f8f9fa] min-h-screen font-opensans overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Projects />
      <Gallery />
      <Contact /> 
    </div>
  );
}

export default App;