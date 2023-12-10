import Header from "@components/Post/Header";
import Interacting from "@components/Post/Interacting";
import Related from "@components/Post/Related";
import DividerTitle from "@components/Shared/Divider";
import ScrollProgress from "@components/Shared/ScrollProgress";
import Link from "next/link";
import React from "react";
import { SiBuymeacoffee } from "react-icons/si";

async function Post({ params }) {
    let res = await fetch(
        "https://657470c9f941bda3f2afc286.mockapi.io/post/" + params.id,
        {
            cache: "no-store",
        }
    );
    let post = await res.json();
    res = await fetch(
        "https://657470c9f941bda3f2afc286.mockapi.io/post/" +
            (parseInt(params.id) + 1),
        {
            cache: "no-store",
        }
    );
    let next = await res.json();
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
                        <p>
                            {post.content}
                            Moulin Rouge is best known as the birthplace of the
                            modern form of the can-can dance. Originally
                            introduced as a seductive dance by the courtesans
                            who operated from the site, the can-can dance revue
                            evolved into a form of entertainment of its own and
                            led to the introduction of cabarets across Europe.
                            Today, the Moulin Rouge is a tourist attraction,
                            offering musical dance entertainment for visitors
                            from around the world. The club’s decor still
                            contains much of the romance of fin de siècle
                            France. The Belle Époque was a period of peace and
                            optimism marked by industrial progress, and a
                            particularly rich cultural exuberance was about at
                            the opening of the Moulin Rouge. The Expositions
                            Universelles of 1889 and 1900 are symbols of this
                            period. The Eiffel Tower was also constructed in
                            1889, epitomising the spirit of progress along with
                            the culturally transgressive cabaret.[2] Japonism,
                            an artistic movement inspired by the Orient, with
                            Henri de Toulouse-Lautrec as its most brilliant
                            disciple, was also at its height. Montmartre, which,
                            at the heart of an increasingly vast and impersonal
                            Paris, retained a bucolic village atmosphere;
                            festivities and artists mixed, with pleasure and
                            beauty as their values. On 6 October 1889, the
                            Moulin Rouge opened in the Jardin de Paris, at the
                            foot of the Montmartre hill. Its creator Joseph
                            Ollerand his Manager Charles Zidler were formidable
                            businessmen who understood the public’s tastes. The
                            aim was to allow the very rich to come and ‘slum it’
                            in a fashionable district, Montmartre. The
                            extravagant setting – the garden was adorned with a
                            gigantic elephant – allowed people from all walks of
                            life to mix. Workers, residents of the Place
                            Blanche, artists, the middle classes, businessmen,
                            elegant women, and foreigners passing through Paris
                            rubbed shoulders. Nicknamed “The First Palace of
                            Women” by Oller and Zidler, the cabaret quickly
                            became a great success.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-14">
                        {post.tags &&
                            post.tags.map((t) => {
                                return (
                                    <a className="bg-[#0000000d] hover:text-green text-secondary rounded-md text-author px-[3px] py-[6px]">
                                        {t}
                                    </a>
                                );
                            })}
                    </div>
                    <div className="flex sm:flex-row flex-col gap-5 mt-12 justify-center">
                        <img
                            src={post.authorImage}
                            className="self-center rounded-full max-w-[120px]"
                        />
                        <div className="flex flex-col gap-4">
                            <Link href={`/author/${post.authorId}`}>
                                <p className="font-bold text-horiztitle">
                                    {post.authorName}
                                </p>
                            </Link>
                            <p>{post.authorBio}</p>
                            <div className="flex flex-wrap gap-4">
                                {post.authorSocials &&
                                    post.authorSocials.map((s) => {
                                        return (
                                            <a className=" hover:text-green">
                                                {s}
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
            <div className="fixed bottom-0 flex justify-center sm:justify-between w-full bg-primary p-4 border-t-[1px] border-[#0000001a]">
                <div className="sm:ml-[10vw]  flex items-center bg-[yellow] rounded-lg p-1 font-[cursive]">
                    {" "}
                    Buy me a coffee <SiBuymeacoffee color="black" />
                </div>
                <div className="mr-[10vw] hidden sm:block">
                    {" "}
                    Up next:
                    <img
                        className="w-[35px] h-[35px] inline rounded-full mx-2"
                        src={next.imageLink}
                    />
                    <a key={next.id} href={`/post/${next.id}`}>
                        <p className="inline">
                            {next.title
                                ? next.title.slice(0, 50)
                                : "Comming soon..."}
                            ...
                        </p>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Post;
