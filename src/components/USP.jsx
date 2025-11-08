import React from 'react';
import { ShieldCheck, Zap, Sparkles } from 'lucide-react';

const items = [
  {
    icon: ShieldCheck,
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
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Why SmartPitch</h2>
          <p className="mt-3 text-gray-600">Stand out with interactive storytelling that feels effortless.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-black/10 p-6 bg-white/70 backdrop-blur hover:shadow-lg transition-shadow">
              <div className="h-10 w-10 rounded-md bg-gray-900 text-white grid place-items-center">
                <Icon size={18} />
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
