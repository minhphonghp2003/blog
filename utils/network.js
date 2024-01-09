export let fetchPostPage = async ({
    api,
    page,
    query = null,
    limit,
    sortBy,
    readingListId = null,
    topicId = null,
    authorId = null,
}) => {
    let params = {
        page,
        limit,
        sortBy,
    };
    if (readingListId != null) {
        params["readingListid"] = readingListId;
    }
    if (topicId != null) {
        params["topicId"] = topicId;
    }
    if (authorId != null) {
        params["authorId"] = authorId;
    }
    if (query != null) {
        params["query"] = query;
    }
    return await fetch(
        process.env.NEXT_PUBLIC_BACKEND +
            api +
            "?" +
            new URLSearchParams(params),
        { cache: "no-store" }
    );
};

export let fetchPost = async ({ id }) => {
    let params = {
        id,
    };
    return await fetch(
        process.env.NEXT_PUBLIC_BACKEND +
            "post/" +
            "?" +
            new URLSearchParams(params),
        { cache: "no-store" }
    );
};
