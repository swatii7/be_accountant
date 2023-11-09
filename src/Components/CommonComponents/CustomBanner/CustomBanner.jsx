import React from 'react'
import cardImg from '../../../assets/HomePage/cardOne.webp'

export default function CustomBanner({title, }) {
  return (
    <div className='grid grid-cols-2 selection:bg-zinc-200 selection:text-black '>
        <div className="bg-[#e62f43] text-white  bg-[url('https://themes.muffingroup.com/be/accountant4/wp-content/uploads/2022/03/accountan4-section-bg1.png')] bg-center py-[100px] px-[5%]">
<div>
    <h5>
    About us
    </h5>
</div>
<div>
    <h2>
    A tincidunt amet risus aenean leo
    <span>
    bibendum
    </span>
    </h2>
</div>
        </div>
        <div>
            <img src={cardImg} />
        </div>
    </div>
  )
}
