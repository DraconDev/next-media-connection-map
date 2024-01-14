"use client";

import { GetItemById } from "@/db/supabase";
import { ItemType } from "@/type/item";
import { useQuery } from "@tanstack/react-query";

const Selection = ({ params }: { params: { id: string } }) => {
    const { data, error } = useQuery({
        queryKey: ["item"],
        queryFn: () => GetItemById(Number(params.id)),
    });
    if (error) return <div>Error</div>;
    if (!data) return <div>Loading...</div>;

    const item = data as ItemType;

    console.log(data);
    return <div>Selection</div>;
};

export default Selection;
