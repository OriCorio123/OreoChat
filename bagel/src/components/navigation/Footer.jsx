import React from 'react'
import User from '../../assets/User'
import Home from '../../assets/Home'
import Bulb from '../../assets/Bulb'
import Plus from '../../assets/Plus'
import Notification from '../../assets/Notification'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='flex border-t-[0.5px] border-gray-100 place-content-around px-5 pb-2 pt-3'>
      <Link to='/'>
        <div className='h-10 w-10'>
          <Home />
        </div>
      </Link>
      <Link to='/notifications'>
        <div className='h-10 w-10'>
          <Notification />
        </div>
      </Link>
      <Link to='/upload'>
        <div className='h-10 w-10'>
          <Plus />
        </div>
      </Link>
      <Link to='creatorhub'>
        <div className='h-10 w-10'>
          <Bulb />
        </div>
      </Link>
      <Link to='/profile'>
        <div className='h-10 w-10'>
          <User />
        </div>
      </Link>
    </div>
  )
}

export default Footer