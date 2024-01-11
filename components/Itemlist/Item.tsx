import { ItemType } from "@/type/item";
import Image from "next/image";
import Link from "next/link";

const Item = (item: ItemType) => {
    return (
        <Link
            className="flex flex-col gap-1  w-fit h-fit"
            href={`/item/${item.title.replace(" ", "-")}`}
        >
            <Image
                src={item.image_url ?? "/public/placeholder.jpg"}
                alt={item.title}
                className="rounded-lg object-cover w-[200px] h-[250px] "
                width={100}
                height={180}
                loader={() => item.image_url ?? "/public/placeholder.jpg"}
            ></Image>
            {item.tags &&
                item.tags.map((tag) => (
                    <div
                        key={tag}
                        className="text-primary bg-accent px-1 w-fit rounded-lg"
                    >
                        {tag[0].toUpperCase() + tag.slice(1)}
                    </div>
                ))}
            <div className="text-xl">{item.title}</div>
        </Link>
    );
};

export default Item;
