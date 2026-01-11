import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-md border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">
          EcoVault
        </Link>
        
        <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-300">
          <Link to="/" className="hover:text-emerald-400 transition-colors">Home</Link>
          <Link to="/marketplace" className="hover:text-emerald-400 transition-colors">Marketplace</Link>
          <Link to="/impact" className="hover:text-emerald-400 transition-colors">Impact</Link>
        </div>

        <div className="flex space-x-4">
          <Link to="/login" className="px-5 py-2 rounded-full border border-white/20 text-white hover:bg-white/10 transition-all text-sm">
            Log In
          </Link>
          <Link to="/register" className="px-5 py-2 rounded-full bg-emerald-500 text-black font-semibold hover:bg-emerald-400 transition-all text-sm shadow-lg shadow-emerald-500/20">
            Get Started
          </Link>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;