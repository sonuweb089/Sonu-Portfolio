"use client";
import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-b from-[#0b0f14] to-[#0f1720] text-neutral-300 py-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        {/* LEFT SIDE TEXT */}
        <div className="text-center md:text-left mb-6 md:mb-0">
          <p className="text-sm mb-2">
            © {new Date().getFullYear()} Sonu • All rights reserved.
          </p>
        </div>

        {/* RIGHT SIDE ICONS */}
        <div className="flex items-center gap-6">
          <p className="text-sm flex items-center gap-1 justify-center md:justify-start">
            Created with
            <span className="text-blue-400 font-semibold">React</span>,
            <span className="text-teal-400 font-semibold">Tailwind CSS</span>
            and lots of
            <span className="text-amber-400 font-bold">chai &#9749;</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
