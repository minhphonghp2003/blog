import HorizonPost from '@components/Post/HorizonPost'
import VerticalPost from '@components/Post/VerticalPost'
import React from 'react'

function NewlyArrived({ posts }) {
    let [a, post1, post2, post3, post4, post5] = posts
    return (
        <div className='sm:grid gap-6 grid-cols-9'>
            <VerticalPost className="col-span-3" isForeword={true} post={post1} />
            <div className='col-span-4'>
                <HorizonPost post={post2} />
                <HorizonPost post={post3} />
                <HorizonPost post={post4} />
            </div>
            <VerticalPost className="col-span-2 self-start" post={post5} />
        </div>
    )
}

export default NewlyArrived