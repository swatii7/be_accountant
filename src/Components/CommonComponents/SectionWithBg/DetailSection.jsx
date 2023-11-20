import React from 'react'
import Counter from '../../CommonComponents/CounterComponent/Counter'

export default function DetailSection() {
  return (
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
           <Counter number={600} start={10} scrollSpyDelay={40} />
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
  )
}
