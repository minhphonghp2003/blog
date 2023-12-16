import DividerTitle from '@components/Shared/Divider'
import RListComp from './RListComp'


async function RList() {
  let res = await fetch(process.env.NEXT_PUBLIC_BACKEND + "readingList/all")
  let rlists = await res.json()


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
     
    </div>
  )
}

export default RList