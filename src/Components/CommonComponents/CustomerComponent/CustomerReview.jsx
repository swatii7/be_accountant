import React, { useState } from 'react';
import faqImgOne from '../../../assets/FAQPage/faqImg1.webp';
import { PlusSmallIcon, MinusSmallIcon } from '@heroicons/react/24/solid';

export default function CustomerReview({allItems, image, spanTitle, imgHeading}) {

  const [openAccordions, setOpenAccordions] = useState([]);

  const toggleAccordion = (index) => {
    // Create a copy of the openAccordions array
    const newOpenAccordions = [...openAccordions];
    // Toggle the state of the clicked accordion
    newOpenAccordions[index] = !newOpenAccordions[index];
    // Update the state
    setOpenAccordions(newOpenAccordions);
  };

  return (
    <div className='md:flex'>
      <div className='md:w-1/3 mx-3 mb-10'>
        <div>
          <div className='pt-[30px] pl-[50px] bg-[#EDF2F4] rounded-t-xl'>
            <h3 className='text-black md:text-[27px] lg:text-[32px] font-bold md:leading-8 lg:leading-[38px]'>
              <span className='text-[#EF233C]'>
              {spanTitle}
              </span>
              <br />
             {imgHeading}
            </h3>
          </div>
          <div>
          <img src={image} alt='faq' />
          </div>
        </div>
        
      </div>
      <div className='md:w-2/3 mx-3 mb-10'>
        {/* map function */}
        {allItems.map((item, index) => (
          <div
            key={index}
            id={`accordion-collapse-${index}`}
            data-accordion='collapse'
            className={
              !openAccordions[index]
                ? 'border-b-[1px] border-b-[#EDF2F4]'
                : 'border-b-[1px] border-b-[#EDF2F4] border-l-2 border-l-[#e62f43]'
            }
          >
            <h2 id={`accordion-collapse-heading-${index}`} className='py-5'>
              <button
                type='button'
                className='flex items-center text-black justify-between text-[17px] w-full font-bold  pl-5'
                data-accordion-target={`#accordion-collapse-body-${index}`}
                aria-expanded={openAccordions[index]}
                aria-controls={`accordion-collapse-body-${index}`}
                onClick={() => toggleAccordion(index)}
              >
                <div className='flex pr-8'>
                  <span className='top-5 pr-10'>{item.number}</span>
                  <div className='text-left'>
                  <span className=''>{item.heading}</span>
                  </div>
                </div>

                {!openAccordions[index] ? (
                  <PlusSmallIcon className='w-[25px] md:w-5 md:h-5 right-[15px] text-[#8d99ae]' />
                ) : (
                  <MinusSmallIcon className='w-[25px] md:w-5 md:h-5 right-[15px] text-[#8d99ae]' />
                )}
              </button>
            </h2>

            <div
              id={`accordion-collapse-body-${index}`}
              className={openAccordions[index] ? '' : 'hidden'}
              aria-labelledby={`accordion-collapse-heading-${index}`}
            >
              <div className='pr-5 pb-5 pl-16'>
                <p className='text-[#8d99ae]'>{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
