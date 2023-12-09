import AllStories from "@components/AllStories/AllStories";
import Heading from "@components/Heading/Heading";
import Popular from "@components/Popular/Popular";
import RList from "@components/RList/RList";
import Topic from "@components/Topic/Topic";

export default async function Home() {
    let res = await fetch("https://655c5d4925b76d9884fd0e77.mockapi.io/posts", {
        cache: "no-store",
    });
    let post = await res.json();
    return (
        <div>
            <div className="flex flex-col gap-8 sm:grid grid-cols-3">
                <div className="col-span-3">
                    <Heading posts={post} />
                </div>
                <div className="col-span-2">
                    <AllStories />
                    <Topic/>
                    <RList />
                </div>
                <div className="sm:sticky sm:top-[4rem] self-start">
                    <Popular posts={post} />
                </div>
            </div>
        </div>
    );
}
