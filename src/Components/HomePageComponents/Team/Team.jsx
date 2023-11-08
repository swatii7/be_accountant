import React from 'react'
import teamImg from '../../../assets/HomePage/Team.png'
import CustomButton from '../../CommonComponents/CustomButton/CustomButton'

export default function () {
    return (
        <div className='pt-[100px]'>
            <div className='lg:flex block'>
                <div className='max-w-[581px] lg:w-1/2'>
                    <img src={teamImg} w-full />
                </div>
                <div className='w-full lg:w-1/2'>
                    <div className='lg:pl-[100px] pr-[50px] pt-6'>
                        <div className='mb-4'>
                            <h3 className='selection:bg-zinc-200 selection:text-black text-[32px] font-bold leading-[38px]'>
                                Our team of experts will help you in
                                <span className='text-red-600 ml-2'>
                                    all situations
                                </span>
                            </h3>
                        </div>
                        <div className='mx-3 mb-16 selection:bg-zinc-200 selection:text-black'>
                            <p className='mb-4 text-slate-400 font-normal'>
                                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.
                            </p>
                            <p className='text-slate-400 font-normal'>
                            Duis id tellus non leo porta ultricies efficitur non nunc. Suspendisse venenatis, lacus ac aliquam mollis, nisl risus maximus lectus, vitae faucibus lacus ante vel diam. Sed lectus purus, lobortis eu aliquet at, ullamcorper sed.
                            </p>
                        </div>
<CustomButton border='border-[#e62f43]' title='read more' text='text-[#e62f43]' hvBgColor='hover:bg-[#e62f43]' hvtextColor='hover:text-white' />
                    </div>

                </div>
            </div>
        </div>
    )
}
