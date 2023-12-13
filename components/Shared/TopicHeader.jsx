import React from 'react'

function TopicHeader({post}) {
  return (
    <div className='flex flex-col mb-6'>
        <img src={post.imageLink}/>
        <p className='text-horizbigtitle font-bold m-3'>{post.title}</p>
        <p className='text-gray text-horizforeword m-1'>{post.foreword}</p>
        <div className='flex gap-3 m-3'>
            <img className='h-[50px] w-[50px] rounded-full' src={post.authorImage}/>
            <div className='flex flex-col text-author'>
                <p>{post.authorName} in <span className='text-green'>{post.topic}</span></p>
                <p>{post.updatedAt}</p>
            </div>
        </div>
    </div>
  )
}

export default TopicHeader