import React from 'react'

function CariCard({cari,onKaldir, onDuzenle}) {
  return (
    <div className='kart'>
      <h2>{cari.unvan}</h2>
      <p>Vergi No: {cari.vergiNo}</p>
      <p>Tip:{cari.caritip}</p>
      <p>Durum: {cari.durum}</p>
      <p>Şehir: {cari.sehir}</p>
      <button onClick={()=>onKaldir(cari.id)}>Sil</button>
      <button onClick={()=>onDuzenle(cari)}>Düzenle</button>
    </div>
  )
}

export default CariCard
