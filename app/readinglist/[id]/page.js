import Popular from "@components/Popular/Popular";
import DividerTitle from "@components/Shared/Divider";
import PaginatedPost from "@components/Shared/PaginatedPost";
import TopicHeader from "@components/Shared/TopicHeader";
import { extractPostImages } from "@utils/helper";
import { fetchPostPage } from "@utils/network";
import Link from "next/link";
import React from "react";

async function ReadingList({ params }) {
    let res = await fetchPostPage({
        api: "post/all",
        limit: 6,
        page: 0,
        sortBy: "viewCount",
        restParam: { id: params.id, getBy: "readinglist" },
    });
    let posts = (await res.json()).content;
    extractPostImages({ posts });
    let headPost = posts[0];
    let popular = posts.slice(1, posts.length);
    return (
        <div className=" gap-8 sm:grid grid-cols-3  max-w-[90vw] sm:max-w-[80vw] m-auto">
            <div className="col-span-2">
                <DividerTitle title="Reading List " />
                <p>
                    
                </p>
                <Link href={`/post/${headPost.id}`}>
                    <TopicHeader post={headPost} />
                </Link>
                <PaginatedPost
                    restParamFetch={{ id: params.id, getBy: "readinglist" }}
                    api="post/all"
                />
            </div>
            <div className="sm:sticky sm:top-[4rem] self-start">
                <Popular posts={popular} />
            </div>
        </div>
    );
}

export default ReadingList;
