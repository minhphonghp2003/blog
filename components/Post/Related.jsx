"use client"
import React, { useEffect, useState } from 'react'
import VerticalPost from './VerticalPost';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';



function Related({ className, topic }) {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
    let [related, setRelated] = useState()
    let fetchRelated = async () => {
        let res = await fetch("https://655c5d4925b76d9884fd0e77.mockapi.io/posts", {
            cache: "no-store",
        });
        let posts = await res.json();
        setRelated(posts.slice(0, 3))
    }
    useEffect(() => {
        fetchRelated()
    }, [])
    return (
        <div className={className}>
            {related && related.map(r => {
                return <div className='hover:-translate-y-4 duration-1000'>
                    <VerticalPost isForeword={false} post={r} key={r.id} />
                </div>
            })}
        </div>
    )
}

export default Related