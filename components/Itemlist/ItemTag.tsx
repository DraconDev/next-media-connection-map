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
                className={`text-accent  px-1 w-fit rounded-lg border-2 border-accent text-xs md:text-lg ${override}`}
            >
                {tag[0].toUpperCase() + tag.slice(1)}
            </div>
        </button>
    );
};

export default ItemTag;
