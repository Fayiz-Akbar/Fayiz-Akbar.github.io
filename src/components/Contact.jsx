import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";
import { FiCopy, FiCheck, FiArrowUpRight } from "react-icons/fi";

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = "fayizakbar26@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="pt-24 pb-12 bg-[#0b192c] text-white relative overflow-hidden">
      {/* Efek Cahaya Latar Belakang */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#183758] rounded-full blur-[150px] opacity-40 translate-x-1/4 translate-y-1/4 z-0"></div>
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-900 rounded-full blur-[120px] opacity-20 -translate-x-1/2 -translate-y-1/2 z-0"></div>

      <div className="max-w-5xl mx-auto px-6 lg:px-12 relative z-10 flex flex-col justify-between min-h-[60vh]">
        
        {/* KONTEN UTAMA CONTACT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center my-auto">
          
          {/* Kolom Kiri: Ajakan Kolaborasi */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold font-poppins leading-tight tracking-tight">
              Punya ide proyek <br />
              atau peluang kolaborasi? <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-100 to-cyan-700">Mari diskusikan!</span>
            </h2>
            <p className="text-slate-400 font-opensans text-base max-w-md leading-relaxed">
              Saya selalu terbuka untuk berdiskusi mengenai rekayasa perangkat lunak, integrasi kecerdasan buatan, atau peluang kerja sama lainnya.
            </p>
          </motion.div>

          {/* Kolom Kanan: Akses Kontak Interaktif */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5"
          >
            {/* Kartu Salin Email Otomatis */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-5 rounded-2xl flex items-center justify-between gap-4 group hover:border-white/20 transition-colors">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 bg-[#183758] rounded-xl flex items-center justify-center text-blue-400 shadow-inner">
                  <FaEnvelope size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-semibold tracking-wide uppercase">Kirim Email</p>
                  <a href={`mailto:${email}`} className="text-base font-bold font-poppins hover:text-blue-400 transition-colors">
                    {email}
                  </a>
                </div>
              </div>
              
              <button 
                onClick={handleCopy}
                className="p-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-all active:scale-95 shadow-sm"
                title="Salin alamat email"
              >
                {copied ? <FiCheck size={18} className="text-green-400" /> : <FiCopy size={18} />}
              </button>
            </div>

            {/* LinkedIn Card Link */}
            <a 
              href="https://www.linkedin.com/in/fayiz-akbar-daifullah" //
              target="_blank" 
              rel="noreferrer"
              className="block bg-white/5 backdrop-blur-md border border-white/10 p-5 rounded-2xl flex items-center justify-between group hover:bg-white/10 hover:border-blue-500/40 transition-all duration-300"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 bg-[#0A66C2]/20 rounded-xl flex items-center justify-center text-[#0A66C2]">
                  <FaLinkedin size={22} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-semibold tracking-wide uppercase">Profesional Network</p>
                  <p className="text-base font-bold font-poppins group-hover:text-blue-400 transition-colors">LinkedIn Profile</p>
                </div>
              </div>
              <FiArrowUpRight size={20} className="text-slate-400 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>

          </motion.div>
        </div>

        {/* FOOTER AREA BARU */}
        <div className="border-t border-white/10 pt-8 mt-16 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-sm text-slate-500 font-opensans">
            &copy; {new Date().getFullYear()} Fayiz Akbar Daifullah. All rights reserved.
          </p>
          
          {/* Tautan Sosial Media Footer */}
          <div className="flex items-center gap-5">
            <a href="https://github.com/fayiz-akbar" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition-colors" aria-label="GitHub"> {/* */}
              <FaGithub size={20} />
            </a>
            <a href="https://www.linkedin.com/in/fayiz-akbar-daifullah" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-[#0A66C2] transition-colors" aria-label="LinkedIn"> {/* */}
              <FaLinkedin size={20} />
            </a>
            <a href="https://www.instagram.com/faayyiz" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-[#E4405F] transition-colors" aria-label="Instagram"> {/* */}
              <FaInstagram size={20} />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;