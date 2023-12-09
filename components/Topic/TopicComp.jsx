import React from 'react'

function TopicComp({ topic }) {
    return (
        <div className='p-9 pb-6  shadow-[1px_1px_8px_#00000014] hover:shadow-md duration-200 rounded-lg '>
            <div className='flex gap-8 mb-8'>
                <img className='self-center w-[1.8rem] h-[2.8rem]' src={topic.icon} />
                <p className='self-start text-verticletitle font-[600]'> {topic.name}</p>
            </div>
            <p> {topic.description}</p>
        </div>
    )
}

export default TopicComp