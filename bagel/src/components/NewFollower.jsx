import React from 'react'

const NewFollower = ({profile , name , time , isFollowing}) => {
  return (
    <div className='flex rounded-2xl border border-gray-100'>
        <img className='h-15 w-15' src={profile} alt="" />
        <div className='flex flex-col'>
            <span>
                {name}
            </span>
            <span className='text-gray-400'>
                Followed You
            </span>
        </div>


    </div>
  )
}

export default NewFollower