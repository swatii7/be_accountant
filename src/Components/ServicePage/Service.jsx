import React from 'react'
import CustomBanner from '../CommonComponents/CustomBanner/CustomBanner'
import bannerImg from '../../assets/Service/banner1.webp'

export default function Service() {
  return (
    <div>
      <CustomBanner title='Services' heading='Massa urna suspendisse mattis'  headingSpan='mauris' bgImage="bg-[url('/src/assets/Service/banner1.webp')]" image={bannerImg} />
    </div>
  )
}
