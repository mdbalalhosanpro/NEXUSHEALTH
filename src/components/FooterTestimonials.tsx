import { motion } from 'motion/react';
import { TESTIMONIALS } from '../data';
import { Star, Quote, MapPin, Phone, Mail, ChevronRight, HeartPulse } from 'lucide-react';
import { useState } from 'react';

export const Testimonials = () => {
  return (
    <section className="py-24 bg-navy-light relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="sleek-badge mb-2">Patient Stories</span>
          <h2 className="text-[32px] md:text-[40px] leading-[1.2] font-[800] tracking-[-1px] mt-2 mb-4 text-white">Trust from the Heart</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, index) => (
            <motion.div 
              key={t.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 rounded-2xl relative group hover:-translate-y-2"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-white/5 opacity-50 group-hover:text-medical-green/20 transition-colors" />
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-medical-green text-medical-green" />
                ))}
              </div>
              <p className="text-[#A0AEC0] leading-relaxed mb-8 relative z-10">"{t.text}"</p>
              <div className="flex items-center gap-4 mt-auto">
                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover border-2 border-white/10" />
                <div>
                  <h4 className="font-bold text-white">{t.name}</h4>
                  <p className="text-xs text-medical-green">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-[#050B14] pt-24 pb-8 border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-medical-green/50 to-transparent"></div>
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <HeartPulse className="w-8 h-8 text-medical-green" />
              <span className="text-[24px] font-display font-[800] tracking-[-1px] text-white">NEXUS<span className="text-medical-green">HEALTH</span></span>
            </div>
            <p className="text-soft-gray text-sm leading-relaxed">
              Elevating healthcare with modern technology, world-class doctors, and patient-centric compassion.
            </p>
            <div className="flex gap-4">
              {['Facebook', 'Twitter', 'Insta', 'LinkedIn'].map((social) => (
                <div key={social} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-soft-gray hover:bg-medical-green hover:text-navy cursor-pointer transition-colors text-xs font-medium">
                  {social[0]}
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Our Doctors', 'Services', 'News & Blog', 'Contact'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-soft-gray hover:text-medical-green transition-colors text-sm flex items-center gap-2">
                    <ChevronRight className="w-3 h-3" /> {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Departments */}
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Departments</h4>
            <ul className="space-y-3">
              {['Cardiology', 'Neurology', 'Orthopedics', 'Pediatrics', 'Oncology', 'Emergency'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-soft-gray hover:text-medical-green transition-colors text-sm flex items-center gap-2">
                    <ChevronRight className="w-3 h-3" /> {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-soft-gray text-sm">
                <MapPin className="w-5 h-5 text-medical-green flex-shrink-0" />
                <span>123 Nexus Blvd, Medical District, NY 10001, United States</span>
              </li>
              <li className="flex items-center gap-3 text-soft-gray text-sm">
                <Phone className="w-5 h-5 text-medical-green flex-shrink-0" />
                <span>+1 (800) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-soft-gray text-sm">
                <Mail className="w-5 h-5 text-medical-green flex-shrink-0" />
                <span>care@nexushealth.com</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-soft-gray text-sm">© {new Date().getFullYear()} Nexus Health. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-soft-gray">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
