"use client";

import { GetTags } from "@/db/supabase";
import { useQuery } from "@tanstack/react-query";
import ItemTag from "../Itemlist/ItemTag";

const Tags = () => {
    const { data: tags } = useQuery({
        queryKey: ["tags"],
        queryFn: () => GetTags(),
    });
    const dataArray = tags ? Array.from(tags) : [];

    return (
        <div className="gap-2 flex items-center h-8">
            {dataArray &&
                dataArray.map((tag) => (
                    <ItemTag
                        key={tag}
                        tag={tag}
                        override="text-xl text-black bg-accent"
                    />
                ))}
        </div>
    );
};

export default Tags;
