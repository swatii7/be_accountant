import React from 'react'
import cardImg from '../../../assets/HomePage/cardOne.webp'
import iconImg from '../../../assets/icon.png'

export default function CustomBanner({
    title,
    heading,
    headingSpan,
    spanPosition,
    padding,
    bgImage,
    image,
    bgPosition,
    bgColor,
    bgSize,
    onClick,
    naviagteToSection
}) {
  return (
    <div>
    <div id={naviagteToSection} className='md:flex selection:bg-zinc-200 selection:text-black'>
      <div className={`w-full md:w-1/2  bg-[#e62f43] text-white bg-[url('https://themes.muffingroup.com/be/accountant4/wp-content/uploads/2022/03/accountan4-section-bg1.png')] bg-no-repeat ${bgSize} ${bgPosition}`}>
        <div className={`flex flex-wrap justify-center  ${padding}`}>
        <div className='mb-10 w-1/2 mx-3 text-[17px] lg:text-xl font-bold'>
          <h5 className=''>{title}</h5>
        </div>
        <div className='relative w-1/2 md:mb-[40px]] md:mx-3 leading-7 md:leading-[50px]'>
          <h2 className={`text-[29px] md:text-[41px] lg:text-5xl font-bold ${spanPosition === 'top' ? 'pt-6' : ''}`}>
            {heading}
            <span className={`text-black md:inline xl:text-left absolute ${spanPosition === 'top' ? 'top-[-30px] text-center left-[90px] md:top-[-44px] mt-5 mb-5 md:left-0' : 'bottom-[-35px] md:bottom-[-50px] left-0'}`}>
              {headingSpan}
            </span>
          </h2>
        </div>
        </div>
        
      </div>
      <div className={`w-full md:w-1/2 h-[300px] md:h-auto ${bgImage}`}>
    
    </div>
    </div>

    {/* icon Wrapper */}
    <div className={`${bgColor}`}>
    <div className='max-w-7xl mx-auto'>
      <div className='relative top-[-34px] pl-10 lg:pl-0'>
        <img src={iconImg} alt='Icon' onClick={onClick} />
      </div>
    </div>
    </div>
   
 
  </div>
   
  )
}


