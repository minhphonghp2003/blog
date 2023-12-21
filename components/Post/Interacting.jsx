"use client"
import React, { useEffect, useState } from 'react'
import { PiHandsClappingFill } from "react-icons/pi";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BiMessageRounded } from "react-icons/bi";
import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    LinkedinShareButton,
    LinkedinIcon,
    FacebookMessengerShareButton,
    FacebookMessengerIcon,

} from 'next-share'


function Interacting({ post }) {
    const [currentUrl, setCurrentUrl] = useState(null);
    useEffect(() => {
        setCurrentUrl(window.location.href);
    }, []);
    return (
        <div >
            <div className='flex flex-col cursor-pointer items-center'>
                <p className=' text-gray'>{post.likeCount}</p>
                <PiHandsClappingFill className='text-posttitle ' color='gray' />
            </div>
            <div className='flex flex-col mt-4'>
                <p className='text-center text-gray'>Share</p>
                {
                    currentUrl &&
                    <div className='flex sm:flex-col sm:items-center gap-4 text-horizbigtitle'>
                        <FacebookShareButton
                            url={currentUrl}
                            quote={post.title}
                            hashtag={'#minhphong'}
                            onClick={()=>{console.log("Facebook share");}} 
                        >
                            <FacebookIcon size={32} round />
                        </FacebookShareButton>

                        <FacebookMessengerShareButton
                            url={currentUrl}
                            appId={''}
                        >
                            <FacebookMessengerIcon size={32} round />
                        </FacebookMessengerShareButton>
                        <LinkedinShareButton url={currentUrl}>
                            <LinkedinIcon size={32} round />
                        </LinkedinShareButton>
                        <TwitterShareButton
                            url={currentUrl}
                            title={post.title}
                        >
                            <TwitterIcon size={32} round />
                        </TwitterShareButton>
                    </div>
                }
            </div>
            <a href='#comment' className='hidden sm:flex flex-col mt-4 items-center'>
                <p className='text-center text-gray'>Reply</p>
                <BiMessageRounded className='text-horizbigtitle ' />
            </a>
        </div>
    )
}

export default Interacting