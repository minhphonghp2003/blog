export let fetchPostPage = async ({
    api,
    page,
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
        readingListId,
        topicId,
        authorId,
    };
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
