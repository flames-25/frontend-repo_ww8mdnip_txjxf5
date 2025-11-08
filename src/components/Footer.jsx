import React from 'react';

export default function Footer() {
  return (
    <footer className="py-10 border-t border-white/10 bg-black/40 backdrop-blur">
      <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-400">
        <p>© {new Date().getFullYear()} SmartPitch. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Terms</a>
          <a href="#" className="hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  );
}
