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
    <section id="tech" className="py-24 px-6 bg-[#0d1117]">
      <h2 className="text-4xl md:text-5xl font-bold text-center text-emerald-400 mb-16">
        Tech Stack
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {techCategories.map((cat, index) => (
          <div
            key={index}
            className="p-8 rounded-2xl bg-[#0f161c]/70 border border-white/10 shadow-[0px_0px_40px_rgba(16,185,129,0.15)] backdrop-blur-md"
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
