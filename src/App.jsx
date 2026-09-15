import { useState, useEffect } from "react";
import Baslik from "./Baslik";
import Buton from "./Buton";
import Kart from "./Kart";
import CariList from "./CariList"
import "./App.css";

function App() {
  const [sayac, setSayac] = useState(0);
  const [durum, setDurum] = useState("Aktif");
  const [form, setForm] = useState({
    unvan: "",
    vergiNo: "",
    caritip: "Müşteri",
    sehir: "",
  });

  const [cariler, setCariler] = useState([]);

  

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

  const handleChange = (event) => {
    setDurum(event.target.value);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  //Kaydetme işlemi

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("kaydedilecek cari:", form);
    setForm({ unvan: "", vergiNo: "", caritip: "", sehir: "Müşteri", durum: "" });
  };

  //Kaldırma işlemi

  const cariSilme=(id)=>{
    setCariler((prev)=>prev.filter((cari)=>cari.id !==id))
  }

  const aktifCari = cariler.filter((cari) => cari.durum === "Aktif");
  const pasifCari = cariler.filter((cari) => cari.durum === "Pasif");

  return (
    <>
      <div>
        <input
          type="text"
          name="unvan"
          placeholder="Ünvan yazınız"
          value={form.unvan}
          onChange={handleFormChange}
        />
        <p>Unvan: {form.unvan}</p>

        <input
          type="text"
          name="vergiNo"
          placeholder="vergi no giriniz"
          value={form.vergiNo}
          onChange={handleFormChange}
        />
        <p>Vergi No: {form.vergiNo}</p>

        <input
          type="text"
          name="sehir"
          placeholder="Sehri giriniz"
          value={form.sehir}
          onChange={handleFormChange}
        />

        <p>Sehir: {form.sehir} </p>

        <select name="caritip" value={form.caritip} onChange={handleFormChange}>
          <option value="Müşteri">Müşteri</option>
          <option value="Tedarikçi">Tedarikçi</option>
        </select>
        <p>Cari Tipi: {form.caritip}</p>
        <button onClick={handleSubmit}>Kaydet</button>
      </div>

<CariList cariler= {cariler} onKaldir={cariSilme}></CariList>
      <div>
        <select onChange={handleChange} value={durum}>
          <option value="Aktif">Aktif</option>
          <option value="Pasif">Pasif</option>
        </select>
        <p>Kullanıcı: {durum}</p>
      </div>

      <div>
        <Baslik baslikMenu="Cari Kart Yönetimi" />
        <Buton ekleme={() => setSayac(sayac + 1)} />
        <p>Eklenen Cari Sayısı: {sayac}</p>
      </div>

   
    </>
  );
}

export default App;
