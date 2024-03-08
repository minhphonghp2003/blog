"use client"
import React, { useEffect, useState } from 'react'
import { PiHandsClappingFill } from "react-icons/pi";
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
import { useCookies } from 'react-cookie';
import { useScrollDirection } from '@components/CustomHook/useScroll';


function Interacting({ post }) {
    const [cookies] = useCookies(['uid']);
    let uid = cookies['uid']
    const [isLiked, setIsLiked] = useState(false)
    const [like, setLike] = useState(post.likeReader.length)
    const [share, setShare] = useState(post.postStatistic.shareCount)
    const [currentUrl, setCurrentUrl] = useState(null);
    let scrollDir = useScrollDirection()
    useEffect(() => {
        post.likeReader.map(l => {
            if (l.id == uid) {
                setIsLiked(true)
            }
        })
        setCurrentUrl(window.location.href);
    }, []);

    let handleLike = async () => {
        await fetch(process.env.NEXT_PUBLIC_BACKEND + "post/statistic/like", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                postId: post.id,
                readerId: uid,
            }), // body data type must match "Content-Type" header
        })


        setIsLiked(!isLiked)
        setLike(isLiked ? like - 1 : like + 1)
    }
    let handleShare = () => {
        fetch(process.env.NEXT_PUBLIC_BACKEND + "post/statistic", {
            method: "PUT", // *GET, POST, PUT, DELETE, etc.
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id: post.id,
                viewCount: post.viewCount,
                shareCount: share + 1,
            }), // body data type must match "Content-Type" header
        });
        setShare(share + 1)
    }

    return (
        <div className={`${scrollDir == "up" ? "" : "hidden"}`}>
            <div className='flex flex-col cursor-pointer items-center'>
                <p className=' text-gray'>{like}</p>
                <PiHandsClappingFill onClick={handleLike} className='text-posttitle ' color={isLiked ? "green" : "gray"} />
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
                            onClick={handleShare}
                        >
                            <FacebookIcon size={32} round />
                        </FacebookShareButton>
                        <FacebookMessengerShareButton
                            onClick={handleShare}
                            url={currentUrl}
                            appId={''}
                        >
                            <FacebookMessengerIcon size={32} round />
                        </FacebookMessengerShareButton>
                        <LinkedinShareButton
                            onClick={handleShare}
                            url={currentUrl}>
                            <LinkedinIcon size={32} round />
                        </LinkedinShareButton>
                        <TwitterShareButton
                            onClick={handleShare}
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