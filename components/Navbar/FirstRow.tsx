"use client";
import GetItems from "@/db/supabase";
import { useQuery } from "@tanstack/react-query";
import { FaPlus } from "react-icons/fa";
import { SiChainlink } from "react-icons/si";
import Button from "../UI/Button";
import LoginButton from "./LoginButton";
import SearchBar from "./SearchBar";

type Props = {};

const FirstRow = (props: Props) => {
    const { data, refetch } = useQuery({ queryKey: ["items"], queryFn: GetItems });
    return (
        <div className="w-full flex gap-1 ">
            <Button link="/" action={refetch}>
                <SiChainlink className="w-8 h-8" />
            </Button>
            <SearchBar />
            <Button link="/add">
                <FaPlus className="w-8 h-8" />
            </Button>
            <LoginButton />
        </div>
    );
};

export default FirstRow;
