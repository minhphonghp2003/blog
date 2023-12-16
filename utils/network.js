export let fetchPostPage = async ({ api, page, limit, sortBy, restParam }) => {
    let params = {
        ...restParam,
        page,
        limit,
        sortBy,
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
