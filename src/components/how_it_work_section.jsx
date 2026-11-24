
const WORK_STEPS = [
  {
    number: '01',
    title: 'Tulis Laporan',
    description:
      'Isi formulir pengaduan dengan jelas mencakup kategori, deskripsi masalah, lokasi, serta lampiran foto jika ada.',
    color: 'bg-emerald-50 text-emerald-800',
  },
  {
    number: '02',
    title: 'Verifikasi Desa',
    description:
      'Perangkat desa menerima notifikasi, memverifikasi keabsahan laporan, dan menugaskan tim terkait untuk tindakan penanganan.',
    color: 'bg-sky-50 text-sky-600',
  },
  {
    number: '03',
    title: 'Pantau & Selesai',
    description:
      'Gunakan nomor tiket untuk memantau pembaruan status dan membaca tanggapan resmi secara transparan hingga laporan tuntas.',
    color: 'bg-amber-50 text-amber-600',
  },
];

export default function HowItWorkSection() {
  return (
    <section
       id="cara-kerja"
       className="w-full bg-white py-16 px-4 sm:px-8 scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-11">
          <span className="text-[11px] font-bold tracking-wider text-sky-600 uppercase">
            Alur Kerja Sederhana
          </span>

          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-gray-800">
            Bagaimana SapaDesa Bekerja?
          </h2>
        </div>

        {/* Work Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {WORK_STEPS.map((step) => (
            <div
              key={step.number}
              className="bg-gray-50 border border-gray-100 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              {/* Step Number */}
              <div
                className={`w-9 h-9 rounded-lg flex items-center justify-center text-sm font-bold mb-5 ${step.color}`}
              >
                {step.number}
              </div>

              {/* Step Title */}
              <h3 className="text-base font-semibold text-gray-800 mb-2">
                {step.title}
              </h3>

              {/* Step Description */}
              <p className="text-sm leading-relaxed text-gray-500">
                {step.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
