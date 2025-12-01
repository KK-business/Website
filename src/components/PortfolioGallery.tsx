import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryImage {
  id: number;
  src: string;
  category: 'gaming-pcs' | 'signs';
  title: string;
  orientation?: 'portrait' | 'landscape';
}

const images: GalleryImage[] = [
  { id: 2, src: '/WhatsApp Image 2025-12-01 at 12.34.22 PM (2).jpeg', category: 'gaming-pcs', title: 'Blue RGB Gaming PC' },
  { id: 4, src: '/WhatsApp Image 2025-12-01 at 12.34.22 PM (4).jpeg', category: 'gaming-pcs', title: 'Red RGB Gaming PC' },
  { id: 6, src: '/WhatsApp Image 2025-12-01 at 12.34.22 PM (6).jpeg', category: 'gaming-pcs', title: 'Yellow RGB Gaming PC' },
  { id: 10, src: '/WhatsApp Image 2025-12-01 at 12.34.22 PM (15).jpeg', category: 'gaming-pcs', title: 'Blue & Pink RGB Gaming PC' },
  { id: 11, src: '/WhatsApp Image 2025-12-01 at 12.34.22 PM (16).jpeg', category: 'gaming-pcs', title: 'Orange RGB Gaming Build' },
  { id: 13, src: '/WhatsApp Image 2025-12-01 at 12.34.22 PM (13).jpeg', category: 'gaming-pcs', title: 'Rainbow RGB Gaming PC' },
  { id: 14, src: '/WhatsApp Image 2025-12-01 at 12.34.22 PM (14).jpeg', category: 'gaming-pcs', title: 'Green RGB Gaming Build' },
  { id: 26, src: '/WhatsApp Image 2025-12-01 at 12.34.22 PM (22).jpeg', category: 'gaming-pcs', title: 'Blue & Pink RGB Gaming PC Build' },
  { id: 28, src: '/WhatsApp Image 2025-12-01 at 12.34.22 PM (24).jpeg', category: 'gaming-pcs', title: 'Rainbow RGB Premium Gaming Build' },
  { id: 1, src: '/WhatsApp Image 2025-12-01 at 12.34.22 PM (1).jpeg', category: 'signs', title: 'Truck Parts & Diesel Shop Banners' },
  { id: 8, src: '/WhatsApp Image 2025-12-01 at 12.34.22 PM (8).jpeg', category: 'signs', title: 'H-Town Artificial Turf Vehicle Wrap' },
  { id: 9, src: '/WhatsApp Image 2025-12-01 at 12.34.22 PM (10).jpeg', category: 'signs', title: 'G-LINIT Towing & Recovery Truck Wrap' },
  { id: 10, src: '/WhatsApp Image 2025-12-01 at 12.34.22 PM (11).jpeg', category: 'signs', title: 'Security Patrol Vehicle Wrap' },
  { id: 12, src: '/WhatsApp Image 2025-12-01 at 12.34.22 PM (12).jpeg', category: 'signs', title: 'ABLE Medicaid Waiver Window Signs' },
  { id: 16, src: '/WhatsApp Image 2025-12-01 at 12.34.22 PM (17).jpeg', category: 'signs', title: 'Hair & Beauty Salon Window Graphics' },
  { id: 17, src: '/WhatsApp Image 2025-12-01 at 12.34.22 PM (9).jpeg', category: 'signs', title: 'InStyle Beauty Salon Storefront' },
  { id: 18, src: '/WhatsApp Image 2025-12-01 at 12.34.22 PM (18).jpeg', category: 'signs', title: 'Chef2Go Restaurant Storefront Sign' },
  { id: 29, src: '/WhatsApp Image 2025-12-01 at 12.34.22 PM (19).jpeg', category: 'signs', title: 'Chef2Go Restaurant Window Graphics' },
  { id: 30, src: '/WhatsApp Image 2025-12-01 at 12.34.22 PM (21).jpeg', category: 'signs', title: 'OIIC Security Vehicle Wrap' },
  { id: 19, src: '/WhatsApp Image 2025-12-01 at 12.34.22 PM (20).jpeg', category: 'signs', title: 'OMC Security Vehicle Wrap' },
  { id: 20, src: '/WhatsApp Image 2025-12-01 at 12.34.23 PM.jpeg', category: 'signs', title: 'PATROL Investigations Vehicle Wrap' },
  { id: 21, src: '/WhatsApp Image 2025-12-01 at 12.34.23 PM (1).jpeg', category: 'signs', title: 'PATROL Defense Vehicle Back Wrap' },
  { id: 22, src: '/WhatsApp Image 2025-12-01 at 12.34.23 PM (2).jpeg', category: 'signs', title: 'Defense PATROL Vehicle Rear Graphics' },
  { id: 23, src: '/WhatsApp Image 2025-12-01 at 12.34.23 PM (5).jpeg', category: 'signs', title: 'Haven Security Vehicle Wrap' },
  { id: 15, src: '/WhatsApp Image 2025-12-01 at 12.45.54 PM.jpeg', category: 'signs', title: 'Aspen Health Care Clinic Banner' },
  { id: 24, src: '/WhatsApp Image 2025-12-01 at 12.48.31 PM.jpeg', category: 'signs', title: 'Nigerian Food Catering Business Card' },
  { id: 25, src: '/WhatsApp Image 2025-12-01 at 12.50.07 PM.jpeg', category: 'signs', title: 'Kemfat Auto Investment Business Card' },
];

