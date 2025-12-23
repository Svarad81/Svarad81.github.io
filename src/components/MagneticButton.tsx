import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface MagneticButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'outline' | 'ghost';
  className?: string;
}

const MagneticButton = ({
  children,
  href,
  onClick,
  variant = 'primary',
  className = '',
}: MagneticButtonProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current?.getBoundingClientRect() || {
      left: 0,
      top: 0,
      width: 0,
      height: 0,
    };
    const x = (clientX - (left + width / 2)) * 0.2;
    const y = (clientY - (top + height / 2)) * 0.2;
    setPosition({ x, y });
  };

  const reset = () => setPosition({ x: 0, y: 0 });

  const variants = {
    primary:
      'bg-primary text-primary-foreground hover:shadow-[0_0_30px_hsl(var(--primary)/0.6)]',
    outline:
      'border-2 border-primary text-primary hover:bg-primary/10 hover:shadow-[0_0_20px_hsl(var(--primary)/0.4)]',
    ghost:
      'text-foreground hover:text-primary hover:bg-primary/5',
  };

  const ButtonContent = (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 350, damping: 15, mass: 0.1 }}
      className={`
        inline-flex items-center justify-center gap-2
        px-8 py-4 rounded-lg font-heading font-semibold uppercase tracking-wider
        transition-all duration-300 cursor-pointer
        ${variants[variant]}
        ${className}
      `}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="inline-block">
        {ButtonContent}
      </a>
    );
  }

  return ButtonContent;
};

export default MagneticButton;