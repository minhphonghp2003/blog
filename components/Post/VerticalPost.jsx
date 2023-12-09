import Link from 'next/link'
import React from 'react'

function VerticalPost({ className, post, isForeword }) {
  return (
    <div className={`${className} mb-4  rounded-md`}>
      <Link href={`/post/${post.id}`}>
        <img className='rounded-lg mb-3 object-cover' src={post.image} />
        <p className='font-bold mb-2 text-verticletitle'> {post.title}</p>
        {
          isForeword && <p className='text-gray text-verticleforeword'>  {post.foreword}...</p>
        }
        <div className='mt-4 text-author text-gray '>
          <p > {post.author} in <span className='text-green'> {post.topic}</span> </p>
          <p> {post.updated_at}</p>
        </div>
      </Link>
    </div>
  )
}

export default VerticalPost