import React from "react";
import SocialCards from "./ui/card-fan-carousel";

const GALLERY_CARDS = [
  { imgUrl: "/image/experience2.jpeg", alt: "Pengalaman Kerja 2" },
  { imgUrl: "/image/experience1.jpeg", alt: "Pengalaman Kerja 1" },
  { imgUrl: "/image/galeri2.jpeg", alt: "Galeri Foto 2" },
  { imgUrl: "/image/galeri1.jpeg", alt: "Galeri Foto 1 (Utama)" },
  { imgUrl: "/image/galeri3.jpeg", alt: "Galeri Foto 3" },
  { imgUrl: "/image/galeri4.jpeg", alt: "Galeri Foto 4" },
  { imgUrl: "/image/galeri5.jpeg", alt: "Galeri Foto 5" },
  { imgUrl: "/image/galeri6.jpeg", alt: "Galeri Foto 6" },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-24 bg-[#f8f9fa] relative overflow-hidden border-t border-slate-100">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-16 text-center relative z-10">
        <h2 className="text-4xl lg:text-5xl font-extrabold text-[#183758] font-poppins mb-4 tracking-tight">
          My <span className="text-cyan-700">Gallery</span>
        </h2>
        <div className="w-24 h-2 bg-gradient-to-r from-blue-300 to-cyan-800 mx-auto rounded-full mb-8 shadow-sm"></div>
        <p className="text-slate-600 font-opensans max-w-2xl mx-auto text-lg leading-relaxed">
          Koleksi momen, aktivitas, dan gambaran visual perjalanan saya.
        </p>
      </div>
      
      {/* Komponen SocialCards Fan Carousel */}
      <div className="w-full">
        <SocialCards cards={GALLERY_CARDS} />
      </div>
    </section>
  );
};

export default Gallery;
