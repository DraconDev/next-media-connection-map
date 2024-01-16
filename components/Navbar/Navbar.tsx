"use client";
import FirstRow from "./FirstRow";
import SecondRow from "./SecondRow";

type Props = {};

const Navbar = (props: Props) => {
    return (
        <div className="p-3 fixed w-full bg-primary  border-b-2 border-accent flex justify-center">
            <div className="max-w-[1280px] flex-col flex w-full  gap-3">
                <FirstRow />
                <SecondRow />
            </div>
        </div>
    );
};

export default Navbar;
