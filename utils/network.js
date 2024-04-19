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
        params["readingListId"] = readingListId;
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
    let result = await fetch(
        process.env.NEXT_PUBLIC_BACKEND +
            api +
            "?" +
            new URLSearchParams(params),
        { cache: "no-store" }
    );
    return result;
};

export let fetchPost = async ({ id }) => {
    let params = {
        id,
    };
    let result = await fetch(
        process.env.NEXT_PUBLIC_BACKEND +
            "post/detail" +
            "?" +
            new URLSearchParams(params),
        { cache: "no-store" }
    );
    return result;
};
