"use client";
import GetItems from "@/db/supabase";
import { ItemType } from "@/type/item";
import { useQuery } from "@tanstack/react-query";
import Item from "../Itemlist/Item";

type Props = {
    id?: number;
};

const OverlayItems = (props: Props) => {
    const { data } = useQuery({ queryKey: ["items"], queryFn: GetItems });

    return (
        <div className=" p-1 flex gap-2 flex-wrap justify-center">
            {data &&
                data.map((item: ItemType) => (
                    <Item
                        key={item.id}
                        {...item}
                    />
                ))}
        </div>
    );
};

export default OverlayItems;
