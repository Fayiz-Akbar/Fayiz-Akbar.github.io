import React from "react";
import { motion } from "framer-motion";
import { FiMonitor, FiCpu, FiShield, FiWifi } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { GitHubCalendar } from "react-github-calendar";

const About = () => {
  // Data Bento Box
  const bentoCards = [
    {
      icon: <FiMonitor className="text-blue-500" size={22} />,
      title: "Frontend & UI/UX",
      desc: "Menciptakan antarmuka visual yang interaktif, responsif, dan sangat fungsional.",
    },
    {
      icon: <FiCpu className="text-purple-500" size={22} />,
      title: "AI & Machine Learning",
      desc: "Eksplorasi arsitektur Deep Learning dan RAG-LLM untuk solusi komputasi cerdas.",
    },
    {
      icon: <FiShield className="text-red-500" size={22} />,
      title: "Cyber Security",
      desc: "Mempelajari praktik keamanan sistem informasi, kriptografi, dan manajemen kata sandi.",
    },
    {
      icon: <FiWifi className="text-green-500" size={22} />,
      title: "Internet of Things",
      desc: "Mengeksplorasi infrastruktur jaringan dan cara kerja komunikasi fundamental antar perangkat.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Ornamen Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/3"></div>
      
      <div className="max-w-5xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl font-extrabold text-[#183758] font-poppins mb-3">
            Tentang Saya
          </h2>
          <div className="w-16 h-1.5 bg-gradient-to-r from-blue-300 to-cyan-800 mx-auto rounded-full"></div>
        </motion.div>

        {/* Layout Grid Teks & Bento Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          
          {/* Kolom Kiri: Teks Narasi */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            <p className="text-base text-slate-600 font-opensans leading-relaxed">
              Saya adalah mahasiswa <span className="font-semibold text-[#183758]">Teknik Informatika di Universitas Lampung</span>. Saya senang mengubah barisan kode yang rumit menjadi antarmuka visual yang sederhana dan fungsional.
            </p>
            <p className="text-base text-slate-600 font-opensans leading-relaxed">
              Sebagai Fullstack Developer dan AI Engineer, fokus saya tidak hanya pada web tradisional. Saya aktif merancang sistem cerdas dan mengeksplorasi teknologi Machine Learning untuk memecahkan masalah nyata.
            </p>
            <p className="text-base text-slate-600 font-opensans leading-relaxed">
              Saya memiliki rasa ingin tahu yang tinggi terhadap cara kerja fundamental suatu teknologi, terbiasa bekerja secara kolaboratif dalam tim, dan selalu antusias membangun solusi yang berdampak.
            </p>
          </motion.div>

          {/* Kolom Kanan: Bento Box Grid */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {bentoCards.map((card, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                whileHover={{ y: -3, scale: 1.02 }}
                className="bg-[#f8f9fa] p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-[0_15px_30px_rgba(24,55,88,0.06)] transition-all duration-300 group"
              >
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center mb-3 shadow-sm group-hover:scale-110 transition-transform duration-300">
                  {card.icon}
                </div>
                <h3 className="text-lg font-bold text-[#183758] font-poppins mb-1.5">
                  {card.title}
                </h3>
                <p className="text-sm text-slate-500 font-opensans leading-relaxed">
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* --- SECTION GITHUB CONTRIBUTION CALENDAR --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 bg-[#f8f9fa] p-6 rounded-2xl border border-slate-100 shadow-sm"
        >
          {/* Header Kalender */}
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200/60">
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
              <FaGithub className="text-slate-800" size={22} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#183758] font-poppins">
                GitHub Contributions
              </h3>
              <p className="text-xs text-slate-400 font-opensans">
                Aktivitas commit dan kontribusi kode saya yang terhitung di GitHub
              </p>
            </div>
          </div>

          {/* Grafik Kontribusi */}
          <div className="overflow-x-auto pb-2 pt-1 min-w-0 w-full scrollbar-thin scrollbar-thumb-slate-200">
            <div className="min-w-[760px] lg:min-w-full flex justify-center justify-items-center bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
              <GitHubCalendar 
                username="Fayiz-Akbar" 
                blockSize={12}
                blockMargin={4}
                fontSize={13}
                colorScheme="light"
                theme={{
                  light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
                }}
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;