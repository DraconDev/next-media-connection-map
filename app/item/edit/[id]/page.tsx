"use client";
import { GetItemById } from "@/db/supabase";
import { ItemType } from "@/type/item";
import { useQuery } from "@tanstack/react-query";

const Edit = ({ params }: { params: { id: string } }) => {
    const { data, isLoading, error } = useQuery({
        queryKey: ["item"],
        queryFn: () => GetItemById(+params.id),
    });

    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error</div>;
    }
    if (!data) {
        return <div>Error</div>;
    }
    const item = data as ItemType;

    console.log("item", item);

    return <div>{/* <UpdateForm item={props.item} /> */}</div>;
};

export default Edit;
