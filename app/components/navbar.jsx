"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const links = [
  { name: "ABOUT", href: "/#about" },
  { name: "AI / LLM", href: "/#ai" },
  { name: "EXPERIENCE", href: "/#experience" },
  { name: "SKILLS", href: "/#skills" },
  { name: "PROJECTS", href: "/#projects" },
  { name: "EDUCATION", href: "/#education" },
  { name: "CERTIFICATE", href: "/blog" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`sticky top-0 z-50 -mx-6 px-6 sm:-mx-12 sm:px-12 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-violet-200/60 shadow-sm shadow-violet-200/40"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between py-5">
        <Link
          href="/"
          className="text-xl sm:text-2xl font-bold tracking-tight"
        >
          <span className="gradient-text">Santhosh</span>
          <span className="text-[#1e2235]">Kumar</span>
          <span className="text-teal-600">.</span>
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex md:flex-row md:space-x-1">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                className="group relative block px-4 py-2 no-underline outline-none"
                href={link.href}
              >
                <span className="text-sm font-medium text-gray-600 transition-colors duration-300 group-hover:text-[#1e2235]">
                  {link.name}
                </span>
                <span className="absolute bottom-1 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 transition-all duration-300 group-hover:w-2/3" />
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-2xl text-[#1e2235] p-1"
          aria-label="Toggle menu"
        >
          {open ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden flex flex-col gap-1 pb-4"
          >
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-4 py-3 text-sm font-medium text-gray-600 transition-colors hover:bg-violet-50 hover:text-[#1e2235]"
                  href={link.href}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;
