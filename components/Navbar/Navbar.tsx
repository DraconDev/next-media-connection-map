"use client";
import FirstRow from "./FirstRow";
import SecondRow from "./SecondRow";

type Props = {};

const Navbar = (props: Props) => {
    return (
        <div className=" fixed w-full bg-primary  border-b-2 border-accent flex justify-center flex-col ">
            <div className="w-full flex justify-center">
                <div className="max-w-[1280px] flex-col flex w-full ">
                    <FirstRow />
                </div>
            </div>
            <div className="flex justify-center w-full py-2 bg-accent">
                <div className="max-w-[1280px] w-full h-full">
                    <SecondRow />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
