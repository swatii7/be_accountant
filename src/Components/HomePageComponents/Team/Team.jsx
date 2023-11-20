import React from 'react'
import CustomButton from '../../CommonComponents/CustomButton/CustomButton'

export default function ({image, order}) {

    const handleButtonClick = () => {
        // Navigate to another page (replace '/another-page' with your desired route)
        window.location.href = '/aboutus';
      };
    

    return (
        <div
        id='teamConatiner'
         className='md:pt-[100px] pb-[50px]'>
            <div className='md:flex block px-[30px] mb-10'>
                <div className={`max-w-[581px] lg:w-1/2 ${order}`}>
                    <img src={image} w-full />
                </div>
                <div className={`w-full lg:w-1/2`}>
                    <div className='lg:pl-[100px] lg:pr-[50px] pt-6 md:pt-0 md:pr-5'>
                        <div className='mb-4'>
                            <h3 className='selection:bg-zinc-200 selection:text-black md:text-[27px] lg:text-[32px] font-bold md:leading-[38px] leading-[23px] text-[19px]'>
                                Our team of experts will help you in
                                <span className='text-red-600 ml-2'>
                                    all situations
                                </span>
                            </h3>
                        </div>
                        <div className='md:mx-3 mb-16 selection:bg-zinc-200 selection:text-black'>
                            <p className='mb-4 text-slate-400 font-normal'>
                                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.
                            </p>
                            <p className='text-slate-400 font-normal'>
                            Duis id tellus non leo porta ultricies efficitur non nunc. Suspendisse venenatis, lacus ac aliquam mollis, nisl risus maximus lectus, vitae faucibus lacus ante vel diam. Sed lectus purus, lobortis eu aliquet at, ullamcorper sed.
                            </p>
                        </div>
<CustomButton
 border='border-[#e62f43]'
  title='read more'
   text='text-[#e62f43]'
    hvBgColor='hover:bg-[#e62f43]'
     hvtextColor='hover:text-white'
     onClick={handleButtonClick}
      />
                    </div>

                </div>
            </div>
        </div>
    )
}
