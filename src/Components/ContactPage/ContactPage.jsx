import React from "react";
import CustomBanner from "../CommonComponents/CustomBanner/CustomBanner";
import contactImage from "../../assets/ContactPage/contact.png";
import contactImgOne from "../../assets/ContactPage/contactImg1.webp";
import contactImgTwo from "../../assets/ContactPage/contactImg2.webp";
import locationIcon from '../../assets/Service/locationIcon.png'

export default function ContactPage() {

    const fieldArr=[
{
    type:'text',
    name:'full_name',
    placeholder:'Full Name *'
},
{
    type:'number',
    name:'phone_no',
    placeholder:'Phone *'
},
{
    type:'text',
    name:'email',
    placeholder:'E-mail Address *'
},
]

const OfficeList= [
  {
    image:locationIcon,
    name:'Envato 1',
    address: 'Level 13, 2 Elizabeth, Victoria 3000,',
    country:'Australia'
  },
  {
    image:locationIcon,
    name:'Envato 2',
    address: 'Level 13, 2 Elizabeth, Victoria 3000,',
    country:'Australia'
  },
  {
    image:locationIcon,
    name:'Envato 3',
    address: 'Level 13, 2 Elizabeth, Victoria 3000,',
    country:'Australia'
  },

]

  return (
    <div className="selection:bg-zinc-200 selection:text-black">
      <CustomBanner
        title="Contact"
        padding="py-[50px] md:py-[100px]"
        heading="Dapibus"
        headingSpan="venenatis vestibulum"
        spanColor='text-white'
    textColor='text-black'
        bgImage="bg-[url('https://themes.muffingroup.com/be/accountant4/wp-content/uploads/2022/03/accountant4-contact-pic1.webp')] bg-center bg-no-repeat w-full h-auto"
        brClass='hidden'
        bgColor="bg-[#EDF2F4]"
        bgSize="bg-contain"
      />
      <div className="bg-[#EDF2F4] pb-[100px]">
        <div className="lg:max-w-7xl mx-auto">
          <div className="w-full lg:flex items-center pt-5 px-[33px]">
            <div className="w-full lg:w-1/3 lg:mr-[60px]">
              <div className="mx-3 lg:mx-5 mb-5 lg:mb-10">
                <h3 className="text-[19px]  md:text-[27px] lg:text-[32px] font-bold leading-[23px] md:leading-8 lg:leading-[38px]">
                  Venenatis, congue metus lacinia ultricies
                </h3>
              </div>
              <div className="mx-3 mb-10">
                <p className="mb-[15px] text-[#8d99ae]">
                  Sed lacus magna quam felis. Tincidunt eu accumsan integer vel
                  posuere a. Lectus dictumst tincidunt feugiat faucibus leo.
                </p>
              </div>
            </div>
            <div className="md:flex lg:w-2/3 w-full">
              {/* second column */}
              <div className="w-full md:w-1/2 mx-[15px] mb-5 bg-white rounded-xl shadow-[0px_15px_30px_0px_rgba(0,0,0,0.06)]">
                <div>
                  <img src={contactImgOne} />
                </div>
                <div className="mx-[30px] mt-[30px] mb-5">
                  <h5 className="text-[13px] md:text-[17px] lg:text-xl font-bold leading-[19px] md:leading-[26px] lg:leading-[30px]">
                    Teresa Smith
                  </h5>
                </div>
                <div className="ml-[30px] mr-3">
                  <h4 className="text-sm md:text-xl lg:text-2xl font-bold leading-[19px] md:leading-[25px] lg:leading-[29px]">
                    <a href="tel:610383766284" className="text-[#E62F43]">
                      +61 (0) 383 766 284
                    </a>
                  </h4>
                </div>
                <div className="mb-5 ml-[30px] mr-3">
                  <a
                    href="mailto:noreply@envato.com"
                    className="text-[#8D99AE]"
                  >
                    noreply@envato.com
                  </a>
                </div>
              </div>

              {/* third column */}
              <div className="w-full md:w-1/2 mx-[15px] mb-5 bg-white rounded-xl shadow-[0px_15px_30px_0px_rgba(0,0,0,0.06)]">
                <div>
                  <img src={contactImgTwo} />
                </div>
                <div className="mx-[30px] mt-[30px] mb-5">
                  <h5 className="text-[13px] md:text-[17px] lg:text-xl font-bold leading-[19px] md:leading-[26px] lg:leading-[30px]">
                    Peter Bagpipe
                  </h5>
                </div>
                <div className="ml-[30px] mr-3">
                  <h4 className="text-sm md:text-xl lg:text-2xl font-bold leading-[19px] md:leading-[25px] lg:leading-[29px]">
                    <a href="tel:610383766284" className="text-[#E62F43]">
                      +61 (0) 383 766 284
                    </a>
                  </h4>
                </div>
                <div className="mb-5 ml-[30px] mr-3">
                  <a
                    href="mailto:noreply@envato.com"
                    className="text-[#8D99AE]"
                  >
                    noreply@envato.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* question section */}
      <div className="lg:max-w-7xl mx-auto pt-[100px] pb-[60px] text-center">
        <div className="grid grid-cols-2 lg:grid-cols-3 items-center px-[30px]">
          <div className="img-left md:img-center lg:img-left">
            <img src={contactImage} />
          </div>
          {/* second div */}
          <div className="text-left lg:text-center">
            <div className="md:mx-3 mb-5">
              <h3 className="text-[19px] md:text-[27px] lg:text-[32px] font-bold leading-[23px] md:leading-8 lg:leading-[38px]">
                <a href="tel:610383766284" className="text-[#E62F43]">
                  +61 (0) 383 766 284
                </a>
              </h3>
            </div>
            <div className="md:mx-3 mb-10">
              <h3 className="text-[19px] md:text-[27px] lg:text-[32px] font-medium leading-[23px] md:leading-8 lg:leading-[38px]">
                <a href="mailto:noreply@envato.com" className="text-black">
                  noreply@envato.com
                </a>
              </h3>
            </div>
            <div className="mx-3 mb-10">
              <p className="mb-[15px] text-[#8d99ae]">
                Level 13, 2 Elizabeth St,
                <br />
                Melbourne, Victoria 3000, Australia
              </p>
            </div>
          </div>

          {/* third column */}
          <div className="col-span-2 lg:col-span-1 mt-5 text-center">
            <div className="mx-3 mb-10 pl-[10px]">
                <h3 className="text-[19px] md:text-[27px] lg:text-[32px] leading-[23px] md:leading-8 lg:leading-[38px] font-bold">
                Have a question?
                <br />
                Write to us!
                </h3>

            </div>
            <div className="mx-3 mb-10">  

      <div className="relative mt-2 lg:text-left rounded-md shadow-sm">
        {fieldArr.map((name, index)=>
        <div key={index}>

          <input
          type={name.type}
          name={name.name}
          id="name"
          className="block w-full p-[10px] rounded-md border-0 bg-[rgba(237,242,244,1)]  placeholder:text-[#8d99ae] focus:ring-0 focus:text-[#8d99ae] sm:text-sm sm:leading-6  mx-[10px] mb-[10px]"
          placeholder={name.placeholder}
        />
        </div>
        )}

<div>
    <span>
        <textarea rows={6}
         type='text'
         placeholder="Your message..."
          className="block w-full p-[10px] rounded-md border-0 bg-[rgba(237,242,244,1)]  placeholder:text-[#8d99ae] focus:ring-0 focus:text-[#8d99ae] sm:text-sm sm:leading-6  mx-[10px] mb-[10px]"></textarea>
    </span>
</div>
<div className="flex mb-4 ml-10">
    <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-0 focus:ring-white" />
    <label htmlFor="default-checkbox" className="ms-2 text-sm font-medium text-[#8d99ae]">I consent to the processing of data for the purpose of telephone contact.</label>
</div>
<button type="button" className="mx-3 me-2 mb-2 text-sm text-[13px] leading-[13px] font-semibold py-5 px-10 focus:outline-none bg-white rounded-lg border-2 border-[#e62f43] hover:bg-[#e62f43] hover:text-white focus:ring-gray-200 text-[#e62f43]">SEND MESSAGE</button>
      </div>
    </div>
            </div>
          </div>
        </div>

        {/* address Section */}
        <div className="py-[50px] md:pt-[100px] md:pb-[60px] bg-[#E62F43] text-white">
          <div className="lg:max-w-7xl mx-auto px-[33px]">
            <div className="md:flex w-full items-center">
              <div className="w-full md:w-1/4 md:mx-3 mb-5 md:mb-10">
                <h3 className="text-[19px] md:text-[27px] lg:text-[32px] font-bold leading-[38px]">
                Our Offices
                </h3>
              </div>
              <div className="w-full md:w-3/4 flex">
              {
                OfficeList.map((item, index)=>
                <div key={index} className="w-1/3 mx-3 mb-10">
                <div className="mb-[30px]">
                  <img src={item.image} />
                </div>
                <div>
                  <h4 className="text-sm md:text-xl lg:text-2xl font-bold md:leading-[25px] lg:leadig-[29px] mb-[15px]">
                  {item.name}
                  </h4>
                  <p>{item.address}</p>
                  <p>{item.country}</p>

                </div>
              </div>
                )
              }
              </div>
          
            </div>

          </div>

        </div>
        <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameborder="0" className="border-0 w-full h-[290px]"></iframe>
        </div>

    </div>
  );
}
