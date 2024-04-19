// app/sitemap.js

import { fetchPost, fetchPostPage } from "@utils/network";

const URL = "https://nguyenminhphong.fun";

export default async function sitemap() {
    let allPosts = await (
        await fetchPostPage({
            api: "post/all",
            limit: 9999,
            sortBy: "updated_at",
            page: 0,
        })
    ).json();
    const posts = allPosts.content.map(({ id, updatedAt }) => ({
        url: `${URL}/post/${id}`,
        lastModified: updatedAt,
    }));

    const routes = ["", "/author", "/category", "/contact", "/search"].map(
        (route) => ({
            url: `${URL}${route}`,
            lastModified: new Date().toISOString(),
        })
    );

    return [...routes, ...posts];
}
