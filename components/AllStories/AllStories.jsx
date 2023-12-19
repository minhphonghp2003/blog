"use client"
import DividerTitle from '@components/Shared/Divider'
import PaginatedPost from '@components/Shared/PaginatedPost'
import React, { useRef } from 'react'

function AllStories() {
   const anchorRef = useRef(null)
  return (
    <div id='allposts' ref={anchorRef}>
      <DividerTitle title="📝All Posts" />
      <PaginatedPost anchor="allposts" api="post/all" />

    </div>
  )
}

export default AllStories