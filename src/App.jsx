import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact"; // Import file contact baru

function App() {
  return (
    <div className="bg-[#f8f9fa] min-h-screen font-opensans overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Contact /> 
    </div>
  );
}

export default App;