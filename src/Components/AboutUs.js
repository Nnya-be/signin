import React from 'react'
import AboutText from './AboutText'
import AboutGallery from './AboutGallery'

function AboutUs() {
  return (
    <div className=' lg:py-16 lg:pl-2 lg:py-8 xl:p-10'>
        <div className='lg:my-8 h-svh lg:items-center px-10 py-14 lg:grid-cols-2 lg:grid-rows-1 lg:gap-x-2 lg:h-lvh  md:flex md:h-[35rem] lg:h-full md:justify-between md:flex-col lg:grid'>
        <AboutText></AboutText>
        <AboutGallery></AboutGallery>
        </div>
    </div>
  )
}

export default AboutUs