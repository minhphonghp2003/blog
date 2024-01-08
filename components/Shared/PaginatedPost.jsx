"use client"
import React, { useEffect, useState } from 'react'
import Pagination from './Pagination';
import HorizonPost from '@components/Post/HorizonPost';
import VerticalPost from '@components/Post/VerticalPost';
import { fetchPostPage } from '@utils/network';
import { extractPostImages } from '@utils/helper';


function PaginatedPost({ anchor, api, query, authorId, readingListId, topicId }) {
    let [currentPage, setCurrentPage] = useState(1)
    let [totalCount, setTotalCount] = useState(0)
    let [sort, setSort] = useState("updated_at")
    let [posts, setPosts] = useState(null)
    let siblingCount = 1
    let pageSize = 10
    let fetchPost = async () => {
        let res = await fetchPostPage({ api, limit: pageSize, page: currentPage - 1, sortBy: sort, query, authorId, readingListId, topicId })
        let data = await res.json()
        extractPostImages({ posts: data.content })
        setPosts(data.content)
        setTotalCount(data.totalElements)

    }
    useEffect(() => {
        fetchPost()
    }, [currentPage, sort])

    let handleOnChangePage = (page) => {
        const element = document.getElementById(anchor);
        if (element) {
            // 👇 Will scroll smoothly to the top of the next section
            element.scrollIntoView({ behavior: 'smooth' });
        }

        setCurrentPage(page)
    }
    let handleSortBy = (e) => {
        setSort(e.target.value);
    }

    return (
        <div className='flex flex-col items-center'>
            <select onChange={handleSortBy} class="self-start  mb-6 text-horiztitle text-gray">
                <option value="updated_at" selected>Latest update</option>
                <option value="view_count">Most view</option>
                <option value="share_count">Most share</option>
                <option value="like_count">Most like</option>
            </select>
            <div>
                {
                    posts && posts.map(p => {
                        return <div key={p.title}>

                            <HorizonPost isBigTitle={true} className={`hidden sm:flex flex-row-reverse`} isForeword={true} post={p} />
                            <VerticalPost className={`flex sm:hidden`} isForeword={true} post={p} />
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