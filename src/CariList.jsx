import CariCard from "./CariCard";

function CariList({ cariler, onKaldir, onDuzenle }) {
  const aktifCari = cariler.filter((cari) => cari.durum === "Aktif");
  const pasifCari = cariler.filter((cari) => cari.durum === "Pasif");

  return (
    <div className="max-w-md">
      <h3 className="text-lg font-semibold mb-3">Cariler Listesi</h3>
      {aktifCari.length > 0 && (
        <>
          <h4 className="text-sm font-medium text-gray-500 mb-2">
            Aktif Cariler
          </h4>

          {aktifCari.map((cari) => (
            <CariCard
              key={cari.id}
              cari={cari}
              onKaldir={onKaldir}
              onDuzenle={onDuzenle}
            />
          ))}
        </>
      )}

      {pasifCari.length > 0 && (
        <>
          <h4 className="text-sm font-medium text-gray-500 mb-2 mt-4">
            Pasif Cariler
          </h4>
          {pasifCari.map((cari) => (
            <CariCard
              key={cari.id}
              cari={cari}
              onKaldir={onKaldir}
              onDuzenle={onDuzenle}
            />
          ))}
        </>
      )}
    </div>
  );
}

export default CariList;
