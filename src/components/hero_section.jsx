export default function HeroSection({ onCreateReport, onCheckStatus }) {
  return (
    <section
      id="beranda"
      className="w-full bg-[#f8faf9] px-4 sm:px-8 pt-12 pb-10 sm:pt-16 sm:pb-12 text-center"
    >
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center">
        {/* Badge Layanan */}
        <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50/90 border border-emerald-200/70 px-3.5 py-1.5 text-[11px] sm:text-xs font-medium text-[#164b34]">
          <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
          <span>Layanan Transparansi &amp; Pengaduan Resmi Desa</span>
        </div>

        {/* Headline Utama */}
        <h1 className="mt-6 text-4xl sm:text-5xl md:text-[56px] font-extrabold tracking-tight text-slate-900 leading-[1.12]">
          Sampaikan Aspirasi,
          <br />
          Wujudkan Desa{' '}
          <span className="relative inline-block text-[#164b34]">
            Transparan
            <span
              aria-hidden="true"
              className="block h-[4px] w-full bg-[#164b34] rounded-full mt-0.5"
            />
          </span>
          .
        </h1>

        {/* Deskripsi Singkat */}
        <p className="mt-5 max-w-2xl text-sm sm:text-base text-slate-500 leading-relaxed">
          Wadah resmi pengaduan dan saran warga desa. Sampaikan kendala fasilitas atau usulan
          pembangunan secara aman, cepat, dan terukur.
        </p>

        {/* Tombol CTA */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto">
          <button
            type="button"
            onClick={onCreateReport}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-[#164b34] hover:bg-[#113b29] text-white text-sm font-semibold px-6 py-3 transition-colors shadow-xs cursor-pointer"
          >
            <svg
              className="w-4 h-4 shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M22 2L11 13" />
              <path d="M22 2L15 22l-4-9-9-4 20-7z" />
            </svg>
            <span>Buat Laporan Sekarang</span>
          </button>

          <button
            type="button"
            onClick={onCheckStatus}
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 text-sm font-semibold px-6 py-3 transition-colors cursor-pointer"
          >
            Cek Status Laporan
          </button>
        </div>
      </div>
    </section>
  );
}