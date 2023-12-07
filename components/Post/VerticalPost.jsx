import React from 'react'

function VerticalPost({ className, post, isForeword }) {
  return (
    <div className={`${className} mb-4`}>
      <img className='' src={post.image} />
      <p className='font-bold mb-4 text-verticletitle'> {post.title}</p>
      {
        isForeword && <p className='text-gray text-verticleforeword'>  {post.foreword}...</p>
      }
      <div className='mt-4 text-author text-gray '>
        <p > {post.author} in <span className='text-green'> {post.topic}</span> </p>
        <p> {post.updated_at}</p>
      </div>
    </div>
  )
}

export default VerticalPost