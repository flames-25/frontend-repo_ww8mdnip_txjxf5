import React from 'react';
import { Rocket } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-black/40 backdrop-blur supports-[backdrop-filter]:bg-black/30 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 grid place-items-center rounded-lg bg-gradient-to-br from-amber-500 via-yellow-500 to-orange-500 text-black shadow">
            <Rocket size={18} />
          </div>
          <span className="font-semibold tracking-tight text-white">SmartPitch</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-300">
          <a href="#how" className="hover:text-white transition-colors">How it works</a>
          <a href="#usp" className="hover:text-white transition-colors">Why SmartPitch</a>
          <a href="#cta" className="px-3 py-1.5 rounded-md bg-amber-500 text-black hover:bg-amber-400 transition-colors">Get Started</a>
        </nav>
      </div>
    </header>
  );
}
