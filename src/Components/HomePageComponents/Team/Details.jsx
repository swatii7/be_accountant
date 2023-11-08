import React from 'react'
import Counter from '../../CommonComponents/CounterComponent/Counter'
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
    
        <section className="bg-fixed bg-[url('https://themes.muffingroup.com/be/accountant4/wp-content/uploads/2022/03/accountan4-services-section-bg.webp')] py-[100px] px-[30px]">
            <div className='xl:max-w-7xl mx-auto'>
                <div className='selection:bg-zinc-200 selection:text-black grid grid-cols-4'>

                    <div className='col-span-4 md:col-span-2'> 
                    <div className='bg-white pt-[75px] pl-3 lg:pl-[50px] pb-[40px] border-t-[1px] border-l-[1px] border-b-[1px] border-r-[1px] rounded-tl-2xl rounded-tr-2xl md:rounded-tr-none '>
                    <h2 className='mx-4 mb-[40px] text-5xl font-bold'>
                    Sit amet
                    <br />
                    <span className='text-red-600'>
                    ullamcorper
                    </span>
                    </h2>
                    </div>
                   
                    </div>
                    <div className='col-span-4 md:col-span-2'>
                    <div className='pt-[75px] pl-[22px] lg:pl-[50px] pb-[40px] border-[#9F9F9F] border-t-[1px] border-r-[1px] border-l-[1px] border-b-[1px] md:rounded-tr-2xl  '>
                   <span className='text-white text-[60px] font-bold'>
                   <Counter number={600} />
                   </span>
                   <p className='text-white mt-[-25px] mb-[40px] text-2xl font-bold'>
                    Clients
                   </p>
                    </div>
                    </div>
                    <div className='col-span-4 md:col-span-2'>
                    <div className='pt-[75px] pl-3 lg:pl-[50px] pb-[40px] border-[#9F9F9F] border-t-[1px] border-b-[1px] border-l-[1px] border-r-[1px]  md:rounded-bl-2xl  '>
                   <span className='text-white text-[60px] font-bold'>
                   <Counter number={9000} separator="" className='ml-[22px] lg:ml-11' />
                   </span>
                   <p className='text-white ml-[22px] lg:ml-11 text-2xl mt-[-18px] mb-[40px] font-bold'>
                    Invoices
                   </p>
                    </div>
                    </div>
                    <div className='col-span-4 md:col-span-2'>
                    <div className='pt-[75px] pl-3 lg:pl-[50px] pb-[40px] border-[#9F9F9F] border-[1px] rounded-br-2xl rounded-bl-2xl md:rounded-bl-none  '>
                    <span className='text-white text-[60px] font-bold'>
                    <Counter number={50000} separator="" className='ml-[22px] lg:ml-11' prefix="$" />
                   </span>
                   <p className='text-white ml-[22px] lg:ml-11 text-2xl mt-[-18px] mb-[40px] font-bold'>
                   Cleared amounts
                   </p>
                    </div>
                    </div>
                </div>
            </div>
            
        </section>
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
