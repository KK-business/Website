import { motion } from 'framer-motion';
import { CreditCard, FileText, Mail, Car, Menu as MenuIcon, Square, Sticker, Tag } from 'lucide-react';

export default function SignsPrinting() {
  const services = [
    {
      icon: CreditCard,
      title: 'Business Cards & Logos',
      description: 'Professional cards and custom logos',
    },
    {
      icon: FileText,
      title: 'Flyers & Banners',
      description: 'Eye-catching promotional materials',
    },
    {
      icon: Mail,
      title: 'Door Hangers & Postcards',
      description: 'Custom marketing materials',
    },
    {
      icon: Car,
      title: 'Auto Graphics',
      description: 'Vehicle wraps and mobile ads',
    },
    {
      icon: MenuIcon,
      title: 'Menu Designs',
      description: 'Beautiful restaurant menus',
    },
    {
      icon: Square,
      title: 'Window Lettering',
      description: 'Professional storefront signage',
    },
    {
      icon: Sticker,
      title: 'Custom Stickers',
      description: 'Die-cut stickers and labels',
    },
    {
      icon: Tag,
      title: 'Custom Labels',
      description: 'Product labels and packaging',
    },
  ];

  return (
    <section id="signs-printing" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Signs & Printing
          </motion.h2>
          <motion.p
            className="text-xl text-white/60"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Professional printing for your business
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.6, 0.05, 0.01, 0.9],
                }}
                whileHover={{ y: -10, scale: 1.02, transition: { duration: 0.2 } }}
                className="group p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300 cursor-hover relative overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all duration-500"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />

                <motion.div
                  className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-4 group-hover:bg-purple-500/20 transition-colors relative z-10"
                  whileHover={{ rotate: -360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon className="w-6 h-6 text-purple-400" />
                </motion.div>

                <h3 className="text-lg font-semibold text-white mb-2 relative z-10">
                  {service.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed relative z-10">
                  {service.description}
                </p>

                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
