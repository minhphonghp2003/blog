import Link from 'next/link'
import React from 'react'

function RListComp({ rlist }) {
  return (
    <Link href={`/readinglist/${rlist.id}`}>
      <div className=' '>
        <p className='font-bold uppercase mb-2'>{rlist.name}</p>
        <img src={rlist.icon} alt="" className='object-cover rounded-md' />
        <p className='text-gray'>5 posts</p>
      </div>
    </Link>
  )
}

export default RListComp