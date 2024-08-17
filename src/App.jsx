import { useEffect } from 'react'
import './App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Routes, Route} from "react-router-dom";
import NextCent from './pages/NextCent';
import Swiper from './pages/Swiper';
import DinamicInputData from './pages/DinamicInputData';

function App() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });

  }, []);

  return (
    <Routes>
    <Route path='/' element={<NextCent />} />
    <Route path='/swiper' element={<Swiper />} />
    <Route path='/dinamic' element={<DinamicInputData />} />
  </Routes>
  )
}

export default App
