import React from 'react';
import Spline from '@splinetool/react-spline';

export default function CTA() {
  return (
    <section id="cta" className="relative py-24">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/vc19ejtcC5VJjy5v/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40" />

      <div className="relative mx-auto max-w-3xl px-6">
        <div className="rounded-2xl border border-white/15 bg-white/5 backdrop-blur p-8 text-center shadow-lg">
          <h2 className="text-3xl font-bold tracking-tight text-white">Make every pitch memorable</h2>
          <p className="mt-3 text-zinc-300">Start building immersive product stories with SmartPitch today.</p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <a href="#" className="px-5 py-3 rounded-lg bg-amber-500 text-black hover:bg-amber-400 transition-colors">Create your pitch</a>
            <a href="#" className="px-5 py-3 rounded-lg border border-white/20 bg-white/5 text-white hover:bg-white/10 transition-colors">Book a demo</a>
          </div>
        </div>
      </div>
    </section>
  );
}
