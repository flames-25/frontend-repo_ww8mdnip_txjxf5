import React from 'react';
import Hero from './components/Hero';
import USP from './components/USP';
import HowItWorks from './components/HowItWorks';
import CTA from './components/CTA';

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-md bg-gradient-to-br from-red-500 to-red-700" />
          <span className="text-sm font-bold tracking-tight text-gray-900">SmartPitch</span>
        </div>
        <nav className="hidden gap-6 text-sm font-medium text-gray-700 sm:flex">
          <a href="#how" className="hover:text-gray-900">How it works</a>
          <a href="#cta" className="hover:text-gray-900">Get started</a>
        </nav>
        <a
          href="#cta"
          className="rounded-md bg-gray-900 px-3 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-gray-800"
        >
          Try free
        </a>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
        <p className="text-sm text-gray-500">© {new Date().getFullYear()} SmartPitch. All rights reserved.</p>
        <div className="flex items-center gap-4 text-sm text-gray-500">
          <a href="#" className="hover:text-gray-700">Privacy</a>
          <a href="#" className="hover:text-gray-700">Terms</a>
          <a href="#" className="hover:text-gray-700">Support</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <main>
        <Hero />
        <USP />
        <HowItWorks />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
