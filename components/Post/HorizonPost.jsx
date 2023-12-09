import React from 'react'

function HorizonPost({ className, post, isForeword, isBigTitle }) {
  return (
    <div className={` p-2 rounded-md hover:shadow-xl duration-500 flex  gap-4 ${isBigTitle ? "text-horizbigtitle" : "text-horiztitle"}  mb-4 ${className}`}>
      <img className=' max-w-[25%] max-h-[25%] rounded-lg object-cover' src={post.image} />
      <div className='grow-5 '>
        <p className=' font-bold mb-1 '>{post.title}</p>
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