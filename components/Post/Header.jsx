import Link from 'next/link'
import React from 'react'

function Header({ post }) {
    return (
        <div className='max-w-full m-8 sm:max-w-[60%] sm:m-auto sm:mb-10'>
            <p className='font-[500] text-posttitle font-posttitle mb-4'>{post.title}</p>
            <div className=' flex gap-4 '>
                <img className='h-[40px] w-[40px] rounded-full ' src={post.author.avatar} />
                <div className='text-author text-gray'>
                    <Link href={`/author/${post.author.id}`}>
                        <span className='text-secondary'>{post.author.fullName} </span>
                    </Link>
                    in{" "}
                    <a href={`/category/${post.topic.id}`} className='text-green'> {post.topic.name}</a>
                    <p>
                        <span>{post.updatedAt}</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Header