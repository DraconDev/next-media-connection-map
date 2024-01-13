import { ItemType } from "@/type/item";
import Image from "next/image";
import Link from "next/link";
import ItemTag from "./ItemTag";
import Rating from "./Rating";

const Item = (item: ItemType) => {
    return (
        <div className="flex flex-col gap-1   h-fit">
            <Link href={`/item/${item.title.replace(" ", "-")}`}>
                <Image
                    src={item.image_url ?? "/public/placeholder.jpg"}
                    alt={item.title}
                    className="rounded-lg object-cover md:w-[250px] md:h-[300px] w-[160px] h-[200px] grow"
                    width={700}
                    height={700}
                    loader={() => item.image_url ?? "/public/placeholder.jpg"}
                ></Image>
            </Link>
            <div className="text-xl flex items-center">
                {item.title.length > 30
                    ? item.title.slice(0, 30) + "..."
                    : item.title}
            </div>
            <Rating {...item} />
            {item.tags &&
                item.tags.map((tag) => (
                    <ItemTag
                        tag={tag}
                        key={tag}
                    />
                ))}
        </div>
    );
};

export default Item;
