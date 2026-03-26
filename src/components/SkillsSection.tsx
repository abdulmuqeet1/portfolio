import { motion } from "framer-motion";

const skillGroups = [
  {
    category: "Frontend",
    skills: ["React", "TypeScript", "Next.js", "Three.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Python", "Go", "PostgreSQL", "Redis", "GraphQL"],
  },
  {
    category: "DevOps & Tools",
    skills: ["Docker", "AWS", "CI/CD", "Git"],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="relative z-10 section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm font-mono text-primary tracking-widest uppercase mb-3">Stack</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-foreground">
            Tech <span className="text-gradient">Arsenal</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: gi * 0.15, duration: 0.5 }}
              className="glass rounded-xl p-8"
            >
              <h3 className="text-lg font-bold text-primary mb-6 font-mono">{`// ${group.category}`}</h3>
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill, si) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: gi * 0.1 + si * 0.05 }}
                    whileHover={{ scale: 1.1 }}
                    className="px-4 py-2 rounded-lg bg-secondary text-sm text-foreground font-medium hover:glow-box hover:text-primary transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
