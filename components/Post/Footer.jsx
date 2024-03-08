"use client"
import { useScrollDirection } from '@components/CustomHook/useScroll'
import React from 'react'
import { SiBuymeacoffee } from 'react-icons/si'

function PostFooter({ coffeeLink, post }) {
    let scrollDir = useScrollDirection()
    return (
        <div className={`${scrollDir=="up"?"fixed":"hidden"} bottom-0 flex justify-center sm:justify-between w-full bg-primary p-4 border-t-[1px] border-[#0000001a]`}>
            <a
                href={coffeeLink}
                className="sm:ml-[10vw]  flex items-center bg-[yellow] rounded-lg p-1 font-[cursive]"
            >
                {" "}
                Buy me a coffee <SiBuymeacoffee color="black" />
            </a>
            <div className="mr-[10vw] hidden sm:block">
                {" "}
                Up next:
                <img
                    className="w-[35px] h-[35px] inline rounded-full mx-2"
                    src={post.nextImageLink}
                />
                <a href={`/post/${post.nextId}`}>
                    <p className="inline">{post.nextTitle}</p>
                </a>
            </div>
        </div>
    )
}

export default PostFooter