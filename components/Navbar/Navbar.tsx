"use client";
import FirstRow from "./FirstRow";
import SecondRow from "./SecondRow";

type Props = {};

const Navbar = (props: Props) => {
    return (
        <div className="p-3 fixed flex w-full bg-primary flex-col gap-3 border-b-2 border-accent ">
            <FirstRow />
            <SecondRow />
        </div>
    );
};

export default Navbar;
