import React from 'react';
import { ShieldCheck, Clock, Share2 } from 'lucide-react';

const steps = [
  {
    icon: ShieldCheck,
    title: 'Register on-chain',
    desc: 'Upload your pitch deck, script, or outline. We timestamp and register your IP on Story Protocol.',
  },
  {
    icon: Clock,
    title: 'Generate expiring links',
    desc: 'Create view-only licenses with expirations so investors can review without downloading.',
  },
  {
    icon: Share2,
    title: 'Share with confidence',
    desc: 'Send a secure link and track opens. Revoke access anytime from your vault.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="relative bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">How SmartPitch protects you</h2>
          <p className="mt-3 text-gray-600">Three simple steps from idea to protected pitch.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {steps.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-gray-200 p-6 shadow-sm">
              <div className="mb-4 inline-flex rounded-xl bg-red-50 p-3 text-red-600">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
