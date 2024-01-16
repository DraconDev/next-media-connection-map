"use client";
import Itemlist from "@/components/Itemlist/Itemlist";
import { default as GetItems } from "@/db/supabase";

export default async function Home() {
    GetItems();
    return (
        <main className="flex flex-col items-center justify-center ">
            <Itemlist />
            {/* <Footer /> */}
        </main>
    );
}
