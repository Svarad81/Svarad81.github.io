import { Helmet } from 'react-helmet';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Varad Chakrawar - Web Developer</title>
        <meta name="description" content="Varad Chakrawar - Passionate web developer creating modern, responsive, and user-friendly web applications." />
        <meta name="keywords" content="Varad Chakrawar, Web Developer, React, Full Stack, Portfolio" />
        <meta property="og:title" content="Varad Chakrawar - Web Developer" />
        <meta property="og:description" content="Passionate web developer creating modern, responsive, and user-friendly web applications." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://varadchakrawar.dev" />
      </Helmet>
      
      <div className="min-h-screen bg-background text-foreground">
        <ScrollProgress />
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <Footer />
      </div>
    </>
  );
};

export default Index;
