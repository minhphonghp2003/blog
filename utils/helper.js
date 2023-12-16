import { getPublicURL } from "./storage";

export let extractImages = ({ posts }) => {
    posts.map((p) => {
        p.imageLink = getPublicURL({
            from: "image",
            path: p.imageLink,
        });
        p.author
            ? (p.author.avatar = getPublicURL({
                  from: "image",
                  path: p.author.avatar,
              }))
            : null;
    });
};
