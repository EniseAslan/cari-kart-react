function CariGrupModal({ onKapat, onSec }) {
  const cariGruplari = [
    { id: 1, adi: "A grubu" },
    { id: 2, adi: "B grubu" },
    { id: 3, adi: "C grubu" },
  ];

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-5 w-72">
        <p className="font-semibold mb-3">Grup Listesi</p>
        <div className="flex flex-col gap-2">
          {cariGruplari.map((grup) => (
            <button
              key={grup.id}
              onClick={() => { onSec(grup); onKapat(); }}
              className="text-left px-3 py-2 rounded hover:bg-gray-100 text-sm"
            >
              {grup.adi}
            </button>
          ))}
        </div>
        <button onClick={onKapat} className="mt-4 text-sm text-gray-500 hover:underline">
          Kapat
        </button>
      </div>
    </div>
  );
}

export default CariGrupModal;