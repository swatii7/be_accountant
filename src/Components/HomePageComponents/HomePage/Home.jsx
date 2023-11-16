import React from 'react'
import { ArrowSmallRightIcon, ArrowDownRightIcon } from '@heroicons/react/24/solid'
import imgOne from '../../../assets/HomePage/image2.png'
import Card from '../../CommonComponents/CardComponent/Card'
import cardImgOne from '../../../assets/CardImg/cardIcon1.png'
import cardImgTwo from '../../../assets/CardImg/cardIcon2.png'
import Team from '../Team/Team'
import Details from '../Team/Details'
import Accountant from '../AccountantSection/Accountant'
import Contact from '../../CommonComponents/FooterComponent/ContactSection/Contact'
import DetailSection from '../../CommonComponents/SectionWithBg/DetailSection'
import teamImg from '../../../assets/HomePage/Team.png'


export default function Home() {

const cardArr= [
  {
    image:cardImgOne,
    title: 'Rhoncus odio',
    desc:'Curabitur ac leo nunc estibul et mauris vel ante finibus maximus nec ut leo, integer consectetur.',
  },
  {
    image:cardImgTwo,
    title: 'Pellentesque',
    desc:'Curabitur ac leo nunc estibul et mauris vel ante finibus maximus nec ut leo, integer consectetur.',
  },
  {
    image:cardImgOne,
    title: 'Quis etiam ornare',
    desc:'Curabitur ac leo nunc estibul et mauris vel ante finibus maximus nec ut leo, integer consectetur.',
  },

]


  return (
    <>
    <section className="bg-red pt-20 mb:20 md:mb-15  text-white bg-[url('https://themes.muffingroup.com/be/accountant4/wp-content/uploads/2022/03/accountan4-section-bg1.png')]">
      <div className="select-none xl:max-w-7xl 2xl:mx-[232px]  px-[30px] md:px-10">
        <div className='grid lg:grid-cols-5'>

          <div className='lg:col-span-3 text-center lg:text-left'>
            <h3 className='font-bold text-xl'>Be Accountant</h3>
            {/* heading div */}
            <div className='pt-9'>
              <h1 className='text-3xl md:text-[40px] lg:text-5xl xl:text-[70px] md:leading-[70px] font-bold'>
                Accounting Services<br />
                <span className='text-black mr-3'>
                  and
                </span>
                Tax optimalization
              </h1>
            </div>
           
            <div className='hidden lg:block max-w-[90px] h-auto mt-10 bg-black text-white rounded-[50%]'>
              <ArrowSmallRightIcon className='xl:p-8 md:p-[20px] w-full ' />
            </div>
            {/* */}
<div className='hidden lg:block'>
<div className='grid grid-cols-4  md:grid-cols-4 lg:mt-8 xl:mt-32 '>
              <div className='col-span-2 bg-[#fbf4f4]  flex w-full'>
                <img src={imgOne} className='object-fit' />
                <div>
                <p className='text-black text-xl pt-10 xl:ml-[-49px] lg:ml-[-78px] font-bold'>Individual customers</p>
               
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mt-[23px] ml-[70px] text-red-600">
  <path d="M6.28 5.22a.75.75 0 00-1.06 1.06l7.22 7.22H6.75a.75.75 0 000 1.5h7.5a.747.747 0 00.75-.75v-7.5a.75.75 0 00-1.5 0v5.69L6.28 5.22z" />
</svg>

                </div>
                

              </div>
              
              <div className='col-span-2 md:ml-10 bg-[#fbf4f4] flex w-full'>
                <img src={imgOne} className='object-contain' />
                <div>
                <p className='text-black text-xl pt-10 xl:ml-[-49px] lg:ml-[-78px] font-bold'>Business customers</p>
               
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mt-[23px] ml-[70px] text-red-600">
  <path d="M6.28 5.22a.75.75 0 00-1.06 1.06l7.22 7.22H6.75a.75.75 0 000 1.5h7.5a.747.747 0 00.75-.75v-7.5a.75.75 0 00-1.5 0v5.69L6.28 5.22z" />
</svg>

                </div>
                

              </div>
            </div>
</div>
            

          </div>
          <div className='lg:col-span-2'>
           <img src='https://themes.muffingroup.com/be/accountant4/wp-content/uploads/2022/03/accountant4-slider-pic3.webp' className='2xl:ml-[117px] md:mt-[37px] lg:ml-[42px]' />
          </div>

        </div>

      </div>
    </section>

    {/* another section */}
   <section className='lg:max-w-7xl mx-auto py-[100px] px-[30px]'>
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
           cardClass='pt-4 md:pt-6 text-center md:text-left'
           padding='p-30 md:p-[50px]'
           marginBottom='mb-4'
           includeIcon={true}
           />
   
         </div>
      )}
     

    </div>
    <Team image={teamImg} />
   </section>
   <DetailSection />
   <Details />
   <Accountant />
   <Contact />
    </>
  )
}
