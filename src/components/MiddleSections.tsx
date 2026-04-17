import { motion } from 'motion/react';
import { DOCTORS, SERVICES } from '../data';
import { Star, ChevronRight } from 'lucide-react';
import * as Icons from 'lucide-react';

export const Services = () => {
  return (
    <section id="services" className="py-24 bg-navy-light relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="sleek-badge mb-2">Our Departments</span>
          <h2 className="text-[32px] md:text-[40px] leading-[1.2] font-[800] tracking-[-1px] mt-2 mb-4 text-white">Centers of Excellence</h2>
          <p className="sleek-subtext mx-auto">We provide specialized care across multiple disciplines, utilizing the latest advancements in medical science.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => {
            // Dynamically get the icon component
            const IconComponent = (Icons as any)[service.icon] || Icons.Activity;
            
            return (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-2xl p-8 group cursor-pointer"
              >
                <div className="w-14 h-14 rounded-xl bg-navy-lighter flex items-center justify-center mb-6 group-hover:bg-medical-green/20 group-hover:text-medical-green transition-colors duration-300">
                  <IconComponent className="w-7 h-7 text-white group-hover:text-medical-green transition-colors" />
                </div>
                <h3 className="text-2xl font-display font-semibold mb-3 text-white">{service.title}</h3>
                <p className="text-soft-gray text-sm leading-relaxed mb-6">{service.description}</p>
                <div className="flex items-center text-medical-green font-medium text-sm group-hover:translate-x-2 transition-transform duration-300">
                  Learn More <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
};

export const Doctors = () => {
  return (
    <section id="doctors" className="py-24 bg-navy relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-medical-green/5 rounded-full blur-[120px] -translate-y-1/2"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="sleek-badge mb-2">Our Specialists</span>
            <h2 className="text-[32px] md:text-[40px] leading-[1.2] font-[800] tracking-[-1px] mt-2 text-white">World-Class Medical Team</h2>
          </div>
          <button className="sleek-btn-primary border border-white/20 hover:bg-transparent hover:text-white text-white bg-transparent shadow-none">
            View All Doctors
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {DOCTORS.map((doctor, index) => (
            <motion.div 
              key={doctor.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-2xl overflow-hidden group"
            >
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={doctor.image} 
                  alt={doctor.name} 
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy to-transparent opacity-80"></div>
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <span className="px-3 py-1 bg-medical-green text-navy text-xs font-bold rounded-full uppercase tracking-wider">
                    {doctor.specialty}
                  </span>
                  <div className="flex items-center gap-1 text-white bg-black/40 backdrop-blur-md px-2 py-1 rounded-full text-xs">
                    <Star className="w-3 h-3 fill-medical-green text-medical-green" />
                    <span>{doctor.rating}</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-1">{doctor.name}</h3>
                <p className="text-sm text-medical-green mb-4">{doctor.designation}</p>
                <div className="flex justify-between items-center text-xs text-soft-gray mb-6">
                  <span>Exp: {doctor.experience}</span>
                  <span>{doctor.reviews} Reviews</span>
                </div>
                <div className="flex gap-2">
                  <button className="flex-1 py-2 rounded-lg bg-navy-lighter text-white text-sm font-medium hover:bg-medical-green hover:text-navy transition-colors">
                    Profile
                  </button>
                  <button className="flex-1 py-2 rounded-lg bg-medical-green text-navy text-sm font-medium hover:bg-medical-green-hover transition-colors shadow-[0_0_10px_rgba(0,196,140,0.3)]">
                    Book
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
