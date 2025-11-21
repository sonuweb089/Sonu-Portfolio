"use client";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <section className="w-full py-20 px-6 md:px-20 bg-[#0b111e]">
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center text-4xl md:text-5xl font-bold text-[hsl(158,64%,52%)] mb-12"
      >
        About Me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="
          bg-[#111827]/60 
          rounded-2xl 
          px-8 md:px-14 py-10 
          shadow-[0_0_40px_hsl(158_64%_52%_/_0.15)] 
          border border-[#1f293760] 
          backdrop-blur-xl
          text-gray-300
          leading-relaxed
        "
      >
        <p className="mb-6">
          I’m a passionate Full Stack Developer with expertise in building
          modern web applications using the MERN stack and other cutting-edge
          technologies. My journey in web development has equipped me with a
          strong foundation in both frontend and backend development.
        </p>

        <p className="mb-6">
          I focus on building clean, responsive, user-friendly interfaces and
          robust backend systems. I enjoy working with React.js for UI, Node.js
          & Express for server-side logic, and MongoDB with Mongoose for
          efficient data handling.
        </p>

        <p className="mb-10">
          I believe in writing clean, scalable, and maintainable code — while
          constantly learning and adopting new technologies.
        </p>

        <h3 className="text-xl font-semibold text-[hsl(158,64%,52%)] mb-4">
          When I'm not coding
        </h3>

        <p>
          I enjoy exploring new technologies, contributing to open-source
          projects, and sharing knowledge with the developer community. I
          believe in continuous learning and collaboration to build better
          software.
        </p>
      </motion.div>
    </section>
  );
};

export default AboutMe;
