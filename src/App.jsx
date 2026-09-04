import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import Baslik from './Baslik'
import Buton from './Buton'
import Kart from './Kart'
import './App.css'

function App() {
  const [sayac, setSayac] = useState(0)
  const [durum,setDurum]=useState("Aktif");


  const handleChange=(event)=>{
    setDurum(event.target.value);
  };

  return (
    <>
    <div>
    <select onChange={handleChange} value={durum} >
      <option value="Aktif">Aktif</option>
      <option value="Pasif">Pasif</option>
    </select>
    <p>Kullanıcı: {durum}</p>
    </div>
    <div>
     
    
      <Baslik baslikMenu="Cari Kart Yönetimi" />
      <Buton ekleme={() => setSayac(sayac+1)} />
         <p>Eklenen Cari Sayısı: {sayac}</p>
      <Kart unvan="FEMA Yazılım" vergiNo="1023456789" caritip="Müşteri" durum="Aktif" sehir="İstanbul" />
      <Kart unvan="ABC Teknoloji" vergiNo="9876543210" caritip="Tedarikçi" durum="Pasif" sehir="Ankara" />
     </div>
    </>
  )
}

export default App
