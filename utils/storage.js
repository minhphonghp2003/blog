import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_KEY
);

export let getPublicURL = ({ from, path }) => {
    const { data, error } = supabase.storage.from(from).getPublicUrl(path);
    return data.publicUrl;
};

export let getPostContent = async ({ path }) => {
    try {
        const { data, error } = await supabase.storage
            .from("post")
            .download(path);
        return await data.text();
    } catch (error) {}
};
