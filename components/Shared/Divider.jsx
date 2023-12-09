import React from 'react'

function DividerTitle({ title }) {
    return (
        <div className='mb-[2rem] text-verticletitle font-bold border-[#00000021] border-b-[1px]'>
            <span className='border-b-[1px] border-gray inline-block pb-[10px]'>{title}</span>
        </div>
    )
}

export default DividerTitle