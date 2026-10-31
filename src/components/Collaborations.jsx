import React from "react";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

const PlusMarker = ({ style }) => (
  <span
    aria-hidden="true"
    style={{
      position: "absolute",
      color: "#94a3b8",
      fontSize: "15px",
      lineHeight: "1",
      fontFamily: "monospace",
      fontWeight: 400,
      userSelect: "none",
      pointerEvents: "none",
      transform: "translate(-50%, -50%)",
      zIndex: 3,
      ...style,
    }}
  >
    +
  </span>
);

const collaborations = [
  {
    id: "cbs",
    name: "PT Cipta Bahari Sejuk",
    domain: "ciptabaharisejukofficial.com",
    tag: "HVAC & Konstruksi",
    logo: "/image/logo-cbs.png",
    link: "https://ciptabaharisejukofficial.com/",
    accentColor: "#126ead",
  },
  {
    id: "fxt",
    name: "FXT Dental Clinic",
    domain: "fxtdentalclinic.com",
    tag: "Klinik Kesehatan Gigi",
    logo: "/image/logo-fxt.png",
    link: "https://fxtdentalclinic.com/",
    accentColor: "#84cc16",
  },
  {
    id: "telkomsel",
    name: "Telkomsel",
    domain: "telkomsel.com",
    tag: "Telekomunikasi",
    logo: "/image/logo-telkomsel.png",
    link: "https://www.telkomsel.com/",
    accentColor: "#e11d48",
  },
  {
    id: "unila",
    name: "Universitas Lampung",
    domain: "unila.ac.id",
    tag: "Perguruan Tinggi",
    logo: "/image/logo-unila.png",
    link: "https://www.unila.ac.id/",
    accentColor: "#0284c7",
  },
];

const Collaborations = () => {
  return (
    <section
      id="collaborations"
      className="py-20 bg-[#f8f9fa] border-t border-b border-slate-200/70 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#183758] font-poppins mb-3 tracking-tight">
              Companies & Institutions I've{" "}
              <span className="text-cyan-700">Collaborated</span> With
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-cyan-700 mx-auto rounded-full mb-4"></div>
            <p className="text-slate-500 font-opensans max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
              Pengalaman berkolaborasi dan mengembangkan solusi digital bersama berbagai perusahaan serta institusi.
            </p>
          </motion.div>
        </div>

        {/* Outer Box with Crosshair / Plus (+) Intersections */}
        <div className="relative max-w-5xl mx-auto px-2 sm:px-4">
          {/* Subtle horizontal guidelines */}
          <div
            className="hidden sm:block absolute top-0 -left-12 -right-12 h-px pointer-events-none z-[1]"
            style={{
              background:
                "linear-gradient(90deg, transparent, #cbd5e1 15%, #cbd5e1 85%, transparent)",
            }}
          />
          <div
            className="hidden sm:block absolute bottom-0 -left-12 -right-12 h-px pointer-events-none z-[1]"
            style={{
              background:
                "linear-gradient(90deg, transparent, #cbd5e1 15%, #cbd5e1 85%, transparent)",
            }}
          />

          {/* Vertical guidelines */}
          <div
            className="hidden sm:block absolute left-2 sm:left-4 -top-8 -bottom-8 w-px pointer-events-none z-[1]"
            style={{
              background:
                "linear-gradient(180deg, transparent, #cbd5e1 15%, #cbd5e1 85%, transparent)",
            }}
          />
          <div
            className="hidden sm:block absolute right-2 sm:right-4 -top-8 -bottom-8 w-px pointer-events-none z-[1]"
            style={{
              background:
                "linear-gradient(180deg, transparent, #cbd5e1 15%, #cbd5e1 85%, transparent)",
            }}
          />

          {/* Plus (+) Crosshair Markers */}
          <PlusMarker style={{ top: "0", left: "0.5rem" }} />
          <PlusMarker style={{ top: "0", left: "calc(100% - 0.5rem)" }} />
          <PlusMarker style={{ top: "100%", left: "0.5rem" }} />
          <PlusMarker style={{ top: "100%", left: "calc(100% - 0.5rem)" }} />

          {/* Cards Grid */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 py-3">
            {collaborations.map((collab, index) => (
              <motion.div
                key={collab.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="group relative bg-white border border-slate-200/90 rounded-2xl p-5 shadow-[0_4px_20px_-2px_rgba(24,55,88,0.04)] hover:border-[#183758] hover:shadow-[0_12px_28px_rgba(24,55,88,0.08)] transition-all duration-300"
              >
                <a
                  href={collab.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col h-full justify-between no-underline"
                  title={`Kunjungi ${collab.name}`}
                >
                  <div>
                    {/* Top row: Logo & Link icon */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center p-2 overflow-hidden shadow-xs">
                        <img
                          src={collab.logo}
                          alt={collab.name}
                          className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-110"
                          loading="lazy"
                        />
                      </div>
                      <span className="text-slate-400 group-hover:text-cyan-700 transition-colors p-1">
                        <FiExternalLink size={16} />
                      </span>
                    </div>

                    {/* Company name */}
                    <h3 className="text-base font-bold text-[#183758] font-poppins leading-snug line-clamp-1 mb-1">
                      {collab.name}
                    </h3>

                    {/* Domain */}
                    <p className="text-xs text-slate-500 font-mono truncate">
                      {collab.domain}
                    </p>
                  </div>

                  {/* Bottom tag */}
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-md">
                      {collab.tag}
                    </span>
                    <span className="text-[11px] font-semibold text-cyan-700 group-hover:underline">
                      Lihat situs &rarr;
                    </span>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collaborations;

