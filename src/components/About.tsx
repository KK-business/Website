import { motion } from 'framer-motion';
import { Award, Users, Clock, Target } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Award,
      title: 'Expert Service',
      description: 'Years of professional experience',
    },
    {
      icon: Users,
      title: 'Customer First',
      description: 'Exceptional customer service',
    },
    {
      icon: Clock,
      title: 'Fast Turnaround',
      description: 'Quick and efficient service',
    },
    {
      icon: Target,
      title: 'Quality Guaranteed',
      description: 'Satisfaction guarantee',
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">About Us</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Your Trusted Technology Partner
            </h3>
            <div className="space-y-4 text-white/60 leading-relaxed">
              <p>
                Signs & Computers has been serving the Houston community with top-tier
                computer repair services and professional printing solutions. We combine
                technical expertise with creative design to help businesses succeed.
              </p>
              <p>
                From custom gaming PC builds to comprehensive business printing services,
                we deliver quality results that exceed expectations.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-blue-400" />
                  </div>
                  <h4 className="text-white font-semibold mb-2">{feature.title}</h4>
                  <p className="text-white/60 text-sm">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
