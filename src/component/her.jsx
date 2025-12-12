"use client";
import React from "react";
import { motion } from "framer-motion";
import Profile from "../assets/s.png";
import { ShootingStars } from "./Ui/shooting-stars";
import { Download } from "lucide-react";
import Resume from "../assets/Sonu-Resume.pdf";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-6 md:px-12 relative overflow-hidden bg-[#081016]">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,rgba(30,60,80,0.45),transparent_70%)]"></div>
      <ShootingStars />

      <div className="relative w-full max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* ==== TEXT SECTION ==== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center md:text-left space-y-6"
        >
          {/* Intro */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xl md:text-2xl font-medium text-emerald-400 tracking-wide 
                       drop-shadow-[0_0_15px_rgba(16,185,129,0.6)]"
          >
            Hi, I’m <span className="font-bold text-white">Sonu</span>
          </motion.p>

          <h1
            className="
    text-4xl md:text-6xl font-bold tracking-tight 
    bg-gradient-to-r from-emerald-300 via-emerald-400 to-teal-300
    bg-clip-text text-transparent
    drop-shadow-[0_0_15px_rgba(16,185,129,0.6)]
  "
          >
            Full Stack Developer
          </h1>

          {/* Sub Text */}
          <p className="text-lg md:text-xl text-gray-400 max-w-xl">
            Crafting seamless digital experiences with React, Node.js, and
            modern web technologies.
          </p>

          {/* Buttons */}
          <div className="flex justify-center md:justify-start gap-4 pt-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-8 py-3 border border-emerald-400 text-white 
                         rounded-md hover:bg-white/5 transition"
            >
              Get in Touch
            </motion.button>
            <a href={Resume} download>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-8 py-3 bg-emerald-400 text-black font-semibold 
               rounded-md shadow-lg hover:bg-emerald-500 transition
               inline-flex items-center gap-2"
              >
                Resume
                {/* ICON LOOP ANIMATION */}
                <motion.div
                  animate={{ y: [0, -6, 0] }} // Up → Down → Up
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Download size={20} />
                </motion.div>
              </motion.button>
            </a>
          </div>
        </motion.div>

        {/* ==== IMAGE SECTION ==== */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center md:justify-end"
        >
          <img
            src={Profile}
            alt="profile"
            className="w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 
                       object-cover rounded-2xl shadow-lg 
                       shadow-emerald-400/20 hover:scale-105 
                       transition-transform duration-300"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
