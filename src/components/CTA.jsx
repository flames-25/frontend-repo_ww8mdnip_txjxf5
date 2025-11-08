import React from 'react';

export default function CTA() {
  return (
    <section id="cta" className="relative bg-gray-900 py-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(244,63,94,0.4),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(244,63,94,0.3),transparent_40%)]" />
      <div className="relative mx-auto max-w-5xl px-6">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm">
          <h3 className="text-2xl font-bold text-white sm:text-3xl">Start protecting your next big idea</h3>
          <p className="mx-auto mt-3 max-w-2xl text-white/80">
            Create your pitch vault in minutes. Timestamp on-chain, share securely, and stay in control.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-sm font-semibold text-gray-900 shadow-sm transition hover:bg-gray-100"
            >
              Create a free vault
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-md bg-transparent px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/30 transition hover:bg-white/10"
            >
              Book a demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
