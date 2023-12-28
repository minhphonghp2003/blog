import DividerTitle from "@components/Shared/Divider";
import PaginatedPost from "@components/Shared/PaginatedPost";
import { extractImageFromProp } from "@utils/helper";
import React from "react";
import { SiBuymeacoffee } from "react-icons/si";
let Information = ({ author }) => {
    return (
        <div className="flex flex-col mb-10">
            <div className="mb-8">
                <p className="text-populartitle font-bold ">
                    {author.fullName}
                </p>
                <p className="italic text-gray">🤙🤙 Call me {author.phone}</p>
            </div>
            <div className="flex">
                <p>{author.bio}</p>
                <img
                    className="w-[82px] h-[82px] rounded-full items-center"
                    src={author.avatar}
                />
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
                {author.socials &&
                    author.socials.map((s) => {
                        if (s.name == "BuyMeACoffee") {
                            return (
                                <a
                                    href={s.link}
                                    id="works"
                                    className="  flex items-center bg-[yellow] rounded-lg p-1 font-[cursive]"
                                >
                                    {" "}
                                    Buy me a coffee{" "}
                                    <SiBuymeacoffee color="black" />
                                </a>
                            );
                        }
                        return (
                            <a
                                className="hover:text-green text-secondary"
                                href={s.link}
                            >
                                {s.name}
                            </a>
                        );
                    })}
            </div>
        </div>
    );
};

async function Author({ params }) {
    let res = await fetch(
        process.env.NEXT_PUBLIC_BACKEND + "user/author?id=" + params.id,
        { cache: "no-store" }
    );
    let data = await res.json();
    extractImageFromProp({ list: [data], prop: "avatar" });
    return (
        <div className="max-w-[60vw] m-auto">
            <Information author={data} />
            <DividerTitle title="Works" />
            <PaginatedPost
                anchor="works"
                api="post/all"
                authorId={params.id}
            />
        </div>
    );
}

export default Author;
