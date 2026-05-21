import React from "react";
import { motion } from "framer-motion";
import { FiBookOpen, FiAward } from "react-icons/fi";
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  const educationData = [
    {
      icon: <FaGraduationCap className="text-purple-500" size={20} />,
      title: "Teknik Informatika (S1)",
      institution: "Universitas Lampung",
      period: "2023 - 2027",
      description: "Fokus pada Pengembangan Perangkat Lunak dan Kecerdasan Buatan (Machine & Deep Learning).",
      badge: "IPK 3.90",
      badgeColor: "bg-purple-50 text-purple-600 border-purple-100"
    },
    {
      icon: <FiAward className="text-blue-500" size={20} />,
      title: "DBS Foundation Coding Camp 2026",
      institution: "Dicoding Indonesia",
      period: "Februari 2026 - Juni 2026",
      description: "Fokus pada Back-End Development menggunakan JavaScript dan arsitektur cloud.",
      badge: "Bootcamp",
      badgeColor: "bg-blue-50 text-blue-600 border-blue-100"
    },
    {
      icon: <FiBookOpen className="text-orange-500" size={20} />,
      title: "Ilmu Pengetahuan Alam (IPA)",
      institution: "SMA Muhammadiyah 1 Palembang",
      period: "2020 - 2023",
      description: "Mempelajari dasar sains dan matematika sebagai landasan pemikiran logis.",
      badge: "Sains",
      badgeColor: "bg-orange-50 text-orange-600 border-orange-100"
    }
  ];

  return (
    <section id="education" className="py-20 bg-[#f8f9fa] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl font-extrabold text-[#183758] font-poppins mb-3">
            Riwayat Pendidikan
          </h2>
          <div className="w-14 h-1.5 bg-gradient-to-r from-blue-300 to-cyan-800 mx-auto rounded-full"></div>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative max-w-3xl mx-auto">
          
          {/* Garis Tengah */}
          <div className="absolute left-4 sm:left-1/2 top-2 bottom-2 w-0.5 border-l-2 border-dashed border-slate-300 -translate-x-1/2 z-0"></div>

          {/* Render Items */}
          {educationData.map((edu, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={index} className="relative flex flex-col sm:flex-row justify-between items-start sm:items-center w-full mb-8 last:mb-0">
                
                {/* Dot Tengah */}
                <div className="absolute left-4 sm:left-1/2 w-8 h-8 bg-white rounded-full border-4 border-[#183758] shadow-md z-20 -translate-x-1/2 flex items-center justify-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                </div>

                {/* Kiri (Hanya Desktop) */}
                <div className={`hidden sm:block w-[45%] ${isEven ? "text-right" : "opacity-0 pointer-events-none"}`}>
                  {isEven && <EducationCard edu={edu} align="right" />}
                </div>

                {/* Spacer (Hanya Desktop) */}
                <div className="hidden sm:block w-[10%]"></div>

                {/* Kanan (Hanya Desktop) */}
                <div className={`hidden sm:block w-[45%] ${!isEven ? "text-left" : "opacity-0 pointer-events-none"}`}>
                  {!isEven && <EducationCard edu={edu} align="left" />}
                </div>

                {/* Mobile Fallback (Hanya Tampil di HP) */}
                <div className="block sm:hidden w-full pl-14">
                  <EducationCard edu={edu} align="left" />
                </div>

              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

const EducationCard = ({ edu, align }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm hover:shadow-[0_10px_25px_rgba(24,55,88,0.05)] transition-all duration-300"
    >
      <div className={`flex items-center gap-2 mb-1.5 ${align === "right" ? "sm:flex-row-reverse" : "flex-row"}`}>
        <div className="w-8 h-8 bg-slate-50 rounded-lg flex items-center justify-center border border-slate-100 text-sm">
          {edu.icon}
        </div>
        <div>
          <span className={`text-[10px] font-bold font-poppins px-2 py-0.5 rounded border ${edu.badgeColor}`}>
            {edu.badge}
          </span>
        </div>
      </div>

      <h3 className="text-lg font-bold text-[#183758] font-poppins mb-0.5">
        {edu.title}
      </h3>
      
      <div className={`flex flex-col sm:flex-row sm:items-center gap-1 text-xs text-slate-400 font-opensans mb-2 ${align === "right" ? "sm:flex-row-reverse" : ""}`}>
        <span className="font-semibold text-slate-600">{edu.institution}</span>
        <span className="hidden sm:block text-slate-300">|</span>
        <span className="italic">{edu.period}</span>
      </div>

      <p className="text-sm text-slate-500 font-opensans leading-relaxed">
        {edu.description}
      </p>
    </motion.div>
  );
};

export default Education;