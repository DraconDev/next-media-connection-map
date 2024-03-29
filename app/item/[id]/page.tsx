"use client";

import ConnectedItems from "@/components/Itemlist/ConnectedItems";
import ItemTag from "@/components/Itemlist/ItemTag";

import Rating from "@/components/Itemlist/Rating";
import Button from "@/components/UI/Button";
import { GetItemById } from "@/db/supabase";
import { ItemType } from "@/type/item";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useState } from "react";
import { FaEdit } from "react-icons/fa";

const Selection = ({ params }: { params: { id: string } }) => {
    const [overlayToggle, setOverlayToggle] = useState(false);

    const { data, error, refetch } = useQuery({
        queryKey: ["item"],
        queryFn: () => GetItemById(Number(params.id)),
        refetchOnWindowFocus: true,
    });
    if (error) return <div>Error</div>;
    if (!data) return <div>Loading...</div>;

    const item = data as ItemType;

    function handleClick() {
        setOverlayToggle(false);
        refetch();
    }

    console.log(data);
    return (
        <div className="flex flex-col gap-2 ">
            <div className="w-full  flex">
                <div className="p-1 w-1/2 md:w-[500px] ">
                    <Image
                        src={item.image_url ?? "/public/placeholder.jpg"}
                        alt={item.title}
                        className="rounded-lg object-cover w-[160px] h-[200px] md:w-[400px] md:h-[500px] "
                        width={1000}
                        height={1000}
                        loader={() =>
                            item.image_url ?? "/public/placeholder.jpg"
                        }
                    ></Image>
                    <div className="text-xl flex items-center w-full">
                        {item.title.length > 30
                            ? item.title.slice(0, 30) + "..."
                            : item.title}
                    </div>
                    <div className="">
                        <Rating {...item} />
                    </div>
                </div>
                <div className="w-full px-2">
                    <div className="text-3xl border-b-2 border-primary justify-between flex items-center">
                        {item?.title}
                        <Button
                            link={`/item/edit/${params.id}`}
                            override="p-0 bg-secondary text-accent hover:bg-secondary"
                        >
                            <FaEdit className="w-7 h-7" />
                        </Button>
                    </div>
                    <div className="gap-2 w-full flex py-2">
                        {item.tags &&
                            item.tags.map((tag) => (
                                <ItemTag
                                    tag={tag}
                                    key={tag}
                                />
                            ))}
                    </div>
                    <div className="div text-sm lg:text-lg ">
                        {item?.description}
                    </div>
                </div>
            </div>
            <ConnectedItems
                item={item}
                overlayToggle={overlayToggle}
                setOverlayToggle={setOverlayToggle}
                closeAndRefetch={handleClick}
            />
        </div>
    );
};

export default Selection;
