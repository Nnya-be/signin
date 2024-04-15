import React from 'react'
import Navigation from './Navigation'
import Banner from './Banner'

function Header() {
  return (
    <div className='h-lvh relative'>
        <div className='bg-gradient-to-r from-green-200/50  to-orange-100/40 h-lvh absolute x-inset-0 y-inset-0 -z-10 w-[72%] rounded-br-[3rem]'></div>
        <Navigation></Navigation>
        <Banner></Banner>
    </div>
  )
}

export default Header