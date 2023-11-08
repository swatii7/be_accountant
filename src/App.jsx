
import './App.css'
import Navbar from './Components/CommonComponents/Navbar/Navbar'
import Home from './Components/HomePageComponents/HomePage/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  

  return (
   
    
    <BrowserRouter>
      <Routes>
        
         <Route path="/" element={<Home />}>
        
         {/* <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        </Route> 
      </Routes>
    </BrowserRouter>
  )
}

export default App
