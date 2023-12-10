"use client"
import React, { useEffect, useState } from 'react'
import VerticalPost from './VerticalPost';

function Related({ className, topic }) {
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
    },[])
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