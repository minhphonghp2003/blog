"use client";
import Popular from "@components/Popular/Popular";
import DividerTitle from "@components/Shared/Divider";
import PaginatedPost from "@components/Shared/PaginatedPost";
import { useSearchParams, useRouter } from "next/navigation";

import React, { useEffect, useState } from "react";

function Search() {
    let searchParams = useSearchParams();
    let query = searchParams.get("query");

    return (
        <div className=" gap-8 sm:grid grid-cols-3  max-w-[90vw] sm:max-w-[80vw] m-auto">
            <div className="col-span-2">
                <DividerTitle title={`Search results for ${query}`} />
                <PaginatedPost key={query} query={query} api="search/post" />
            </div>
            {/* <div className="sm:sticky sm:top-[4rem] self-start">
                <Popular posts={popular} />
            </div> */}
        </div>
    );
}

export default Search;
