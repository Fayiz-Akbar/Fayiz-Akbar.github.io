import React from "react";
import { motion } from "framer-motion";

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
      zIndex: 4,
      ...style,
    }}
  >
    +
  </span>
);

const collaborations = [
  {
    id: "fxt",
    name: "FXT Dental",
    logo: "/image/logo-fxt.png",
    link: "https://fxtdentalclinic.com/",
    bg: "#f8fafc",
    logoHeight: "36px",
  },
  {
    id: "cbs",
    name: "PT Cipta Bahari Sejuk",
    logo: "/image/logo-cbs.png",
    link: "https://ciptabaharisejukofficial.com/",
    bg: "#ffffff",
    logoHeight: "36px",
  },
  {
    id: "telkomsel",
    name: "Telkomsel",
    logo: "/image/logo-telkomsel.png",
    link: "https://www.telkomsel.com/",
    bg: "#ffffff",
    logoHeight: "32px",
  },
  {
    id: "unila",
    name: "Universitas Lampung",
    logo: "/image/logo-unila.png",
    link: "https://www.unila.ac.id/",
    bg: "#f8fafc",
    logoHeight: "36px",
  },
];

const Collaborations = () => {
  return (
    <section
      id="collaborations"
      className="py-20 bg-white border-t border-b border-slate-200/70 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Title matching reference aesthetic */}
        <div className="mb-14">
          <h2 className="text-3xl sm:text-4xl font-normal text-slate-500 font-poppins tracking-tight">
            Companies we <span className="font-extrabold text-[#183758]">collaborate</span> with.
          </h2>
        </div>

        {/* Grid Box with Crosshair / Plus (+) Intersections */}
        <div className="relative max-w-[780px] mx-auto px-4">
          {/* Subtle horizontal guidelines */}
          <div
            className="hidden sm:block absolute top-0 -left-16 -right-16 h-px pointer-events-none z-[1]"
            style={{
              background:
                "linear-gradient(90deg, transparent, #e2e8f0 15%, #e2e8f0 85%, transparent)",
            }}
          />
          <div
            className="hidden sm:block absolute bottom-0 -left-16 -right-16 h-px pointer-events-none z-[1]"
            style={{
              background:
                "linear-gradient(90deg, transparent, #e2e8f0 15%, #e2e8f0 85%, transparent)",
            }}
          />

          {/* Vertical guidelines */}
          <div
            className="hidden sm:block absolute left-4 -top-8 -bottom-8 w-px pointer-events-none z-[1]"
            style={{
              background:
                "linear-gradient(180deg, transparent, #e2e8f0 15%, #e2e8f0 85%, transparent)",
            }}
          />
          <div
            className="hidden sm:block absolute right-4 -top-8 -bottom-8 w-px pointer-events-none z-[1]"
            style={{
              background:
                "linear-gradient(180deg, transparent, #e2e8f0 15%, #e2e8f0 85%, transparent)",
            }}
          />

          {/* Plus (+) Crosshair Markers at 9 intersection points */}
          <PlusMarker style={{ top: "0", left: "1rem" }} />
          <PlusMarker style={{ top: "0", left: "50%" }} />
          <PlusMarker style={{ top: "0", left: "calc(100% - 1rem)" }} />

          <PlusMarker style={{ top: "50%", left: "1rem" }} />
          <PlusMarker style={{ top: "50%", left: "50%" }} />
          <PlusMarker style={{ top: "50%", left: "calc(100% - 1rem)" }} />

          <PlusMarker style={{ top: "100%", left: "1rem" }} />
          <PlusMarker style={{ top: "100%", left: "50%" }} />
          <PlusMarker style={{ top: "100%", left: "calc(100% - 1rem)" }} />

          {/* Connected Grid (2 rows x 2 columns) with checkered background */}
          <div className="relative z-10 grid grid-cols-2 border border-slate-200 bg-white">
            {collaborations.map((collab, index) => {
              const isLeft = index % 2 === 0;
              const isTop = index < 2;

              return (
                <motion.a
                  key={collab.id}
                  href={collab.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className={`group flex items-center justify-center gap-3.5 py-7 px-4 min-h-[94px] transition-colors duration-200 no-underline hover:bg-slate-100/70
                    ${isLeft ? "border-r border-slate-200" : ""}
                    ${isTop ? "border-b border-slate-200" : ""}
                  `}
                  style={{ backgroundColor: collab.bg }}
                  title={`Kunjungi ${collab.name}`}
                >
                  <img
                    src={collab.logo}
                    alt={collab.name}
                    style={{ height: collab.logoHeight }}
                    className="w-auto max-w-[56px] object-contain transition-transform duration-250 group-hover:scale-110"
                    loading="lazy"
                  />
                  <span className="text-sm sm:text-base md:text-lg font-bold font-poppins text-[#183758] tracking-tight">
                    {collab.name}
                  </span>
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collaborations;
