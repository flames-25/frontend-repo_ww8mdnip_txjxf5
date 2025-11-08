import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import LiveDemo from './components/LiveDemo';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        <Hero />
        <LiveDemo />
      </main>
      <Footer />
    </div>
  );
}
