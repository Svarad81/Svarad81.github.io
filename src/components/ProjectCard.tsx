import { motion } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  index: number;
}

const ProjectCard = ({ title, description, tags, link, github, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group relative"
    >
      <div className="relative p-8 rounded-3xl bg-card border border-border/50 overflow-hidden transition-all duration-500 hover:border-primary/30 hover:shadow-xl">
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Project number */}
        <div className="absolute top-6 right-6 font-heading text-6xl font-bold text-muted/20 group-hover:text-primary/10 transition-colors">
          {String(index + 1).padStart(2, '0')}
        </div>
        
        <div className="relative z-10">
          {/* Title */}
          <h3 className="font-heading text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          
          {/* Description */}
          <p className="text-muted-foreground leading-relaxed mb-6">
            {description}
          </p>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-medium rounded-full bg-muted text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
          
          {/* Links */}
          <div className="flex items-center gap-4">
            {link && (
              <motion.a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all duration-300"
                whileHover={{ x: 3 }}
              >
                View Project
                <ArrowUpRight className="w-4 h-4" />
              </motion.a>
            )}
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-muted transition-colors"
                aria-label="View on GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
