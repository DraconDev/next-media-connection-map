"use client";
import GetItems from "@/db/supabase";
import { ItemType } from "@/type/item";
import { useQuery } from "@tanstack/react-query";
import OverlayItem from "./OverlayItem";

type Props = {
    id: number;
    action: () => void;
};

const OverlayItems = (props: Props) => {
    const { data } = useQuery({
        queryKey: ["items"],
        queryFn: GetItems,
    });

    return (
        <div className=" p-1 flex gap-2 flex-wrap justify-center">
            {data &&
                data.map((item: ItemType) => (
                    <OverlayItem
                        key={item.id}
                        item={item}
                        connection_id={props.id}
                        action={props.action}
                    />
                ))}
        </div>
    );
};

export default OverlayItems;
