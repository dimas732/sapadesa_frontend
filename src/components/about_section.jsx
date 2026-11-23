const STATS_PREVIEW = [
  {
    label: 'Laporan Diterima',
    value: '142 Tiket',
    badgeClass: 'bg-emerald-50 text-emerald-700',
  },
  {
    label: 'Selesai Ditindaklanjuti',
    value: '128 Tiket',
    badgeClass: 'bg-sky-50 text-sky-700',
  },
  {
    label: 'Proses Evaluasi',
    value: '14 Tiket',
    badgeClass: 'bg-amber-50 text-amber-700',
  },
];

export default function AboutSection() {
  return (
    <section id="tentang" className="px-4 sm:px-6 py-14 bg-white border-t border-slate-100">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Kolom Kiri: Komitmen & Metrik */}
        <div>
          <span className="block text-[11px] font-bold tracking-wider uppercase text-[#164b34]">
            Tentang Platform
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-slate-900 leading-snug">
            Komitmen Kami untuk Pelayanan Desa yang Lebih Baik
          </h2>
          <p className="mt-3 text-sm text-slate-600 leading-relaxed">
            SapaDesa hadir sebagai jembatan komunikasi langsung antara warga masyarakat dan perangkat
            pemerintah desa. Kami percaya bahwa transparansi dan partisipasi aktif warga adalah kunci
            utama kemajuan desa.
          </p>

          <div className="mt-7 pt-6 border-t border-slate-100 grid grid-cols-2 gap-6">
            <div>
              <p className="text-xl sm:text-2xl font-bold text-[#164b34]">100%</p>
              <p className="text-xs text-slate-500 mt-0.5">Tercatat &amp; Terlacak</p>
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-bold text-[#164b34]">&lt; 24 Jam</p>
              <p className="text-xs text-slate-500 mt-0.5">Respon Verifikasi Desa</p>
            </div>
          </div>
        </div>

        {/* Kolom Kanan: Preview Ringkasan Tiket */}
        <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-5 sm:p-6">
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
            </div>
            <span className="text-[11px] text-slate-400 font-medium">sapadesa.id</span>
          </div>

          <div className="space-y-3">
            {STATS_PREVIEW.map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-between gap-3 rounded-xl bg-slate-50/90 border border-slate-100 px-4 py-3"
              >
                <span className="text-xs sm:text-sm font-medium text-slate-700">{item.label}</span>
                <span
                  className={`rounded-md px-2.5 py-1 text-xs font-semibold shrink-0 ${item.badgeClass}`}
                >
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}