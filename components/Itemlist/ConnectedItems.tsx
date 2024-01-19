"use client";
import { GetConnections } from "@/db/supabase";
import { ItemType } from "@/type/item";
import { useQuery } from "@tanstack/react-query";
import { Dispatch, SetStateAction } from "react";
import { GoPlus } from "react-icons/go";
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
        staleTime: 1000 * 3,
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
            <div className="flex justify-between text-2xl p-1 w-full items-center">
                <div className="">Recommendations</div>
                <Button
                    action={() => setOverlayToggle(true)}
                    override="bg-black text-accent rounded-full border-2 border-accent hover:bg-black  "
                >
                    <GoPlus className="w-9 h-9" />
                </Button>
            </div>
            <div className=" p-1 flex gap-2 flex-wrap justify-center">
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
