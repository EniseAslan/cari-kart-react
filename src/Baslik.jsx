import React from 'react'

function Baslik({baslikMenu}) {
  return (
    <div className="bg-white shadow p-4 mb-6">
        <h1  className="text-2xl font-bold text-gray-800">{baslikMenu}</h1>
    </div>
  )
}

export default Baslik
