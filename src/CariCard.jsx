function CariCard({ cari, onKaldir, onDuzenle }) {
  const durumRengi = cari.durum === "Aktif" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500";

  return (
    <div className="bg-white rounded-lg shadow p-4 flex justify-between items-center mb-3">
      <div>
        <h3 className="font-semibold text-gray-800">{cari.unvan}</h3>
        <p className="text-sm text-gray-500">Vergi No: {cari.vergiNo}</p>
        <p className="text-sm text-gray-500">Tip: {cari.caritip} • Şehir: {cari.sehir}</p>
        <span className={`inline-block text-xs px-2 py-0.5 rounded mt-1 ${durumRengi}`}>
          {cari.durum}
        </span>
      </div>
      <div className="flex gap-2">
        <button onClick={() => onDuzenle(cari)} className="text-blue-600 hover:underline text-sm">
          Düzenle
        </button>
        <button onClick={() => onKaldir(cari.id)} className="text-red-600 hover:underline text-sm">
          Sil
        </button>
      </div>
    </div>
  );
}

export default CariCard;