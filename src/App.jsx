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
      const kontrol =value.replace(/\D/g, "");

        setForm((prev) => ({ ...prev, vergiNo: kontrol }));
      
      return;
    }

    setForm((prev) => ({ ...prev, [name]: value }));
  };

  //Kaydetme işlemi

  const handleSubmit = (e) => {
    e.preventDefault();

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

  const aktifCari = cariler.filter((cari) => cari.durum === "Aktif");
  const pasifCari = cariler.filter((cari) => cari.durum === "Pasif");

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <Baslik baslikMenu="Cari Kart Yönetimi"></Baslik>
      <div className="flex flex-col md:flex-row gap-6">
        <CariForm
          form={form}
          onFormChange={handleFormChange}
          onSubmit={handleSubmit}
          onGrupSec={grupSecildi}
        ></CariForm>
        <CariList
          cariler={cariler}
          onKaldir={cariSilme}
          onDuzenle={duzenleme}
        ></CariList>
      </div>
    </div>
  );
}

export default App;
