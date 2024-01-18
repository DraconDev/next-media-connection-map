import { GetConnections } from "@/db/supabase";
import { ItemType } from "@/type/item";
import { useQuery } from "@tanstack/react-query";
import { GoPlus } from "react-icons/go";
import Item from "./Item";

type Props = {
    connections: number[];
};

const ConnectedItems = ({ connections }: Props) => {
    console.log(connections);

    const { data } = useQuery({
        queryKey: ["connections"],
        queryFn: () => GetConnections(connections),
    });

    console.log(data);

    return (
        <div className="bg-red-200 flex">
            link card
            <GoPlus />
            <div className="">
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

export default ConnectedItems;
