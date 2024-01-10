"use client";
import FirstRow from "./FirstRow";
import SecondRow from "./SecondRow";

type Props = {};

const Navbar = (props: Props) => {
    return (
        <div className="p-4 fixed flex w-full bg-primary flex-col gap-4">
            <FirstRow />
            <SecondRow />
        </div>
    );
};

export default Navbar;
