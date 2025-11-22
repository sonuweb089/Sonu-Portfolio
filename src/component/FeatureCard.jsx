"use client";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const FeaturedProjects = () => {
  return (
    <div className="w-full py-20 bg-[#0b0f14] text-white relative overflow-hidden">
      {/* Glowing Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="
          text-center text-4xl md:text-5xl font-bold mb-16 
          text-[hsl(var(--tech-accent))]
          drop-shadow-[0_0_18px_rgba(0,255,180,0.55)]
        "
      >
        Featured Projects
      </motion.h1>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-6">
        {[
          {
            title: "Learing Management System",
            desc: "Full-stack MERN application with authentication, product management, cart & payments.",
            tags: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
          },
          {
            title: "Crypto-Weather",
            desc: "Real-time collaboration tool with dashboards, notifications & role-based access.",
            tags: ["React", "Tailwind", "Api"],
          },
          {
            title: "Social Media Dashboard",
            desc: "Analytics dashboard for insights, charts, performance metrics & reports.",
            tags: ["React", "Node.js", "Express", "Mongoose", "Tailwind"],
          },
        ].map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.15 }}
            viewport={{ once: true }}
            whileHover={{
              y: -10,
              scale: 1.03,
              boxShadow: "0px 0px 25px rgba(0,255,180,0.4)",
            }}
            className="h-full"
          >
            <div className="h-full">
              <ProjectCard {...project} />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProjects;
