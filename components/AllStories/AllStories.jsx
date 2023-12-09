"use client"
import DividerTitle from '@components/Shared/Divider'
import PaginatedPost from '@components/Shared/PaginatedPost'
import React, { useRef } from 'react'

function AllStories() {
   const anchorRef = useRef(null)
  return (
    <div id='allposts' ref={anchorRef}>
      <DividerTitle title="All Posts" />
      <PaginatedPost anchor="allposts" link="https://655c5d4925b76d9884fd0e77.mockapi.io/posts" />

    </div>
  )
}

export default AllStories