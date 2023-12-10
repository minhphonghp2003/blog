"use client"
import React, { useEffect, useState } from 'react'

function ScrollProgress() {
    const [scrollPercentage, setScrollPercentage] = useState(0);
    const handleScroll = () => {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollY = window.scrollY;
        const scrollPercent = (scrollY / (documentHeight - windowHeight)) * 100
        setScrollPercentage(scrollPercent)
    }
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }

    }, [scrollPercentage])
    return (
        <div className='w-full h-1 opacity-70 fixed z-50 top-0'>
            <div style={{
                height: "100%",
                backgroundColor: "#03a87c",
                width: `${scrollPercentage}%`,
                transitionDuration:"700ms"
            }} ></div>
        </div>
    )
}

export default ScrollProgress