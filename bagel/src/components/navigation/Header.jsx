import React from 'react'
import Logo from '../../assets/Logo'

const Header = () => {
  return (
    <div className='bg-gray-700 p-2 flex gap-3 items-end h-11'>
        <Logo/>
        <span className='text-white text-2xl'>Bagel</span>
    </div>
  )
}

export default Header