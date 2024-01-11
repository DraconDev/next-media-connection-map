import { ItemType } from "@/type/item";
import Image from "next/image";
import Link from "next/link";

const Item = (item: ItemType) => {
    return (
        <Link
            className="flex flex-col gap-1  w-fit"
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
            <div className="text-xl">{item.title}</div>
        </Link>
    );
};

export default Item;
