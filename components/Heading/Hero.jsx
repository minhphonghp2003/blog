import Link from 'next/link'
import React from 'react'

function Hero({ post }) {
    return (
        <div className='sm:flex gap-8 flex-row-reverse mb-4'>
            <img src={post.imageLink} className='mb-8 hover:-translate-y-3 duration-700 object-cover' />
            <div className='self-center'>
                <span className="inline-flex items-center rounded-full text-green bg-[rgba(3, 168, 124, 0.11)] px-2 py-1 font-medium bg-greenbg">
                    Randomly choice
                </span>
                <p className='my-1 text-secondary font-bold text-cardtitle break-words sm:text-[3em]'>{post.title}</p>
                <p className='text-gray text-cardforeword'> {post.foreword}</p>
                <Link href={`/post/${post.id}`}>
                    <button className='bg-secondary border-dark  border rounded-md inline-flex items-center justify-center py-2 px-3 text-center text-primary font-medium text-white hover:px-5 duration-700  my-6'>
                        Read more
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Hero