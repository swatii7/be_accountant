
import './App.css'
import Home from './Components/HomePageComponents/HomePage/Home'
import About from './Components/AboutPage/AboutUs/About'
import {  Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout/Layout';

function App() {
  

  return (
   
     
    <Routes>
    
      <Route index element={<Home />} />
      <Route path="/aboutus" element={<About />} />
      {/* 
      <Route path="contact" element={<Contact />} />
      <Route path="*" element={<NoPage />} /> */}
   
  </Routes>
  )
}

export default App
