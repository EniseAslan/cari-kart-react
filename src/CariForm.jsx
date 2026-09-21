import { useState } from "react";
import CariGrupModal from "./CariGrupModal";
import { CARI_DURUMLARI, CARI_TIPLERI } from "./constants/cariEnums";

//stiller
const INPUT_STYLE =
  "border border-gray-300 rounded px-3 py-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-400";
const BTN_PRIMARY =
  "bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm font-medium";

function CariForm({ form, onFormChange, onSubmit, onGrupSec }) {
  const [modalAcik, setModalAcik] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow p-5 mb-6 max-w-md">
      <h2 className="text-lg font-semibold mb-4">Cari Ekle / Düzenle</h2>
      <div className="flex flex-col gap-3">
        <div>
          <label className="block text-sm mb-1">Ünvan</label>
          <input
            type="text"
            name="unvan"
            value={form.unvan}
            onChange={onFormChange}
            className={INPUT_STYLE}
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Vergi No</label>
          <input
            type="text"
            name="vergiNo"
            value={form.vergiNo}
            onChange={onFormChange}
            className={INPUT_STYLE}
            maxLength={11}
            inputMode="numeric"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Şehir</label>
          <input
            type="text"
            name="sehir"
            value={form.sehir}
            onChange={onFormChange}
            className={INPUT_STYLE}
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Cari Tipi</label>
          <select
            name="caritip"
            value={form.caritip}
            onChange={onFormChange}
            className={INPUT_STYLE}
          >
            {Object.values(CARI_TIPLERI).map((tip) => (
              <option key={tip} value={tip}>
                {tip}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm mb-1">Durum</label>
          <select
            name="durum"
            value={form.durum}
            onChange={onFormChange}
            className={INPUT_STYLE}
          >
            {Object.values(CARI_DURUMLARI).map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm mb-1">Cari Grubu</label>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">
              {form.grupAdi || "Seçilmedi"}
            </span>
            <button
              type="button"
              onClick={() => setModalAcik(true)}
              className="text-blue-600 hover:underline text-sm"
            >
              Grup Seç
            </button>
          </div>
        </div>

        <button onClick={onSubmit} className={BTN_PRIMARY}>
          Kaydet
        </button>
      </div>

      {modalAcik && (
        <CariGrupModal onKapat={() => setModalAcik(false)} onSec={onGrupSec} />
      )}
    </div>
  );
}

export default CariForm;
