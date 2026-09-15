import React from 'react'

function CariGrupModal({onKapat}) {
  return (
    <div className='modal'>
      <p>Grup Listesi</p>
      <button onClick={onKapat}>Kapat</button>
    </div>
  )
}

export default CariGrupModal
