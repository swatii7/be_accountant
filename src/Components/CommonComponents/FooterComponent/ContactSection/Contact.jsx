import React from 'react'
import CustomButton from '../../CustomButton/CustomButton'

export default function Contact() {
  return (
    <section className="bg-[#EDF2F4] bg-[url('https://themes.muffingroup.com/be/accountant4/wp-content/uploads/2022/03/accountant4-section-bg2.svg')] bg-no-repeat bg-[top_center] pt-[100px] pb-[60px]">
      <div className='selection:bg-zinc-200 selection:text-black text-center xl:max-w-7xl mx-auto'>
        <div className=' mx-3 mb-[40px]'>
          <h2 className='text-[29px] leading-[30px] lg:text-5xl font-bold'>
          Contact with our professionals
          </h2>
        </div>
        <div className=' mx-3 mb-[40px]'>
          <h4 className='text-sm lg:text-2xl font-bold'>
          Call us today at 
          <span className='text-red-600 ml-2'>+61(0)383766284</span>
          </h4>
          
        </div>
        <div className='img-center mx-3 mb-[40px]'>
        <CustomButton border='border-[#e62f43]' mb='mb-5' title='free consultation' text='text-[#e62f43]' hvBgColor='hover:bg-[#e62f43]' hvtextColor='hover:text-white' />
        <p className='text-[#8d99ae] selection:bg-zinc-200 selection:text-black'>
        Aliquam dictum amet blandit efficitur.
        </p>
        </div>
      </div>
    </section>
  )
}
