import Comment from "@components/Post/Comment";
import Header from "@components/Post/Header";
import Interacting from "@components/Post/Interacting";
import Related from "@components/Post/Related";
import DividerTitle from "@components/Shared/Divider";
import ScrollProgress from "@components/Shared/ScrollProgress";
import { extractImageFromProp, extractPostImages } from "@utils/helper";
import { fetchPost } from "@utils/network";
import { getPostContent } from "@utils/storage";
import Link from "next/link";
import { Editor } from "novel";
import React from "react";
import { SiBuymeacoffee } from "react-icons/si";

async function Post({ params }) {
    let res = await fetchPost({ id: params.id });
    let post = await res.json();
    extractPostImages({ posts: [post] });
    post.content = await getPostContent({ path: post.postLink });
    extractImageFromProp({ list: [post], prop: "nextImageLink" });
    let coffeeLink = "#";
    post.author.socials.map((s) => {
        if (s.name == "BuyMeACoffee") {
            coffeeLink = s.link;
        }
    });
    return (
        <div className="">
            <ScrollProgress />
            <Header post={post} />
            <div className="w-full h-[45vw] overflow-hidden mb-8 ">
                <img
                    className="w-full m-2 h-[45vw] scale-100 duration-[2000ms] hover:scale-110 hover:opacity-90 overflow-hidden "
                    src={post.imageLink}
                />
            </div>
            <div className="flex w-full">
                <div className="hidden sm:block sticky left-[10vw] self-start top-[3rem]">
                    <Interacting post={post} />
                </div>
                <div className="max-w-full m-4 sm:max-w-[65vw] sm:m-auto">
                    <p className="text-blog font-blog font-[500] mb-10 p-4 bg-[#d7fef0] leading-7">
                        {post.foreword}
                    </p>
                    <div className="text-blog  first-letter:text-[7rem] first-letter:mr-3 first-letter:float-left first-letter:font-[500] font-blog first-letter:leading-none">
                        <div
                            dangerouslySetInnerHTML={{
                                __html: post.content,
                            }}
                        />
                    </div>
                    <div className="flex flex-wrap gap-2 mt-14">
                        {post.tags &&
                            post.tags.map((t) => {
                                return (
                                    <a
                                        key={t}
                                        className="bg-[#0000000d] hover:text-green text-secondary rounded-md text-author px-[3px] py-[6px]"
                                    >
                                        {t.name}
                                    </a>
                                );
                            })}
                    </div>
                    <div className="flex sm:flex-row flex-col gap-5 mt-12 justify-center">
                        <img
                            src={post.author && post.author.avatar}
                            className="self-center rounded-full max-w-[120px]"
                        />
                        <div className="flex flex-col gap-4">
                            <Link
                                href={`/author/${
                                    post.author && post.author.id
                                }`}
                            >
                                <p className="font-bold text-horiztitle">
                                    {post.author && post.author.fullName}
                                </p>
                            </Link>
                            <p>{post.author.bio}</p>
                            <div className="flex flex-wrap gap-4">
                                {post.author.socials &&
                                    post.author.socials.map((s) => {
                                        return (
                                            <a
                                                href={s.link}
                                                key={s}
                                                className=" hover:text-green"
                                            >
                                                {s.name}
                                            </a>
                                        );
                                    })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center sm:hidden">
                <Interacting post={post} />
            </div>
            <div className="sm:max-w-[70%] sm:m-auto sm:mt-20 mt-10 ml-4">
                <DividerTitle title="Related posts" />
                <Related
                    className="flex flex-col gap-4 mt-12 p-4 justify-center sm:flex-row sm:p-18 "
                    topic={post.topic}
                />
            </div>
            <div>
                {/* <Comment /> */}
            </div>
            <div className="fixed bottom-0 flex justify-center sm:justify-between w-full bg-primary p-4 border-t-[1px] border-[#0000001a]">
                <a
                    href={coffeeLink}
                    className="sm:ml-[10vw]  flex items-center bg-[yellow] rounded-lg p-1 font-[cursive]"
                >
                    {" "}
                    Buy me a coffee <SiBuymeacoffee color="black" />
                </a>
                <div className="mr-[10vw] hidden sm:block">
                    {" "}
                    Up next:
                    <img
                        className="w-[35px] h-[35px] inline rounded-full mx-2"
                        src={post.nextImageLink}
                    />
                    <a href={`/post/${post.nextId}`}>
                        <p className="inline">{post.nextTitle}</p>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Post;
