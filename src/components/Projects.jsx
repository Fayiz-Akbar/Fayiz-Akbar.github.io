import React, { useState, useEffect, useMemo, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { FiGithub, FiExternalLink, FiX, FiFolder } from "react-icons/fi";

// --- DATA PROYEK (Tetap Sama) ---
const projectsData = [
  { id: 1, title: "RobustaHub", categories: ["Web"], image: "/image/robustahub.png", tags: ["React", "Express.js", "Agritech", "B2B", "Payment Gateway"], desc: "Platform B2B Agritech E-Commerce yang dirancang khusus sebagai penghubung langsung antara petani kopi Robusta di Lampung dengan berbagai coffee shop di seluruh Indonesia untuk memotong rantai pasok yang panjang.", link: "https://github.com/Fayiz-Akbar/robustahub" },
  { id: 2, title: "EmpathAI", categories: ["AI & ML", "Web"], image: "/image/empathai.png", tags: ["Node.js", "Express.js", "NLP", "Chatbot", "React", "MongoDB"], desc: "Sistem chatbot interaktif berbasis kecerdasan buatan (AI) yang dirancang untuk memberikan dukungan emosional.", link: "https://empath-ai.netlify.app/" },
  { id: 5, title: "Unila Festival", categories: ["Web"], image: "/image/unilafest.jpeg", imagePosition: "object-top", tags: ["Laravel", "React", "Tailwind", "PostgreSQL"], desc: "Website pusat informasi event yang diselenggarakan oleh Hima/UKM di Universitas Lampung.", link: "https://github.com/Fayiz-Akbar/Unila-Festival" },
  { id: 8, title: "GreenMetric Unila", categories: ["Web"], image: "/image/greenmetric.png", imagePosition: "object-top", tags: ["WordPress", "CMS"], desc: "Portal web informasi resmi UI GreenMetric untuk kampus Universitas Lampung.", link: "https://greenmetric.unila.ac.id/" },
  { id: 6, title: "Klasifikasi Jenis Sampah", categories: ["AI & ML"], image: "/image/Akurasi.jpg", tags: ["Deep Learning", "Python", "CNN"], desc: "Membangun model CNN dengan akurasi 85% untuk mengklasifikasikan berbagai gambar jenis sampah.", link: "https://github.com/Fayiz-Akbar/Submission-Proyek-Akhir-Belajar-Deep-Learning_Fayiz-Akbar-Daifullah_2315061011" },
  { id: 4, title: "E-Library", categories: ["Mobile"], image: "/image/e-library.jpeg", imagePosition: "object-top", tags: ["Express.js", "React", "Tailwind", "PostgreSQL"], desc: "Aplikasi mobile manajemen perpustakaan digital dengan fitur scan QR code.", link: "https://github.com/Fayiz-Akbar/E-Library_Campus" },
  { id: 7, title: "Aplikasi Kantong Pintar", categories: ["Mobile"], image: "/image/kantongpintar.jpeg",imagePosition: "object-top", tags: ["Flutter", "Dart", "SQLite"], desc: "Aplikasi manajemen keuangan pribadi berbasis mobile untuk mencatat arus kas.", link: "https://github.com/firmanfarelrichardo/kantongpintar" },
  { id: 9, title: "Web E-Commerce BookHaven", categories: ["Web"], image: "/image/bookhaven.jpg", tags: ["Laravel", "React", "Tailwind"], desc: "Platform Web full-stack manajemen e-commerce buku responsif.", link: "https://github.com/Fayiz-Akbar/website-buku-Web_Framework" },
  { id: 10, title: "Desa Merak Batin", categories: ["Web"], image: "/image/merakbatin.png", imagePosition: "object-top", tags: ["PHP", "JS", "CSS"], desc: "Website profil digital dan sistem informasi peta potensi tematik Desa Merak Batin.", link: "https://desamerakbatin.infinityfreeapp.com/index.php?i=1" },
  { id: 11, title: "Prediksi Udara (ARIMA)", categories: ["AI & ML"], image: "/image/Prediksi Kualitas Udara.png", tags: ["Python", "Time Series"], desc: "Analisis dan prediksi kadar polutan PM2.5 Jakarta menggunakan algoritma time-series ARIMA.", link: "https://github.com/Fayiz-Akbar/Analisis-dan_Prediksi-Kadar_PM2.5_Harian_Jakarta_dengan_Model_ARIMA" },
  { id: 12, title: "Smart Agriculture System", categories: ["Internet of Things", "Web"], image: "/image/iot2.png", tags: ["HTML", "PHP", "IoT"], desc: "Website monitoring interaktif dan kontrol tanaman cerdas terhubung sensor IoT.", link: "https://github.com/Fayiz-Akbar/Smart-Agriculture-System" },
  { id: 13, title: "Dashboard Penjualan", categories: ["Web"], image: "/image/Dashboard.jpg", tags: ["PHP", "MySQL"], desc: "Aplikasi Dashboard admin interaktif untuk memantau tren penjualan.", link: "https://github.com/Fayiz-Akbar/Inventaris-Elektronik" },
  { id: 14, title: "Analisis Sentimen Shopee", categories: ["AI & ML"], image: "/image/Hasil Latih Model 2.png", tags: ["Python", "NLP", "Naive Bayes"], desc: "Penerapan NLP untuk analisis sentimen ulasan pengguna Shopee.", link: "https://github.com/Fayiz-Akbar/Analisis-Sentimen-Aplikasi-Shopee" },
  { id: 15, title: "XBundle", categories: ["Web"], image: "/image/xbundle.png", tags: ["HTML", "JS", "PHP"], desc: "Platform e-commerce kolaboratif inovatif untuk produk bundling.", link: "https://github.com/SultanBani/TUBES_PRK_PEMWEB_2025" },
  { id: 16, title: "Upaluk Universitas Lampung", categories: ["Lainnya"], image: "/image/upaluk.png", imagePosition: "object-top", tags: ["WordPress", "CMS"], desc: "Website Profile institusional layanan UPA Uji Kompetensi Universitas Lampung.", link: "https://upa-luk.unila.ac.id/" },
  { id: 17, title: "LiteraStore", categories: ["Web"], image: "/image/literastore.png", tags: ["HTML", "CSS", "JS"], desc: "Website Jual Beli Buku Online murni menggunakan Vanilla JavaScript.", link: "https://github.com/Fayiz-Akbar/Website-jual-buku-" },
  { id: 18, title: "SMPN 18 Bandar Lampung", categories: ["Lainnya"], image: "/image/smpn18.png", imagePosition: "object-top", tags: ["WordPress", "CMS"], desc: "Website profil sekolah profesional SMPN 18 Bandar Lampung.", link: "https://smpn18bdl.sch.id/" },
  { id: 19, title: "Sistem Rekomendasi Film", categories: ["AI & ML"], image: "/image/Distribusi Rating Film.png", tags: ["Machine Learning", "Python"], desc: "Sistem rekomendasi film berbasis collaborative filtering.", link: "https://github.com/Fayiz-Akbar/Sistem_Rekomendasi_Film" },
  { id: 20, title: "My Unila Lost & Found", categories: ["Web"], image: "/image/unilafound.png", imagePosition: "object-top", tags: ["HTML", "JS", "PHP"], desc: "Platform sosial digital komunitas untuk mencari barang hilang di Universitas Lampung.", link: "https://myunila-lostfound.infinityfreeapp.com" }
];

const tagColors = {
  "Laravel": "bg-red-50 text-red-600 border border-red-200/60",
  "React": "bg-sky-50 text-sky-600 border border-sky-200/60",
  "Node.js": "bg-green-50 text-green-700 border border-green-200/60",
  "Express.js": "bg-slate-100 text-slate-800 border border-slate-300/60",
  "Tailwind": "bg-teal-50 text-teal-600 border border-teal-200/60",
  "PostgreSQL": "bg-blue-50 text-blue-700 border border-blue-200/60",
  "Deep Learning": "bg-rose-50 text-rose-600 border border-rose-200/60",
  "Python": "bg-indigo-50 text-indigo-600 border border-indigo-200/60",
  "CNN": "bg-slate-100 text-slate-700 border border-slate-200",
  "Flutter": "bg-cyan-50 text-cyan-600 border border-cyan-200/60",
  "Dart": "bg-sky-100 text-sky-700 border border-sky-200",
  "SQLite": "bg-emerald-50 text-emerald-700 border border-emerald-200/60",
  "Machine Learning": "bg-orange-50 text-orange-600 border border-orange-200/60",
  "PHP": "bg-purple-50 text-purple-600 border border-purple-200/60",
  "MySQL": "bg-blue-50 text-[#00758F] border border-blue-100",
  "MongoDB": "bg-green-100 text-green-800 border border-green-300",
  "API": "bg-amber-50 text-amber-700 border border-amber-200/60",
  "Time Series": "bg-lime-50 text-lime-700 border border-lime-200/60",
  "IoT": "bg-zinc-900 text-zinc-100 border border-zinc-800",
  "HTML": "bg-orange-100 text-orange-700 border border-orange-200",
  "JS": "bg-yellow-50 text-yellow-700 border border-yellow-200",
  "CSS": "bg-blue-100 text-blue-600 border border-blue-200",
  "WordPress": "bg-sky-100 text-sky-800 border border-sky-200",
  "CMS": "bg-amber-100 text-amber-800 border border-amber-200",
  "Naive Bayes": "bg-violet-50 text-violet-600 border border-violet-200/60",
  "NLP": "bg-fuchsia-50 text-fuchsia-600 border border-fuchsia-200/60",
  "B2B": "bg-blue-50 text-blue-800 border border-blue-200",
  "Agritech": "bg-emerald-50 text-emerald-800 border border-emerald-200",
  "Chatbot": "bg-pink-50 text-pink-600 border border-pink-200",
  "Payment Gateway": "bg-slate-100 text-slate-800 border border-slate-200"
};

const categories = ["All", "Web", "AI & ML", "Mobile", "Internet of Things", "Lainnya"];

// --- KOTAK DIGIT ROLL CASINO INDIVIDUAL (VERSI LIGHT/PUTIH KONTRAS) ---
const CasinoDigit = ({ digit, delay, textColor }) => {
  const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const spinningStrip = [...digits, ...digits, ...digits, ...digits]; 
  
  // Mengunci tinggi wadah agar angka pas di tengah dan tidak terpotong vertikal
  const digitHeight = 58; 
  const targetY = -((digits.length * 2) + parseInt(digit)) * digitHeight;

  return (
    <div className="h-[58px] w-9 overflow-hidden bg-[#f1f5f9] border border-slate-200 rounded-xl shadow-[inset_0_2px_4px_rgba(0,0,0,0.06)] flex justify-center items-center relative flex-shrink-0">
      {/* Kaca refleksi transparan untuk efek 3D slot */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-black/[0.02] pointer-events-none z-10 rounded-xl" />
      
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: targetY }}
        transition={{ 
          duration: 2.3, 
          delay: delay, 
          ease: [0.16, 1, 0.3, 1], // Animasi ngerem khas mesin slot
        }}
        className="absolute top-0 left-0 right-0"
      >
        {spinningStrip.map((d, index) => (
          <span 
            key={index} 
            className={`text-4xl font-black ${textColor} font-poppins h-[58px] flex items-center justify-center tracking-tighter`}
          >
            {d}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

// --- CONTAINER BAGIAN UTAMA ANGKA SLOT ---
const CasinoNumber = ({ value, textColor }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const digitArray = value.toString().padStart(2, '0').split('');

  return (
    <div ref={ref} className="flex gap-1 items-center justify-center p-1 bg-slate-100/40 rounded-2xl">
      {isInView && digitArray.map((digit, index) => (
        <CasinoDigit key={index} digit={digit} delay={index * 0.15} textColor={textColor} />
      ))}
    </div>
  );
};

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6);
  const [expandedId, setExpandedId] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  // Hitung Data Statistik Real-time
  const projectStats = useMemo(() => {
    return {
      All: projectsData.length,
      Web: projectsData.filter(p => p.categories.includes("Web")).length,
      AI: projectsData.filter(p => p.categories.includes("AI & ML")).length,
      Mobile: projectsData.filter(p => p.categories.includes("Mobile")).length,
    };
  }, []);

  const filteredProjects = projectsData.filter((project) => {
    if (activeCategory === "All") return true;
    return project.categories.includes(activeCategory);
  });

  const handleLoadMore = () => setVisibleCount((prev) => prev + 6);
  const handleShowLess = () => setVisibleCount(6);
  
  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setVisibleCount(6);
    setExpandedId(null); 
  };

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <>
      <section id="projects" className="py-24 bg-white relative overflow-hidden">
        
        {/* Ornamen Background */}
        <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-70 z-0"></div>
        <div className="absolute bottom-1/4 -left-10 w-48 h-48 bg-cyan-50 rounded-full blur-3xl opacity-60 z-0"></div>

        {/* HEADER SECTION */}
        <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-16 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>

            <h2 className="text-5xl font-extrabold text-[#183758] font-poppins mb-4 tracking-tight">
              Featured <span className="text-cyan-700">Projects</span>
            </h2>
            <div className="w-24 h-2 bg-gradient-to-r from-blue-300 to-cyan-800 mx-auto rounded-full mb-8 shadow-sm"></div>
            <p className="text-slate-600 font-opensans max-w-2xl mx-auto text-lg leading-relaxed">
              Kumpulan proyek yang telah saya bangun, mulai dari aplikasi berbasis web, kecerdasan buatan, hingga pengembangan antarmuka seluler.
            </p>
          </motion.div>
        </div>

        {/* --- BAGIAN STATISTIK CASINO BENTO BOX PUTIH BERSIH --- */}
        <div className="max-w-5xl mx-auto px-6 mb-16 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-slate-50/60 rounded-3xl border border-slate-100 shadow-inner"
          >
            {/* Total Projects */}
            <div className="flex flex-col items-center justify-center p-5 bg-white rounded-2xl border border-slate-100 shadow-sm w-full">
              <CasinoNumber value={projectStats.All} textColor="text-blue-600" />
              <p className="text-xs font-bold tracking-wider uppercase text-slate-500 font-poppins mt-3">Total Projects</p>
            </div>
            
            {/* Web Apps */}
            <div className="flex flex-col items-center justify-center p-5 bg-white rounded-2xl border border-slate-100 shadow-sm w-full">
              <CasinoNumber value={projectStats.Web} textColor="text-emerald-600" />
              <p className="text-xs font-bold tracking-wider uppercase text-slate-500 font-poppins mt-3">Web Apps</p>
            </div>

            {/* AI & ML Solutions */}
            <div className="flex flex-col items-center justify-center p-5 bg-white rounded-2xl border border-slate-100 shadow-sm w-full">
              <CasinoNumber value={projectStats.AI} textColor="text-purple-600" />
              <p className="text-xs font-bold tracking-wider uppercase text-slate-500 font-poppins mt-3">AI & ML Solutions</p>
            </div>

            {/* Mobile Dev */}
            <div className="flex flex-col items-center justify-center p-5 bg-white rounded-2xl border border-slate-100 shadow-sm w-full">
              <CasinoNumber value={projectStats.Mobile} textColor="text-cyan-600" />
              <p className="text-xs font-bold tracking-wider uppercase text-slate-500 font-poppins mt-3">Mobile Dev</p>
            </div>
          </motion.div>
        </div>
        {/* ------------------------------------------------------------------ */}

        {/* INFINITE MARQUEE GAMBAR PROYEK (GESER SEPERTI SEBELUMNYA) */}
        <div className="w-full bg-slate-50 py-6 border-y border-slate-100 mb-12 flex overflow-hidden whitespace-nowrap relative z-10 shadow-inner">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 40, repeat: Infinity }}
            className="flex items-center gap-6 px-3"
          >
            {[...projectsData, ...projectsData].map((proj, i) => (
              <div 
                key={i} 
                onClick={() => setSelectedImage(proj.image)}
                className="w-48 h-28 md:w-64 md:h-36 rounded-xl overflow-hidden shadow-sm flex-shrink-0 relative group cursor-pointer"
              >
                <div className="absolute inset-0 bg-[#183758]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
                  <span className="text-white font-bold text-sm tracking-wide truncate px-4">Preview</span>
                </div>
                <img 
                  src={proj.image} 
                  alt={proj.title} 
                  className={`w-full h-full object-cover ${proj.imagePosition || 'object-center'}`} 
                  onError={(e) => { e.target.src = 'https://placehold.co/400x220/e2e8f0/183758?text=Project+Image'; }}
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* FILTER TABS */}
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-6 py-2.5 rounded-full font-poppins font-semibold text-sm transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-[#183758] text-white shadow-md -translate-y-1"
                    : "bg-slate-100 text-slate-500 hover:bg-blue-50 hover:text-blue-600"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* PROJECT GRID */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <AnimatePresence mode="popLayout">
              {filteredProjects.slice(0, visibleCount).map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(24,55,88,0.1)] transition-all duration-300 flex flex-col group relative z-10"
                >
                  {/* Image Cover */}
                  <div 
                    className="h-48 overflow-hidden relative flex-shrink-0 cursor-pointer group/img"
                    onClick={() => setSelectedImage(project.image)}
                  >
                    <div className="absolute top-3 left-3 flex flex-col items-start gap-1.5 z-20">
                      {project.categories.map((cat, idx) => (
                        <div key={idx} className="bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-extrabold text-[#183758] shadow-sm uppercase tracking-wider">
                          {cat}
                        </div>
                      ))}
                    </div>

                    <div className="absolute inset-0 bg-[#183758]/40 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
                       <span className="bg-white text-[#183758] px-4 py-2 rounded-full font-bold text-xs uppercase tracking-widest shadow-lg transform translate-y-4 group-hover/img:translate-y-0 transition-all duration-300">
                         Lihat Gambar
                       </span>
                    </div>

                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className={`w-full h-full object-cover ${project.imagePosition || 'object-center'} group-hover:scale-105 transition-transform duration-500`}
                      onError={(e) => { e.target.src = 'https://placehold.co/400x220/e2e8f0/183758?text=Project+Image'; }}
                    />
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex-grow flex flex-col">
                    <motion.h3 layout className="text-xl font-bold text-[#183758] font-poppins mb-2 line-clamp-1">
                      {project.title}
                    </motion.h3>
                    
                    <motion.div 
                      layout 
                      onClick={() => toggleExpand(project.id)}
                      className="mb-4 flex-grow cursor-pointer group/desc"
                    >
                      <motion.p 
                        layout
                        className={`text-sm text-slate-500 font-opensans transition-all duration-300 ${expandedId === project.id ? "" : "line-clamp-2"}`}
                      >
                        {project.desc}
                      </motion.p>
                      <motion.span layout className="text-[11px] font-bold text-blue-500 group-hover/desc:text-blue-700 mt-1.5 inline-block uppercase tracking-wider">
                        {expandedId === project.id ? "Sembunyikan" : "Baca selengkapnya..."}
                      </motion.span>
                    </motion.div>
                    
                    <motion.div layout className="flex flex-wrap gap-2 mb-6 mt-auto">
                      {project.tags.map((tag, idx) => (
                        <span 
                          key={idx} 
                          className={`text-[11px] font-bold px-2.5 py-1 rounded-md ${tagColors[tag] || "bg-gray-50 text-gray-600 border border-gray-200"}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </motion.div>

                    <motion.a 
                      layout
                      href={project.link} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl border border-slate-200 text-slate-600 font-semibold text-sm hover:bg-[#183758] hover:border-[#183758] hover:text-white transition-colors duration-300 shadow-sm"
                    >
                      {project.link.includes('github.com') ? <FiGithub size={16} /> : <FiExternalLink size={16} />}
                      {project.link.includes('github.com') ? 'Source Code' : 'Kunjungi Live'}
                    </motion.a>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* LOAD MORE / SHOW LESS BUTTON */}
          {filteredProjects.length > 6 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-center mt-8 relative z-10">
              {visibleCount < filteredProjects.length ? (
                <button 
                  onClick={handleLoadMore}
                  className="px-8 py-3 rounded-full bg-slate-100 text-[#183758] font-bold font-poppins hover:bg-slate-200 transition-colors shadow-sm"
                >
                  Load More Projects ({filteredProjects.length - visibleCount} sisa)
                </button>
              ) : (
                <button 
                  onClick={handleShowLess}
                  className="px-8 py-3 rounded-full border-2 border-slate-200 text-slate-500 font-bold font-poppins hover:bg-slate-50 transition-colors shadow-sm"
                >
                  Show Less Projects
                </button>
              )}
            </motion.div>
          )}

        </div>
      </section>

      {/* MODAL LIGHTBOX FULLSCREEN */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)} 
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0b192c]/90 backdrop-blur-sm p-4 sm:p-10 cursor-zoom-out"
          >
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
            >
              <FiX size={28} />
            </button>

            <motion.img 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selectedImage} 
              alt="Project Full View" 
              className="max-w-full max-h-full object-contain rounded-xl shadow-2xl cursor-default"
              onClick={(e) => e.stopPropagation()} 
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Projects;