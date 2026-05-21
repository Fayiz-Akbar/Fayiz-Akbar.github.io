import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";

// --- DATA PROYEK DARI HTML LAMA ---
const projectsData = [
  { id: 1, title: "Unila Festival", category: "Web", image: "/image/unilafest.jpeg", tags: ["Laravel", "React", "Tailwind", "PostgreSQL"], desc: "Website pusat informasi event yang diselenggarakan oleh Hima/UKM di Universitas Lampung.", link: "https://github.com/Fayiz-Akbar/Unila-Festival" },
  { id: 2, title: "Klasifikasi Jenis Sampah", category: "AI & ML", image: "/image/Akurasi.jpg", tags: ["Deep Learning", "Python", "CNN"], desc: "Membangun model CNN dengan akurasi 85% untuk mengklasifikasikan gambar sampah.", link: "https://github.com/Fayiz-Akbar/Submission-Proyek-Akhir-Belajar-Deep-Learning_Fayiz-Akbar-Daifullah_2315061011" },
  { id: 3, title: "Aplikasi Kantong Pintar", category: "Mobile", image: "/image/kantongpintar.jpeg", tags: ["Flutter", "Dart", "SQLite"], desc: "Aplikasi manajemen keuangan pribadi untuk mencatat pemasukan dan pengeluaran.", link: "https://github.com/firmanfarelrichardo/kantongpintar" },
  { id: 4, title: "Sistem Rekomendasi Film", category: "AI & ML", image: "/image/Distribusi Rating Film.png", tags: ["Machine Learning", "Python"], desc: "Sistem rekomendasi film berbasis collaborative filtering dengan pendekatan user-item rating.", link: "https://github.com/Fayiz-Akbar/Sistem_Rekomendasi_Film" },
  { id: 5, title: "Web E-Commerce BookHaven", category: "Web", image: "/image/bookhaven.jpg", tags: ["Laravel", "React", "Tailwind"], desc: "Web full-stack manajemen buku dengan backend Laravel dan frontend React.", link: "https://github.com/Fayiz-Akbar/website-buku-Web_Framework" },
  { id: 6, title: "Web Service Buku (API)", category: "Lainnya", image: "/image/webservice.jpg", tags: ["PHP", "PostgreSQL", "API"], desc: "Membangun API murni untuk mengelola data buku dengan endpoint CRUD lengkap.", link: "https://github.com/Fayiz-Akbar/Web-Service-katalog-buku-digital" },
  { id: 7, title: "Prediksi Udara (ARIMA)", category: "AI & ML", image: "/image/Prediksi Kualitas Udara.png", tags: ["Python", "Time Series"], desc: "Memprediksi kadar polutan PM2.5 harian di Jakarta menggunakan model statistik ARIMA.", link: "https://github.com/Fayiz-Akbar/Analisis-dan_Prediksi-Kadar_PM2.5_Harian_Jakarta_dengan_Model_ARIMA" },
  { id: 8, title: "Smart Agriculture System", category: "Lainnya", image: "/image/iot2.png", tags: ["HTML", "PHP", "IoT"], desc: "Website monitoring dan kontrol tanaman yang terhubung langsung ke hardware (IoT).", link: "https://github.com/Fayiz-Akbar/Smart-Agriculture-System" },
  { id: 9, title: "Dashboard Penjualan", category: "Web", image: "/image/Dashboard.jpg", tags: ["PHP", "MySQL"], desc: "Dashboard admin interaktif untuk memantau penjualan harian dan stok barang.", link: "https://github.com/Fayiz-Akbar/Inventaris-Elektronik" },
  { id: 10, title: "Analisis Sentimen Shopee", category: "AI & ML", image: "/image/Hasil Latih Model 2.png", tags: ["Python", "NLP", "Naive Bayes"], desc: "Analisis sentimen terhadap 2000+ ulasan pengguna Shopee menggunakan text classification.", link: "https://github.com/Fayiz-Akbar/Analisis-Sentimen-Aplikasi-Shopee" },
  { id: 11, title: "XBundle", category: "Web", image: "/image/xbundle.png", tags: ["HTML", "JS", "PHP"], desc: "Platform e-commerce yang menyediakan berbagai produk bundling dengan harga terjangkau.", link: "https://github.com/SultanBani/TUBES_PRK_PEMWEB_2025" },
  { id: 12, title: "Upaluk Universitas Lampung", category: "Web", image: "/image/upaluk.png", tags: ["WordPress", "CMS"], desc: "Website Profile UPA layanan Uji Kompetensi Universitas Lampung.", link: "https://upa-luk.unila.ac.id/" },
  { id: 13, title: "LiteraStore", category: "Web", image: "/image/literastore.png", tags: ["HTML", "CSS", "JS"], desc: "Website Jual Beli Buku Online interaktif menggunakan Vanilla JavaScript.", link: "https://github.com/Fayiz-Akbar/Website-jual-buku-" },
  { id: 14, title: "SMPN 18 Bandar Lampung", category: "Web", image: "/image/smpn18.png", tags: ["WordPress", "CMS"], desc: "Website profil sekolah yang menampilkan lebih dari 10 halaman informasi akademik.", link: "https://smpn18bdl.sch.id/" },
  { id: 15, title: "GreenMetric Unila", category: "Web", image: "/image/greenmetric.png", tags: ["WordPress", "CMS"], desc: "Website informasi pencapaian greenmetric untuk Universitas Lampung (sumber data UI).", link: "https://greenmetric.unila.ac.id/" },
  { id: 16, title: "My Unila Lost & Found", category: "Web", image: "/image/unilafound.png", tags: ["HTML", "JS", "PHP"], desc: "Platform bantuan untuk mencari dan melaporkan barang hilang di lingkup Universitas Lampung.", link: "https://myunila-lostfound.infinityfreeapp.com" },
  { id: 17, title: "Relantara", category: "Web", image: "/image/relantara.png", tags: ["PHP", "CSS"], desc: "Sistem informasi relawan untuk event dan platform penyelenggara acara.", link: "https://github.com/Fayiz-Akbar/Relantara" },
  { id: 18, title: "Desa Merak Batin", category: "Web", image: "/image/merakbatin.png", tags: ["PHP", "JS", "CSS"], desc: "Website profil dan sistem informasi program pembangunan Desa Merak Batin.", link: "https://desamerakbatin.infinityfreeapp.com/index.php?i=1" },
];

