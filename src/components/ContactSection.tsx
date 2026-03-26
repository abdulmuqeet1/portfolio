import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

const socials = [
  { icon: Mail, label: "Email", href: "mailto:abdulmuqeet521@gmail.com" },
  { icon: Github, label: "GitHub", href: "https://github.com/abdulmuqeet1" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/muqet" },
];

export default function ContactSection() {
  return (
    <section id="contact" className="relative z-10 section-padding">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm font-mono text-primary tracking-widest uppercase mb-3">Contact</p>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Let's <span className="text-gradient">connect</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-xl mx-auto">
            Got a project in mind? Let's build something extraordinary together.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex justify-center gap-6"
        >
          {socials.map((s, i) => (
            <motion.a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -4 }}
              whileTap={{ scale: 0.95 }}
              className="glass rounded-xl p-5 hover:glow-box transition-shadow duration-500"
            >
              <s.icon size={24} className="text-primary" />
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-24 pt-8 border-t border-border"
        >
          <p className="text-xs text-muted-foreground font-mono">
            © {new Date().getFullYear()} — Designed & Built with passion
          </p>
        </motion.div>
      </div>
    </section>
  );
}
