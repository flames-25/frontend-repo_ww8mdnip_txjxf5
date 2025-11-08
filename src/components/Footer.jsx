import React from 'react';

export default function Footer() {
  return (
    <footer className="py-10 border-t border-black/5 bg-white/70 backdrop-blur">
      <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
        <p>© {new Date().getFullYear()} SmartPitch. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-gray-900">Privacy</a>
          <a href="#" className="hover:text-gray-900">Terms</a>
          <a href="#" className="hover:text-gray-900">Contact</a>
        </div>
      </div>
    </footer>
  );
}
