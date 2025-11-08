import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] grid place-items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/N8g2VNcx8Rycz93J/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/80" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-20 text-center">
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-gray-900 to-gray-700">
          Pitch smarter with interactive 3D.
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
          SmartPitch helps you craft stunning product demos and investor-ready decks with immersive Spline visuals and AI-powered storytelling.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a href="#cta" className="px-5 py-3 rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition-colors">
            Start free
          </a>
          <a href="#how" className="px-5 py-3 rounded-lg bg-white/70 backdrop-blur border border-black/10 hover:bg-white/90 transition-colors">
            See how it works
          </a>
        </div>
      </div>
    </section>
  );
}
