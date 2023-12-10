import Link from 'next/link'
import React from 'react'

function Header({ post }) {
    return (
        <div className='max-w-full m-8 sm:max-w-[60%] sm:m-auto sm:mb-10'>
            <p className='font-[500] text-posttitle font-posttitle mb-4'>{post.title}</p>
            <div className=' flex gap-4 '>
                <img className='h-[40px] w-[40px] rounded-full ' src={post.authorImage} />
                <div className='text-author text-gray'>
                    <Link href={`/author/${post.authorId}`}>
                        <span className='text-secondary'>{post.authorName} </span>
                    </Link>
                    in{" "}
                    <span className='text-green'> {post.topic}</span>
                    <p>
                        <span>{post.updatedAt}</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Header