export default function PortfolioGallery() {
  const [filter, setFilter] = useState<'gaming-pcs' | 'signs'>('gaming-pcs');
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [imageLoaded, setImageLoaded] = useState<{ [key: number]: boolean }>({});
  const [imageDimensions, setImageDimensions] = useState<{ [key: number]: { width: number; height: number } }>({});

  const filteredImages = images.filter(img => img.category === filter);

  const openLightbox = (index: number) => {
    const actualIndex = images.findIndex(img => img.id === filteredImages[index].id);
    setSelectedIndex(actualIndex);
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  const goToPrevious = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
    }
  };

  const goToNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % images.length);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') goToPrevious();
      if (e.key === 'ArrowRight') goToNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex]);

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Work</h2>
          <p className="text-xl text-white/60">Showcasing our custom builds and projects</p>
        </motion.div>

        <div className="flex justify-center mb-12 flex-wrap gap-3">
          <button
            onClick={() => setFilter('gaming-pcs')}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
              filter === 'gaming-pcs'
                ? 'bg-white text-black'
                : 'bg-white/10 text-white/70 hover:bg-white/20'
            }`}
          >
            Custom Gaming PCs
          </button>
          <button
            onClick={() => setFilter('signs')}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
              filter === 'signs'
                ? 'bg-white text-black'
                : 'bg-white/10 text-white/70 hover:bg-white/20'
            }`}
          >
            Signs & Printing
          </button>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((item, index) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, scale: 0.8, rotateY: 15 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                  type: "spring",
                  stiffness: 100
                }}
                onClick={() => openLightbox(index)}
                className="group relative overflow-hidden rounded-2xl cursor-pointer aspect-[4/3] bg-white/5"
              >
                <motion.div
                  className="absolute inset-0"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    loading="lazy"
                    onLoad={(e) => {
                      const img = e.currentTarget;
                      setImageLoaded(prev => ({ ...prev, [item.id]: true }));
                      setImageDimensions(prev => ({
                        ...prev,
                        [item.id]: { width: img.naturalWidth, height: img.naturalHeight }
                      }));
                    }}
                    className={`w-full h-full object-cover transition-all duration-700 ${
                      imageLoaded[item.id] ? 'opacity-100 blur-0' : 'opacity-0 blur-sm'
                    }`}
                  />
                </motion.div>

                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />

                <motion.div
                  className="absolute inset-0 flex items-end p-6"
                  initial={{ y: 20, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div>
                    <h3 className="text-white text-lg font-semibold mb-1">{item.title}</h3>
                    <p className="text-white/70 text-sm">
                      {item.category === 'gaming-pcs' ? 'Custom Gaming PC' : 'Signs & Printing'}
                    </p>
                  </div>
                </motion.div>

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute inset-0 border-2 border-white/20 rounded-2xl" />
                  <div className="absolute top-4 right-4 w-3 h-3 bg-white/40 rounded-full animate-ping" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4"
            onClick={closeLightbox}
          >
            <motion.button
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              onClick={(e) => {
                e.stopPropagation();
                closeLightbox();
              }}
              className="absolute top-6 right-6 p-3 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-all z-10"
            >
              <X className="w-6 h-6" />
            </motion.button>

            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              className="absolute left-6 p-3 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-all z-10"
            >
              <ChevronLeft className="w-8 h-8" />
            </motion.button>

            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-6 p-3 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-all z-10"
            >
              <ChevronRight className="w-8 h-8" />
            </motion.button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={selectedIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.3 }}
                  src={images[selectedIndex].src}
                  alt={images[selectedIndex].title}
                  onLoad={(e) => {
                    const img = e.currentTarget;
                    setImageDimensions(prev => ({
                      ...prev,
                      [images[selectedIndex].id]: { width: img.naturalWidth, height: img.naturalHeight }
                    }));
                  }}
                  className={
                    imageDimensions[images[selectedIndex].id]?.height > imageDimensions[images[selectedIndex].id]?.width
                      ? 'max-h-[85vh] w-auto rounded-2xl'
                      : 'max-w-[90vw] max-h-[70vh] w-auto rounded-2xl'
                  }
                  style={{ objectFit: 'contain' }}
                />
              </AnimatePresence>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-6 text-center bg-white/10 backdrop-blur-md rounded-2xl p-6 max-w-2xl w-full"
              >
                <h3 className="text-white text-2xl font-bold mb-2">{images[selectedIndex].title}</h3>
                <p className="text-white/70">
                  {images[selectedIndex].category === 'gaming-pcs' ? 'Custom Gaming PC' : 'Signs & Printing'}
                </p>
                <p className="text-white/50 text-sm mt-2">
                  {selectedIndex + 1} / {images.length}
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
