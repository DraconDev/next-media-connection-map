import Itemlist from "@/components/Itemlist/Itemlist";
import GetItems from "@/db/supabase";

export default function Home() {
    GetItems();
    return (
        <main className="flex flex-col items-center justify-center ">
            <Itemlist />
            {/* <Footer /> */}
        </main>
    );
}
