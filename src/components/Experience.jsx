import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      company: "Telkomsel Smart Office Lampung",
      role: "Software Developer and Network Operations and Productivity",
      date: "Juni 2026 - Agustus 2026",
      description: "Mengembangkan sebuah dashboard monitoring jaringan untuk Telkomsel guna memastikan keandalan dan performa jaringan. Membuat data dimasukkan ke website lalu dijadikan grafik analitik yang mudah dipahami, serta dilengkapi dengan fitur manajemen aktivitas (Tracker) untuk meningkatkan efisiensi operasional tim.",
      logo: "/image/telkomsel.jpg",
      docs: [
        "/image/experience1.jpeg",
        "/image/experience2.jpeg",
        "/image/experience3.jpeg"
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
    <section id="experience" className="py-24 bg-[#f8f9fa] relative overflow-hidden">
      {/* Background Ornament */}
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-50 translate-x-1/2"></div>
      
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
            Experience
          </h2>
          <div className="w-16 h-1.5 bg-gradient-to-r from-blue-300 to-cyan-800 mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-500 font-opensans max-w-2xl mx-auto">
            Perjalanan karir dan pengalaman profesional saya dalam industri teknologi.
          </p>
        </motion.div>

        {/* Experience List */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col gap-8 max-w-4xl mx-auto"
        >
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-100 shadow-sm hover:shadow-[0_15px_30px_rgba(24,55,88,0.08)] transition-all duration-300 flex flex-col md:flex-row gap-6 items-start"
            >
              {/* Logo Company */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-slate-50 rounded-xl flex items-center justify-center p-3 shadow-sm border border-slate-100 flex-shrink-0">
                <img src={exp.logo} alt={`${exp.company} logo`} className="w-full h-full object-contain" />
              </div>
              
              {/* Experience Details */}
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-2">
                  <div>
                    <h3 className="text-xl font-bold text-[#183758] font-poppins">
                      {exp.role}
                    </h3>
                    <h4 className="text-md font-semibold text-blue-600 font-opensans mt-1">
                      {exp.company}
                    </h4>
                  </div>
                  <span className="inline-block bg-blue-50 text-blue-700 text-sm font-semibold px-3 py-1 rounded-full whitespace-nowrap h-fit">
                    {exp.date}
                  </span>
                </div>
                
                <p className="text-slate-600 font-opensans mt-4 leading-relaxed">
                  {exp.description}
                </p>

                {/* Dokumentasi Foto */}
                {exp.docs && exp.docs.length > 0 && (
                  <div className="mt-6 flex flex-wrap gap-4">
                    {exp.docs.map((docImg, i) => (
                      <div key={i} className="relative group overflow-hidden rounded-xl border border-slate-200 shadow-sm w-full sm:w-[220px] h-36">
                        <img 
                          src={docImg} 
                          alt={`Dokumentasi ${exp.company} ${i+1}`} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        {/* Overlay Gradient on Hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Experience;
