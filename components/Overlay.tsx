"use client";
import { useEffect, useRef } from "react";
import Itemlist from "./Itemlist/Itemlist";
import SearchBar from "./Navbar/SearchBar";
import Button from "./UI/Button";

type Props = {
    action: () => void;
};

const Overlay = (props: Props) => {
    const overlayRef = useRef<HTMLDivElement>(null);

    const handleClickOutside = (event: MouseEvent) => {
        if (
            overlayRef.current &&
            !overlayRef.current.contains(event.target as Node)
        ) {
            props.action(); // Close the window
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-10 flex justify-center ">
            <div
                className=" max-w-[1280px] w-full bg-primary border-2 border-black gap-3 flex flex-col p-1"
                ref={overlayRef}
            >
                <div className="relative h-12 p-2 text-xl w-full flex justify-between items-center ">
                    <div className="">Add recommendation</div>
                    <Button
                        action={props.action}
                        override="  text-2xl"
                    >
                        X
                    </Button>
                </div>
                <div className="h-12">
                    <SearchBar />
                </div>
                <Itemlist />
            </div>
        </div>
    );
};

export default Overlay;
