import Itemlist from "@/components/Itemlist/Itemlist";
import GetItems from "@/db/supabase";

export default function Home() {
    GetItems();
    return (
        <main>
            <Itemlist />
            {/* <Footer /> */}
        </main>
    );
}
