import { ArrowRightIcon } from '@heroicons/react/24/solid'
import React from 'react'

export default function CustomButton({onClick, bgColor,text, hvBorderColor,border,hvBgColor,hvtextColor, title, mb, marginLeft, order}) {
    
  return (
    <div>
        <button
        onClick={onClick}
         type="button"
          className={`flex text-center  py-[20px] ${mb} ${marginLeft}  ${order} px-[40px] items-center ${bgColor} ${text} text-[13px] text-sm font-['Roboto', 'sans-serif'] focus:outline-none rounded-lg border-2 font-bold ${border} ${hvBgColor} ${hvtextColor} ${hvBorderColor} uppercase`} >
       {title}
    <svg className={`w-3.5 h-3.5 ml-5`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
  </svg>
</button>

    
            {/* <ArrowRightIcon className={`${text} `} /> */}
       
    </div>
  )
}

