const FOOTER_LINKS = [
  { label: 'Kebijakan Privasi', href: '#kebijakan-privasi' },
  { label: 'Syarat & Ketentuan', href: '#syarat-ketentuan' },
  { label: 'Bantuan', href: '#bantuan' },
];

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-slate-100">
      <div className="w-full px-4 sm:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        {/* Brand + Hak Cipta */}
        <div className="flex items-center gap-2.5">
          <div className="w-5 h-5 rounded-md bg-[#164b34] text-white flex items-center justify-center shrink-0">
            <svg
              className="w-3 h-3"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          </div>
          <span className="text-[11px] font-bold text-slate-900">SapaDesa</span>
          <span className="text-[11px] text-slate-500">
            © {CURRENT_YEAR} Hak Cipta Dilindungi
          </span>
        </div>

        {/* Link Footer */}
        <nav aria-label="Navigasi Footer" className="flex items-center gap-5 text-[11px] text-slate-500">
          {FOOTER_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-[#164b34]"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}