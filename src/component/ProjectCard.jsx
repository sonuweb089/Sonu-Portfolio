import { ExternalLink, Code2 } from "lucide-react";

const ProjectCard = ({ title, desc, tags }) => {
  return (
    <div
      className="
        bg-[#0F1620]
        rounded-2xl p-6 border border-white/5 shadow-[var(--shadow-glow)]
        transition-all duration-300
        hover:border-[hsl(var(--tech-accent))]
        hover:shadow-[0_0_30px_hsl(var(--tech-accent))]
      "
    >
      <h2 className="text-xl font-semibold text-white mb-3">{title}</h2>

      <p className="text-gray-400 text-[15px] leading-relaxed mb-4">{desc}</p>

      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map((tag, idx) => (
          <span
            key={idx}
            className="
              px-3 py-[6px] rounded-full
              bg-[#16212f] 
              border border-white/10
              text-[13px] text-[#7ef2c8]
            "
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex items-center gap-3">
        <button
          className="
            flex items-center gap-2 px-6 py-2 rounded-lg
            bg-black border border-white/10 text-white
            hover:border-[hsl(var(--tech-accent))]
            hover:text-[hsl(var(--tech-accent))]
            transition-all
          "
        >
          <Code2 size={16} />
          Code
        </button>

        <button
          className="
            flex items-center gap-2 px-6 py-2 rounded-lg
            bg-[hsl(var(--tech-accent))] text-black font-medium
            hover:opacity-90 transition-all
          "
        >
          <ExternalLink size={16} />
          Demo
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
