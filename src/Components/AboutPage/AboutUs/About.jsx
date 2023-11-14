import React from 'react'
import CustomBanner from '../../CommonComponents/CustomBanner/CustomBanner'
import cardImg from '../../../assets/HomePage/cardOne.webp'
import Team from '../../HomePageComponents/Team/Team'

export default function About() {
  return (
    <section className='selection:bg-zinc-200 selection:text-black'>
      <CustomBanner title='About us' heading='A tincidunt amet risus aenean leo' headingSpan='bibendum' image={cardImg} bgImage="bg-[url('https://themes.muffingroup.com/be/accountant4/wp-content/uploads/2022/03/accountan4-about-bg.webp')] bg-[top_center] bg-cover" />
      <div className='grid grid-cols-1 md:grid-cols-2 pt-10 pb-[50px] md:pb-[100px] lg:max-w-7xl mx-auto px-[33px]'>
        <div className='md:mx-3 md:px-2'>
          <h3 className='text-[19px] lg:text-[32px] font-bold leading-[23px] lg:leading-[38px]'>
          Eget posuere neque dui non amet, tortor curabitur. In viverra sed vel sed non sit. Aliquam sed interdum molestie nam proin.
          </h3>
          <hr className="h-0.5 w-[191px] my-8 bg-red-500"></hr>
        </div>


        <div className='text-[#8d99ae] lg:pl-[100px]'>
          <p className='mx-3 mb-[40px]'>In sit amet ipsum a odio imperdiet placerat et ac dui. Vivamus suscipit ut erat quis cursus. Nam quis mauris quis elit accumsan sollicitudin non sit amet odio. Vestibulum et nulla ut eros consequat mollis vel in magna.</p>
          <p className='mx-3 mb-[40px]'>
          Aenean vehicula elit massa, vitae facilisis ligula egestas vitae. Morbi pulvinar mi ac ante fringilla, nec dapibus libero blandit. Nunc ut pellentesque sem. Nunc quis tristique tortor, sit amet finibus sapien. Suspendisse venenatis, lacus ac aliquam mollis, nisl risus maximus lectus, vitae faucibus lacus ante vel diam. Sed lectus purus, lobortis eu aliquet at, ullamcorper.
          </p>
        </div>
        <div>
        </div>



      </div>
      <div className='lg:max-w-7xl mx-auto'>
      <Team />
      </div>
    </section>
  )
}
