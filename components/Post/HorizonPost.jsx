import Link from 'next/link'
import React from 'react'

function HorizonPost({ className, post, isForeword, isBigTitle }) {
  return (
    <Link href={`/post/${post.id}`}>
      <div className={` p-2 rounded-md hover:shadow-xl duration-500 flex  gap-4 ${isBigTitle ? "text-horizbigtitle" : "text-horiztitle"}  mb-4 ${className}`}>
        <img alt={`${post.title} image`} className=' max-w-[25%] max-h-[25%] rounded-lg object-cover' src={post.imageLink} />
        <div className='grow-5 '>
          <p className=' font-bold mb-1 '>{post.title}</p>
          {
            isForeword && <p className='text-gray text-horizforeword'>{post.foreword}...</p>
          }
          <div className='mt-2 text-author text-gray'>
            <p className=' inline mb-1'>{post.author.fullName} </p>
            in <span className='text-green'>{post.topic.name}</span>
            <p> {post.updatedAt}</p>
          </div>
        </div>
      </div>
    </Link >
  )
}

export default HorizonPost