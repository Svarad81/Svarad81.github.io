import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import SocialLinks from './SocialLinks';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-16 px-4 border-t border-border/50 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Logo/Name */}
          <h3 className="font-heading text-2xl font-bold gradient-text mb-6">
            Varad Chakrawar
          </h3>
          
          {/* Quick links */}
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            {['About', 'Projects', 'Contact'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-muted-foreground hover:text-primary transition-colors font-medium link-underline"
              >
                {link}
              </a>
            ))}
          </div>
          
          {/* Social links */}
          <div className="mb-8">
            <SocialLinks />
          </div>
          
          {/* Copyright */}
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
            © {currentYear} Varad Chakrawar. Built with{' '}
            <Heart className="w-4 h-4 text-primary inline fill-primary" />{' '}
            and React
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
