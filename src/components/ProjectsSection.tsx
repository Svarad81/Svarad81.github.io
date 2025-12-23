import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'UrbanFlow Traffic Management',
    description: 'Dual-mode, real-time traffic management prototype with computer vision. Features synchronized user and enterprise views, dynamic density charting, and instant manual signal override.',
    tags: ['Computer Vision', 'Real-time', 'Dashboard'],
    link: '#',
  },
  {
    title: 'Smart Price Tracker',
    description: 'Web app using Gemini API and Google Search Grounding for real-time e-commerce price data. Visualizes comparisons with Chart.js and provides AI-driven deal analysis.',
    tags: ['Gemini API', 'Chart.js', 'AI'],
    link: '#',
  },
  {
    title: 'Drowsiness Detection System',
    description: 'Real-time drowsiness detection system using computer vision and machine learning to enhance driver safety through facial landmark analysis.',
    tags: ['ML', 'OpenCV', 'Safety'],
    link: '#',
  },
  {
    title: 'Blockchain Voting System',
    description: 'Secure and transparent blockchain-based voting system ensuring trust, integrity, and tamper-proof election processes with decentralized verification.',
    tags: ['Blockchain', 'Security', 'Web3'],
    link: '#',
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="pill mb-4">Portfolio</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mt-4 mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A collection of projects showcasing my skills in web development, 
            AI integration, and creative problem-solving.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              {...project}
              index={index}
            />
          ))}
        </div>
        
        {/* View all link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-medium link-underline"
          >
            View all projects on GitHub
            <span>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
