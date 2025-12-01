import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '832-770-9984',
      href: 'tel:832-770-9984',
    },
    {
      icon: Mail,
      label: 'Email',
      value: '411printings@gmail.com',
      href: 'mailto:411printings@gmail.com',
    },
    {
      icon: MapPin,
      label: 'Address',
      value: '6295 Hwy 6 South, Houston, TX 77083',
      href: 'https://maps.google.com/?q=6295+Hwy+6+South+Houston+TX+77083',
    },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-xl text-white/60">Visit us or reach out for expert service</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.a
                  key={index}
                  href={info.href}
                  target={info.label === 'Address' ? '_blank' : '_self'}
                  rel={info.label === 'Address' ? 'noopener noreferrer' : ''}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4 p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-white/20 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/20 transition-colors">
                    <Icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm mb-1">{info.label}</p>
                    <p className="text-white font-medium">{info.value}</p>
                  </div>
                </motion.a>
              );
            })}

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm"
            >
              <h3 className="text-white font-semibold mb-4">Business Hours</h3>
              <div className="space-y-2 text-white/60 text-sm">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span className="text-white">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span className="text-white">10:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span className="text-white">Closed</span>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-full min-h-[500px] rounded-2xl overflow-hidden border border-white/10"
          >
            <iframe
              title="Signs & Computers Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3465.3330175463516!2d-95.64848740321044!3d29.71011140000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640ddd5d031ef5b%3A0xbb73ad1a75bd8a20!2sSIGNS%20%26%20COMPUTERS!5e0!3m2!1sen!2sus!4v1764609099329!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
