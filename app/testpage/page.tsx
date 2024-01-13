"use client";
import { createClient } from "@supabase/supabase-js";

type Props = {};

const page = async (props: Props) => {
    const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL ?? "",
        process.env.NEXT_PUBLIC_SUPABASE_KEY ?? ""
    );

    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "github",
    });
    return <div>page {data && JSON.stringify(data)}</div>;
};

export default page;
