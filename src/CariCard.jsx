import React from 'react'

function CariCard({cari,onKaldir}) {
  return (
    <div className='kart'>
      <h2>{cari.unvan}</h2>
      <p>Vergi No: {cari.vergiNo}</p>
      <p>Tip:{cari.caritip}</p>
      <p>Durum: {cari.durum}</p>
      <p>Şehir: {cari.sehir}</p>
      <button onClick={()=>onKaldir(cari.id)}>Sil</button>
    </div>
  )
}

export default CariCard
