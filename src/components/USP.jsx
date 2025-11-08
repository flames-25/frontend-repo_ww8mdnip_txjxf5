import React from 'react';

export default function USP() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-5xl px-6">
        <div className="rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-wide text-red-600">Unique Selling Proposition</p>
          <h3 className="mt-3 text-2xl font-bold text-gray-900 sm:text-3xl">
            "Pitch confidently — your IP is protected."
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            SmartPitch is a secure pitch vault with on-chain timestamps via Story Protocol and shareable, expiring, view-only licenses for investors.
          </p>
        </div>
      </div>
    </section>
  );
}
