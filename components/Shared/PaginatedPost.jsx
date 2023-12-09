"use client"
import React, { useEffect, useState } from 'react'
import Pagination from './Pagination';
import HorizonPost from '@components/Post/HorizonPost';
import VerticalPost from '@components/Post/VerticalPost';


function PaginatedPost({ anchor, link }) {

    let [currentPage, setCurrentPage] = useState(1)
    let [totalCount, setTotalCount] = useState(0)
    let [posts, setPosts] = useState(null)
    let siblingCount = 1
    let pageSize = 10
    let fetchPost = async () => {
        const url = new URL(link);
        url.searchParams.append('page', currentPage);
        url.searchParams.append('limit', pageSize);

        let res = await fetch(url, {
            method: 'GET',
            headers: { 'content-type': 'application/json' },
        })
        let data = await res.json()
        setPosts(data)
        setTotalCount(50)

    }
    useEffect(() => {
        fetchPost()
    }, [currentPage])

    let handleOnChangePage = (page) => {
        const element = document.getElementById(anchor);
        if (element) {
            // 👇 Will scroll smoothly to the top of the next section
            element.scrollIntoView({ behavior: 'smooth' });
        }
        
        setCurrentPage(page)
    }

    return (
        <div className='flex flex-col items-center'>
            <div>
                {
                    posts && posts.map(p => {
                        return <div key={p.title}>

                            <HorizonPost isBigTitle={true} className={`hidden sm:flex flex-row-reverse`} isForeword={true} post={p} />
                            <VerticalPost className={`block sm:hidden`} isForeword={true} post={p} />
                        </div>
                    })
                }
            </div>
            <div className='mt-8'>
                <Pagination currentPage={currentPage} pageSize={pageSize} siblingCount={siblingCount} totalCount={totalCount} onPageChange={handleOnChangePage} />
            </div>
        </div>
    )
}

export default PaginatedPost