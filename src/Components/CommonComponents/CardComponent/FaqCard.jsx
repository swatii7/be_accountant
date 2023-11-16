import React from 'react'
import FaqIcon from '../../../assets/CardImg/faqCard.png'

export default function FaqCard({title, para}) {
  return (
    <div className='bg-[#F2374B] text-white rounded-2xl p-5 lg:p-10 mr-[15px] mb-[15px] lg:mr-[30px] selection:bg-zinc-200 selection:text-black hover:bg-[#FE4357]'>
        <div className='mx-3 mb-[90px]'>
            <h2 className='text-[29px] md:text-[41px] lg:text-5xl font-bold leading-[50px]'>{title}</h2>
        </div>
        <div>
            <p className='mb-[15px]'>{para}</p>
        </div>
        <div className='text-left'>
            <img src={FaqIcon} />

        </div>
      
    </div>
  )
}
