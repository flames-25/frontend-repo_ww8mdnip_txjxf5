import React from 'react';
import Spline from '@splinetool/react-spline';

export default function CTA() {
  return (
    <section id="cta" className="relative py-24">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/N8g2VNcx8Rycz93J/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/70 to-white/30" />

      <div className="relative mx-auto max-w-3xl px-6">
        <div className="rounded-2xl border border-black/10 bg-white/80 backdrop-blur p-8 text-center shadow-lg">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Make every pitch memorable</h2>
          <p className="mt-3 text-gray-600">Start building immersive product stories with SmartPitch today.</p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <a href="#" className="px-5 py-3 rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition-colors">Create your pitch</a>
            <a href="#" className="px-5 py-3 rounded-lg border border-black/10 bg-white/70 hover:bg-white/90 transition-colors">Book a demo</a>
          </div>
        </div>
      </div>
    </section>
  );
}
