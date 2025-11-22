"use client";
import React from "react";
import { motion } from "framer-motion";
import { LayoutGrid, Server, Database, Code2 } from "lucide-react";

const techCategories = [
  {
    icon: <LayoutGrid className="w-6 h-6 text-emerald-400" />,
    title: "Frontend",
    items: [
      "React.js",
      "Tailwind CSS",
      "JavaScript (ES6+)",
      "HTML5/CSS3",
      "Redux",
      "TypeScript",
    ],
  },
  {
    icon: <Server className="w-6 h-6 text-emerald-400" />,
    title: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "RESTful APIs",
      "JWT Auth",
      "Middleware",
      "Error Handling",
    ],
  },
  {
    icon: <Database className="w-6 h-6 text-emerald-400" />,
    title: "Database",
    items: [
      "MongoDB",
      "Mongoose",
      "PostgreSQL",
      "Database Design",
      "Query Optimization",
    ],
  },
  {
    icon: <Code2 className="w-6 h-6 text-emerald-400" />,
    title: "Tools & More",
    items: [
      "Git/GitHub",
      "VS Code",
      "Postman",
      "npm/yarn",
      "Responsive Design",
      "Agile/Scrum",
    ],
  },
];

const TechStack = () => {
  return (
    <section
      id="tech"
      className="py-24 px-6 bg-[#0d1117] relative overflow-hidden"
    >
      {/* Glowing background shadow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.1),transparent_70%)] pointer-events-none"></div>

      {/* Heading Animation */}
      <motion.h2
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-center 
                   text-emerald-400 mb-16 drop-shadow-[0_0_20px_rgba(16,185,129,0.7)]"
      >
        Tech Stack
      </motion.h2>

      {/* Grid Animation */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {techCategories.map((cat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-[#0f161c]/70 border border-white/10 
                       shadow-[0px_0px_40px_rgba(16,185,129,0.12)] 
                       backdrop-blur-md hover:shadow-[0px_0px_55px_rgba(16,185,129,0.25)]
                       transition-shadow duration-300"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-emerald-500/10 mb-6">
              {cat.icon}
            </div>

            <h3 className="text-xl font-semibold mb-4 text-white">
              {cat.title}
            </h3>

            <ul className="space-y-2">
              {cat.items.map((item, idx) => (
                <li
                  key={idx}
                  className="text-gray-300 text-sm flex items-center gap-2"
                >
                  <span className="text-emerald-400">▸</span> {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
