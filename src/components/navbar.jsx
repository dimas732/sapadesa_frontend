import { useState } from 'react';

const NAV_ITEMS = [
  { label: 'Beranda', href: '#beranda' },
  { label: 'Lacak Status', href: '#lacak-status' },
  { label: 'Cara Kerja', href: '#cara-kerja' },
  { label: 'Tentang', href: '#tentang' },
];

export default function Navbar({ onOpenLogin, onOpenReport }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur border-b border-slate-100">
      <div className="w-full px-4 sm:px-8 h-16 flex items-center justify-between gap-4">
        {/* Brand / Logo SapaDesa */}
        <a href="#beranda" className="flex items-center gap-2.5 shrink-0">
          <div className="w-8 h-8 rounded-lg bg-[#164b34] text-white flex items-center justify-center">
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          </div>
          <div className="leading-tight">
            <span className="block text-sm font-bold text-slate-900">SapaDesa</span>
            <span className="block text-[9px] font-semibold tracking-wider text-slate-400 uppercase">
              Portal Layanan Warga
            </span>
          </div>
        </a>

        {/* Menu Navigasi Tengah (Desktop) */}
        <nav aria-label="Navigasi Utama" className="hidden md:flex items-center gap-7 text-xs font-medium">
          {NAV_ITEMS.map((item, idx) => (
            <a
              key={item.href}
              href={item.href}
              className={`transition-colors ${
                idx === 0
                  ? 'text-[#164b34] font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Aksi Kanan (Desktop) */}
        <div className="hidden md:flex items-center gap-5 shrink-0">
          <button
            type="button"
            onClick={onOpenLogin}
            className="text-xs font-medium text-slate-700 hover:text-slate-900 transition-colors cursor-pointer"
          >
            Masuk
          </button>
          <button
            type="button"
            onClick={onOpenReport}
            className="rounded-lg bg-[#164b34] hover:bg-[#113b29] text-white text-xs font-semibold px-3.5 py-2 transition-colors cursor-pointer"
          >
            Buat Laporan
          </button>
        </div>

        {/* Tombol Hamburger (Mobile) */}
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Buka menu navigasi"
          aria-expanded={mobileOpen}
          className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 cursor-pointer"
        >
          {mobileOpen ? (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Menu Dropdown Mobile */}
      {mobileOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white px-4 py-4 space-y-3">
          <div className="flex flex-col space-y-2.5 text-sm">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="text-slate-700 hover:text-[#164b34] font-medium py-1"
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-slate-100 flex items-center gap-3">
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                onOpenLogin?.();
              }}
              className="flex-1 rounded-lg border border-slate-200 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 cursor-pointer"
            >
              Masuk
            </button>
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                onOpenReport?.();
              }}
              className="flex-1 rounded-lg bg-[#164b34] hover:bg-[#113b29] py-2 text-xs font-semibold text-white cursor-pointer"
            >
              Buat Laporan
            </button>
          </div>
        </div>
      )}
    </header>
  );
}