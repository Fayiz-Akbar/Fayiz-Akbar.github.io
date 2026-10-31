import React from "react";
import { motion } from "framer-motion";
import { LogoCloud } from "@/components/ui/logo-cloud-2";

export default function DemoOne() {
  return (
    <div className="w-full place-content-center px-3 sm:px-4 py-12 sm:py-16 md:py-20 overflow-hidden">
      <section className="relative mx-auto grid max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-4xl font-extrabold text-[#183758] font-poppins mb-3 tracking-tight">
            Companies we{" "}
            <span className="text-cyan-700">collaborate</span> with.
          </h2>
          <div className="w-16 h-1.5 bg-gradient-to-r from-blue-300 to-cyan-800 mx-auto rounded-full"></div>
        </motion.div>

        <LogoCloud />
      </section>
    </div>
  );
}
