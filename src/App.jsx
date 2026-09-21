import { useState, useEffect } from "react";
import Baslik from "./Baslik";
import CariList from "./CariList";
import "./App.css";
import CariForm from "./CariForm";

function App() {
  const [form, setForm] = useState({
    unvan: "",
    vergiNo: "",
    caritip: "Müşteri",
    sehir: "",
    durum: "Aktif",
    grupAdi: "",
    grupId: null,
  });

  const [cariler, setCariler] = useState([]);
  const [duzenlenenCari, setduzenlenenCari] = useState(null);
  const [bildirim, setBildirim] = useState("");
  const [arama, setArama] = useState("");
  const [tip, setTip] = useState("Tümü");
  const [durumFiltre, setDurumFiltre] = useState("Tümü");

  useEffect(() => {
    const mockVeri = [
      {
        id: 1,
        unvan: "FEMA Yazılım",
        vergiNo: "1023456789",
        caritip: "Müşteri",
        durum: "Aktif",
        sehir: "İstanbul",
      },
      {
        id: 2,
        unvan: "ABC Teknoloji",
        vergiNo: "9876543210",
        caritip: "Tedarikçi",
        durum: "Pasif",
        sehir: "Ankara",
      },
      {
        id: 3,
        unvan: "DEF Bilişim",
        vergiNo: "1234567890",
        caritip: "Müşteri",
        durum: "Aktif",
        sehir: "Edirne",
      },
    ];
    setCariler(mockVeri);
  }, []);

  const handleFormChange = (e) => {
    const { name, value } = e.target;

    if (name === "vergiNo") {
      const kontrol = value.replace(/\D/g, "");

      setForm((prev) => ({ ...prev, vergiNo: kontrol }));

      return;
    }

    setForm((prev) => ({ ...prev, [name]: value }));
  };

  //Kaydetme işlemi

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.unvan || form.unvan.trim() === "") {
      alert("Ünvan alanı zorunludur");
      return;
    }

    if (form.vergiNo.length !== 10) {
      alert("Vergi No 10 haneli olmalıdır.");
      return;
    }

    if (duzenlenenCari === null) {
      // EKLEME
      const yeniId =
        cariler.length === 0 ? 1 : Math.max(...cariler.map((c) => c.id)) + 1;
      const yeniCari = { id: yeniId, ...form };
      setCariler((prev) => [...prev, yeniCari]);
    } else {
      // DÜZENLEME
      setCariler((prev) =>
        prev.map((cari) =>
          cari.id === duzenlenenCari ? { ...cari, ...form } : cari,
        ),
      );
    }

    setForm({
      unvan: "",
      vergiNo: "",
      caritip: "Müşteri",
      sehir: "",
      durum: "Aktif",
      grupAdi: "",
      grupId: null,
    });
    setduzenlenenCari(null);
  };

  //Kaldırma işlemi

  const cariSilme = (id) => {
    setCariler((prev) => prev.filter((cari) => cari.id !== id));
    setBildirim("Kayıt silindi!");
    setTimeout(() => setBildirim(""), 3000);
  };

  //düzenleme işlemi

  const duzenleme = (cari) => {
    setduzenlenenCari(cari.id);
    setForm({
      unvan: cari.unvan,
      vergiNo: cari.vergiNo,
      caritip: cari.caritip,
      sehir: cari.sehir,
      durum: cari.durum,
      grupAdi: cari.grupAdi || "",
      grupId: cari.grupId || null,
    });
  };

  //Grup seçme fonksiyonu
  const grupSecildi = (grup) => {
    setForm((prev) => ({
      ...prev,
      grupAdi: grup.adi,
      grupId: grup.id,
    }));
  };

  // const aktifCari = cariler.filter((cari) => cari.durum === "Aktif");
  // const pasifCari = cariler.filter((cari) => cari.durum === "Pasif");

  const filtrelenmisCariler = cariler.filter((cari) => {
    const unvanUyumlu = cari.unvan.toLowerCase().includes(arama.toLowerCase());
    const tipUyumlu = tip === "Tümü" || cari.caritip === tip;
    const durumUyumlu = durumFiltre === "Tümü" || cari.durum === durumFiltre;
    return unvanUyumlu && tipUyumlu && durumUyumlu;
  });

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <Baslik baslikMenu="Cari Kart Yönetimi"></Baslik>
      {bildirim && (
        <div className="bg-green-100 text-green-800 px-4 py-2 rounded mb-4 text-sm">
          {bildirim}
        </div>
      )}

      <div className="bg-white rounded-lg shadow p-4 mb-6 flex flex-col md:flex-row gap-3">
        <input
          type="text"
          placeholder="Ünvan Ara"
          value={arama}
          onChange={(e) => setArama(e.target.value)}
          className="border border-gray-300 rounded px-3 py-2 flex-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <select
          value={tip}
          onChange={(e) => setTip(e.target.value)}
          className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="Tümü">Tüm Tipler</option>
          <option value="Müşteri">Müşteri</option>
          <option value="Tedarikçi">Tedarikçi</option>
        </select>
        <select
          value={durumFiltre}
          onChange={(e) => setDurumFiltre(e.target.value)}
          className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="Tümü">Tüm Durumlar</option>
          <option value="Aktif">Aktif</option>
          <option value="Pasif">Pasif</option>
        </select>
      </div>
      <div className="flex flex-col md:flex-row gap-6">
        <CariForm
          form={form}
          onFormChange={handleFormChange}
          onSubmit={handleSubmit}
          onGrupSec={grupSecildi}
        ></CariForm>

        {filtrelenmisCariler.length === 0 ? (
          <p className="text-gray-500 text-sm p-4 max-w-md">
            Aramanızla eşleşen cari bulunamadı...
          </p>
        ) : (
          <CariList
            cariler={filtrelenmisCariler}
            onKaldir={cariSilme}
            onDuzenle={duzenleme}
          ></CariList>
        )}
      </div>
    </div>
  );
}

export default App;
