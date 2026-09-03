import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import Baslik from './Baslik'
import Buton from './Buton'
import Kart from './Kart'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Baslik baslikMenu="Cari Kart Yönetimi" />
      <Buton ekleme={() => console.log("Yeni cari eklendi")} />
      <Kart unvan="FEMA Yazılım" vergiNo="1023456789" caritip="Müşteri" durum="Aktif" sehir="İstanbul" />
      <Kart unvan="ABC Teknoloji" vergiNo="9876543210" caritip="Tedarikçi" durum="Pasif" sehir="Ankara" />
     
    </>
  )
}

export default App
