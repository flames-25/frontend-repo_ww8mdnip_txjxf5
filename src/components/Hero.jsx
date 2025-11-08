import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/k3vzWf8TfEDJKl71/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/80 to-white" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 pt-24 text-center sm:pt-28">
        <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-red-600 ring-1 ring-red-100">
          SmartPitch
        </span>
        <h1 className="mt-6 text-4xl font-extrabold leading-tight text-gray-900 sm:text-6xl">
          Pitch confidently — your IP is protected
        </h1>
        <p className="mt-5 max-w-2xl text-base text-gray-600 sm:text-lg">
          A secure pitch vault that timestamps your ideas on Story Protocol and shares them with expiring, view-only licenses.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#cta"
            className="inline-flex items-center justify-center rounded-md bg-gray-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-gray-800"
          >
            Get Started
          </a>
          <a
            href="#how"
            className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-sm font-semibold text-gray-900 ring-1 ring-gray-200 transition hover:ring-gray-300"
          >
            See how it works
          </a>
        </div>
      </div>
    </section>
  );
}
