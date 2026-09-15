import CariCard from "./CariCard"

function CariList({ cariler, onKaldir }) {
  const aktifCari = cariler.filter((cari) => cari.durum === "Aktif")
  const pasifCari = cariler.filter((cari) => cari.durum === "Pasif")

  return (
    <div>
      <h3>Cariler Listesi</h3>
      <h4>Aktif Cariler</h4>
      {aktifCari.map((cari) => (
        <CariCard key={cari.id} cari={cari} onKaldir={onKaldir} />
      ))}

      <h4>Pasif Cariler</h4>
      {pasifCari.map((cari) => (
        <CariCard key={cari.id} cari={cari} onKaldir={onKaldir} />
      ))}
    </div>
  )
}

export default CariList