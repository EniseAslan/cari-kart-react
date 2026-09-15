import React from "react";

function CariForm({ form, onFormChange, onSubmit }) {
  return (
    <>
      <input
        type="text"
        name="unvan"
        placeholder="Ünvan yazınız"
        value={form.unvan}
        onChange={onFormChange}
      />
      <p>Unvan: {form.unvan}</p>

      <input
        type="text"
        name="vergiNo"
        placeholder="vergi no giriniz"
        value={form.vergiNo}
        onChange={onFormChange}
      />
      <p>Vergi No: {form.vergiNo}</p>

      <input
        type="text"
        name="sehir"
        placeholder="Sehri giriniz"
        value={form.sehir}
        onChange={onFormChange}
      />

      <p>Sehir: {form.sehir} </p>

      <select name="caritip" value={form.caritip} onChange={onFormChange}>
        <option value="Müşteri">Müşteri</option>
        <option value="Tedarikçi">Tedarikçi</option>
      </select>
      <p>Cari Tipi: {form.caritip}</p>

      <select name="durum" value={form.durum} onChange={onFormChange}>
        <option value="Aktif">Aktif</option>
        <option value="Pasif">Pasif</option>
      </select>

      <p>Durum:{form.durum}</p>
      <button onClick={onSubmit}>Kaydet</button>
    </>
  );
}

export default CariForm;
