"use client";

import { useState } from "react";
import { GrSearch } from "react-icons/gr";
import Button from "../UI/Button";

type Props = {};

const SearchBar = (props: Props) => {
    const [value, setValue] = useState("");

    return (
        <div className="flex w-full grow hover:outline-1 outline-accent">
            <input
                type="text"
                className="w-full rounded-lg rounded-r-none bg-secondary outline-none px-3 py-1 grow flex"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <Button override="bg-secondary rounded-lg rounded-l-none">
                <GrSearch className={"w-9 h-9"} />
            </Button>
        </div>
    );
};

export default SearchBar;
