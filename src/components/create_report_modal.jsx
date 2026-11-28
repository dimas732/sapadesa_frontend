import { useEffect, useState } from 'react';

const CATEGORIES = [
  'Infrastruktur & Fasilitas',
  'Lingkungan & Pertanian',
  'Pelayanan Publik',
  'Usulan Pembangunan',
];

const INITIAL_FORM = {
  reporterName: '',
  category: CATEGORIES[0],
  location: '',
  title: '',
  description: '',
};

export default function CreateReportModal({ isOpen, onClose, onSubmitted }) {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [errorMsg, setErrorMsg] = useState('');
  const [createdTicket, setCreatedTicket] = useState(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  if (!isOpen) return null;

  const handleClose = () => {
    setErrorMsg('');
    setCreatedTicket(null);
    setFormData(INITIAL_FORM);
    onClose?.();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMsg) setErrorMsg('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.reporterName.trim() ||
      !formData.location.trim() ||
      !formData.title.trim() ||
      !formData.description.trim()
    ) {
      setErrorMsg('Mohon lengkapi nama, lokasi, judul, dan detail laporan terlebih dahulu.');
      return;
    }

    const randomNum = Math.floor(100 + Math.random() * 900);
    const ticket = {
      code: `SD-2026-${randomNum}`,
      title: formData.title.trim(),
      category: formData.category,
      location: formData.location.trim(),
      reporterName: formData.reporterName.trim(),
      status: 'Laporan Diterima',
      badgeClass: 'bg-sky-100 text-sky-800',
      updatedAt: 'Baru saja dikirim',
      note: 'Laporan aspirasi Anda telah diterima dan menunggu verifikasi perangkat desa.',
    };

    setCreatedTicket(ticket);
    onSubmitted?.(ticket);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="create-report-modal-title"
      onClick={handleClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 backdrop-blur-[2px] p-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-lg rounded-2xl bg-white border border-slate-100 shadow-2xl overflow-hidden"
      >
        {/* Header Modal */}
        <div className="flex items-start justify-between gap-4 px-6 py-5 border-b border-slate-100">
          <div>
            <span className="inline-block rounded-full bg-emerald-50 text-[#164b34] text-[11px] font-semibold px-2.5 py-0.5">
              Portal Aspirasi Warga
            </span>
            <h2
              id="create-report-modal-title"
              className="mt-1.5 text-lg sm:text-xl font-bold text-slate-900"
            >
              Buat Laporan atau Aspirasi
            </h2>
          </div>

          <button
            type="button"
            onClick={handleClose}
            aria-label="Tutup modal"
            className="rounded-lg p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition cursor-pointer"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Isi Modal: Form atau Konfirmasi Tiket */}
        {createdTicket ? (
          <div className="p-6 text-center">
            <div className="mx-auto w-11 h-11 rounded-full bg-emerald-100 text-[#164b34] flex items-center justify-center font-bold text-lg">
              ✓
            </div>
            <h3 className="mt-3 text-base sm:text-lg font-bold text-slate-900">
              Laporan Berhasil Dikirim!
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-slate-500">
              Simpan kode tiket berikut untuk memantau status tindak lanjut laporan Anda:
            </p>

            <div className="mt-4 rounded-xl bg-slate-50 border border-slate-200 px-4 py-3">
              <span className="block text-[11px] uppercase tracking-wider text-slate-400 font-semibold">
                Nomor Tiket Anda
              </span>
              <span className="mt-0.5 block text-lg font-extrabold text-[#164b34] tracking-wide">
                {createdTicket.code}
              </span>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-2.5 justify-end">
              <button
                type="button"
                onClick={handleClose}
                className="w-full sm:w-auto rounded-lg bg-[#164b34] hover:bg-[#113b29] text-white text-xs sm:text-sm font-semibold px-5 py-2.5 transition cursor-pointer"
              >
                Selesai
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[80vh] overflow-y-auto">
            {errorMsg && (
              <div className="rounded-xl bg-rose-50 border border-rose-200 px-3.5 py-2.5 text-xs text-rose-700">
                {errorMsg}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="reporterName"
                  className="block text-xs font-semibold text-slate-700 mb-1"
                >
                  Nama Pelapor
                </label>
                <input
                  id="reporterName"
                  name="reporterName"
                  type="text"
                  value={formData.reporterName}
                  onChange={handleChange}
                  placeholder="Contoh: Budi Santoso"
                  className="w-full rounded-lg bg-slate-100/90 focus:bg-white border border-transparent focus:border-[#164b34] px-3.5 py-2.5 text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#164b34]/15 transition"
                />
              </div>

              <div>
                <label
                  htmlFor="category"
                  className="block text-xs font-semibold text-slate-700 mb-1"
                >
                  Kategori
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full rounded-lg bg-slate-100/90 focus:bg-white border border-transparent focus:border-[#164b34] px-3.5 py-2.5 text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#164b34]/15 transition"
                >
                  {CATEGORIES.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="location"
                className="block text-xs font-semibold text-slate-700 mb-1"
              >
                Lokasi (RT/RW / Dusun / Nama Jalan)
              </label>
              <input
                id="location"
                name="location"
                type="text"
                value={formData.location}
                onChange={handleChange}
                placeholder="Contoh: RT 03 / RW 02, Dusun Krajan"
                className="w-full rounded-lg bg-slate-100/90 focus:bg-white border border-transparent focus:border-[#164b34] px-3.5 py-2.5 text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#164b34]/15 transition"
              />
            </div>

            <div>
              <label
                htmlFor="title"
                className="block text-xs font-semibold text-slate-700 mb-1"
              >
                Judul Laporan / Aspirasi
              </label>
              <input
                id="title"
                name="title"
                type="text"
                value={formData.title}
                onChange={handleChange}
                placeholder="Contoh: Lampu penerangan jalan mati sejak seminggu lalu"
                className="w-full rounded-lg bg-slate-100/90 focus:bg-white border border-transparent focus:border-[#164b34] px-3.5 py-2.5 text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#164b34]/15 transition"
              />
            </div>

            <div>
              <label
                htmlFor="description"
                className="block text-xs font-semibold text-slate-700 mb-1"
              >
                Detail Kendala atau Usulan
              </label>
              <textarea
                id="description"
                name="description"
                rows={4}
                value={formData.description}
                onChange={handleChange}
                placeholder="Jelaskan kondisi di lapangan, waktu kejadian, atau usulan pembangunan secara jelas..."
                className="w-full rounded-lg bg-slate-100/90 focus:bg-white border border-transparent focus:border-[#164b34] px-3.5 py-2.5 text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#164b34]/15 transition resize-y"
              />
            </div>

            <div className="pt-2 flex flex-col-reverse sm:flex-row sm:justify-end gap-2.5">
              <button
                type="button"
                onClick={handleClose}
                className="w-full sm:w-auto rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs sm:text-sm font-semibold px-4 py-2.5 transition cursor-pointer"
              >
                Batal
              </button>
              <button
                type="submit"
                className="w-full sm:w-auto rounded-lg bg-[#164b34] hover:bg-[#113b29] text-white text-xs sm:text-sm font-semibold px-5 py-2.5 transition cursor-pointer"
              >
                Kirim Laporan
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}