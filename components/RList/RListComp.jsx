import React from 'react'

function RListComp({rlist}) {
  return (
    <div className=' '>
        <p className='font-bold uppercase mb-2'>{rlist.name}</p>
        <img src={rlist.icon} alt=""  className='object-cover rounded-md'/>
        <p className='text-gray'>5 posts</p>
    </div>
  )
}

export default RListComp