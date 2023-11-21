import React from 'react'
import CustomBanner from '../CommonComponents/CustomBanner/CustomBanner'
import bannerImg from '../../assets/HomePage/cardThree.webp'
import FaqCard from '../CommonComponents/CardComponent/FaqCard'
import CustomerReview from '../CommonComponents/CustomerComponent/CustomerReview'
import faqImgOne from '../../assets/FAQPage/faqImg1.webp'
import faqImgTwo from '../../assets/FAQPage/faqImg2.webp'
import Contact from '../CommonComponents/FooterComponent/ContactSection/Contact'

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

    const QAarr = [
      {
        number: '1',
        heading: 'Luctus egestas auctor mattis tellus sed fermentum ac.',
        desc:
          'Vel, nisi, vitae fermentum tristique arcu tincidunt. Tellus placerat aliquet ornare rhoncus habitasse nulla hendrerit orci. Condimentum dui sodales eu elementum orci phasellus ipsum tincidunt eu.',
      },
      {
        number: '2',
        heading: 'Consequat in proin at ultrices vitae sapien sagittis proin.',
        desc:
          'Vel, nisi, vitae fermentum tristique arcu tincidunt. Tellus placerat aliquet ornare rhoncus habitasse nulla hendrerit orci. Condimentum dui sodales eu elementum orci phasellus ipsum tincidunt eu.',
      },
      {
        number: '3',
        heading: 'Elementum lorem pellentesque facilisis arcu.',
        desc:
          'Vel, nisi, vitae fermentum tristique arcu tincidunt. Tellus placerat aliquet ornare rhoncus habitasse nulla hendrerit orci. Condimentum dui sodales eu elementum orci phasellus ipsum tincidunt eu.',
      },
      {
        number: '4',
        heading: 'Elementum lorem pellentesque facilisis arcu.',
        desc:
          'Vel, nisi, vitae fermentum tristique arcu tincidunt. Tellus placerat aliquet ornare rhoncus habitasse nulla hendrerit orci. Condimentum dui sodales eu elementum orci phasellus ipsum tincidunt eu.',
      },
    ];


  return (
    <div className='selection:bg-zinc-200 selection:text-black'>
         <CustomBanner
        title="FAQ"
        padding="py-[50px] md:py-[100px]"
        heading="Sed in massa"
        headingSpan="pellentesque arcu enim nulla"
        spanColor='text-white'
    textColor='text-black'
        bgImage="bg-[url('https://themes.muffingroup.com/be/accountant4/wp-content/uploads/2022/03/accountan4-faq-pic1.webp')] bg-cover bg-no-repeat"
        image={bannerImg}
        spanPosition='top'
        bgPosition='bg-center lg:bg-[top_left]'
        bgColor='bg-[#E62F43]'
        bgSize='bg-contain'
        brClass='hidden md:block'
      />
      <div className='bg-[#E62F43] pt-20 pb-[60px] px-[33px]'>
        <div className='lg:max-w-7xl mx-auto'>
            <div className='grid grid-cols-2 lg:grid-cols-4'>
                {faqCardArr.map((faq,index)=>
                <div key={index}>

                 <FaqCard title={faq.title}
                  para={faq.para} />
                  </div>
                )}

            </div>

        </div>

      </div>

      {/* customer section */}
      <div className='pt-[100px] lg:max-w-7xl mx-auto'>
       <CustomerReview allItems={QAarr} image={faqImgOne} spanTitle='Individual' imgHeading='customers' />
       <div className='py-[100px]'>
       <CustomerReview allItems={QAarr} image={faqImgTwo} spanTitle='Business' imgHeading='customers' />
       </div>
     
      </div>

<Contact />

    </div>
  )
}
