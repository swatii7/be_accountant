import React from 'react'
import CustomBanner from '../../CommonComponents/CustomBanner/CustomBanner'
import cardImg from '../../../assets/HomePage/cardOne.webp'
import Team from '../../HomePageComponents/Team/Team'
import imageOne from '../../../assets/AboutPage/accountant1.webp'
import imageTwo from '../../../assets/AboutPage/accountant2.webp'
import { faFacebookF, faTwitter, faLinkedinIn, faPinterestP } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ValueImgOne from '../../../assets/AboutPage/value1.png'
import ValueImgTwo from '../../../assets/AboutPage/value2.png'
import valueImgThree from '../../../assets/AboutPage/value3.png'
import CustomButton from '../../CommonComponents/CustomButton/CustomButton'
import Contact from '../../CommonComponents/FooterComponent/ContactSection/Contact'
import teamImg from '../../../assets/HomePage/Team.png'

export default function About() {

  const valueArr= [
    {
      image:ValueImgOne,
      title:'Faucibus',
      desc:'Curabitur ac leo nunc estibul et mauris vel ante finibus maximus'
},
{
  image:ValueImgTwo,
  title:'Mauris donec',
  desc:'Curabitur ac leo nunc estibul et mauris vel ante finibus maximus'
},
{
  image:valueImgThree,
  title:'Pulvinar felis',
  desc:'Curabitur ac leo nunc estibul et mauris vel ante finibus maximus'
},
]


  return (
    <section className='selection:bg-zinc-200 selection:text-black'>
      <CustomBanner title='About us'
       heading='A tincidunt amet risus aenean leo'
        headingSpan='bibendum'
         padding='py-[50px] md:py-[100px] px-[60px] lg:px-[73px] xl:px-[250px]'
          image={cardImg}
           bgImage="bg-[url('https://themes.muffingroup.com/be/accountant4/wp-content/uploads/2022/03/accountan4-about-bg.webp')] bg-[top_center] bg-cover"
           spanClass='text-black ml-2 md:ml-0 md:block lg:inline xl:text-left '
           bgSize='bg-auto'
        bgPosition='bg-center'
            />
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

      {/* team section */}
      <div className='lg:max-w-7xl mx-auto'>
      <Team image={teamImg} />
      </div>
{/* */}
      {/* accountant section */}
      <div className='md:pt-[100px] md:pb-[60px] py-[50px] px-[33px] bg-[#EDF2F4;]'>
        <div className='lg:max-w-7xl mx-auto'>
          <h2 className='text-[29px] md:text-[41px] lg:text-5xl font-bold mb-5 md:mb-10'>
            Our
            <span className='text-red-600 ml-2'>
            accountants
            </span>
          </h2>
          <div className='block md:flex w-full'>
          <div className='md:mx-3 w-full lg:w-2/5'>
<img src={imageOne} />
          </div>
          <div className='w-full lg:w-3/5 md:mx-3 mt-5 lg:mt-0 xl:mt-[150px]'>
<div className='bg-white rounded-2xl p-[50px] lg:py-[78px] mb-[40px] lg:px-[100px]'>
  <div>
    <h3 className='text-[19px] lg:text-[32px] font-bold mb-[15px] lg:mb-[40px]'>
    Peter Bagpipe
    </h3>
  </div>
  <div className='text-[#8d99ae]'>
    <p className='mb-[15px]'>
    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.
    </p>
    <p className='mb-[40px]'>Duis id tellus non leo porta ultricies efficitur non nunc. Suspendisse venenatis, lacus ac aliquam mollis, nisl risus maximus lectus, vitae faucibus lacus ante vel diam. Sed lectus purus, lobortis eu aliquet at, ullamcorper sed.</p>
  </div>
  <div className='flex items-center text-center mb-[40px] mt-12'>
    <div className='bg-[#f0f0f0] w-[43px] h-[43px] text-[15px] mr-3 p-[10px] hover:bg-[#3a589b] hover:text-white'>
    <FontAwesomeIcon icon={faFacebookF} />
    </div>
    <div className='bg-[#f0f0f0] w-[43px] h-[43px] text-[15px] mr-3 p-[10px] hover:bg-[#32ccfe] hover:text-white'>
    <FontAwesomeIcon icon={faTwitter} />
    </div>
    <div className='bg-[#f0f0f0] w-[43px] h-[43px] text-[15px] mr-3 p-[10px] hover:bg-[#007bb6] hover:text-white'>
    <FontAwesomeIcon icon={faLinkedinIn} />
    </div>
    <div className='bg-[#f0f0f0] w-[43px] h-[43px] text-[15px] mr-3 p-[10px] hover:bg-[#cb2027] hover:text-white'>
    <FontAwesomeIcon icon={faPinterestP} />
    </div>
  </div>
</div>
          </div>

        </div>
        <div className='block md:flex w-full'>
         
          <div className='w-full lg:w-3/5 md:mx-3 mt-5 lg:mt-0 xl:mt-[150px]'>
<div className='bg-white rounded-2xl mb-[40px] p-[50px] lg:py-[78px] lg:px-[100px]'>
  <div>
    <h3 className='text-[19px] lg:text-[32px] font-bold mb-[15px] lg:mb-[40px]'>
    Teresa Smith
    </h3>
  </div>
  <div className='text-[#8d99ae]'>
    <p className='mb-[15px]'>
    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.
    </p>
    <p className='mb-[40px]'>Duis id tellus non leo porta ultricies efficitur non nunc. Suspendisse venenatis, lacus ac aliquam mollis, nisl risus maximus lectus, vitae faucibus lacus ante vel diam. Sed lectus purus, lobortis eu aliquet at, ullamcorper sed.</p>
  </div>
  <div className='flex items-center text-center mb-[40px] mt-12'>
    <div className='bg-[#f0f0f0] w-[43px] h-[43px] text-[15px] mr-3 p-[10px] hover:bg-[#3a589b] hover:text-white'>
    <FontAwesomeIcon icon={faFacebookF} />
    </div>
    <div className='bg-[#f0f0f0] w-[43px] h-[43px] text-[15px] mr-3 p-[10px] hover:bg-[#32ccfe] hover:text-white'>
    <FontAwesomeIcon icon={faTwitter} />
    </div>
    <div className='bg-[#f0f0f0] w-[43px] h-[43px] text-[15px] mr-3 p-[10px] hover:bg-[#007bb6] hover:text-white'>
    <FontAwesomeIcon icon={faLinkedinIn} />
    </div>
    <div className='bg-[#f0f0f0] w-[43px] h-[43px] text-[15px] mr-3 p-[10px] hover:bg-[#cb2027] hover:text-white'>
    <FontAwesomeIcon icon={faPinterestP} />
    </div>
  </div>
</div>
          </div>
          <div className='md:mx-3 w-full lg:w-2/5'>
<img src={imageTwo} />
          </div>
        </div>
        </div>
        
      </div>

      {/* */}

      {/* value section */}

      <div className="bg-[#E62F43] pt-[100px] pb-[60px] bg-[url('https://themes.muffingroup.com/be/accountant4/wp-content/uploads/2022/03/accountan4-section-bg1.png')] bg-center px-[33px]">
        <div className='lg:max-w-7xl mx-auto'>
        <div className='mx-3 mb-[40px]'>
          <h2 className='text-white text-[29px] lg:text-5xl font-bold'>
            Our Values
          </h2>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-3'>
          {valueArr.map((item, index)=>
          <div key={index} className='text-center md:mx-3 mb-[40px]'>
          <div className='mb-[30px] img-center'>
            <img src={item.image} />
          </div>
          <div className='text-white'>
            <h4 className='text-sm md:text-2xl font-bold mb-[15px]'>{item.title}</h4>
            <p className='font-normal'>{item.desc}</p>
          </div>
        </div>
          )}
          

        </div>
        </div>
        

      </div>

      {/*   */}


      <div className="bg-fixed bg-[url('https://themes.muffingroup.com/be/accountant4/wp-content/uploads/2022/03/accountan4-about-bg2.webp')] md:bg-center bg-[top_center]  pt-[210px] pb-[170px]">
        <div className='lg:max-w-2xl mx-auto text-center'>
<div className='text-center'>
  <h2 className='text-white font-bold text-[29px] leading-[30px] md:text-5xl mx-3 mb-[40px]'>
  Vitae ultrices porttitor sit aliquet tellus. Nisi.
  </h2>
  <CustomButton title='Free consultation' text='text-white' hvBgColor='hover:bg-[#e62f43]' hvBorderColor='hover:border-[#e62f43]' marginLeft='md:ml-[200px] ml-[62px]' />
</div>

        </div>

      </div>

      <Contact />
      
    </section>
  )
}
