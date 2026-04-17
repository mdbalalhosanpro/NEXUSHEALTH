/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero, About } from './components/LandingSections';
import { Services, Doctors } from './components/MiddleSections';
import { Booking, Emergency } from './components/BottomSections';
import { Testimonials, Footer } from './components/FooterTestimonials';

export default function App() {
  return (
    <div className="min-h-screen bg-navy text-white selection:bg-medical-green selection:text-navy font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Doctors />
        <Booking />
        <Testimonials />
        <Emergency />
      </main>
      <Footer />
    </div>
  );
}
