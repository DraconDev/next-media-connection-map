import Footer from "@/components/Footer/Footer";
import Itemlist from "@/components/Itemlist/Itemlist";
import Button from "@/components/UI/Button";
import GetItems from "@/db/supabase";

export default function Home() {
    GetItems();
    return (
        <main>
            <Button>Testing</Button>
            <Itemlist />
            <Footer />
        </main>
    );
}
