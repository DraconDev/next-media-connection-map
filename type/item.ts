// item type
export type ItemType = {
    id?: string;
    title: string;
    description?: string;
    up_votes?: number;
    down_votes?: number;
    image_url?: string;
    tags?: string[];
    connections?: string[];
};
