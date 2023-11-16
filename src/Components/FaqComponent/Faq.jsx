import React from 'react'
import CustomBanner from '../CommonComponents/CustomBanner/CustomBanner'
import bannerImg from '../../assets/HomePage/cardThree.webp'
import FaqCard from '../CommonComponents/CardComponent/FaqCard'
import CustomerReview from '../CommonComponents/CustomerComponent/CustomerReview'

export default function Faq() {

    const faqCardArr =[
        {
            title:'01',
            para:'Interdum congue duis sit etiam. Tellus tortor uller in'
        },
        {
            title:'02',
            para:'Sit commodo euismod quam lorem a, nunc felis'
        },
        {
            title:'03',
            para:'Arcu, laoreet vestibulum, ut morbi maecenas mauris'
        },
        {
            title:'04',
            para:'Porta magna mi integer donec eros curabitur duis.'
        },

    ]

  return (
    <div>
         <CustomBanner
        title="FAQ"
        padding="py-[50px] md:py-[100px] px-[10px] md:px-12 lg:px-[73px] xl:px-[250px]"
        heading="pellentesque arcu enim nulla"
        headingSpan="Sed in massa"
        bgImage="bg-[url('https://themes.muffingroup.com/be/accountant4/wp-content/uploads/2022/03/accountan4-faq-pic1.webp')] bg-no-repeat"
        image={bannerImg}
        spanPosition='top'
        bgPosition=' bg-[top_left]'
        bgColor='bg-[#E62F43]'
        bgSize='bg-contain'
      />
      <div className='bg-[#E62F43] pt-20 pb-[60px] px-[33px]'>
        <div className='lg:max-w-7xl mx-auto'>
            <div className='grid grid-cols-2 lg:grid-cols-4'>
                {faqCardArr.map((faq,index)=>
                 <FaqCard title={faq.title}
                  para={faq.para} />
                )}

            </div>

        </div>

      </div>

      {/* customer section */}
      <div className='pt-[100px] lg:max-w-7xl mx-auto'>
        <CustomerReview />
        {/* <div className='flex'>
            <div className='w-1/3'>
                <img src='' />
            </div>
            <div className='w-2/3'></div>
        </div> */}

      </div>
    </div>
  )
}
