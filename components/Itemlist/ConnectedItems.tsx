import { GetConnections } from "@/db/supabase";
import { ItemType } from "@/type/item";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Overlay from "../Overlay";
import Button from "../UI/Button";
import Item from "./Item";

const ConnectedItems = (item: ItemType) => {
    console.log(item.connections);

    const { data } = useQuery({
        queryKey: ["connections", item.id],
        queryFn: () => GetConnections(item.connections ?? []),
    });

    console.log(data);

    const [overlayToggle, setOverlayToggle] = useState(true);

    return (
        <div className="flex flex-col w-full justify-start">
            {overlayToggle && (
                <Overlay action={() => setOverlayToggle(false)} />
            )}
            <div className="flex justify-between text-xl px-1 w-full">
                <div className="">Recommendations</div>
                <Button action={() => setOverlayToggle(true)}>+Add</Button>
            </div>
            <div className=" p-1 flex gap-2 flex-wrap">
                {data &&
                    data.map((item: ItemType) => (
                        <Item
                            key={item.id}
                            {...item}
                        />
                    ))}
            </div>
        </div>
    );
};

export default ConnectedItems;
