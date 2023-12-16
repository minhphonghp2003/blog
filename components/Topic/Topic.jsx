import { fetchPost } from '@utils/network'
import TopicComp from './TopicComp'
import DividerTitle from '@components/Shared/Divider'

async function Topic() {
  let res = await fetch(process.env.NEXT_PUBLIC_BACKEND + "topic/all")
  let topics = await res.json()

  return (
    <div >

      <DividerTitle title="All Topics " />
      <div id='topic' className='grid sm:grid-cols-2 grid-cols-1 gap-4'>
        {
          topics && topics.map(topic => {
            return <TopicComp key={topic.name} topic={topic} />
          })
        }
      </div>

    </div>
  )
}

export default Topic