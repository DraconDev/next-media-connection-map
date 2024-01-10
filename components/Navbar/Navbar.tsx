"use client";
import FirstRow from "./FirstRow";
import Tags from "./Tags";

type Props = {};

const Navbar = (props: Props) => {
    return (
        <div className="p-4 fixed flex w-full bg-primary flex-col gap-4">
            <FirstRow />
            <Tags />
        </div>
    );
};

export default Navbar;
