import React from "react";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import { motion } from "framer-motion";

const GetInTouch = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#0b0f14] to-[#0f1720] flex items-center justify-center px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-5xl"
      >
        {/* Heading */}
        <h1 className="text-center text-5xl md:text-6xl font-bold text-[#3fffd7] mb-10">
          Get In Touch
        </h1>

        {/* Card */}
        <div className="bg-gradient-to-b from-[#131a22] to-[#0f1620] border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl shadow-black/40">
          {/* Description */}
          <p className="text-center text-gray-300 text-lg max-w-3xl mx-auto mb-12 leading-relaxed">
            I'm currently open to new opportunities and interesting projects.
            Whether you have a question or just want to say hi, feel free to
            reach out!
          </p>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <ContactCard
              icon={<Mail size={28} />}
              title="Email"
              value="sonuk24227@gmail.com"
            />
            <ContactCard
              icon={<Github size={28} />}
              title="GitHub"
              value="github.com/sonu164"
            />
            <ContactCard
              icon={<Linkedin size={28} />}
              title="LinkedIn"
              value="www.linkedin.com/in/sonu-kumar-7a3b72264"
            />
            <ContactCard
              icon={<Twitter size={28} />}
              title="Twitter"
              value="Sonukumar"
            />
          </div>

          {/* Button */}
          <div className="flex justify-center">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              href="mailto:sonuk24227@gmail.com"
              className="inline-flex items-center gap-3 bg-[#31e6be] text-black font-semibold px-8 py-3 rounded-xl shadow-lg shadow-[#31e6be]/20"
            >
              <Mail size={20} />
              Send me an email
            </motion.a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default GetInTouch;
function ContactCard({ icon, title, value }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 120 }}
      className="bg-[#1a2230] border border-white/10 rounded-xl p-6 text-center shadow-lg"
    >
      <div className="flex justify-center mb-3 text-[#3fffd7]">{icon}</div>
      <h3 className="text-white font-semibold mb-1">{title}</h3>
      <p className="text-gray-400 text-sm">{value}</p>
    </motion.div>
  );
}
