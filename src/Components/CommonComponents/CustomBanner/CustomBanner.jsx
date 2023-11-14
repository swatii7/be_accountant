import React from 'react'
import cardImg from '../../../assets/HomePage/cardOne.webp'
import iconImg from '../../../assets/icon.png'

export default function CustomBanner({title, heading, headingSpan, bgImage, image  }) {
  return (
    <div>
       <div className='grid grid-cols-1 md:grid-cols-2 selection:bg-zinc-200 selection:text-black '>
        <div className="bg-[#e62f43] text-white bg-[url('https://themes.muffingroup.com/be/accountant4/wp-content/uploads/2022/03/accountan4-section-bg1.png')] bg-center py-[50px] md:py-[100px] px-[50px] xl:px-[173px]">
<div className='mb-[40px] mx-3 text-[17px] lg:text-xl font-bold'>
    <h5>
    {title}
    </h5>
</div>
<div className='md:mb-[40px] md:mx-3 leading-7 md:leading-[50px]'>
    <h2 className='text-[29px]  md:text-[41px] lg:text-5xl font-bold'>
    {heading}
    <span className='text-black ml-2'>
   {headingSpan}
    </span>
    </h2>
</div>
        </div>
        <div className= {bgImage}>
            <img src={image} className='opacity-75 block md:hidden'/>
        </div>
    </div>


    {/* icon Wrapper */}
    <div className='max-w-7xl mx-auto'>
    <div className='relative top-[-34px] pl-10 md:pl-0 lg:pl-[50px]'>
<img src={iconImg} />
    </div>
    </div>
    
    </div>
   
  )
}


