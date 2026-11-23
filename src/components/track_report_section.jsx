import { useState } from 'react';

const SAMPLE_TICKETS = {
  'SD-2026-001': {
    code: 'SD-2026-001',
    title: 'Perbaikan Lampu Jalan RT 03',
    category: 'Infrastruktur & Fasilitas',
    status: 'Selesai Ditindaklanjuti',
    badgeClass: 'bg-emerald-100 text-emerald-800',
    updatedAt: '22 November 2026',
    note: 'Lampu penerangan jalan umum di RT 03 telah selesai diperbaiki dan berfungsi normal.',
  },
  'SD-2026-002': {
    code: 'SD-2026-002',
    title: 'Pembersihan Saluran Irigasi Dusun Krajan',
    category: 'Lingkungan & Pertanian',
    status: 'Proses Evaluasi',
    badgeClass: 'bg-amber-100 text-amber-800',
    updatedAt: '23 November 2026',
    note: 'Sedang dijadwalkan peninjauan lapangan oleh perangkat desa bersama tim warga.',
  },
};

export default function TrackReportSection() {
  const [ticketCode, setTicketCode] = useState('');
  const [result, setResult] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault();
    const cleaned = ticketCode.trim().toUpperCase();

    if (!cleaned) {
      setResult({
        type: 'empty',
        message: 'Silakan masukkan nomor tiket terlebih dahulu, misalnya SD-2026-001.',
      });
      return;
    }

    if (SAMPLE_TICKETS[cleaned]) {
      setResult({
        type: 'found',
        data: SAMPLE_TICKETS[cleaned],
      });
      return;
    }

    setResult({
      type: 'fallback',
      data: {
        code: cleaned,
        title: 'Pengaduan Warga Desa',
        category: 'Aspirasi & Layanan Warga',
        status: 'Laporan Diterima',
        badgeClass: 'bg-sky-100 text-sky-800',
        updatedAt: 'Hari ini',
        note: 'Tiket tercatat di sistem SapaDesa dan menunggu verifikasi perangkat desa.',
      },
    });
  };

  return (
    <section
      id="lacak-status"
      className="w-full bg-[#f8faf9] px-4 sm:px-8 pt-2 pb-14 sm:pb-16"
    >
      <div className="w-full max-w-3xl mx-auto bg-white rounded-2xl border border-slate-100 shadow-[0_8px_30px_rgb(15,23,42,0.04)] px-5 py-8 sm:px-10 sm:py-9 text-center">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
          Lacak Status Laporan Anda
        </h2>
        <p className="mt-1.5 text-xs sm:text-sm text-slate-500">
          Masukkan kode unik nomor tiket yang Anda dapatkan setelah mengirimkan aduan.
        </p>

        <form
          onSubmit={handleSearch}
          className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5"
        >
          <label htmlFor="ticket-input" className="sr-only">
            Nomor Tiket Laporan
          </label>
          <input
            id="ticket-input"
            type="text"
            value={ticketCode}
            onChange={(e) => setTicketCode(e.target.value)}
            placeholder="Contoh: SD-2026-001"
            className="flex-1 rounded-lg bg-slate-100/90 hover:bg-slate-100 focus:bg-white border border-transparent focus:border-[#0e8ae8] px-4 py-3 text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0e8ae8]/20 transition"
          />

          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#0e8ae8] hover:bg-[#0b76c7] text-white text-xs sm:text-sm font-semibold px-5 py-3 transition-colors shrink-0 cursor-pointer"
          >
            <svg
              className="w-4 h-4 shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
            <span>Cari Laporan</span>
          </button>
        </form>

        {/* Hasil Pencarian Tiket */}
        {result?.type === 'empty' && (
          <div className="mt-4 rounded-xl bg-amber-50 border border-amber-200/80 px-4 py-3 text-left text-xs sm:text-sm text-amber-800">
            {result.message}
          </div>
        )}

        {result && result.type !== 'empty' && (
          <div className="mt-5 rounded-xl bg-slate-50 border border-slate-200/80 p-4 sm:p-5 text-left">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                  {result.data.code} • {result.data.category}
                </p>
                <h3 className="mt-0.5 text-sm sm:text-base font-bold text-slate-900">
                  {result.data.title}
                </h3>
              </div>
              <span
                className={`inline-flex items-center w-fit rounded-full px-3 py-1 text-xs font-semibold ${result.data.badgeClass}`}
              >
                {result.data.status}
              </span>
            </div>

            <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
              {result.data.note}
            </p>
            <p className="mt-2 text-[11px] text-slate-400">
              Terakhir diperbarui: {result.data.updatedAt}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}