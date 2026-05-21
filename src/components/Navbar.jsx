import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }, // Menu Contact ditambahkan
  ];

  return (
    <>
      {/* Navbar Desktop & Tablet */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ease-in-out flex items-center justify-between px-6 py-3 rounded-full bg-[#183758]/90 backdrop-blur-md shadow-2xl border border-white/20
          ${scrolled ? "top-4 w-[90%] lg:w-[75%] max-w-5xl py-2" : "top-6 w-[95%] lg:w-[85%] max-w-6xl py-4"}
        `}
      >
        {/* Logo */}
        <a href="#home" className="text-white font-poppins font-bold text-xl tracking-wide">
          Fayiz<span className="text-blue-400">.</span>
        </a>

        {/* Menu Desktop */}
        <ul className="hidden lg:flex space-x-8 items-center">
          {navLinks.map((link, index) => (
            <motion.li 
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <a
                href={link.href}
                className="text-gray-200 font-opensans text-sm font-medium hover:text-white relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Tombol CTA "Let's Talk" Khusus Desktop (Opsional tapi keren) */}
        <div className="hidden lg:block">
           <a 
             href="#contact" 
             className="bg-blue-500 hover:bg-blue-400 text-white px-5 py-2 rounded-full font-opensans font-semibold text-sm transition-colors shadow-[0_0_15px_rgba(59,130,246,0.5)]"
           >
             Let's Talk
           </a>
        </div>

        {/* Tombol Hamburger (Mobile) */}
        <button
          className="lg:hidden text-white p-2 focus:outline-none hover:bg-white/10 rounded-full transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
        </button>
      </motion.nav>

      {/* Menu Mobile (Popup Animasi) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -20 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            // UI Diperbarui: Latar putih frosted glass, teks biru gelap, shadow lembut
            className="fixed top-[90px] left-1/2 -translate-x-1/2 w-[90%] max-w-sm bg-white/95 backdrop-blur-xl rounded-3xl shadow-[0_20px_50px_rgba(24,55,88,0.15)] z-40 p-4 flex flex-col items-center space-y-1 lg:hidden border border-gray-100"
          >
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="w-full text-center py-3 text-[#183758] font-poppins text-base font-bold tracking-wide hover:bg-slate-100 hover:text-blue-600 rounded-2xl transition-all"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;