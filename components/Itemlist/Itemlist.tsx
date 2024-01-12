"use client";
import GetItems from "@/db/supabase";
import { ItemType } from "@/type/item";
import { useQuery } from "@tanstack/react-query";
import Item from "./Item";

type Props = {};

const Itemlist = (props: Props) => {
    const { data } = useQuery({ queryKey: ["items"], queryFn: GetItems });

    return (
        <div className=" p-2 flex gap-2 flex-wrap ">
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

export default Itemlist;
