"use client";
import GetItems from "@/db/supabase";
import { useQuery } from "@tanstack/react-query";

type Props = {};

const Itemlist = (props: Props) => {
    const { data } = useQuery({ queryKey: ["todos"], queryFn: GetItems });
    return <div className="min-h-[76vh] p-2">{data && }</div>;
};

export default Itemlist;
