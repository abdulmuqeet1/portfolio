import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Management Suite for Founders and Investors",
    description: "A Management Suite for startup which provides founders resources, software solutions and communities to grow their startup",
    tech: ["Next.js", "Node.js", "Strapi", "AWS"],
    year: "2025",
  },
    {
    title: "Social Media Platform & Forum",
    description: "International anti-bullying and youth empowerment platform and forum.",
    tech: ["Next.js", "Node.js", "Strapi", "AWS"],
    year: "2024",
  },
  // {
  //   title: "E-Commerce Platform",
  //   description: "Full-stack marketplace with real-time inventory, payments, and recommendation engine.",
  //   tech: ["Next.js", "Node.js", "Stripe", "Redis"],
  //   year: "2024",
  // },
  {
    title: "Ed-Tech SaaS Platform",
    description: "Ed-Tech platform with quiz generator, adaptive leaning and analytics dashboard for teachers and students.",
    tech: ["React", "Node.js", "Express", "TypeScript", "Python"],
    year: "2022",
  },
  {
    title: "3D Visualization Tool",
    description: "WebGL-powered data visualization tool for dashboard analytics.",
    tech: ["Three.js", "React", "WebGL", "Chart.js"],
    year: "2021",
  },
  {
    title: "Complete Online solution for Trading LLC",
    description: "Complete Online solution for Trading LLC UAE, including website, inventory management and analytics dashboard.",
    tech: ["React", "Node.js", "Chart.js", "Webpack"],
    year: "2025",
  },
];

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const trackWidth = track.scrollWidth - window.innerWidth;

      // Section top has reached viewport top
      if (rect.top <= 0 && rect.bottom > window.innerHeight) {
        setIsSticky(true);
        // Calculate how far we've scrolled into the pinned section
        const scrolled = -rect.top;
        const totalScroll = section.offsetHeight - window.innerHeight;
        const progress = Math.min(Math.max(scrolled / totalScroll, 0), 1);
        track.style.transform = `translateX(-${progress * trackWidth}px)`;
      } else {
        setIsSticky(false);
        if (rect.top > 0) {
          track.style.transform = `translateX(0px)`;
        } else {
          track.style.transform = `translateX(-${trackWidth}px)`;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Height = 100vh + (number of cards * card scroll distance)
  const scrollHeight = `${100 + projects.length * 80}vh`;

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative z-10"
      style={{ height: scrollHeight }}
    >
      <div
        className={`${isSticky ? "fixed top-0 left-0 right-0" : "relative"} h-screen flex flex-col justify-center overflow-hidden`}
      >
        <div className="px-6 md:px-12 lg:px-24 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm font-mono text-primary tracking-widest uppercase mb-3">Works</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Selected <span className="text-gradient">Projects</span>
            </h2>
          </motion.div>
        </div>

        <div
          ref={trackRef}
          className="flex gap-8 px-6 md:px-12 lg:px-24 will-change-transform"
          style={{ transition: "none" }}
        >
          {projects.map((project, i) => (
            <div
              key={project.title}
              className="glass rounded-xl p-8 md:p-10 group hover:glow-box transition-all duration-500 cursor-pointer flex-shrink-0"
              style={{ width: "min(500px, 80vw)" }}
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-mono text-primary">{project.year}</span>
                  <span className="w-8 h-px bg-primary/40" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3 group-hover:text-gradient transition-all">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs font-mono px-3 py-1 rounded-full bg-secondary text-primary">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 mt-auto">
                  <button className="p-3 rounded-lg bg-secondary text-muted-foreground hover:text-primary hover:glow-box transition-all">
                    <Github size={18} />
                  </button>
                  <button className="p-3 rounded-lg bg-secondary text-muted-foreground hover:text-primary hover:glow-box transition-all">
                    <ExternalLink size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
