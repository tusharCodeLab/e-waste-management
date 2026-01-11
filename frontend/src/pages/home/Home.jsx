import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Recycle, ShieldCheck, Cpu, Search, TrendingUp } from "lucide-react";
import Navbar from "../../components/layout/Navbar";
import ImpactChart from "../../components/charts/ImpactChart";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const Home = () => {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-emerald-500 selection:text-black overflow-x-hidden">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Abstract Background Animation (Simulating Aurora/Spline) */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_#10B98115_0%,_transparent_50%)] animate-pulse" />
        <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />

        <div className="relative z-10 text-center max-w-4xl px-6">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.div variants={fadeInUp} className="inline-block px-4 py-1.5 mb-6 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-semibold tracking-wide uppercase">
              The Future of e-Waste Management
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500">
              Turn Your Old Tech <br /> Into <span className="text-emerald-500">New Value</span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
              A professional marketplace connecting businesses and individuals to responsibly recycle, refurbish, and exchange electronic waste.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group relative px-8 py-4 rounded-full bg-emerald-600 text-white font-bold text-lg overflow-hidden shadow-lg hover:shadow-emerald-500/40 transition-all">
                <span className="relative z-10 flex items-center gap-2">
                  List e-Waste <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>
              
              <button className="px-8 py-4 rounded-full border border-gray-700 bg-gray-900/50 text-gray-300 font-semibold hover:bg-gray-800 transition-all backdrop-blur-sm">
                Find Components
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- THE PROBLEM (IMPACT) --- */}
      <section className="py-24 bg-gray-950 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Why It Matters?</h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              E-waste is the fastest-growing domestic waste stream globally. Improper disposal releases toxic chemicals like lead and mercury into the soil and water.
            </p>
            <ul className="space-y-4">
              {[
                "Toxic chemicals leach into groundwater",
                "Valuable metals (Gold, Copper) are lost forever",
                "Carbon footprint of manufacturing new devices increases"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-300">
                  <div className="h-2 w-2 rounded-full bg-red-500" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-900/50 p-8 rounded-2xl border border-white/5">
            <h3 className="text-center text-sm font-semibold text-gray-400 mb-6">Current Global Disposal Stats</h3>
            <ImpactChart />
          </div>
        </div>
      </section>

      {/* --- HOW IT WORKS (STEPS) --- */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How EcoVault Works</h2>
            <p className="text-gray-400">Five simple steps to circular economy.</p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              { icon: Cpu, title: "List Item", desc: "Enter specs & condition." },
              { icon: Search, title: "AI Sort", desc: "Auto-categorized by type." },
              { icon: ShieldCheck, title: "Verification", desc: "Admin approves quality." },
              { icon: TrendingUp, title: "Exchange", desc: "Connect with buyers." },
              { icon: Recycle, title: "Recycle", desc: "Proper disposal tracking." }
            ].map((step, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="p-6 rounded-xl bg-gray-900 border border-white/5 hover:border-emerald-500/30 transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500 mb-4 group-hover:bg-emerald-500 group-hover:text-black transition-colors">
                  <step.icon size={24} />
                </div>
                <h3 className="font-semibold mb-2">{idx + 1}. {step.title}</h3>
                <p className="text-sm text-gray-400">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-12 border-t border-white/10 bg-black text-center text-gray-500 text-sm">
        <div className="mb-4">
          <span className="font-bold text-white text-lg">EcoVault</span>
        </div>
        <p>© 2026 EcoVault Platform. Designed for Sustainability.</p>
        <p className="mt-2 text-xs text-gray-600">
          Disclaimer: This is a software platform. Logistics and payments are handled offline.
        </p>
      </footer>
    </div>
  );
};

export default Home;