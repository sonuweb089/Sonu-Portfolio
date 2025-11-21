import { motion } from "framer-motion";

const timelineData = [
  {
    title: "Bachelor of Science in Computer Science",
    subtitle: "Rimt University",
    desc: "Focused on Software Engineering, Data Structures, and Web Technologies",
    year: "2022 - 2026",
  },
  {
    title: "techgyan-tecnology",
    subtitle: "Coding Academy",
    desc: "Intensive program covering MERN stack and modern web development practices",
    year: "2024",
  },
  {
    title: "High School Diploma",
    subtitle: "Shri Guru Hargobind Sahib Public School",
    desc: "Mathematics and Computer Science focus",
    year: "2020 - 2022",
  },
];

const EducationTimeline = () => {
  return (
    <div className="w-full px-6 md:px-24 py-24 bg-[#0c0f14] text-white">
      <h2 className="text-center text-4xl md:text-5xl font-bold text-[#26e0a0] mb-16">
        Education
      </h2>

      <div className="relative border-l-2 border-[#26e0a0]/40 ml-6">
        {timelineData.map((item, index) => (
          <motion.div
            key={index}
            className="mb-16 ml-8 relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              duration: 0.6,
              delay: index * 0.2,
              ease: "easeOut",
            }}
          >
            {/* Dot */}
            <span className="absolute -left-10 w-5 h-5 bg-[#26e0a0] rounded-full shadow-[0_0_20px_#26e0a0]"></span>

            {/* Content */}
            <div>
              <h3 className="text-2xl font-semibold">{item.title}</h3>
              <p className="text-gray-400 mt-1">{item.subtitle}</p>
              <p className="text-gray-400 mt-2 leading-relaxed">{item.desc}</p>
            </div>

            {/* Year Badge */}
            <p className="absolute right-0 top-1 bg-[#26e0a0]/10 text-[#26e0a0] px-4 py-1 rounded-full text-sm backdrop-blur-md border border-[#26e0a0]/20">
              {item.year}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default EducationTimeline;
