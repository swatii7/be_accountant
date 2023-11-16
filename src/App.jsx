
import './App.css'
import Home from './Components/HomePageComponents/HomePage/Home'
import About from './Components/AboutPage/AboutUs/About'
import {  Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Service from './Components/ServicePage/Service';
import Faq from './Components/FaqComponent/Faq';

function App() {
  

  return (
   
     
    <Routes>
    
      <Route index element={<Home />} />
      <Route path="/aboutus" element={<About />} />
      <Route path="/service" element={<Service />} />
      <Route path="/faq" element={<Faq />} />
      {/* 
      <Route path="contact" element={<Contact />} />
      <Route path="*" element={<NoPage />} /> */}
   
  </Routes>
  )
}

export default App
