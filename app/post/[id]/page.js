import Header from "@components/Post/Header";
import Interacting from "@components/Post/Interacting";
import React from "react";

async function Post({ params }) {
    let res = await fetch(
        "https://657470c9f941bda3f2afc286.mockapi.io/post/" + params.id,
        {
            cache: "no-store",
        }
    );
    let post = await res.json();
    return (
        <div className="">
            <Header post={post} />
            <div className="w-full h-[45vw] overflow-hidden mb-8 ">
                <img
                    className="w-full h-[45vw] scale-100 duration-[2000ms] hover:scale-110 hover:opacity-90 overflow-hidden "
                    src={post.imageLink}
                />
            </div>
            <div>
                <div className="max-w-full m-4 sm:max-w-[65vw] sm:m-auto">
                    <p className="text-blog font-blog leading-7">
                        {post.content}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-14">
                        {post.tags.map((t) => {
                            return (
                                <a className="bg-[#0000000d] hover:text-green text-secondary rounded-md text-author px-[3px] py-[6px]">
                                    {t}
                                </a>
                            );
                        })}
                    </div>
                    <div className="flex sm:flex-row flex-col gap-5 mt-12 justify-center">
                        <img
                            src={post.authorImage}
                            className="self-center rounded-full max-w-[120px]"
                        />
                        <div className="flex flex-col gap-4">
                            <p className="font-bold text-horiztitle">
                                {post.authorName}
                            </p>
                            <p>{post.authorBio}</p>
                            <div>
                                {post.authorSocials.map((s) => {
                                    return (
                                        <a className="m-4 hover:text-green">
                                            {s}
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col sm:w-[50px]  sm:sticky  sm:bottom-[300px] sm:left-[10vw] items-center">
                    <Interacting post={post} />
                </div>
            </div>
            Lorem ipsum d     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            tincidunt varius faucibus. Curabitur ut dui metus. Morbi a porttitor
            lectus. Nullam efficitur congue lacus, ac sagittis orci mattis non.
            Duis ac neque hendrerit, varius ipsum quis, tristique lorem. Fusce
            non mi in lorem varius sagittis. Sed malesuada, mi ut porta
            dignissim, arcu velit porta tellus, vel vestibulum purus arcu non
            nulla. Curabitur erat ligula, fermentum et gravida sed, viverra at
            ipsum. Donec ullamcorper elit sed orci aliquet molestie. Praesent ut
            porta dolor. Aenean non accumsan eros. In hac habitasse platea
            dictumst. Aliquam convallis nunc nec felis elementum, sit amet
            dignissim justo rhoncus. Pellentesque habitant morbi tristique
            senectus et netus et malesuada fames ac turpis egestas. Vestibulum
            quam sapien, tristique a tempor ac, malesuada eu ante. Duis
            ullamcorper vulputate sodales. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Ut sit amet volutpat dolor, eu
            tincidunt arcu. Nunc odio ante, convallis at eros vel, sollicitudin
            iaculis erat. Morbi dignissim congue nibh, eget tempus sem. Mauris
            sollicitudin gravida velit nec elementum. Morbi et dictum nisl.
            Etiam condimentum facilisis elit, vel iaculis arcu sodales id.
            Aliquam porttitor, lacus eget rhoncus euismod, ligula est hendrerit
            felis, a dapibus elit nisl eu magna. Donec aliquet enim nisi. Ut
            massa ligula, bibendum at bibendum at, condimentum vitae odio. Morbi
            sollicitudin ut sem vitae eleifend. Nulla vel purus tellus. Aliquam
            id massa ac nulla pharetra auctor a sed enim. Morbi suscipit ante ac
            odio ornare, et efficitur erat gravida. In rhoncus leo est, vitae
            eleifend nisi dictum lacinia. Morbi venenatis pellentesque erat, et
            posuere leo. Proin interdum augue vitae bibendum pulvinar. Nulla
            aliquam ullamcorper ipsum, eget congue neque malesuada sed. Nulla
            sed metus suscipit, pretium nunc a, accumsan eros. Vivamus ultrices
            scelerisque leo, id maximus sem rhoncus et. Etiam in purus mauris.
            Sed ultricies pellentesque turpis ac lacinia. Mauris nisi sem,
            rhoncus sit amet malesuada sit amet, mattis non risus. Quisque quis
            lectus mi. Fusce eu dapibus leo, et ultricies dolor. Nunc id tortor
            consequat, laoreet leo ac, sagittis quam. Etiam faucibus finibus
            velit. Aenean tincidunt mollis sodales. Phasellus eget luctus justo.
            Praesent finibus finibus pellentesque. Sed fermentum cursus felis eu
            pretium. Donec eleifend nisl turpis, sit amet dapibus est cursus
            eget. Proin luctus sapien ac ligula semper, non laoreet odio
            sagittis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Praesent viverra ante eget gravida fringilla. Fusce metus ligula,
            pellentesque nec mauris non, sodales volutpat quam. Mauris congue
            sed eros aliquet vestibulum. Fusce vel ligula a ante egestas
            molestie. Quisque fringilla arcu mi, eu iaculis ante pharetra sed.
            Sed auctor mi nec diam porta, quis pretium arcu sagittis. Cras
            auctor augue lobortis massa ultrices cursus. Sed eu maximus ligula.
            Etiam consectetur egestas eros sit amet mattis.olor sit amet, consectetur adipiscing elit. Ut
            tincidunt varius faucibus. Curabitur ut dui metus. Morbi a porttitor
            lectus. Nullam efficitur congue lacus, ac sagittis orci mattis non.
            Duis ac neque hendrerit, varius ipsum quis, tristique lorem. Fusce
            non mi in lorem varius sagittis. Sed malesuada, mi ut porta
            dignissim, arcu velit porta tellus, vel vestibulum purus arcu non
            nulla. Curabitur erat ligula, fermentum et gravida sed, viverra at
            ipsum. Donec ullamcorper elit sed orci aliquet molestie. Praesent ut
            porta dolor. Aenean non accumsan eros. In hac habitasse platea
            dictumst. Aliquam convallis nunc nec felis elementum, sit amet
            dignissim justo rhoncus. Pellentesque habitant morbi tristique
            senectus et netus et malesuada fames ac turpis egestas. Vestibulum
            quam sapien, tristique a tempor ac, malesuada eu ante. Duis
            ullamcorper vulputate sodales. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Ut sit amet volutpat dolor, eu
            tincidunt arcu. Nunc odio ante, convallis at eros vel, sollicitudin
            iaculis erat. Morbi dignissim congue nibh, eget tempus sem. Mauris
            sollicitudin gravida velit nec elementum. Morbi et dictum nisl.
            Etiam condimentum facilisis elit, vel iaculis arcu sodales id.
            Aliquam porttitor, lacus eget rhoncus euismod, ligula est hendrerit
            felis, a dapibus elit nisl eu magna. Donec aliquet enim nisi. Ut
            massa ligula, bibendum at bibendum at, condimentum vitae odio. Morbi
            sollicitudin ut sem vitae eleifend. Nulla vel purus tellus. Aliquam
            id massa ac nulla pharetra auctor a sed enim. Morbi suscipit ante ac
            odio ornare, et efficitur erat gravida. In rhoncus leo est, vitae
            eleifend nisi dictum lacinia. Morbi venenatis pellentesque erat, et
            posuere leo. Proin interdum augue vitae bibendum pulvinar. Nulla
            aliquam ullamcorper ipsum, eget congue neque malesuada sed. Nulla
            sed metus suscipit, pretium nunc a, accumsan eros. Vivamus ultrices
            scelerisque leo, id maximus sem rhoncus et. Etiam in purus mauris.
            Sed ultricies pellentesque turpis ac lacinia. Mauris nisi sem,
            rhoncus sit amet malesuada sit amet, mattis non risus. Quisque quis
            lectus mi. Fusce eu dapibus leo, et ultricies dolor. Nunc id tortor
            consequat, laoreet leo ac, sagittis quam. Etiam faucibus finibus
            velit. Aenean tincidunt mollis sodales. Phasellus eget luctus justo.
            Praesent finibus finibus pellentesque. Sed fermentum cursus felis eu
            pretium. Donec eleifend nisl turpis, sit amet dapibus est cursus
            eget. Proin luctus sapien ac ligula semper, non laoreet odio
            sagittis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Praesent viverra ante eget gravida fringilla. Fusce metus ligula,
            pellentesque nec mauris non, sodales volutpat quam. Mauris congue
            sed eros aliquet vestibulum. Fusce vel ligula a ante egestas
            molestie. Quisque fringilla arcu mi, eu iaculis ante pharetra sed.
            Sed auctor mi nec diam porta, quis pretium arcu sagittis. Cras
            auctor augue lobortis massa ultrices cursus. Sed eu maximus ligula.
            Etiam consectetur egestas eros sit amet mattis.
        </div>
    );
}

export default Post;
