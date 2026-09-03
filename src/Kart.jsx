import React from "react";

function Kart({ unvan, vergiNo, caritip, durum, sehir }) {
  return (
    <div>
      <h2>{unvan}</h2>
      <p>Vergi No: {vergiNo}</p>
      <p>Tip: {caritip}</p>
      <p>Durum: {durum}</p>
      <p>Şehir: {sehir}</p>
    </div>
  );
}

export default Kart;
