import AllStories from "@components/AllStories/AllStories";
import Heading from "@components/Heading/Heading";
import Popular from "@components/Popular/Popular";
import RList from "@components/RList/RList";
import Topic from "@components/Topic/Topic";
import { extractPostImages } from "@utils/helper";
import { fetchPostPage } from "@utils/network";

export default async function Home() {
    let heading = await fetchPostPage({
        api: "post/all",
        limit: 6,
        page: 0,
        sortBy: "updated_at",
    });
    let headingPosts = await heading.json();
    let popular = await fetchPostPage({
        api: "post/all",
        limit: 5,
        page: 0,
        sortBy: "view_count",
    });
    let popularPosts = await popular.json();
    extractPostImages({ posts: headingPosts.content });
    extractPostImages({ posts: popularPosts.content });
    return (
        <div className="max-w-[90vw] sm:max-w-[80vw] m-auto">
            <div className="flex flex-col gap-8 sm:grid grid-cols-3">
                <div className="col-span-3">
                    <Heading posts={headingPosts.content} />
                </div>
                <div className="col-span-2">
                    <AllStories />
                    <Topic />
                    <RList />
                </div>
                <div className="sm:sticky sm:top-[4rem] self-start">
                    <Popular posts={popularPosts.content} />
                </div>
            </div>
        </div>
    );
}
