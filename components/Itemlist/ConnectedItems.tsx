import { GetConnections } from "@/db/supabase";
import { ItemType } from "@/type/item";
import { useQuery } from "@tanstack/react-query";
import { MdOutlineAddLink } from "react-icons/md";
import Item from "./Item";

const ConnectedItems = (item: ItemType) => {
    console.log(item.connections);

    const { data } = useQuery({
        queryKey: ["connections", item.id],
        queryFn: () => GetConnections(item.connections ?? []),
    });

    console.log(data);

    return (
        <div className="flex">
            <div className="">
                <div className=" p-1 flex gap-2 flex-wrap justify-center">
                    <button className="flex justify-center items-center text-accent bg-primary w-[160px] h-[280px] md:w-[240px] md:h-[380px] rounded-xl border-2 border-accent p-1">
                        <MdOutlineAddLink className="w-20 h-20" />
                    </button>
                    {data &&
                        data.map((item: ItemType) => (
                            <Item
                                key={item.id}
                                {...item}
                            />
                        ))}
                </div>
            </div>
        </div>
    );
};

export default ConnectedItems;
