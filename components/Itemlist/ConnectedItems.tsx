import { GoPlus } from "react-icons/go";

type Props = {
    connections: number[];
};

const ConnectedItems = ({ connections }: Props) => {
    console.log(connections);
    return (
        <div className="bg-red-400">
            other card lists
            <div className="">
                link card
                <GoPlus />
                {/* <div className=" p-1 flex gap-2 flex-wrap justify-center">
                    {data &&
                        data.map((item: ItemType) => (
                            <Item
                                key={item.id}
                                {...item}
                            />
                        ))}
                </div> */}
            </div>
        </div>
    );
};

export default ConnectedItems;
