import { ItemType } from "@/type/item";
import Image from "next/image";
import { MdOutlineAddLink } from "react-icons/md";

type Props = {
    item: ItemType;
    connection_id?: number;
};

const OverlayItem = ({ item, connection_id }: Props) => {
    return (
        <button className="hover:outline outline-4 outline-accent rounded-lg bg-black">
            <div className="relative">
                <MdOutlineAddLink className="absolute w-14 h-14 bottom-10 right-1 text-accent bg-black/50 rounded-full" />
                <Image
                    src={item.image_url ?? "/public/placeholder.jpg"}
                    alt={item.title}
                    className="rounded-lg object-cover md:w-[240px] md:h-[300px] w-[160px] h-[200px] grow rounded-b-none"
                    width={700}
                    height={700}
                    loader={() => item.image_url ?? "/public/placeholder.jpg"}
                ></Image>
                <div className="text-xl flex items-center p-1">
                    {item.title.length > 30
                        ? item.title.slice(0, 30) + "..."
                        : item.title}
                </div>
            </div>
        </button>
    );
};

export default OverlayItem;
