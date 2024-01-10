"use client";
import { SiChainlink } from "react-icons/si";
import Button from "../UI/Button";
import LoginButton from "./LoginButton";
import SearchBar from "./SearchBar";
import Tags from "./Tags";

type Props = {};

const Navbar = (props: Props) => {
    return (
        <div className="p-4 fixed flex w-full bg-primary gap-2">
            <Button link="/">
                <SiChainlink className="w-8 h-8" />
            </Button>
            <SearchBar />
            <LoginButton />
            <Tags />
        </div>
    );
};

export default Navbar;
