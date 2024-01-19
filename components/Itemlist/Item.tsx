import { ItemType } from "@/type/item";
import Image from "next/image";
import Link from "next/link";
import ItemTag from "./ItemTag";
import Rating from "./Rating";

const Item = (item: ItemType) => {
    return (
        <div className="flex flex-col gap-1 h-fit">
            <Link href={`/item/${item.id}`}>
                <Image
                    src={item.image_url ?? "/public/placeholder.jpg"}
                    alt={item.title}
                    className="rounded-lg object-cover   grow rounded-b-none  w-[160px] h-[210px] md:w-[300px] md:h-[400px]"
                    width={400}
                    height={400}
                    loader={() => item.image_url ?? "/public/placeholder.jpg"}
                ></Image>
            </Link>
            <div className="md:w-[300px] w-[170px]">
                <div className="text-lg flex items-center px-1">
                    {item.title.length > 15
                        ? item.title.slice(0, 15) + "..."
                        : item.title}
                </div>
                <Rating {...item} />
                <div className="flex gap-1 flex-wrap pt-1 ">
                    {item.tags &&
                        item.tags.slice(0, 3).map((tag) => (
                            <ItemTag
                                tag={tag}
                                key={tag}
                            />
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Item;
