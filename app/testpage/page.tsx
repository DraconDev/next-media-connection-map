"use client";
import { UpdateItemTitleById } from "@/db/supabase";

type Props = {};

const page = async (props: Props) => {
    UpdateItemTitleById(4, "test");
    // const supabase = createClient(
    //     process.env.NEXT_PUBLIC_SUPABASE_URL ?? "",
    //     process.env.NEXT_PUBLIC_SUPABASE_KEY ?? ""
    // );

    // const { data, error } = await supabase.auth.signInWithOAuth({
    //     provider: "github",
    // });
    // return <div>page {data && JSON.stringify(data)}</div>
    return <div>page</div>;
};

export default page;
