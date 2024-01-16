"use client";
import { SearchByTag } from "@/db/supabase";
import { useQuery } from "@tanstack/react-query";
type Props = {
    tag: string;
    override?: string;
};

const ItemTag = ({ tag, override = "" }: Props) => {
    const { data, refetch } = useQuery({
        queryKey: ["items"],
        queryFn: () => SearchByTag(tag),
        staleTime: 1000 * 60 * 5,
    });

    const handleSearch = async () => {
        refetch();
    };
    return (
        <button onClick={handleSearch}>
            <div
                key={tag}
                className={`text-accent bg-primary px-1 w-fit rounded-lg text-sm border-2 border-accent ${override}`}
            >
                {tag[0].toUpperCase() + tag.slice(1)}
            </div>
        </button>
    );
};

export default ItemTag;
