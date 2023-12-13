import DividerTitle from "@components/Shared/Divider";
import PaginatedPost from "@components/Shared/PaginatedPost";
import React from "react";
import { SiBuymeacoffee } from "react-icons/si";
let Information = ({ author }) => {
    return (
        <div className="flex flex-col mb-10">
            <p className="text-populartitle font-bold mb-8">{author.fullname}</p>
            <div className="flex">
                <p>{author.bio}</p>
                <img className="w-[82px] h-[82px] rounded-full items-center" src={author.avatar} />
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
                {author.socials &&
                    author.socials.map((s) => {
                        return <p>{s}</p>;
                    })}
                <div id="works" className="  flex items-center bg-[yellow] rounded-lg p-1 font-[cursive]">
                    {" "}
                    Buy me a coffee <SiBuymeacoffee color="black" />
                </div>
            </div>
        </div>
    );
};

async function Author({ params }) {
    let res = await fetch(
        "https://657470c9f941bda3f2afc286.mockapi.io/author/" + params.id
    );
    let data = await res.json();
    return (
        <div className="max-w-[60vw] m-auto">
            <Information author={data} />
            <DividerTitle title="Works"/>
            <PaginatedPost anchor="works" link="https://657470c9f941bda3f2afc286.mockapi.io/post"/>
        </div>
    );
}

export default Author;
