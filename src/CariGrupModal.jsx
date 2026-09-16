import React from "react";

function CariGrupModal({ onSec, onKapat }) {
  const cariGruplari = [
    { id: 1, adi: "A grubu" },
    { id: 2, adi: "B grubu" },
    { id: 3, adi: "C grubu" },
  ];
  return (
    <div className="modal">
      <p>Grup Listesi</p>
      {cariGruplari.map((grup) => (
        <div key={grup.id}>
          <button
            onClick={() => {
              onSec(grup);
              onKapat();
            }}
          >
            {grup.adi}
          </button>
        </div>
      ))}

      <button onClick={onKapat}>Kapat</button>
    </div>
  );
}

export default CariGrupModal;
