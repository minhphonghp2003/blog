import React from 'react'

function HorizonPost({className, post, isForeword }) {
  return (
    <div className={`flex gap-4 ${className} mb-2`}>
      <img className='mb-4 max-w-[30%]' src={post.image} />
      <div className='grow-5'>
        <p className='font-bold mb-1 text-horiztitle'>{post.title}</p>
        {
          isForeword && <p className='text-gray text-horizforeword'>{post.foreword}...</p>
        }
        <div className='mt-2 text-author text-gray'>

          <p className='mb-1'>{post.author} in <span className='text-green'> {post.topic}</span></p>
          <p>{post.updated_at}</p>
        </div>
      </div>
    </div>
  )
}

export default HorizonPost