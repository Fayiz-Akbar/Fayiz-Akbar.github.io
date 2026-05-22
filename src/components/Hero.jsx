import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { 
  FaLinkedin, FaGithub, FaInstagram, FaEnvelope, 
  FaHtml5, FaCss3Alt, FaReact, FaPython, FaLaravel, 
  FaNodeJs, FaDocker, FaBootstrap, FaRobot, FaNetworkWired 
} from "react-icons/fa";
import { 
  SiJavascript, SiMongodb, SiSqlite, SiMysql, 
  SiTailwindcss, SiPostgresql, SiFlutter, SiDart,
  SiExpress, SiVite // Tambahan icon Express dan Vite
} from "react-icons/si";

const Hero = () => {
  // Data Tech Stack (Sudah ditambah Express & Vite)
  const techStack = [
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3Alt /> },
    { name: "JAVASCRIPT", icon: <SiJavascript /> },
    { name: "REACT.JS", icon: <FaReact /> },
    { name: "VITE", icon: <SiVite /> },
    { name: "PYTHON", icon: <FaPython /> },
    { name: "LARAVEL", icon: <FaLaravel /> },
    { name: "EXPRESS.JS", icon: <SiExpress /> },
    { name: "NODE.JS", icon: <FaNodeJs /> },
    { name: "MONGODB", icon: <SiMongodb /> },
    { name: "SQLITE", icon: <SiSqlite /> },
    { name: "MYSQL", icon: <SiMysql /> },
    { name: "POSTGRESQL", icon: <SiPostgresql /> },
    { name: "MACHINE LEARNING", icon: <FaRobot /> },
    { name: "DOCKER", icon: <FaDocker /> },
    { name: "TAILWIND", icon: <SiTailwindcss /> },
    { name: "FLUTTER", icon: <SiFlutter /> },
    { name: "DART", icon: <SiDart /> },
    { name: "BOOTSTRAP", icon: <FaBootstrap /> },
    { name: "IoT", icon: <FaNetworkWired /> },
  ];

  return (
    <section id="home" className="relative min-h-screen bg-[#f8f9fa] pt-32 flex flex-col justify-between overflow-hidden">
      
      {/* Kontainer Utama Hero (Diubah ke max-w-6xl agar lebih lebar tapi tetap rapi) */}
      <div className="max-w-6xl mx-auto px-6 lg:px-8 flex-grow flex flex-col-reverse lg:flex-row items-center justify-between gap-12 pb-20">
        
        {/* Kolom Teks */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 text-center lg:text-left z-10"
        >
          <p className="text-lg md:text-xl text-slate-500 font-semibold mb-2 font-opensans tracking-wide uppercase">
            Halo, Saya
          </p>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-[#183758] mb-2 leading-tight font-poppins tracking-tighter">
            Fayiz Akbar <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-800">Daifullah</span>
          </h1>
          
          {/* Teks Typewriter Besar */}
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6 font-poppins h-[40px] md:h-[50px]">
            <Typewriter
              words={['Fullstack Developer', 'AI Developer']}
              loop={true}
              cursor
              cursorStyle='|'
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </h2>

          <p className="text-base md:text-lg text-slate-600 mb-8 max-w-xl mx-auto lg:mx-0 font-opensans leading-relaxed">
            Saya membangun aplikasi web modern yang responsif dengan antarmuka yang bersih, serta memadukan keahlian <span className="font-semibold text-[#183758]">Machine Learning</span> hingga <span className="font-semibold text-[#183758]">Deep Learning</span> untuk menciptakan solusi cerdas yang berdampak nyata.
          </p>
          
          {/* Tombol CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
            <a href="#projects" className="w-full sm:w-auto bg-[#183758] text-white px-8 py-3.5 rounded-full font-bold hover:bg-blue-700 hover:-translate-y-1 transition-all duration-300 shadow-[0_10px_20px_rgba(24,55,88,0.2)]">
              Explore My Projects
            </a>
            <a href="/CV_Fayiz.pdf" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto border-2 border-[#183758] text-[#183758] px-8 py-3.5 rounded-full font-bold hover:bg-[#183758] hover:text-white hover:-translate-y-1 transition-all duration-300">
              Download CV
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center lg:justify-start gap-6">
            <a href="https://www.linkedin.com/in/fayiz-akbar-daifullah" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-[#0A66C2] hover:-translate-y-1 transition-all duration-300" aria-label="LinkedIn">
              <FaLinkedin size={28} />
            </a>
            <a href="https://github.com/fayiz-akbar" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-black hover:-translate-y-1 transition-all duration-300" aria-label="GitHub">
              <FaGithub size={28} />
            </a>
            <a href="https://www.instagram.com/faayyiz" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-[#E4405F] hover:-translate-y-1 transition-all duration-300" aria-label="Instagram">
              <FaInstagram size={28} />
            </a>
            <a href="mailto:fayizakbar26@gmail.com" className="text-slate-400 hover:text-red-500 hover:-translate-y-1 transition-all duration-300" aria-label="Email">
              <FaEnvelope size={28} />
            </a>
          </div>
        </motion.div>

        {/* Kolom Gambar Profil */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex-1 flex justify-center relative"
        >
          {/* Latar Belakang Abstrak */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-[380px] md:h-[380px] bg-blue-300 rounded-full blur-3xl opacity-40 z-0"></div>
          
          {/* Foto Profil Lingkaran dengan Efek Melayang */}
          <motion.img 
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            src="/image/fayiz.jpg" 
            alt="Fayiz Akbar Daifullah" 
            className="w-64 h-64 md:w-[350px] md:h-[350px] object-cover rounded-full border-[10px] border-white shadow-[0_20px_50px_rgba(24,55,88,0.15)] z-10 relative"
          />
        </motion.div>
      </div>

      {/* Marquee Custom Dioptimasi */}
      <div className="w-full bg-[#0a0a0a] py-5 border-t border-b border-gray-800 overflow-hidden flex whitespace-nowrap">
        <motion.div
          animate={{ x: ["0%", "-33.33%"] }} // Logic persentase yang jauh lebih stabil
          transition={{ ease: "linear", duration: 30, repeat: Infinity }}
          className="flex items-center w-max"
        >
          {[...techStack, ...techStack, ...techStack].map((tech, index) => (
            <div key={index} className="flex items-center gap-3 mx-8 text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">
              <span className="text-2xl">{tech.icon}</span>
              <span className="font-poppins font-bold text-sm md:text-base tracking-widest uppercase">
                {tech.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

    </section>
  );
};

export default Hero;