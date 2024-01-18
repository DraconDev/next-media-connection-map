import GetItems from "@/db/supabase";
import { ItemType } from "@/type/item";
import { useQuery } from "@tanstack/react-query";
import { GoPlus } from "react-icons/go";
import Item from "./Item";

type Props = {};

const OtherItems = () => {
    const { data } = useQuery({ queryKey: ["connections"], queryFn: GetItems });
    return (
        <div className="bg-red-400">
            other card lists
            <div className="">
                link card
                <GoPlus />
                <div className=" p-1 flex gap-2 flex-wrap justify-center">
                    {data &&
                        data.map((item: ItemType) => (
                            <Item
                                key={item.id}
                                {...item}
                            />
                        ))}
                </div>
            </div>
        </div>
    );
};

export default OtherItems;
