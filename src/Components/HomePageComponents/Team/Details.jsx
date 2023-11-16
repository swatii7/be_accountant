import React from 'react'
import cardOne from '../../../assets/HomePage/cardOne.webp'
import cardTwo from '../../../assets/HomePage/cardTwo.webp'
import cardThree from '../../../assets/HomePage/cardThree.webp'
import Card from '../../CommonComponents/CardComponent/Card'

export default function Details() {

    const cardArr= [
        {
          image:cardOne,
          title: 'Varius convallis',
          desc:'A dictumst odio turpis molestie egestas. Accumsan volutpat adipiscing quam tristique turpis blandit.',
        },
        {
          image:cardTwo,
          title: 'Purus ferment',
         desc:'A dictumst odio turpis molestie egestas. Accumsan volutpat adipiscing quam tristique turpis blandit.',
        },
        {
          image:cardThree,
          title: 'Faucibus nulla',
         desc:'A dictumst odio turpis molestie egestas. Accumsan volutpat adipiscing quam tristique turpis blandit.',
        },
      
      ]

      

    return (
    <>
    
        
        <div className='pt-[100px] pb-[60px] xl:max-w-7xl mx-auto px-[30px]'>
            <div className='mb-9 flex justify-between items-center'>
      <h2 className='selection:bg-zinc-200 selection:text-black md:text-[41px] md:leading-[43px] lg:text-5xl font-bold'>
      Years of experience
      <br />
      <span className='text-red-600'>quick solutions</span>
      </h2>
      <img src='https://themes.muffingroup.com/be/accountant4/wp-content/uploads/2022/03/accountan4-home-icon1.svg' />
    </div>
    <div className='grid md:grid-cols-2 lg:grid-cols-3'>
      {cardArr.map((card,index) =>
       <div key={index} className='select-none'>
        <Card imgSrc={card.image}
        heading={card.title}
         description={card.desc}
          imgClass='rounded-t-lg mb-30 md:mr-auto'
           WrapClass='img-center'
           cardClass='px-[10%] pt-[30px] pb-[30px] text-center md:text-left'
           margin='mx-3 mb-[40px]'
           marginBottom= 'mb-[30px]'
           />
   
         </div>
      )}
     

    </div>

            </div>
        </>
    )
}
