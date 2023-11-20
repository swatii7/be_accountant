import React, { useRef } from "react";
import CustomBanner from "../CommonComponents/CustomBanner/CustomBanner";
import bannerImg from "../../assets/Service/banner1.webp";
import Card from "../CommonComponents/CardComponent/Card";
import cardImgOne from "../../assets/CardImg/cardIcon1.png";
import cardImgTwo from "../../assets/CardImg/cardIcon2.png";
import cardImgThree from "../../assets/CardImg/cardIcon3.png";
import cardImgFour from "../../assets/CardImg/cardIcon4.png";
import cardImgFive from "../../assets/CardImg/cardIcon5.png";
import cardImgSix from "../../assets/CardImg/cardIcon6.png";
import accountantOne from "../../assets/Service/accountant-1.webp";
import accountantTwo from "../../assets/Service/accountant-2.webp";
import icon from "../../assets/Service/solutionIcon.png";
import DetailSection from "../CommonComponents/SectionWithBg/DetailSection";
import Team from "../HomePageComponents/Team/Team";
import team2Img from "../../assets/Service/teamImg2.webp";
import Subscription from "../CommonComponents/SubscriptionComponent/Subscription";
import Contact from '../CommonComponents/FooterComponent/ContactSection/Contact'

export default function Service() {
  const cardArr = [
    {
      image: cardImgOne,
      title: "Rhoncus odio",
      desc: "Sit risus pellentesque tellus semper erat aenean quam egestas. Consectetur tellus ipsum in nisl arcu. Varius tincidunt et, amet et aliquam.",
    },
    {
      image: cardImgTwo,
      title: "Pellentesque",
      desc: "Id ut vestibulum in dolor tellus euismod. Neque, quisque eu cras viverra egestas accumsan morbi. Et lorem consectetur commodo, ut vel elit ac. ",
    },
    {
      image: cardImgThree,
      title: "Sed ornare sit eget",
      desc: "Elit bibendum sit nec risus. Massa ultricies lectus aliquam lectus viverra accumsan pulvinar. Quis id vestibulum lobortis neque nibh nisi, hendrerit turpis viverra. ",
    },
    {
      image: cardImgFour,
      title: "Quis etiam ornare",
      desc: "Arcu ornare cursus imperdiet nulla nisl velit, risus et. Sit congue morbi pretium nam interdum pretium est donec viverra. Vel eleifend viverra imperdiet platea sit. ",
    },
    {
      image: cardImgFive,
      title: "Non phasellus",
      desc: "Pulvinar tempus aliquam sed id consequat velit volutpat suscipit enim. Sed pretium nullam nulla sagittis nunc. Namcommodo nisl  sapien cursus nulla suscipit. ",
    },
    {
      image: cardImgSix,
      title: "Adipiscing",
      desc: "Tristique tortor sed eget adipiscing nulla enim. Risus maecenas magna eu urna leo id. Est aliquet lorem gravida vitae, sodales turpis hendrerit donec. ",
    },
  ];

  const accountDetails = [
    {
      image: accountantOne,
      heading: "With BeAccountant my business has grown",
      paraOne:
        "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.",
      paraTwo:
        "Duis id tellus non leo porta ultricies efficitur non nunc. Suspendisse venenatis, lacus ac aliquam mollis, nisl risus maximus lectus, vitae faucibus lacus ante vel diam.",
      name: "Maurice Erickson",
      designation: "Founder – Phasellus",
    },
    {
      image: accountantTwo,
      heading: "With BeAccountant my business has grown",
      paraOne:
        "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.",
      paraTwo:
        "Duis id tellus non leo porta ultricies efficitur non nunc. Suspendisse venenatis, lacus ac aliquam mollis, nisl risus maximus lectus, vitae faucibus lacus ante vel diam.",
      name: "George Plum",
      designation: "Founder – Sagittis",
    },
  ];


  const serviceRef = useRef(null)
  const sectionRef = useRef(null)

  const scrollToSection = (ref)=>{
ref.current.scrollIntoView({ behavior: 'auto' })
  }


  return (
    <div className="selection:bg-zinc-200 selection:text-black">
      <CustomBanner
      naviagteToSection='sectionTarget'
        title="Services"
        padding="py-[50px] md:py-[100px]"
        heading="Massa urna suspendisse mattis"
        headingSpan="mauris"
        bgImage="bg-[url('/src/assets/Service/banner1.webp')] bg-cover"
        image={bannerImg}
        bgSize='bg-auto'
        bgPosition='bg-center'
        onClick={()=> scrollToSection(serviceRef)}
      />

      {/*  **/}

      <div className="py-[60px]">
        <div className="lg:max-w-7xl mx-auto">
          <div className="lg:pb-[100px] lg:w-5/6">
            <h3 className="md:text-[32px] font-bold md:leading-[38px] mx-3 mb-[40px]">
              Eget posuere neque dui non amet, tortor curabitur. In viverra sed
              vel sed non sit.
              <span className="text-red-600 ml-2">
                Aliquam sed interdum molestie nam proin.
              </span>
            </h3>
          </div>
          {/* card section */}
          <div className="grid md:grid-cols-2">
            {cardArr.map((card, index) => (
              <div
                key={index}
                className="select-none flex pt-10 md:pt-0 px-[33px]
                hover:scale-105 transition-all duration-[0.5s] ease-in"
              >
                <Card
                  imgSrc={card.image}
                  heading={card.title}
                  description={card.desc}
                  imgClass="rounded-t-lg mb-30 md:mr-auto"
                  WrapClass="img-center"
                  cardClass="pt-4 md:pt-6 text-center md:text-left"
                  padding="p-30 md:p-[50px]"
                  marginBottom="mb-4"
                  includeIcon={false}
                  onClick={()=> scrollToSection(serviceRef)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/*  */}

      {/* accountant section */}
      <div
      ref={serviceRef}
       className="bg-[#EDF2F4] bg-[url('https://themes.muffingroup.com/be/accountant4/wp-content/uploads/2022/03/accountan4-services-bg2.webp')] bg-center lg:bg-right bg-no-repeat py-[100px]">
        <div className="max-w-[550px] md:max-w-4xl lg:max-w-7xl mx-auto px-[33px]">
          <div className="mx-3 mb-10 relative">
            <h2 className="text-[29px] md:text-[41px] lg:text-5xl font-bold leading-[30px] md:leading-[43px] lg:leading-[50px]">
              Solutions for every
              <span className="text-red-600 block">business need</span>
            </h2>
          </div>
          {accountDetails.map((detail, index) => (
            <div
              key={index}
              className="block md:flex flex-wrap relative items-center mb-[45px] md:mb-0"
            >
              <div className="w-full lg:w-1/4 md:w-1/6 z-[2] relative mr-[-200px] md:mr-0 lg:mr-[-60px] lg:mb-[45px]">
                <div className="w-full max-w-[257px] mx-4 md:ml-[84px] md:mb-[90px] lg:mb-0">
                  <img
                    src={detail.image}
                    className="relative object-contain md:scale-[2.5] lg:scale-100"
                  />
                </div>
              </div>
              <div className="z-[1] md:w-5/6 lg:w-3/4 relative">
                <div className="bg-white rounded-2xl  pt-0 mt-[-71px] md:mt-0 px-[30px] pb-[30px] md:pb-10 lg:pb-10 md:pr-[50px] lg:pr-[50px] md:pl-[190px] md:mb-[45px] items-end relative md:top-0">
                  <div className="flex justify-between">
                    <div className="mx-3 mb-10">
                      <h4 className="text-sm md:text-[20px] lg:text-2xl leading-[19px] md:leading-[25px] lg:leading-[29px] font-bold pt-[122px] md:pt-[60px] lg:pt-16">
                        {detail.heading}
                      </h4>
                    </div>
                    {/* icon wrapper */}
                    <div className="items-center pt-[126px] md:pt-[60px] lg:pt-[37px]">
                      <img src={icon} />
                    </div>
                  </div>

                  {/* paragraph Wrapper*/}
                  <div className="mx-3 mb-10">
                    <p className="text-[#8d99ae] mb-5 md:mx-3 pr-0 lg:pr-[12%]">
                      {detail.paraOne}
                    </p>
                    <p className="text-[#8d99ae] mb-5 md:mx-3 pr-0 lg:pr-[12%]">
                      {detail.paraTwo}
                    </p>
                  </div>

                  {/* name Wrapper*/}
                  <div className="mb-[5px] mx-3">
                    <h5 className="text-xl font-bold leading-[30px] mx-3">
                      {detail.name}
                    </h5>
                  </div>

                  <div className="mx-3 mb-[10px]">
                    <p className="text-[#8d99ae] mx-3 mb-[15px]">
                      {detail.designation}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/*   */}

      <DetailSection />
      <div className="lg:max-w-7xl mx-auto pt-[50px]">
        <Team image={team2Img} order="order-2" />
      </div>
      <div className="lg:max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 pb-[60px]">
        <Subscription title="Personal" bgColor="bg-[#E62F43]" price="29" />
        <Subscription title="Business" bgColor="bg-black" price="59" />
      </div>
      <Contact />
    </div>
  );
}
