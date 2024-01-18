"use client";
import { useEffect, useRef } from "react";
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
                className=" max-w-[1280px] w-full bg-secondary border-2 border-black"
                ref={overlayRef}
            >
                <div className="relative h-12 p-1 text-xl w-full flex justify-between items-center ">
                    <div className="">Add recommendation</div>
                    <Button
                        action={props.action}
                        override="bg-secondary"
                    >
                        X
                    </Button>
                </div>
                {/* <div className="w-full h-full bg-black z-50">
                <SearchBar />
            </div> */}
            </div>
        </div>
    );
};

export default Overlay;
