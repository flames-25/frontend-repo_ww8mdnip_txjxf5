import React from 'react';
import { Shield, Zap, Sparkles } from 'lucide-react';

const items = [
  {
    icon: Shield,
    title: 'Enterprise-grade',
    desc: 'Secure by design with role-based access and audit trails.',
  },
  {
    icon: Zap,
    title: 'Fast iteration',
    desc: 'Update scenes and content instantly without code pushes.',
  },
  {
    icon: Sparkles,
    title: 'Beautiful by default',
    desc: 'Thoughtful defaults and aesthetics that elevate your pitch.',
  },
];

export default function USP() {
  return (
    <section id="usp" className="relative py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">Why SmartPitch</h2>
          <p className="mt-3 text-zinc-300">Stand out with interactive storytelling that feels effortless.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-white/10 p-6 bg-white/5 backdrop-blur hover:shadow-[0_0_0_1px_rgba(255,255,255,0.1)] transition-shadow">
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
