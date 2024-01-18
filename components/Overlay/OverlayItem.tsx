import Image from "next/image";
import Link from "next/link";

type Props = {
    id: number;
    title: string;
    image_url: string;
    description?: string;
    tags?: string[];
    connections?: number[];
    up_votes?: number;
    down_votes?: number;
    action?: () => void;
};

const OverlayItem = (item: Props) => {
    return (
        <button>
            {" "}
            <Link href={`/item/${item.id}`}>
                <Image
                    src={item.image_url ?? "/public/placeholder.jpg"}
                    alt={item.title}
                    className="rounded-lg object-cover md:w-[240px] md:h-[300px] w-[160px] h-[200px] grow"
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
        </button>
    );
};

export default OverlayItem;
