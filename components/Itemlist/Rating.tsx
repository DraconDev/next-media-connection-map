"use client";
import { addDownvote, addUpvote } from "@/db/supabase";
import { ItemType } from "@/type/item";
import { BiSolidDownvote, BiSolidUpvote } from "react-icons/bi";
import Button from "../UI/Button";

const Rating = (item: ItemType) => {
    const ShareButtonStyle =
        " rounded-full text-white w-full py-1 justify-center border-black border-2 ";

    return (
        <div className="">
            <div className="text-sm flex justify-center  border-black mb-1">
                <Button
                    override={"rounded-r-none " + ShareButtonStyle}
                    action={() => addUpvote(item)}
                >
                    <div className="flex  px-2 gap-2 items-center justify-center ">
                        {/* <FaRegThumbsUp className="w-7 h-7" /> */}
                        <BiSolidUpvote className="w-8 h-8" />
                        {/* {item?.up_votes?.toString() ?? "0"} */}
                    </div>
                </Button>
                <Button
                    override={"rounded-l-none " + ShareButtonStyle}
                    action={() => addDownvote(item)}
                >
                    <div className="flex gap-2 items-center  justify-center px-2  ">
                        <BiSolidDownvote className="w-8 h-8" />

                        {/* {item?.down_votes?.toString() ?? "0"} */}
                    </div>
                </Button>
            </div>

            <div className="w-full flex px-1">
                <div
                    className={`h-2 bg-[#0f0] shrink-0  rounded-lg rounded-r-none`}
                    style={{
                        width: `${(
                            (item.up_votes /
                                (item.down_votes + item.up_votes)) *
                            100
                        ).toFixed(0)}%`,
                    }}
                ></div>
                <div className="h-2 w-full bg-[#f00] rounded-lg rounded-l-none"></div>
            </div>
        </div>
    );
};

export default Rating;
