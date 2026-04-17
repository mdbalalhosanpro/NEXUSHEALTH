import { motion } from 'motion/react';
import { 
  HeartPulse, Brain, Bone, Baby, Activity, Ambulance, 
  MapPin, PhoneCall, Mail, Clock, Calendar, CheckCircle2, ChevronRight, Star,
  Shield, Microscope, Award
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { DOCTORS, SERVICES, TESTIMONIALS } from '../data';

// --- Hero Section ---
export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop" 
          alt="Modern Hospital" 
          className="w-full h-full object-cover opacity-30 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/40"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_rgba(0,196,140,0.15),transparent_50%)]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="sleek-badge mb-4">
              Medical Excellence 2024
            </span>
            <h1 className="sleek-heading">
              Healing with<br />
              <span className="sleek-heading-gradient">Excellence</span> & <br />Compassion
            </h1>
            <p className="sleek-subtext">
              Experience world-class healthcare with state-of-the-art technology and dedicated medical specialists available 24/7.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href="#booking" className="sleek-btn-primary flex justify-center items-center gap-2 group w-fit">
              Book Appointment Now
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-16 flex flex-wrap gap-10 pt-8"
          >
            <div className="stat-item">
              <h3 className="sleek-stat-value">50+</h3>
              <p className="sleek-stat-label">Expert Doctors</p>
            </div>
            <div className="stat-item">
              <h3 className="sleek-stat-value">120k+</h3>
              <p className="sleek-stat-label">Happy Patients</p>
            </div>
            <div className="stat-item">
              <h3 className="sleek-stat-value">99%</h3>
              <p className="sleek-stat-label">Success Rate</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// --- About Section ---
export const About = () => {
  return (
    <section id="about" className="py-24 bg-navy relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-medical-green/5 rounded-full blur-[100px]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden border border-white/10 relative z-10">
                <img src="https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=1000&auto=format&fit=crop" alt="Hospital Interior" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-8 -right-8 w-64 glass-panel p-6 z-20">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 rounded-full bg-medical-green/20 flex items-center justify-center">
                    <Shield className="text-medical-green w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Trust & Quality</h4>
                    <p className="text-xs text-soft-gray">Certified Care</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <span className="sleek-badge mb-2">About Nexus Health</span>
            <h2 className="text-[32px] md:text-[40px] leading-[1.2] font-[800] tracking-[-1px] mt-2 mb-6 text-white">A New Era of Medical Excellence</h2>
            <p className="sleek-subtext text-lg mb-6 font-light">
              At Nexus Health, we merge cutting-edge technology with profound human compassion. Our state-of-the-art facilities and globally recognized experts ensure you receive the highest standard of care in a luxurious, comforting environment.
            </p>
            <div className="space-y-4 mb-8">
              {['Advanced Medical Technology', 'Patient-Centric Approach', 'Internationally Trained Specialists', 'Seamless Digital Healthcare'].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-medical-green w-5 h-5 flex-shrink-0" />
                  <span className="text-white/90">{item}</span>
                </div>
              ))}
            </div>
            <button className="sleek-btn-primary mt-4">
              Discover Our Approach
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
