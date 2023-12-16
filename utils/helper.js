import { getPublicURL } from "./storage";

export let extractPostImages = ({ posts }) => {
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

export let extractImageFromProp = ({ list, prop }) => {
    list.map((l) => {
        l[prop] = getPublicURL({
            from: "image",
            path: l[prop],
        });
    });
};
