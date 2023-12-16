import HorizonPost from '@components/Post/HorizonPost'
import VerticalPost from '@components/Post/VerticalPost'
import React from 'react'

function NewlyArrived({ posts }) {
    return (
        <div className='sm:grid gap-6 grid-cols-9'>
            <VerticalPost className="col-span-3" isForeword={true} post={posts[0]} />
            <div className='col-span-4'>
                {
                    posts.map(p => {
                        return <HorizonPost post={p} />
                    })
                }
            </div>
            <VerticalPost className="col-span-2 self-start" post={posts[posts.length - 1]} />
        </div>
    )
}

export default NewlyArrived