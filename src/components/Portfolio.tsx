import { useState } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

interface PortfolioItem {
  id: number;
  title: string;
  category: 'pc' | 'signs';
  image: string;
}

export default function Portfolio() {
  const [filter, setFilter] = useState<'all' | 'pc' | 'signs'>('all');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const portfolioItems: PortfolioItem[] = [
    { id: 1, title: 'Custom Gaming PC Build', category: 'pc', image: 'https://images.pexels.com/photos/2399840/pexels-photo-2399840.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { id: 2, title: 'Business Storefront Sign', category: 'signs', image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { id: 3, title: 'High-End Workstation', category: 'pc', image: 'https://images.pexels.com/photos/7148439/pexels-photo-7148439.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { id: 4, title: 'Vehicle Wrap Graphics', category: 'signs', image: 'https://images.pexels.com/photos/3354647/pexels-photo-3354647.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { id: 5, title: 'RGB Gaming Setup', category: 'pc', image: 'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { id: 6, title: 'Custom Business Cards', category: 'signs', image: 'https://images.pexels.com/photos/6469/pencil-pen-paper-plan.jpg?auto=compress&cs=tinysrgb&w=800' },
  ];

  const filteredItems = filter === 'all' ? portfolioItems : portfolioItems.filter(item => item.category === filter);

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
            onClick={() => setFilter('all')}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
              filter === 'all'
                ? 'bg-white text-black'
                : 'bg-white/10 text-white/70 hover:bg-white/20'
            }`}
          >
            All Work
          </button>
          <button
            onClick={() => setFilter('pc')}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
              filter === 'pc'
                ? 'bg-white text-black'
                : 'bg-white/10 text-white/70 hover:bg-white/20'
            }`}
          >
            PC Builds
          </button>
          <button
            onClick={() => setFilter('signs')}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
              filter === 'signs'
                ? 'bg-white text-black'
                : 'bg-white/10 text-white/70 hover:bg-white/20'
            }`}
          >
            Signs
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedItem(item)}
              className="group relative overflow-hidden rounded-2xl cursor-pointer aspect-video"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <h3 className="text-white text-xl font-semibold">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={() => setSelectedItem(null)}
        >
          <div className="relative max-w-5xl w-full">
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute -top-12 right-0 p-2 text-white hover:text-white/70 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={selectedItem.image}
              alt={selectedItem.title}
              className="w-full rounded-2xl"
            />
            <div className="mt-4 text-center">
              <h3 className="text-white text-2xl font-bold">{selectedItem.title}</h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
