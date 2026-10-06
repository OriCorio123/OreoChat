import React from 'react'
import User from '../../assets/User'
import Home from '../../assets/Home'
import Bulb from '../../assets/Bulb'
import Plus from '../../assets/Plus'
import Notification from '../../assets/Notification'
import { Link , useLocation } from 'react-router-dom'

const Footer = () => {
  const location = useLocation()
  return (
    <div className='flex border-t-[0.5px] border-gray-100 place-content-around px-5 pb-2 pt-3'>
      <Link to='/'>
        <div className='h-10 w-10'>
          <Home isActive={location.pathname=='/'?true:false} />
        </div>
      </Link>
      <Link to='/notifications'>
        <div className='h-10 w-10'>
          <Notification isActive={location.pathname=='/notifications'?true:false}/>
        </div>
      </Link>
      <Link to='/upload'>
        <div className='h-10 w-10'>
          <Plus isActive={location.pathname=='/upload'?true:false} />
        </div>
      </Link>
      <Link to='creatorhub'>
        <div className='h-10 w-10'>
          <Bulb isActive={location.pathname=='/creatorhub'?true:false} />
        </div>
      </Link>
      <Link to='/profile'>
        <div className='h-10 w-10'>
          <User isActive={location.pathname=='/profile'?true:false} />
        </div>
      </Link>
    </div>
  )
}

export default Footer