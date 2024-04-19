"use client"
import { useScrollDirection } from '@components/CustomHook/useScroll';
import Link from 'next/link'
import React from 'react'

function Nav() {
    let scrollDir = useScrollDirection();
    return (
        <nav className={`sm:block ${scrollDir == "up" ? "sm:block" : "sm:hidden"} hidden sm:sticky sm:top-0 max-w-[100vw] bg-primary z-10 px-40 py-4 shadow-[0_1px_0px_0px_rgba(0, 0, 0, 0.05)] `}>
            <ul className="flex justify-between text-gray text-[0.97em] uppercase items-center ">
                <Link href="/">Home</Link>
                <Link href="/#topic">Topics</Link>
                <Link href="/#rlist">Reading Lists</Link>
                <Link href="https://blogdashboardv2.nguyenminhphong.fun/">✍️Write a post</Link>
            </ul>
        </nav>
    )
}

export default Nav