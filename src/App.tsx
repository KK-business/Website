import { useEffect, useState } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ComputerServices from './components/ComputerServices';
import SignsPrinting from './components/SignsPrinting';
import PortfolioGallery from './components/PortfolioGallery';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import AnimatedBackground from './components/AnimatedBackground';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) return;

    document.body.style.cursor = 'none';

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical' as const,
      gestureOrientation: 'vertical' as const,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      document.body.style.cursor = 'auto';
      lenis.destroy();
    };
  }, [isLoading]);

  if (isLoading) {
    return <LoadingScreen onComplete={() => setIsLoading(false)} />;
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
      <AnimatedBackground />
      <div className="relative z-10">
        <CustomCursor />
        <ScrollProgress />
        <Navbar />
        <Hero />
        <ComputerServices />
        <SignsPrinting />
        <PortfolioGallery />
        <About />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
