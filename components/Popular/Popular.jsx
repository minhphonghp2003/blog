import DividerTitle from '@components/Shared/Divider'
import Link from 'next/link'
import React from 'react'

function Popular({ posts }) {
  let populars = posts.slice(4, 9)
  return (
    <div>
      <DividerTitle title="Popular" />
      <div className=' [counter-reset:list-item]'>
        <ol>
          {
            populars.map(p => {

              return <li className='mb-[1.5rem] [counter-increment:list-item] before:text-cardtitle before:mr-[0.7rem] before:mt-[-0.5rem] before:opacity-[0.15] before:text-secondary before:italic before:font-georgia before:leading-[1]  before:content-[counter(list-item)] flex'>
                <div>
                  <Link href={`/post/${p.id}`}>
                    <p className='text-populartitle font-bold'>{p.title}</p>
                    <div className='text-gray text-author'>
                      <p className='inline'>{p.author} </p>
                      in <span className='text-green'>{p.topic}</span> . <span>{p.updated_at}</span>
                    </div>
                  </Link>

                </div>
              </li>
            })
          }

        </ol>



      </div>
    </div>
  )
}

export default Popular