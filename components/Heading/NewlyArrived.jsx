import HorizonPost from '@components/Post/HorizonPost'
import VerticalPost from '@components/Post/VerticalPost'
import React from 'react'

function NewlyArrived({ posts }) {
    let post1 = posts[1]
    let postList = posts.slice(2, 5)
    let lastPost = posts[5]
    return (
        <div className='sm:grid gap-6 grid-cols-9'>
            {post1 && <VerticalPost className="col-span-3" isForeword={true} post={post1} />}
            <div className='col-span-4'>
                {
                    postList.map(p => {
                        return <HorizonPost post={p} />
                    })
                }
            </div>
            {lastPost && <VerticalPost className="col-span-2 self-start" post={posts[posts.length - 1]} />}
        </div>
    )
}

export default NewlyArrived