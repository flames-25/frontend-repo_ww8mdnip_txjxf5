import React from 'react';
import { Rocket } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/60 backdrop-blur supports-[backdrop-filter]:bg-white/40 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 grid place-items-center rounded-lg bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 text-white shadow">
            <Rocket size={18} />
          </div>
          <span className="font-semibold tracking-tight text-gray-900">SmartPitch</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
          <a href="#how" className="hover:text-gray-900 transition-colors">How it works</a>
          <a href="#usp" className="hover:text-gray-900 transition-colors">Why SmartPitch</a>
          <a href="#cta" className="px-3 py-1.5 rounded-md bg-gray-900 text-white hover:bg-gray-800 transition-colors">Get Started</a>
        </nav>
      </div>
    </header>
  );
}
