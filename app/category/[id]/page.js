import Popular from "@components/Popular/Popular";
import DividerTitle from "@components/Shared/Divider";
import PaginatedPost from "@components/Shared/PaginatedPost";
import TopicHeader from "@components/Shared/TopicHeader";
import Link from "next/link";
import React from "react";

async function Topic({ id }) {
    let res = await fetch("https://657470c9f941bda3f2afc286.mockapi.io/post/1");
    let headPost = await res.json();
    res = await fetch("https://657470c9f941bda3f2afc286.mockapi.io/post");
    let posts = await res.json();
    return (
        <div className=" gap-8 sm:grid grid-cols-3  max-w-[90vw] sm:max-w-[80vw] m-auto">
            <div className="col-span-2">
                <DividerTitle title="Topic" />
                <Link href={`/post/${headPost.id}`}>
                <TopicHeader post={headPost} />
                </Link>
                <PaginatedPost link="https://657470c9f941bda3f2afc286.mockapi.io/post" />
            </div>
            <div className="sm:sticky sm:top-[4rem] self-start">
                <Popular posts={posts} />
            </div>
        </div>
    );
}

export default Topic;
