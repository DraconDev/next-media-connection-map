"use client";
import { addDownvote } from "@/db/supabase";
import { ItemType } from "@/type/item";
import { FaRegThumbsDown, FaRegThumbsUp } from "react-icons/fa";
import Button from "../UI/Button";

const Rating = (item: ItemType) => {
    const ShareButtonStyle =
        " rounded-full text-white w-full py-1 justify-center border-black border-2 ";

    return (
        <div className="">
            <div className="text-sm flex justify-center p-1 ">
                <Button override={"rounded-r-none " + ShareButtonStyle}>
                    <div className="flex  px-2 gap-2 items-center justify-center">
                        <FaRegThumbsUp className="w-7 h-7" />
                        {item?.up_votes?.toString() ?? "0"}
                    </div>
                </Button>
                <Button
                    override={"rounded-l-none   " + ShareButtonStyle}
                    action={() => addDownvote(item)}
                >
                    <div className="flex gap-2 items-center  justify-center px-2 ">
                        <FaRegThumbsDown className="w-7 h-7" />
                        {item?.down_votes?.toString() ?? "0"}
                    </div>
                </Button>
            </div>
            <div
                className={`rounded-lg w-full h-2 bg-white px-1 bg-gradient-to-r from-tertiary  to-quaternary from-0% to-100%  ${
                    item.up_votes / item.down_votes > 1
                        ? `via-tertiary ${
                              "via-" +
                              (
                                  (item.up_votes /
                                      (item.down_votes + item.up_votes)) *
                                  6.66
                              )
                                  .toFixed(0)
                                  .toString()
                                  .concat("0%")
                          }`
                        : `via-quaternary ${
                              "via-" +
                              (
                                  (item.down_votes /
                                      (item.down_votes + item.up_votes)) *
                                  15
                              )
                                  .toFixed(0)
                                  .toString()
                                  .concat("0%")
                          }`
                }`}
            ></div>
        </div>
    );
};

export default Rating;
