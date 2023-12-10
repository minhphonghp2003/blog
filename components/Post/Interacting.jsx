import React from 'react'
import { PiHandsClappingFill } from "react-icons/pi";
import { CiFacebook } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BiMessageRounded } from "react-icons/bi";


function Interacting({ post }) {
    return (
        <div >
            <div className='flex flex-col items-center'>
                <p className=' text-gray'>{post.likeCount}</p>
                <PiHandsClappingFill className='text-posttitle ' color='green' />
            </div>
            <div className='flex flex-col mt-4'>
                <p className='text-center text-gray'>Share</p>
                <div className='flex sm:flex-col sm:items-center gap-4 text-horizbigtitle'>
                    <CiFacebook />
                    <FaLinkedin />
                    <FaXTwitter />
                </div>
            </div>
            <div className='hidden sm:flex flex-col mt-4 items-center'>
                <p className='text-center text-gray'>Reply</p>
                <p className=' text-gray'>{post.commentCount}</p>
                <BiMessageRounded className='text-horizbigtitle '  />
            </div>
        </div>
    )
}

export default Interacting