// --- KAMUS WARNA UNTUK BADGE TECH STACK (Lebih Berwarna & Pop) ---
const tagColors = {
  "Laravel": "bg-red-50 text-red-600 border border-red-200/60",
  "React": "bg-sky-50 text-sky-600 border border-sky-200/60",
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
};

const categories = ["All", "Web", "AI & ML", "Mobile", "Lainnya"];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6);

  // Logika Filter
  const filteredProjects = projectsData.filter((project) => 
    activeCategory === "All" ? true : project.category === activeCategory
  );

  const handleLoadMore = () => setVisibleCount((prev) => prev + 6);
  const handleShowLess = () => setVisibleCount(6);
  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setVisibleCount(6);
  };

  return (
    <section id="projects" className="py-24 bg-white relative overflow-hidden">
      
      {/* 1. HEADER SECTION */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-10 text-center relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-4xl font-extrabold text-[#183758] font-poppins mb-3">
            Projects
          </h2>
          <div className="w-16 h-1.5 bg-gradient-to-r  from-blue-300 to-cyan-800 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-500 font-opensans max-w-2xl mx-auto">
            Kumpulan proyek yang telah saya bangun, mulai dari aplikasi berbasis web, kecerdasan buatan, hingga pengembangan antarmuka seluler.
          </p>
        </motion.div>
      </div>

      {/* 2. INFINITE MARQUEE GAMBAR PROYEK */}
      <div className="w-full bg-slate-50 py-6 border-y border-slate-100 mb-12 flex overflow-hidden whitespace-nowrap relative z-10">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 40, repeat: Infinity }}
          className="flex items-center gap-6 px-3"
        >
          {[...projectsData, ...projectsData].map((proj, i) => (
            <div key={i} className="w-48 h-28 md:w-64 md:h-36 rounded-xl overflow-hidden shadow-sm flex-shrink-0 relative group">
              <div className="absolute inset-0 bg-[#183758]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
                <span className="text-white font-bold text-sm tracking-wide truncate px-4">{proj.title}</span>
              </div>
              <img src={proj.image} alt={proj.title} className="w-full h-full object-cover" 
                   onError={(e) => { e.target.src = 'https://placehold.co/400x220/e2e8f0/183758?text=Project+Image'; }}/>
            </div>
          ))}
        </motion.div>
      </div>

      {/* 3. FILTER TABS */}
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

        {/* 4. PROJECT GRID */}
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
                className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(24,55,88,0.1)] transition-all duration-300 flex flex-col group"
              >
                {/* Image Cover */}
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[#183758] shadow-sm z-10">
                    {project.category}
                  </div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => { e.target.src = 'https://placehold.co/400x220/e2e8f0/183758?text=Project+Image'; }}
                  />
                </div>

                {/* Card Content */}
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-[#183758] font-poppins mb-2 line-clamp-1">{project.title}</h3>
                  <p className="text-sm text-slate-500 font-opensans mb-4 flex-grow line-clamp-2">{project.desc}</p>
                  
                  {/* Tags Berwarna Dinamis */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, idx) => (
                      <span 
                        key={idx} 
                        // Jika warna tag terdaftar di object tagColors gunakan warnanya, jika tidak gunakan warna default abu-abu.
                        className={`text-xs font-bold px-3 py-1 rounded-full ${tagColors[tag] || "bg-gray-50 text-gray-600 border border-gray-200"}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Tombol Link */}
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl border border-slate-200 text-slate-600 font-semibold text-sm hover:bg-[#183758] hover:border-[#183758] hover:text-white transition-colors duration-300"
                  >
                    {project.link.includes('github.com') ? <FiGithub size={16} /> : <FiExternalLink size={16} />}
                    {project.link.includes('github.com') ? 'Source Code' : 'Kunjungi Live'}
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* 5. LOAD MORE / SHOW LESS BUTTON */}
        {filteredProjects.length > 6 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-center mt-8">
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
  );
};

export default Projects;