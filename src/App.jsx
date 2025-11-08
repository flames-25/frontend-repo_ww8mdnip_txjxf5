import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import USP from './components/USP';
import HowItWorks from './components/HowItWorks';
import LiveDemo from './components/LiveDemo';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        <Hero />
        <USP />
        <HowItWorks />
        <LiveDemo />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
