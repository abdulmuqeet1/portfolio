import { motion } from "framer-motion";

const stats = [
  { value: "4+", label: "Years Experience" },
  { value: "30+", label: "Projects Shipped" },
  { value: "10+", label: "Technologies" },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative z-10 section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm font-mono text-primary tracking-widest uppercase mb-3">About Me</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
            Passionate about <span className="text-gradient">code & craft</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mb-12 leading-relaxed">
            I'm a software engineer who loves building high-performance web applications, interactive 3D experiences, scalable
            backend systems and AI based solutions. Passionate about working with great teams to solve difficult and ambiguous technical problems with outsized impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="glass rounded-lg p-8 text-center hover:glow-box transition-shadow duration-500"
            >
              <p className="text-4xl font-bold text-gradient mb-2">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
