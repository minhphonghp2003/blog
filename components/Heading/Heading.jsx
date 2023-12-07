import React from 'react'
import Hero from './Hero'
import NewlyArrived from './NewlyArrived'

function Heading({ posts }) {
  return (
    <div>
      <Hero post={posts[0]} />
      <NewlyArrived posts={posts} />
    </div>
  )
}

export default Heading