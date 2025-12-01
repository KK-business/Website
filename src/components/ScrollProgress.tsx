import { motion, useScroll, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      setIsVisible(latest > 0);
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 origin-left z-50"
      style={{ scaleX }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600" />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 blur-sm" />
      <div
        className="absolute inset-0 bg-blue-400"
        style={{
          boxShadow: '0 0 20px rgba(59, 130, 246, 0.8), 0 0 40px rgba(59, 130, 246, 0.5), 0 4px 8px rgba(59, 130, 246, 0.3)'
        }}
      />
    </motion.div>
  );
}
