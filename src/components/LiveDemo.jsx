import React from 'react';
import Spline from '@splinetool/react-spline';
import { CheckCircle2 } from 'lucide-react';

const benefits = [
  'Interactive product walkthroughs',
  'Smooth performance on web & mobile',
  'Embeddable in decks and sites',
  'Brand-safe presets out of the box',
];

export default function LiveDemo() {
  return (
    <section id="live-demo" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="relative h-[360px] rounded-2xl overflow-hidden border border-white/10 bg-white/5">
          <Spline scene="https://prod.spline.design/vc19ejtcC5VJjy5v/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        </div>
        <div>
          <h3 className="text-3xl font-bold text-white">Live Demo</h3>
          <p className="mt-3 text-zinc-300">Experience the SmartPitch feel: a modern dark theme, cinematic motion, and tactile 3D you can interact with.</p>
          <ul className="mt-6 space-y-3">
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-3 text-zinc-200">
                <CheckCircle2 className="text-amber-400 mt-0.5" size={20} />
                <span>{b}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex gap-3">
            <a href="#cta" className="px-5 py-3 rounded-lg bg-amber-500 text-black hover:bg-amber-400 transition-colors">Try it now</a>
            <a href="#how" className="px-5 py-3 rounded-lg border border-white/20 bg-white/5 text-white hover:bg-white/10 transition-colors">See how it works</a>
          </div>
        </div>
      </div>
    </section>
  );
}
