import { ItemType } from "@/type/item";
import { FaRegThumbsDown, FaRegThumbsUp } from "react-icons/fa";
import Button from "../UI/Button";

const Rating = (item: ItemType) => {
    return (
        <div className="text-sm flex justify-center p-1  ">
            <Button override="bg-tertiary rounded-full rounded-r-none text-black w-full py-1 border-black  border-2">
                <div className="flex justify-center gap-2 items-center">
                    <FaRegThumbsUp className="w-7 h-7" />
                    {item?.up_votes?.toString() ?? "0"}
                </div>
            </Button>
            <Button override="rounded-full rounded-l-none text-black w-full py-1 bg-quaternary border-black  border-2">
                <div className="flex justify-center gap-2 items-center">
                    <FaRegThumbsDown className="w-7 h-7" />
                    {item?.down_votes?.toString() ?? "0"}
                </div>
            </Button>
        </div>
    );
};

export default Rating;
