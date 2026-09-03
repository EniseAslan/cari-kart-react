import React from 'react'

function Buton({ekleme}) {
  return (
    <div>
      <button className="btn btn-primary counter" onClick={ekleme}>
        Yeni Cari Ekle
      </button>
    </div>
  )
}

export default Buton
