"use client";
import { addDownvote, addUpvote } from "@/db/supabase";
import { ItemType } from "@/type/item";
import { FaRegThumbsDown, FaRegThumbsUp } from "react-icons/fa";
import Button from "../UI/Button";

const Rating = (item: ItemType) => {
    const ShareButtonStyle =
        " rounded-full text-black w-full py-1 border-black border-2 ";

    return (
        <div className="text-sm flex justify-center p-1 ">
            <Button
                override={
                    "rounded-r-none bg-gradient-to-r from-tertiary to-accent border-r-0 via-tertiary" +
                    ShareButtonStyle
                }
                action={() => addUpvote(item)}
            >
                <div className="flex justify-start px-2 gap-2 items-center">
                    <FaRegThumbsUp className="w-7 h-7" />
                    {item?.up_votes?.toString() ?? "0"}
                </div>
            </Button>
            <Button
                override={
                    "rounded-l-none bg-gradient-to-r from-accent to-quaternary border-l-0 via-quaternary" +
                    ShareButtonStyle
                }
                action={() => addDownvote(item)}
            >
                <div className="flex justify-end gap-2 items-center  px-2 ">
                    <FaRegThumbsDown className="w-7 h-7" />
                    {item?.down_votes?.toString() ?? "0"}
                </div>
            </Button>
        </div>
    );
};

export default Rating;
