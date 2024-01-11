import { ItemType } from "@/type/item";
import Image from "next/image";
import Link from "next/link";

const Item = (item: ItemType) => {
    return (
        <Link
            className="flex flex-col gap-1   h-fit"
            href={`/item/${item.title.replace(" ", "-")}`}
        >
            <Image
                src={item.image_url ?? "/public/placeholder.jpg"}
                alt={item.title}
                className="rounded-lg object-cover md:w-[250px] md:h-[300px] w-[160px] h-[200px] grow"
                width={700}
                height={700}
                loader={() => item.image_url ?? "/public/placeholder.jpg"}
            ></Image>
            <div>{item.title}</div>
            {item.tags &&
                item.tags.map((tag) => (
                    <div
                        key={tag}
                        className="text-primary bg-accent px-1 w-fit rounded-lg text-sm"
                    >
                        {tag[0].toUpperCase() + tag.slice(1)}
                    </div>
                ))}
        </Link>
    );
};

export default Item;
