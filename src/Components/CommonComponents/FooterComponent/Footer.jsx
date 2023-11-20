import React from 'react'
import logo from '../../../assets/logo.png'
import { ChevronUpIcon } from '@heroicons/react/24/solid';


export default function Footer() {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const addressData = [
    'Envato',
    'Level 13, 2 Elizabeth',
    'Victoria 3000',
    'Australia',
  ];
  
  const openingHoursData = [
    'Monday - Friday: 09:00 AM - 06:00 PM',
    'Saturday: 07:00 AM - 08:00 PM',
  ];


  return (
   
    
    <footer className="bg-[#EDF2F4] selection:bg-zinc-200 selection:text-black px-[30px] ">
      <div className='max-w-screen-xl mx-auto'>

     
      <div className="md:flex gap-6 py-16">
        <div className='w-full md:w-1/2'>
          <img src={logo} alt="Logo" />
          <div>
          <p className="text-[#8d99ae] w-[397px]">
            Arcu sit venenatis lacinia dolor urna. Amet magna vulputate elit vestibulum ultrices. Viverra ultrices vel morbi sed tortor, lacus, dui id scelerisque.
            </p>
          </div>
          
        </div>
        <div className='text-left w-full md:w-1/4'>
          <h5 className='text-xl font-bold mb-4'>Address</h5>
          <ul className='mb-4'>
            {addressData.map((line, index) => (
              <li className='text-[#8d99ae] font-medium' key={index}>{line}</li>
            ))}
          </ul>
        </div>
        <div className='text-left md:ml-[130px]'>
          <h5 className='text-xl font-bold mb-4'>Opening hours</h5>
          <ul className='mb-4'>
            {openingHoursData.map((line, index) => (
              <li className='text-[#8d99ae] font-medium' key={index}>{line}</li>
            ))}
          </ul>
        </div>
      </div>
      


      </div>
      <div className='pt-[30px] pb-10 border border-[#eaeaea] text-[#8d99ae]'>

<div className='max-w-screen-xl mx-auto flex justify-around'>
  <div className='order-2 md:order-1'>
  <p>© 2023 Betheme by
  <a href='https://muffingroup.com/'>Muffin group</a> 
  | All Rights Reserved | Powered by 
  <a href='https://wordpress.org'>WordPress</a>
  </p>
  </div>
  <div className='bg-red-600 w-[45px] h-[50px] border-2 rounded-md order-1 md:order-2'>
    <ChevronUpIcon onClick={scrollToTop} className='text-white w-[30px] mt-2 ml-[5px]' />
  </div>

</div>
</div>
    </footer>
    
  )
}
