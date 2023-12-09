"use client"
import React, { useEffect, useState } from 'react'
import TopicComp from './TopicComp'
import DividerTitle from '@components/Shared/Divider'
import Pagination from '@components/Shared/Pagination'

function Topic() {
  let [currentPage, setCurrentPage] = useState(1)
  let [totalCount, setTotalCount] = useState(0)
  let [topics, setTopics] = useState(null)
  let siblingCount = 1
  let pageSize = 8
  let fetchTopics = async () => {
    const url = new URL("https://655c5d4925b76d9884fd0e77.mockapi.io/topic");
    url.searchParams.append('page', currentPage);
    url.searchParams.append('limit', pageSize);

    let res = await fetch(url, {
      method: 'GET',
      headers: { 'content-type': 'application/json' },
    })
    let data = await res.json()
    setTopics(data)
    setTotalCount(18)

  }
  useEffect(() => {
    fetchTopics()
  }, [currentPage])

  return (
    <div className=''>
      <DividerTitle title="All Topics " />
      <div id='topic' className='grid sm:grid-cols-2 grid-cols-1 gap-4'>
        {
         topics&& topics.map(topic => {
            return <TopicComp key={topic.name} topic={topic} />
          })
        }
      </div>
      <div className='mt-8 flex justify-center'>
        <Pagination currentPage={currentPage} pageSize={pageSize} siblingCount={siblingCount} totalCount={totalCount} onPageChange={setCurrentPage} />
      </div>
    </div>
  )
}

export default Topic