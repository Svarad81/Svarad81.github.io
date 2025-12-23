import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const socials = [
  {
    name: 'GitHub',
    icon: Github,
    href: 'https://github.com/yourprofile',
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/varad-chakrawar-8b377527a',
  },
  {
    name: 'Email',
    icon: Mail,
    href: 'mailto:svaradchakrawar@gmail.com',
  },
];

const SocialLinks = () => {
  return (
    <div className="flex items-center justify-center gap-4">
      {socials.map((social, index) => (
        <motion.a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative p-3 rounded-full bg-card border border-border/50 hover:border-primary/30 transition-all duration-300"
          whileHover={{ scale: 1.1, y: -3 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          aria-label={social.name}
        >
          <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
        </motion.a>
      ))}
    </div>
  );
};

export default SocialLinks;
