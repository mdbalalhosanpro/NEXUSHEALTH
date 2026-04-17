import { motion } from 'motion/react';
import { Calendar, Clock, User, Phone, MapPin, Ambulance, Quote, Send } from 'lucide-react';
import { DOCTORS, SERVICES, TESTIMONIALS } from '../data';

export const Booking = () => {
  return (
    <section id="booking" className="py-24 bg-navy relative overflow-hidden text-white">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-medical-green/5 blur-[150px] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <span className="sleek-badge mb-2">Appointment</span>
            <h2 className="text-[32px] md:text-[40px] leading-[1.2] font-[800] tracking-[-1px] mt-2 mb-6">Book Your Visit Online</h2>
            <p className="sleek-subtext mb-8">Skip the waiting room. Schedule your appointment with our top specialists in just a few clicks.</p>
            
            <div className="space-y-6">
              {[
                { icon: Phone, title: 'Call for Appointment', desc: '+1 (800) 123-4567' },
                { icon: MapPin, title: 'Location', desc: '123 Nexus Blvd, Medical District, NY 10001' }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full bg-navy-lighter flex items-center justify-center flex-shrink-0 border border-white/5">
                    <item.icon className="w-5 h-5 text-medical-green" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">{item.title}</h4>
                    <p className="text-soft-gray">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 w-full"
          >
            <div className="sleek-booking-widget relative">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-medical-green rounded-full blur-[40px] opacity-20 pointer-events-none"></div>
              <h2 className="text-[20px] font-bold text-white mb-2">Instant Appointment</h2>
              <form className="space-y-0 flex flex-col gap-[20px]" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
                  <div className="form-group">
                    <label className="sleek-form-label">Select Department</label>
                    <select className="sleek-form-input">
                      <option value="">Choose...</option>
                      {SERVICES.map(s => <option key={s.id} value={s.title}>{s.title}</option>)}
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="sleek-form-label">Choose Specialist</label>
                    <select className="sleek-form-input">
                      <option value="">Choose...</option>
                      {DOCTORS.map(d => <option key={d.id} value={d.name}>{d.name}</option>)}
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="sleek-form-label">Preferred Time slots</label>
                  <div className="grid grid-cols-3 gap-[8px]">
                    {['09:00 AM', '10:30 AM', '02:00 PM', '04:15 PM', '05:30 PM', '07:00 PM'].map((time, idx) => (
                      <div key={time} className={`p-[8px] bg-navy border border-white/10 rounded-[8px] text-center text-[12px] cursor-pointer transition-colors ${idx === 1 ? 'border-medical-green bg-[rgba(0,196,140,0.2)] text-medical-green' : 'text-white hover:border-white/30'}`}>{time}</div>
                    ))}
                  </div>
                </div>
                
                <div className="form-group">
                  <label className="sleek-form-label">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#A0AEC0]" />
                    <input type="text" placeholder="John Doe" className="sleek-form-input pl-12" />
                  </div>
                </div>

                <button type="submit" className="sleek-btn-primary w-full py-[16px] text-[16px] mt-[10px]">
                  Confirm Appointment
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export const Emergency = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-red-900/20 border-y border-red-500/20">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1587559070757-f72a388edbba?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-5 mix-blend-luminosity"></div>
      
      <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-gradient-to-br from-[#FF4D4D] to-[#A30000] rounded-3xl p-8 md:p-12 shadow-xl border-none">
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center animate-pulse flex-shrink-0">
                <Ambulance className="w-10 h-10 text-white" />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-2 tracking-[-1px]">Emergency? We're Here 24/7</h2>
                <p className="text-white/80">Rapid response and trauma care team ready at a moment's notice.</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <button className="px-[24px] py-[12px] bg-white text-[#A30000] font-[800] text-[14px] rounded-[10px] hover:bg-gray-100 transition-colors shadow-lg whitespace-nowrap flex items-center gap-2">
                <Phone className="w-5 h-5" />
                CALL NOW
              </button>
            </div>
          </div>
      </div>
    </section>
  );
};
