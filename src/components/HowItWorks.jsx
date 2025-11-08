import React, { useMemo } from 'react';
import { MousePointerClick, Layers, Share2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HowItWorks() {
  const orbits = useMemo(() => (
    [
      { size: 140, duration: 10, delay: 0, color: 'from-indigo-500 to-cyan-500' },
      { size: 200, duration: 16, delay: 2, color: 'from-violet-500 to-fuchsia-500' },
      { size: 260, duration: 22, delay: 4, color: 'from-amber-500 to-rose-500' },
    ]
  ), []);

  return (
    <section id="how" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-24 -translate-x-1/2">
          {orbits.map((o, i) => (
            <motion.div
              key={i}
              className={`absolute rounded-full bg-gradient-to-br ${o.color} opacity-20 blur-xl`}
              style={{ width: o.size, height: o.size }}
              initial={{ rotate: 0, x: -o.size / 2, y: -o.size / 2 }}
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, ease: 'linear', duration: o.duration, delay: o.delay }}
            />
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 relative">
        <div className="mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">How it works</h2>
          <p className="mt-3 text-zinc-300">Three simple steps to go from idea to an interactive, investor-ready pitch.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {[{
            icon: MousePointerClick,
            title: 'Import & interact',
            desc: 'Bring your Spline scene and tailor interactions to your story.',
          }, {
            icon: Layers,
            title: 'Compose & brand',
            desc: 'Combine scenes, text, and media with your brand system.',
          }, {
            icon: Share2,
            title: 'Present & share',
            desc: 'One-click share links and live embeds for your deck.',
          }].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 overflow-hidden">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <div className="absolute -inset-24 bg-[radial-gradient(circle_at_center,rgba(250,204,21,0.12),transparent_60%)]" />
              </div>
              <div className="h-10 w-10 rounded-md bg-amber-500 text-black grid place-items-center">
                <Icon size={18} />
              </div>
              <h3 className="mt-4 font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-zinc-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
