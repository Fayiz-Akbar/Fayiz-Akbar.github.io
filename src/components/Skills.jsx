import React from "react";
import { motion } from "framer-motion";
import { 
  FaHtml5, FaCss3Alt, FaReact, FaPython, FaLaravel, 
  FaNodeJs, FaDocker, FaBootstrap, FaRobot, FaGitAlt, FaGithub, FaBrain
} from "react-icons/fa";
import { 
  SiJavascript, SiMongodb, SiSqlite, SiMysql, 
  SiTailwindcss, SiPostgresql, SiFlutter, SiDart,
  SiExpress, SiVite, SiFigma, SiPostman,
  SiSupabase, SiVercel, SiNetlify, SiCloudflare, SiRender
} from "react-icons/si";
import { FiDatabase, FiLayout, FiServer, FiSmartphone, FiTool, FiCpu } from "react-icons/fi";

const Skills = () => {
  // Data Skills yang sudah dikategorikan
  const skillCategories = [
    {
      category: "Frontend Development",
      icon: <FiLayout className="text-blue-500" size={24} />,
      skills: [
        { name: "React.js", icon: <FaReact className="text-[#61DAFB]" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#38B2AC]" /> },
        { name: "Vite", icon: <SiVite className="text-[#646CFF]" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
        { name: "Bootstrap", icon: <FaBootstrap className="text-[#7952B3]" /> },
        { name: "HTML & CSS", icon: <FaHtml5 className="text-[#E34F26]" /> },
      ]
    },
    {
      category: "Backend Development",
      icon: <FiServer className="text-purple-500" size={24} />,
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" /> },
        { name: "Express.js", icon: <SiExpress className="text-slate-700" /> },
        { name: "Laravel", icon: <FaLaravel className="text-[#FF2D20]" /> },
        { name: "Python", icon: <FaPython className="text-[#3776AB]" /> },
      ]
    },
    {
      category: "Database & Storage",
      icon: <FiDatabase className="text-green-500" size={24} />,
      skills: [
        { name: "PostgreSQL", icon: <SiPostgresql className="text-[#336791]" /> },
        { name: "Supabase", icon: <SiSupabase className="text-[#3ECF8E]" /> },
        { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
        { name: "SQLite", icon: <SiSqlite className="text-[#003B57]" /> },
      ]
    },
    {
      category: "AI & Machine Learning",
      icon: <FiCpu className="text-red-500" size={24} />,
      skills: [
        { name: "Machine Learning", icon: <FaRobot className="text-rose-500" /> },
        { name: "Deep Learning", icon: <FaBrain className="text-pink-500" /> },
        { name: "RAG - LLM", icon: <FiDatabase className="text-orange-500" /> },
      ]
    },
    {
      category: "Mobile Development",
      icon: <FiSmartphone className="text-cyan-500" size={24} />,
      skills: [
        { name: "Flutter", icon: <SiFlutter className="text-[#02569B]" /> },
        { name: "Dart", icon: <SiDart className="text-[#0175C2]" /> },
      ]
    },
    {
      category: "DevOps & Tools",
      icon: <FiTool className="text-slate-500" size={24} />,
      skills: [
        { name: "Docker", icon: <FaDocker className="text-[#2496ED]" /> },
        { name: "Git", icon: <FaGitAlt className="text-[#F05032]" /> },
        { name: "GitHub", icon: <FaGithub className="text-slate-800" /> },
        { name: "Cloudflare", icon: <SiCloudflare className="text-[#F38020]" /> },
        { name: "Vercel", icon: <SiVercel className="text-black" /> },
        { name: "Netlify", icon: <SiNetlify className="text-[#00C7B7]" /> },
        { name: "Render", icon: <SiRender className="text-[#46E3B7]" /> },
        { name: "Figma", icon: <SiFigma className="text-[#F24E1E]" /> },
        { name: "Postman", icon: <SiPostman className="text-[#FF6C37]" /> },
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section id="skills" className="py-24 bg-white relative overflow-hidden">
      {/* Background Ornament */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-blue-50 rounded-full blur-3xl opacity-60 -translate-x-1/2"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold text-[#183758] font-poppins mb-3">
            Tech Stack
          </h2>
          <div className="w-16 h-1.5 bg-gradient-to-r from-blue-300 to-cyan-800 mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-500 font-opensans max-w-2xl mx-auto">
            Teknologi dan *tools* yang saya gunakan sehari-hari untuk membangun solusi digital yang tangguh, terukur, dan cerdas.
          </p>
        </motion.div>

        {/* Grid Kategori (BERUBAH MENJADI 2 KOLOM DI HP) */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-[#f8f9fa] rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-slate-100 shadow-sm hover:shadow-[0_15px_30px_rgba(24,55,88,0.08)] transition-all duration-300"
            >
              {/* Header Kategori */}
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 pb-3 sm:pb-4 border-b border-slate-200/60">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-lg flex items-center justify-center shadow-sm flex-shrink-0">
                  <span className="scale-75 sm:scale-100">{category.icon}</span>
                </div>
                <h3 className="text-xs sm:text-lg font-bold text-[#183758] font-poppins leading-tight">
                  {category.category}
                </h3>
              </div>

              {/* List Skills di dalam Kategori (Fleksibel & proporsional untuk 2 Kolom) */}
              <div className="flex flex-wrap gap-1.5 sm:gap-3">
                {category.skills.map((skill, idx) => (
                  <div 
                    key={idx}
                    className="flex items-center gap-1 sm:gap-2 bg-white px-2 py-1.5 rounded-lg border border-slate-100 shadow-sm hover:border-blue-200 hover:bg-blue-50/50 transition-colors cursor-default group"
                  >
                    <span className="text-sm sm:text-lg group-hover:scale-110 transition-transform flex-shrink-0">{skill.icon}</span>
                    <span className="text-[10px] sm:text-sm font-semibold text-slate-600 font-opensans">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;