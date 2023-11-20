import React from 'react'
import cardImgOne from '../../../assets/CardImg/cardIcon1.png'
import { ArrowRightIcon } from '@heroicons/react/24/solid'

 function Card({onClick, includeIcon, imgSrc, heading, description, imgClass, WrapClass, cardClass, padding, margin, marginBottom}) {
  return (
    <div
        className={`block ${padding} ${margin} rounded-2xl bg-white hover:bg-[#EDF2F4]`} onClick={onClick}>
        <a href="#" className={WrapClass}>
          <img
            className={imgClass}
            src={imgSrc}
            alt="" />
        </a>
        <div className={cardClass}>
          <h4
            className={`${marginBottom} text-sm md:text-2xl font-bold leading-7 text-neutral-800`}>
            {heading}
          </h4>
          <p className="font-medium text-slate-400">
            {description}
          </p>
          {includeIcon &&
          <div className='img-center'>
          <ArrowRightIcon 
          onClick={onClick}
           className={`text-red-600 md:mr-auto max-w-[20px] pt-[10px] ${marginBottom}`} />
        </div>
        }
         
          
        </div>
      </div>
  )
}

export default Card;



{/* <div
        className="block p-[30px] md:p-[50px] rounded-2xl bg-white hover:bg-[#EDF2F4] ">
        <a href="#!" className='img-center '>
          <img
            className="rounded-t-lg mb-30 md:mr-auto"
            src={imgSrc}
            alt="" />
        </a>
        <div className="pt-4 md:pt-6 text-center md:text-left">
          <h4
            className="mb-4 text-sm md:text-2xl font-bold leading-7 text-neutral-800">
            {heading}
          </h4>
          <p className="font-medium text-slate-400">
            {description}
          </p>
         <div className='img-center'>
           <ArrowRightIcon className='text-red-600 md:mr-auto max-w-[20px] pt-[10px]' />
         </div>
          
        </div>
      </div> */}