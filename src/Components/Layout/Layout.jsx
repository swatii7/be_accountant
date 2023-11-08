import React, { Children } from 'react'
import Navbar from '../CommonComponents/Navbar/Navbar'
import Footer from '../CommonComponents/FooterComponent/Footer'

export default function Layout({children}) {
  return (
    
    <>
    <Navbar />
    <main className='pt-20'>
    {children}
    </main>
    <Footer />
    </>
  )
}
