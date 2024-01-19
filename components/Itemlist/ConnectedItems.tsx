"use client";
import { GetConnections } from "@/db/supabase";
import { ItemType } from "@/type/item";
import { useQuery } from "@tanstack/react-query";
import { Dispatch, SetStateAction } from "react";
import Overlay from "../Overlay/Overlay";
import Button from "../UI/Button";
import Item from "./Item";

type Props = {
    item: ItemType;
    overlayToggle: boolean;
    setOverlayToggle: Dispatch<SetStateAction<boolean>>;
    closeAndRefetch: () => void;
};

const ConnectedItems = ({
    item,
    overlayToggle,
    setOverlayToggle,
    closeAndRefetch,
}: Props) => {
    console.log(item.connections);

    const { data } = useQuery({
        queryKey: ["connections", item.id],
        queryFn: () => GetConnections(item.connections ?? []),
    });

    console.log(data);

    return (
        <div className="flex flex-col w-full justify-start">
            {overlayToggle && (
                <Overlay
                    action={closeAndRefetch}
                    id={item.id}
                />
            )}
            <div className="flex justify-between text-xl px-1 w-full items-center">
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
