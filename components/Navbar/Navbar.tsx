"use client";
import SearchBar from "./SearchBar";
import Tags from "./Tags";

type Props = {};

const Navbar = (props: Props) => {
    return (
        <div className="p-4 fixed flex w-full bg-primary">
            <SearchBar />
            Navbar
            <Tags />
        </div>
    );
};

export default Navbar;
