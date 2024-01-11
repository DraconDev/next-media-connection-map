"use client";
import FirstRow from "./FirstRow";

type Props = {};

const Navbar = (props: Props) => {
    return (
        <div className="p-4 fixed flex w-full bg-primary flex-col gap-4 border-b-2 border-accent ">
            <FirstRow />
            {/* <SecondRow /> */}
        </div>
    );
};

export default Navbar;
