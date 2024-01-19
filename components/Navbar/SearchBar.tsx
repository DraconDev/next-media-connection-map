"use client";

import { SearchByTitle } from "@/db/supabase";
import { useEffect, useState } from "react";
import { GrSearch } from "react-icons/gr";

import { useQuery, useQueryClient } from "@tanstack/react-query";
import Button from "../UI/Button";
type Props = {};

const SearchBar = (props: Props) => {
    const [value, setValue] = useState("");

    const queryClient = useQueryClient();
    const { data, refetch } = useQuery({
        queryKey: ["items"],
        queryFn: () => SearchByTitle(value),
        staleTime: 1000 * 60 * 5,
    });

    const handleSearch = async () => {
        refetch();
        setValue("");
    };

    const handleKeyPress = (e: KeyboardEvent) => {
        if (e.key === "Enter") {
            handleSearch();
        }
    };

    useEffect(() => {
        document.addEventListener("keydown", handleKeyPress);
        return () => {
            document.removeEventListener("keydown", handleKeyPress);
        };
    }, []);

    return (
        <div className="flex w-full grow hover:outline-1 outline-accent">
            <input
                type="text"
                className="w-full  bg-secondary outline-none px-3 py-1 grow flex"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <Button
                override="bg-secondary rounded-none"
                action={handleSearch}
            >
                <GrSearch className={"w-9 h-9"} />
            </Button>
        </div>
    );
};

export default SearchBar;
