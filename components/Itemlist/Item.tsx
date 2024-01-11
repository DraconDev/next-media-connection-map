import { ItemType } from "@/type/item";
import Image from "next/image";

const Item = (item: ItemType) => {
    return (
        <div>
            Item
            <Image
                src={item.image_url ?? "/public/placeholder.jpg"}
                alt={item.title}
                className="w"
                width={200}
                height={200}
                loader={() => item.image_url ?? "/public/placeholder.jpg"}
            ></Image>
        </div>
    );
};

export default Item;
