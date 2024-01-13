import Itemlist from "@/components/Itemlist/Itemlist";
import { default as GetItems } from "@/db/supabase";
import { createClient } from "@supabase/supabase-js";

export default async function Home() {
    GetItems();



    return (
        <main className="flex flex-col items-center justify-center ">
            <Itemlist />
            {/* <Footer /> */}
        </main>
    );
}
