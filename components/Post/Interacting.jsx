import React from 'react'
import { PiHandsClappingFill } from "react-icons/pi";
import { CiFacebook } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


function Interacting({ post }) {
    return (
        <div >
            <div className=''>
                <p className='text-center text-gray'>{post.likeCount}</p>
                <PiHandsClappingFill  className='text-posttitle ' color='green'/>
            </div>
            <div className='flex flex-col mt-4'>
                <p className='text-center text-gray'>Share</p>
                <div className='flex sm:flex-col sm:items-center gap-4 text-horizbigtitle'>
                    <CiFacebook />
                    <FaLinkedin />
                    <FaXTwitter />
                </div>
            </div>
        </div>
    )
}

export default Interacting