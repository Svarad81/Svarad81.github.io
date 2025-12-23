import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Lightbulb, Target, Rocket, Heart } from 'lucide-react';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const skills = [
    { icon: Lightbulb, title: 'Problem Solver', desc: 'Turning complex challenges into elegant solutions' },
    { icon: Target, title: 'Detail Oriented', desc: 'Pixel-perfect designs with clean code' },
    { icon: Rocket, title: 'Fast Learner', desc: 'Always exploring new technologies' },
    { icon: Heart, title: 'Passionate', desc: 'Love building things that matter' },
  ];

  return (
    <section ref={ref} className="py-24 px-4 relative overflow-hidden" id="about">
      {/* Subtle background accent */}
      <div className="absolute inset-0 bg-muted/30" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="pill mb-4">About Me</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mt-4 mb-6">
            Crafting Digital <span className="gradient-text">Experiences</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            I'm Varad Chakrawar, a passionate student software developer focused on building 
            scalable web applications that combine beautiful design with robust functionality.
          </p>
        </motion.div>
        
        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <skill.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">{skill.title}</h3>
              <p className="text-muted-foreground text-sm">{skill.desc}</p>
            </motion.div>
          ))}
        </div>
        
        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: '4+', label: 'Projects' },
            { value: '2+', label: 'Years Learning' },
            { value: '∞', label: 'Curiosity' },
            { value: '100%', label: 'Dedication' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-heading text-4xl md:text-5xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground text-sm font-medium uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
