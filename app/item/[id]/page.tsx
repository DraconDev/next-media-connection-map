"use client";

import ItemTag from "@/components/Itemlist/ItemTag";
import Rating from "@/components/Itemlist/Rating";
import { GetItemById } from "@/db/supabase";
import { ItemType } from "@/type/item";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

const Selection = ({ params }: { params: { id: string } }) => {
    const { data, error } = useQuery({
        queryKey: ["item"],
        queryFn: () => GetItemById(Number(params.id)),
    });
    if (error) return <div>Error</div>;
    if (!data) return <div>Loading...</div>;

    const item = data as ItemType;

    console.log(data);
    return (
        <div className="flex flex-col gap-2 md:p-2">
            <div className="w-full  flex">
                <div className=" w-[400px] md:w-[400px]">
                    <Image
                        src={item.image_url ?? "/public/placeholder.jpg"}
                        alt={item.title}
                        className="rounded-lg object-cover md:w-[400px] md:h-[500px] w-[160px] h-[200px] grow"
                        width={1000}
                        height={1000}
                        loader={() =>
                            item.image_url ?? "/public/placeholder.jpg"
                        }
                    ></Image>
                    <div className="text-xl flex items-center">
                        {item.title.length > 30
                            ? item.title.slice(0, 30) + "..."
                            : item.title}
                    </div>
                    <Rating {...item} />
                </div>
                <div className="px-2">
                    <div className="text-3xl border-b-2 border-primary">
                        {item?.title}
                    </div>
                    {item.tags &&
                        item.tags.map((tag) => (
                            <ItemTag
                                tag={tag}
                                key={tag}
                            />
                        ))}
                    <div className="div">{item?.description}</div>
                </div>
            </div>
            <div className="bg-red-400">other card lists</div>
        </div>
    );
};

export default Selection;
