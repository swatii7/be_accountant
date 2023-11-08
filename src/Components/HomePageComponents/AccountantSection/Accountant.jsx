import React from 'react'
import imgOne from '../../../assets/HomePage/accountant1.webp'
import imgTwo from '../../../assets/HomePage/accountant2.webp'
import CustomButton from '../../CommonComponents/CustomButton/CustomButton'


export default function Accountant() {
    return (
        <section className="bg-[#E62F43] bg-[url('https://themes.muffingroup.com/be/accountant4/wp-content/uploads/2022/03/accountan4-section-bg1.png')] text-white py-[50px] lg:py-[100px] px-[30px]">
            <div className='xl:max-w-7xl mx-auto'>
                <div className='block md:flex md:flex-wrap'>
                    <div className='md:w-[30%] lg:pt-[131px]'>
                        <div className='lg:mb-[40px] mb-[20px] mx-3'>
                            <h2 className='text-[29px] md:text-5xl font-bold'>
                                Our
                                accountants
                            </h2>
                        </div>
                        <div className='mb-[40px]'>
                            <p className='pb-[15px]'>
                            A dictumst odio turpis molestie egestas. Accumsan volutpat adipiscing quam tristique turpis blandit.
                            </p>
                        </div>
                        <div>
                            <CustomButton title='about us' />
                        </div>
                    </div>
                    <div className='flex md:w-[60%] md:mt-[51px]'>
                        <img src={imgOne} className='w-1/2 md:mx-3 mx-1 object-contain' />
                        <img src={imgTwo} className='w-1/2 md:mx-3 mx-1 object-contain' />
                    </div>

                </div>

            </div>
        </section>
    )
}
