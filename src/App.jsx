import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import USP from './components/USP';
import HowItWorks from './components/HowItWorks';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <main>
        <Hero />
        <USP />
        <HowItWorks />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
