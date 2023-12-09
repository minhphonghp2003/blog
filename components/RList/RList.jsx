"use client"
import React, { useEffect, useState } from 'react'
import DividerTitle from '@components/Shared/Divider'
import Pagination from '@components/Shared/Pagination'
import RListComp from './RListComp'


function RList() {
  let [currentPage, setCurrentPage] = useState(1)
  let [totalCount, setTotalCount] = useState(0)
  let [rlists, setRLists] = useState(null)
  let siblingCount = 1
  let pageSize = 9
  let fetchRLists = async () => {
    const url = new URL("https://655c5d4925b76d9884fd0e77.mockapi.io/topic");
    url.searchParams.append('page', currentPage);
    url.searchParams.append('limit', pageSize);

    let res = await fetch(url, {
      method: 'GET',
      headers: { 'content-type': 'application/json' },
    })
    let data = await res.json()
    setRLists(data)
    setTotalCount(18)

  }
  useEffect(() => {
    fetchRLists()
  }, [currentPage])

  return (
    <div id='rlist' className=''>
      <DividerTitle title="Reading lists " />
      <div className='grid sm:grid-cols-3 grid-cols-2 gap-4'>
        {
          rlists && rlists.map(rlist => {
            return <RListComp rlist={rlist} key={rlist.name} />
          })
        }
      </div>
      <div className='mt-8 flex justify-center'>
        <Pagination currentPage={currentPage} pageSize={pageSize} siblingCount={siblingCount} totalCount={totalCount} onPageChange={setCurrentPage} />
      </div>
    </div>
  )
}

export default RList