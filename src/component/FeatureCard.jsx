import ProjectCard from "./ProjectCard";

const FeaturedProjects = () => {
  return (
    <div className="w-full py-20 bg-[#0b0f14] text-white">
      <h1 className="text-center text-4xl font-bold mb-16 text-[hsl(var(--tech-accent))]">
        Featured Projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-6">
        <ProjectCard
          title="E-Commerce Platform"
          desc="Full-stack MERN application with user authentication, product management, shopping cart, and payment integration."
          tags={["React", "Node.js", "MongoDB", "Express", "Stripe"]}
        />

        <ProjectCard
          title="Task Management System"
          desc="Collaborative project management tool with real-time updates, team dashboards, and task tracking."
          tags={["React", "Express", "MongoDB", "Socket.io", "JWT"]}
        />

        <ProjectCard
          title="Social Media Dashboard"
          desc="Analytics dashboard for social media metrics with data visualizations, user insights, and reporting features."
          tags={["React", "Node.js", "PostgreSQL", "Chart.js", "Tailwind"]}
        />
      </div>
    </div>
  );
};

export default FeaturedProjects;
