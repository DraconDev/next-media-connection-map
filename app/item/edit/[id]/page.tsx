"use client";
import { GetItemById } from "@/db/supabase";
import { useQuery } from "@tanstack/react-query";

const Edit = ({ params }: { params: { id: string } }) => {
    const { data } = useQuery({
        queryKey: ["item"],
        queryFn: () => GetItemById(+params.id),
    });

    return <div>{/* <UpdateForm item={props.item} /> */}</div>;
};

export default Edit;
