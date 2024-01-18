import { ItemType } from "@/type/item";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineAddLink } from "react-icons/md";

const OverlayItem = (item: ItemType) => {
    return (
        <button className="hover:outline outline-4 outline-accent rounded-lg ">
            <div className="relative">
                <MdOutlineAddLink className="absolute w-14 h-14 top-2 right-2 text-accent" />
                <Link href={`/item/${item.id}`}>
                    <Image
                        src={item.image_url ?? "/public/placeholder.jpg"}
                        alt={item.title}
                        className="rounded-lg object-cover md:w-[240px] md:h-[300px] w-[160px] h-[200px] grow"
                        width={700}
                        height={700}
                        loader={() =>
                            item.image_url ?? "/public/placeholder.jpg"
                        }
                    ></Image>
                </Link>
                <div className="text-xl flex items-center">
                    {item.title.length > 30
                        ? item.title.slice(0, 30) + "..."
                        : item.title}
                </div>
            </div>
        </button>
    );
};

export default OverlayItem;
