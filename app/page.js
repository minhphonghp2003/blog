import AllStories from "@components/AllStories/AllStories";
import Heading from "@components/Heading/Heading";
import Popular from "@components/Popular/Popular";
import RList from "@components/RList/RList";
import Topic from "@components/Topic/Topic";
import { fetchPostPage } from "@utils/network";

export default async function Home() {
  
    let res = await fetchPostPage({api:"post/all",limit:6,page:1,sortBy:"updatedAt"})
    let posts = await res.json();
    return (
        <div className="max-w-[90vw] sm:max-w-[80vw] m-auto">
            <div className="flex flex-col gap-8 sm:grid grid-cols-3">
                <div className="col-span-3">
                    <Heading posts={posts.content} />
                </div>
                <div className="col-span-2">
                    <AllStories />
                    <Topic />
                    <RList />
                </div>
                <div className="sm:sticky sm:top-[4rem] self-start">
                    <Popular posts={posts.content} />
                </div>
            </div>
        </div>
    );
}
