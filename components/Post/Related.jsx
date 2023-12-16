import { extractPostImages } from '@utils/helper';
import VerticalPost from './VerticalPost';
import { fetchPostPage } from '@utils/network';

async function Related({ className, topic }) {

    let res = await fetchPostPage({ api: "post/postby", limit: 3, page: 0, sortBy: "updatedAt", restParam: { id: topic.id, getBy: "topic" } })
    let related = (await res.json()).content;
    extractPostImages({ posts: related })

    return (
        <div className={className}>
            {related && related.map(r => {

                return <div className='hover:-translate-y-4 duration-1000'>
                    <VerticalPost isForeword={false} post={r} key={r.id} />
                </div>
            })}
        </div>
    )
}

export default Related