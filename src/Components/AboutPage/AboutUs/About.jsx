import React from 'react'
import CustomBanner from '../../CommonComponents/CustomBanner/CustomBanner'

export default function About() {
  return (
    <section className='selection:bg-zinc-200 selection:text-black'>
      <CustomBanner title='About us' heading='A tincidunt amet risus aenean leo' headingSpan='bibendum' bgImage="bg-[url('https://themes.muffingroup.com/be/accountant4/wp-content/uploads/2022/03/accountan4-about-bg.webp')]" />
      <div className='grid grid-cols-2 lg:max-w-7xl mx-autos'>
        <div className=''>
          <h3 className='text-[32px] font-bold'>
          Eget posuere neque dui non amet, tortor curabitur. In viverra sed vel sed non sit. Aliquam sed interdum molestie nam proin.
          </h3>
        </div>


        <div>



        </div>



      </div>
    </section>
  )
}
