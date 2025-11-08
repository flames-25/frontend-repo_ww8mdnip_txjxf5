import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] grid place-items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/vc19ejtcC5VJjy5v/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-24 text-center">
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-300">
          Pitch smarter with interactive 3D.
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-zinc-300/90 max-w-2xl mx-auto">
          SmartPitch helps you craft stunning product demos and investor-ready decks with immersive Spline visuals and AI-powered storytelling.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a href="#cta" className="px-5 py-3 rounded-lg bg-amber-500 text-black hover:bg-amber-400 transition-colors">
            Start free
          </a>
          <a href="#how" className="px-5 py-3 rounded-lg border border-white/20 bg-white/5 text-white hover:bg-white/10 transition-colors">
            See how it works
          </a>
        </div>
      </div>
    </section>
  );
}
