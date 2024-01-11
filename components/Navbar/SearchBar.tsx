"use client";

import { useState } from "react";
import { GrSearch } from "react-icons/gr";
import Button from "../UI/Button";
import GetItems, { SearchByTitle } from "@/db/supabase";
import { useQuery, useQueryClient } from "react-query";
import { ItemType } from "@/type/item";

type Props = {};

const SearchBar = (props: Props) => {
    const [value, setValue] = useState("");

    const queryClient = useQueryClient();

    const updateItemsQueryData = (newData: ItemType[]) => {
        queryClient.setQueryData(["items"], newData);
    };

    const handleSearch = async () => {
        // Fetch new data using SearchByTitle
        const newData = await SearchByTitle(value);
        setValue("");
        // Update the items query data in the cache
        updateItemsQueryData(newData as ItemType[]);
    };

    return (
        <div className="flex w-full grow hover:outline-1 outline-accent">
            <input
                type="text"
                className="w-full rounded-lg rounded-r-none bg-secondary outline-none px-3 py-1 grow flex"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <Button
                override="bg-secondary rounded-lg rounded-l-none"
                action={handleSearch}
            >
                <GrSearch className={"w-9 h-9"} />
            </Button>
        </div>
    );
};

export default SearchBar;
