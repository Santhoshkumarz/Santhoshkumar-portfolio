"use client";

import { motion } from "framer-motion";

// Consistent animated section heading used across all sections
function SectionTitle({ children }) {
  return (
    <div className="flex justify-center my-5 lg:py-8">
      <motion.div
        className="flex items-center"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <motion.span
          className="w-12 sm:w-24 h-[2px] bg-gradient-to-r from-transparent to-violet-400"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{ transformOrigin: "left" }}
        />
        <span className="relative mx-1 w-fit rounded-md bg-gradient-to-r from-violet-600 to-pink-500 px-5 py-2 text-xl font-semibold text-white shadow-md shadow-violet-200">
          {children}
        </span>
        <motion.span
          className="w-12 sm:w-24 h-[2px] bg-gradient-to-l from-transparent to-pink-400"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{ transformOrigin: "right" }}
        />
      </motion.div>
    </div>
  );
}

export default SectionTitle;
