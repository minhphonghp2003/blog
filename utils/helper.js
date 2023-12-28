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

export let extractComment = ({ comments }) => {
    for (let i = 0; i < comments.length; i++) {
        let comment = comments[i];
        comment["comId"] = comment["id"];
        comment["avatarUrl"] =
            "https://api.dicebear.com/7.x/adventurer/svg?seed=" +
            comment["userId"];
        if (comment["replies"]) {
            extractComment({ comments: comment["replies"] });
        }
    }
};
